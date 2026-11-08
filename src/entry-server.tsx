// Server entry used only at build time to pre-render every route to static HTML.
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { ROUTES, RouteDef } from './seo/routes';
import { buildHead } from './seo/head';

export { ROUTES };

export const render = (route: RouteDef) => ({
  html: renderToString(<App route={route} />),
  head: buildHead(route),
});
