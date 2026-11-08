// Central route map for the multi-page, pre-rendered site.
// Every route is rendered to its own static HTML file at build time
// (see scripts/prerender.mjs), so Google receives full content per language.
import type { Language } from '../i18n/translations';

export const SITE_URL = 'https://hutzahav.vercel.app';

export type PageId = 'home' | 'alterations' | 'evening' | 'bridal';

export interface RouteDef {
  path: string; // always with leading and trailing slash
  lang: Language;
  page: PageId;
  title: string;
  description: string;
}

// Hebrew is the primary (x-default) language: most local searches in Ashdod are in Hebrew.
export const PAGE_PATHS: Record<PageId, Record<Language, string>> = {
  home: { he: '/', ru: '/ru/', en: '/en/' },
  alterations: {
    he: '/tikunei-bgadim-ashdod/',
    ru: '/ru/podgonka-i-remont-odezhdy-ashdod/',
    en: '/en/clothing-alterations-ashdod/',
  },
  evening: {
    he: '/tfirat-simlot-erev-ashdod/',
    ru: '/ru/poshiv-vechernih-platev-ashdod/',
    en: '/en/evening-dresses-ashdod/',
  },
  bridal: {
    he: '/simlot-kala-ashdod/',
    ru: '/ru/svadebnye-platya-ashdod/',
    en: '/en/bridal-dresses-ashdod/',
  },
};

const META: Record<PageId, Record<Language, { title: string; description: string }>> = {
  home: {
    he: {
      title: 'מתפרה באשדוד – חוט זהב | תפירה אישית, שמלות ערב ותיקוני בגדים',
      description:
        'אטלייה חוט זהב של המעצבת גלינה חבוסטנקו, שבי ציון 2 אשדוד. תפירת שמלות ערב וכלה לפי מידה, תיקוני בגדים והתאמה, ציור ידני על משי ופשתן. תיאום מדידה בווטסאפ.',
    },
    ru: {
      title: 'Ателье в Ашдоде «Хут Захав» | Пошив на заказ, вечерние платья, ремонт одежды',
      description:
        'Ателье Галины Хвостенко в Ашдоде (ул. Шавей Цион 2): пошив вечерних и свадебных платьев по меркам, подгонка и ремонт одежды, ручная роспись по шёлку и льну. Запись на примерку в WhatsApp.',
    },
    en: {
      title: 'Tailor & Atelier in Ashdod – Hutzahav | Bespoke Dresses & Alterations',
      description:
        'Hutzahav atelier by designer Galina Khvostenko, Shavei Tzion 2, Ashdod. Bespoke evening and bridal dresses, clothing alterations and repairs, hand-painted silk and linen. Book a fitting on WhatsApp.',
    },
  },
  alterations: {
    he: {
      title: 'תיקוני בגדים באשדוד – התאמה, קיצור והצרה | חוט זהב',
      description:
        'תיקוני בגדים והתאמה מדויקת באשדוד: קיצור מכפלות, הצרה והרחבה, החלפת רוכסנים ובטנות, התאמת שמלות ערב וחליפות. אטלייה חוט זהב, שבי ציון 2.',
    },
    ru: {
      title: 'Подгонка и ремонт одежды в Ашдоде – ателье «Хут Захав»',
      description:
        'Подгонка одежды по фигуре и ремонт в Ашдоде: укоротить брюки и платья, ушить или расширить, замена молнии и подкладки, посадка брендовых костюмов. Ул. Шавей Цион 2, запись в WhatsApp.',
    },
    en: {
      title: 'Clothing Alterations in Ashdod – Hemming, Taking In, Repairs | Hutzahav',
      description:
        'Precise clothing alterations in Ashdod: hemming, taking in and letting out, zipper and lining replacement, fitting of evening dresses and designer suits. Shavei Tzion 2, Ashdod.',
    },
  },
  evening: {
    he: {
      title: 'תפירת שמלות ערב באשדוד לפי מידה | אטלייה חוט זהב',
      description:
        'תפירה אישית של שמלות ערב ואירועים באשדוד לפי מידות הגוף: משי, שיפון, תחרה, קטיפה ומחוכים. עיצוב, מדידות והתאמה אצל המעצבת גלינה חבוסטנקו.',
    },
    ru: {
      title: 'Пошив вечерних платьев на заказ в Ашдоде | Ателье «Хут Захав»',
      description:
        'Индивидуальный пошив вечерних и праздничных платьев в Ашдоде по вашим меркам: шёлк, шифон, кружево, бархат, корсеты. Эскиз, примерки и посадка по фигуре у дизайнера Галины Хвостенко.',
    },
    en: {
      title: 'Bespoke Evening Dresses in Ashdod – Made to Measure | Hutzahav',
      description:
        'Made-to-measure evening and occasion dresses in Ashdod: silk, chiffon, lace, velvet and corsetry. Design, fittings and a perfect fit by designer Galina Khvostenko.',
    },
  },
  bridal: {
    he: {
      title: 'שמלות כלה בתפירה אישית באשדוד | אטלייה חוט זהב',
      description:
        'שמלות כלה ושמלות לאירועים בתפירה אישית באשדוד, וגם התאמה של שמלת כלה קיימת. עבודה עם משי, תחרה ושיפון, מדידות אישיות באטלייה בשבי ציון 2.',
    },
    ru: {
      title: 'Свадебные платья на заказ в Ашдоде – пошив и подгонка | «Хут Захав»',
      description:
        'Пошив свадебного платья по индивидуальным меркам в Ашдоде, а также подгонка готового свадебного платья. Шёлк, кружево, шифон, личные примерки в ателье на ул. Шавей Цион 2.',
    },
    en: {
      title: 'Custom Bridal Dresses in Ashdod – Made to Measure & Fitting | Hutzahav',
      description:
        'Custom wedding dresses made to your measurements in Ashdod, plus fitting and alterations of ready-made bridal gowns. Silk, lace and chiffon, personal fittings at Shavei Tzion 2.',
    },
  },
};

export const ROUTES: RouteDef[] = (Object.keys(PAGE_PATHS) as PageId[]).flatMap((page) =>
  (['he', 'ru', 'en'] as Language[]).map((lang) => ({
    path: PAGE_PATHS[page][lang],
    lang,
    page,
    ...META[page][lang],
  }))
);

const normalize = (pathname: string) => {
  let p = pathname || '/';
  if (!p.startsWith('/')) p = '/' + p;
  if (!p.endsWith('/')) p = p + '/';
  return p;
};

export const findRoute = (pathname: string): RouteDef => {
  const p = normalize(pathname);
  return ROUTES.find((r) => r.path === p) ?? ROUTES[0];
};

export const pathFor = (page: PageId, lang: Language) => PAGE_PATHS[page][lang];
