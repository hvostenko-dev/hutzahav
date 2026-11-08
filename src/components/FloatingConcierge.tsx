import { useLanguage } from '../context/LanguageContext';
import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { X, Mail } from 'lucide-react';
import { Telegram, WhatsApp } from './Icons';
import { Logo } from './Logo';

export const FloatingConcierge: React.FC = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3">
      {/* Expanded Quick Channels Menu */}
      {isOpen && (
        <div className="p-3 sm:p-3.5 rounded-3xl bg-noir-900/95 border border-gold-400/40 shadow-2xl backdrop-blur-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-bottom duration-200">
          
          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-[#25D366] text-black font-cinzel font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
          >
            <WhatsApp size={16} />
            <span>WhatsApp</span>
          </a>

          <a
            href={STUDIO_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-[#229ED9] text-white font-cinzel font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
          >
            <Telegram size={16} />
            <span>Telegram</span>
          </a>

          <a
            href={`mailto:${STUDIO_INFO.email}`}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>

        </div>
      )}

      {/* Main Trigger Button with Hutzahav Emblem */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full bg-noir-900/95 border border-gold-400/35 text-xs text-slate-200 shadow-xl backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-cinzel text-[11px] tracking-wider text-gold-300">
              Hutzahav • {lang === 'he' ? 'דברו איתנו' : lang === 'en' ? 'Chat with Galina' : 'Связь с мастером'}
            </span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border ${
            isOpen
              ? 'bg-noir-850 border-gold-400 text-gold-300 rotate-90'
              : 'bg-noir-950/95 hover:bg-noir-900 border-gold-400/60 hover:border-gold-300 hover:scale-105 shadow-gold-500/15'
          }`}
          title="Связаться с ателье Hutzahav (WhatsApp, Telegram, Email)"
          aria-label="Связаться с ателье Hutzahav"
        >
          {isOpen ? (
            <X size={20} />
          ) : (
            <Logo size={30} showText={false} />
          )}
        </button>
      </div>
    </div>
  );
};
