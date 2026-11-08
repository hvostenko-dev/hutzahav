import React, { createContext, useContext, useEffect } from 'react';
import { Language, TranslationDictionary, translations } from '../i18n/translations';
import { PageId, RouteDef, pathFor } from '../seo/routes';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationDictionary;
  dir: 'ltr' | 'rtl';
  page: PageId;
  /** Path of the home page in the current language (used for in-page anchors from service pages). */
  homePath: string;
  pathFor: (page: PageId, lang?: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LANG_STORAGE_KEY = 'hutzahav_lang';

// The language is defined by the URL (/, /ru/, /en/ ...), so every language version
// is a separate, indexable page. Switching language navigates to the same page in the other language.
export const LanguageProvider: React.FC<{ route: RouteDef; children: React.ReactNode }> = ({
  route,
  children,
}) => {
  const { lang, page } = route;

  const setLang = (newLang: Language) => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
    } catch {}
    if (newLang === lang) return;
    window.location.assign(pathFor(page, newLang) + window.location.hash);
  };

  const dir: 'ltr' | 'rtl' = lang === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    if (lang === 'he') {
      document.body.classList.add('font-hebrew');
    } else {
      document.body.classList.remove('font-hebrew');
    }
  }, [lang, dir]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
        dir,
        page,
        homePath: pathFor('home', lang),
        pathFor: (p, l) => pathFor(p, l ?? lang),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
