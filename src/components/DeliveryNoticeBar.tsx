import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { MapPin, Phone, Sparkles, Clock } from 'lucide-react';
import { WhatsApp } from './Icons';

export const DeliveryNoticeBar: React.FC = () => {
  return (
    <aside aria-label="Информация об ателье" className="bg-gradient-to-r from-noir-950 via-noir-900 to-noir-950 border-b border-gold-400/20 text-slate-300 text-[11px] sm:text-xs py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Atelier location and hours */}
        <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
          <div className="flex items-center gap-1.5 text-gold-300">
            <MapPin size={13} className="text-gold-400 shrink-0" />
            <span className="font-cinzel tracking-wider">{STUDIO_INFO.addressRu}</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <Clock size={12} className="text-gold-400/80 shrink-0" />
            <span>Прием и примерка: Вс–Пт по записи</span>
          </div>
        </div>

        {/* Right: Courier Delivery & WhatsApp Concierge */}
        <div className="flex items-center gap-4 sm:gap-6 ml-auto">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <Sparkles size={12} className="text-gold-400" />
            <span>Индивидуальный пошив & доставка по всему Израилю</span>
          </div>

          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gold-300 hover:text-white transition-colors font-medium"
          >
            <WhatsApp size={12} className="text-[#25D366]" />
            <span>Консьерж: {STUDIO_INFO.phone}</span>
          </a>
        </div>

      </div>
    </aside>
  );
};
