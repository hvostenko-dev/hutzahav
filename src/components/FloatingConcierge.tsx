import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { MessageCircle, Scissors, X } from 'lucide-react';

export const FloatingConcierge: React.FC = () => {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Floating Concierge Invite */}
      {showBubble && (
        <div className="hidden sm:flex items-center gap-2.5 py-2.5 px-4 rounded-full bg-noir-850 border border-gold-400/40 text-xs text-slate-200 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-right duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-cinzel text-[11px] tracking-wider text-gold-300">
            Консьерж Ателье: Галина на связи
          </span>
          <button
            onClick={() => setShowBubble(false)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Закрыть подсказку"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={STUDIO_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full gold-gradient-bg text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border border-gold-300/50"
        title="Записаться на примерку в WhatsApp"
      >
        <div className="absolute -inset-1 rounded-full bg-gold-400 opacity-40 group-hover:opacity-80 blur-md animate-pulse"></div>
        <Scissors size={26} className="relative z-10 text-black fill-black" />
      </a>
    </div>
  );
};
