// Builds the per-page <head> tags (title, meta, canonical, hreflang, Open Graph, JSON-LD).
// Executed at build time by scripts/prerender.mjs.
import type { Language } from '../i18n/translations';
import { STUDIO_INFO } from '../data/portfolioData';
import { PAGE_PATHS, RouteDef, SITE_URL } from './routes';
import { SERVICE_CONTENT, SERVICE_IMAGES, ServicePageId, UI_LABELS } from './servicePages';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const abs = (path: string) => SITE_URL + path;

const OG_LOCALE: Record<Language, string> = { he: 'he_IL', ru: 'ru_RU', en: 'en_US' };

const LOCALIZED = {
  he: { street: 'שבי ציון 2', city: 'אשדוד', name: 'חוט זהב – אטלייה ומתפרה באשדוד' },
  ru: { street: 'ул. Шавей Цион 2', city: 'Ашдод', name: 'Ателье «Хут Захав» (Hutzahav) в Ашдоде' },
  en: { street: 'Shavei Tzion 2', city: 'Ashdod', name: 'Hutzahav Atelier – Tailor in Ashdod' },
};

export const BUSINESS_ID = `${SITE_URL}/#business`;

const businessSchema = (route: RouteDef) => {
  const l = LOCALIZED[route.lang];
  return {
    '@type': ['LocalBusiness', 'ClothingStore'],
    '@id': BUSINESS_ID,
    name: 'Hutzahav – חוט זהב',
    alternateName: ['חוט זהב', 'Hutzahav Atelier', 'Ателье Хут Захав', l.name],
    description: PAGE_DESCRIPTIONS_HOME[route.lang],
    url: abs('/'),
    logo: abs('/images/logo.jpg'),
    image: [abs('/images/hero-model.jpg'), abs('/images/logo.jpg')],
    telephone: '+972585877708',
    email: STUDIO_INFO.email,
    priceRange: '₪₪',
    currenciesAccepted: 'ILS',
    paymentAccepted: 'Cash, Bit, PayBox, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: l.street,
      addressLocality: l.city,
      addressRegion: 'Southern District',
      addressCountry: 'IL',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 31.801444, longitude: 34.643491 },
    hasMap: STUDIO_INFO.googleMapsUrl,
    areaServed: [
      { '@type': 'City', name: 'Ashdod' },
      { '@type': 'Country', name: 'Israel' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '19:00',
      },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '14:00' },
    ],
    founder: {
      '@type': 'Person',
      name: STUDIO_INFO.masterNameEn,
      alternateName: [STUDIO_INFO.masterNameHe, STUDIO_INFO.masterNameRu],
      jobTitle: 'Fashion Designer & Couturier',
    },
    foundingDate: String(STUDIO_INFO.foundedYear),
    knowsLanguage: ['he', 'ru', 'en'],
    sameAs: [STUDIO_INFO.instagram, STUDIO_INFO.facebook, STUDIO_INFO.easyUrl],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: route.lang === 'he' ? 'שירותי האטלייה' : route.lang === 'ru' ? 'Услуги ателье' : 'Atelier services',
      itemListElement: (['alterations', 'evening', 'bridal'] as ServicePageId[]).map((id) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: UI_LABELS[route.lang].serviceNames[id],
          url: abs(PAGE_PATHS[id][route.lang]),
        },
      })),
    },
  };
};

const PAGE_DESCRIPTIONS_HOME: Record<Language, string> = {
  he: 'אטלייה ומתפרה באשדוד של המעצבת גלינה חבוסטנקו: תפירת שמלות ערב וכלה לפי מידה, תיקוני בגדים והתאמה, ציור ידני על משי ופשתן ונונו-לבד.',
  ru: 'Ателье Галины Хвостенко в Ашдоде: пошив вечерних и свадебных платьев по меркам, подгонка и ремонт одежды, ручная роспись по шёлку и льну, нуно-войлок.',
  en: 'Atelier and tailor in Ashdod by designer Galina Khvostenko: made-to-measure evening and bridal dresses, clothing alterations and repairs, hand-painted silk and linen, nuno-felting.',
};

const buildJsonLd = (route: RouteDef) => {
  const graph: any[] = [businessSchema(route)];
  const url = abs(route.path);

  graph.push({
    '@type': 'WebPage',
    '@id': url + '#webpage',
    url,
    name: route.title,
    description: route.description,
    inLanguage: route.lang,
    about: { '@id': BUSINESS_ID },
  });

  if (route.page !== 'home') {
    const id = route.page as ServicePageId;
    const c = SERVICE_CONTENT[id][route.lang];
    graph.push({
      '@type': 'Service',
      name: c.schemaServiceName,
      serviceType: c.schemaServiceName,
      description: route.description,
      url,
      image: abs(SERVICE_IMAGES[id][0]),
      provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'City', name: 'Ashdod' },
    });
    graph.push({
      '@type': 'FAQPage',
      mainEntity: c.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: UI_LABELS[route.lang].home, item: abs(PAGE_PATHS.home[route.lang]) },
        { '@type': 'ListItem', position: 2, name: c.breadcrumb, item: url },
      ],
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
};

export const buildHead = (route: RouteDef): string => {
  const url = abs(route.path);
  const alternates = (['he', 'ru', 'en'] as Language[])
    .map((l) => `<link rel="alternate" hreflang="${l}" href="${abs(PAGE_PATHS[route.page][l])}" />`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${abs(PAGE_PATHS[route.page].he)}" />`)
    .join('\n    ');
  const image =
    route.page === 'home' ? abs('/images/hero-model.jpg') : abs(SERVICE_IMAGES[route.page as ServicePageId][0]);
  const otherLocales = (['he', 'ru', 'en'] as Language[])
    .filter((l) => l !== route.lang)
    .map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`)
    .join('\n    ');

  return `<title>${esc(route.title)}</title>
    <meta name="description" content="${esc(route.description)}" />
    <link rel="canonical" href="${url}" />
    ${alternates}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="Hutzahav • חוט זהב" />
    <meta property="og:title" content="${esc(route.title)}" />
    <meta property="og:description" content="${esc(route.description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:locale" content="${OG_LOCALE[route.lang]}" />
    ${otherLocales}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(route.title)}" />
    <meta name="twitter:description" content="${esc(route.description)}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${JSON.stringify(buildJsonLd(route)).replace(/</g, '\\u003c')}</script>`;
};
