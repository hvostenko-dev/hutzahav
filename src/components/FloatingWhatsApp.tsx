import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full bg-atelier-card border border-gold-500/30 text-xs text-slate-200 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-right duration-300">
          <span>Напишите Галине в WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Pulsing button */}
      <a
        href={STUDIO_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
        title="Чат с Галиной в WhatsApp"
      >
        <div className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 group-hover:opacity-75 blur-sm animate-pulse"></div>
        <MessageCircle size={28} className="relative z-10 fill-white text-[#25D366]" />
      </a>
    </div>
  );
};
