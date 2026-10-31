import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

export const LuxuryMarquee: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-4 bg-noir-900 border-y border-gold-400/25 overflow-hidden relative shadow-inner">
      <div className="flex select-none whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex items-center shrink-0">
            {t.marqueeItems.map((phrase, idx) => (
              <span key={idx} className="flex items-center mx-6 sm:mx-8">
                <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase hover:text-gold-300 transition-colors">
                  {phrase}
                </span>
                <Sparkles size={12} className="ml-6 sm:ml-8 text-gold-400/80 animate-pulse" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
