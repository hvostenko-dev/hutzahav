// Pre-renders every route into its own static HTML file and writes sitemap.xml.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle in dist-server/).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');
const SITE_URL = 'https://hutzahav.vercel.app';

const { render, ROUTES } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

for (const route of ROUTES) {
  const { html, head } = render(route);
  const dir = route.lang === 'he' ? 'rtl' : 'ltr';
  let page = template
    .replace(/<html lang="[^"]*" dir="[^"]*"/, `<html lang="${route.lang}" dir="${dir}"`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html);
  if (route.lang === 'he') page = page.replace('<body class="', '<body class="font-hebrew ');
  const outDir = path.join(dist, route.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), page);
  console.log(`prerendered ${route.path}`);
}

// sitemap.xml with hreflang alternates for each page group
const today = new Date().toISOString().slice(0, 10);
const byPage = {};
for (const r of ROUTES) (byPage[r.page] ??= {})[r.lang] = r.path;
const urls = ROUTES.map((r) => {
  const alts = byPage[r.page];
  const links = ['he', 'ru', 'en']
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${alts[l]}" />`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${alts.he}" />`)
    .join('\n');
  return `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n${links}\n  </url>`;
}).join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
);
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log(`sitemap.xml written with ${ROUTES.length} URLs`);
