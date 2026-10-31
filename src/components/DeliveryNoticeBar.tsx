import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Sparkles, Clock } from 'lucide-react';
import { WhatsApp } from './Icons';

export const DeliveryNoticeBar: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <aside aria-label="Информация об ателье" className="bg-gradient-to-r from-noir-950 via-noir-900 to-noir-950 border-b border-gold-400/20 text-slate-300 text-[10px] sm:text-xs py-2 px-3 sm:px-4 relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
        
        {/* Left: Atelier location and hours */}
        <div className="flex items-center gap-2 sm:gap-5 min-w-0 max-w-full">
          <div className="flex items-center gap-1.5 text-gold-300 min-w-0">
            <MapPin size={12} className="text-gold-400 shrink-0" />
            <span className="font-cinzel tracking-wider truncate">{t.topAddress}</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-slate-400 shrink-0">
            <Clock size={12} className="text-gold-400/80 shrink-0" />
            <span>{t.topHours}</span>
          </div>
        </div>

        {/* Right: Courier Delivery & WhatsApp Concierge */}
        <div className="flex items-center gap-3 sm:gap-6 ml-auto shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Sparkles size={12} className="text-gold-400" />
            <span>{t.topDelivery}</span>
          </div>

          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gold-300 hover:text-white transition-colors font-medium whitespace-nowrap"
          >
            <WhatsApp size={12} className="text-[#25D366] shrink-0" />
            <span>{t.topConcierge}</span>
          </a>
        </div>

      </div>
    </aside>
  );
};
