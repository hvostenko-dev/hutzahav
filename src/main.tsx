import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { findRoute, pathFor } from './seo/routes';
import { LANG_STORAGE_KEY } from './context/LanguageContext';
import type { Language } from './i18n/translations';

const route = findRoute(window.location.pathname);

// Visitors landing on the Hebrew home page who previously chose Russian/English
// (or whose browser is Russian and made no choice yet) are sent to their language.
// Crawlers have no saved preference and are never redirected.
const redirectTarget = (() => {
  if (route.page !== 'home' || route.lang !== 'he') return null;
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get('lang');
  if (fromQuery === 'ru' || fromQuery === 'en') return pathFor('home', fromQuery);
  if (fromQuery === 'he') return null;
  let saved: string | null = null;
  try {
    saved = localStorage.getItem(LANG_STORAGE_KEY);
  } catch {}
  if (saved === 'ru' || saved === 'en') return pathFor('home', saved as Language);
  if (!saved && (navigator.language || '').toLowerCase().startsWith('ru')) return pathFor('home', 'ru');
  return null;
})();

if (redirectTarget) {
  window.location.replace(redirectTarget + window.location.hash);
} else {
  // The page HTML is pre-rendered at build time for search engines; the client renders it fresh.
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App route={route} />
    </React.StrictMode>
  );
}
