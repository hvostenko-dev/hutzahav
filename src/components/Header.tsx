import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Instagram, Facebook } from './Icons';

interface HeaderProps {
  activeLang: 'ru' | 'en' | 'he';
  onLangChange: (lang: 'ru' | 'en' | 'he') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeLang, onLangChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { labelRu: 'Коллекции', labelEn: 'Collections', labelHe: 'קולקציות', href: '#gallery' },
    { labelRu: 'Ателье и Услуги', labelEn: 'Atelier & Services', labelHe: 'שירותי תפירה', href: '#services' },
    { labelRu: 'О мастере', labelEn: 'About Master', labelHe: 'על המעצבת', href: '#about' },
    { labelRu: 'Контакты', labelEn: 'Contacts', labelHe: 'יצירת קשר', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-atelier-dark/95 backdrop-blur-md py-3 border-b border-gold-500/20 shadow-2xl'
          : 'bg-gradient-to-b from-atelier-dark/90 via-atelier-dark/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gold-400/50 shadow-md group-hover:border-gold-300 transition-colors">
              <img
                src="/images/logo.jpg"
                alt="Hutzahav Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if logo not loaded
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-wider font-bold text-gold-gradient">
                HUTZAHAV
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold-300/80 -mt-1 font-sans">
                Atelier • Galina Khvostenko
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-gold-300 transition-colors tracking-wide relative group py-1"
              >
                {activeLang === 'ru' && link.labelRu}
                {activeLang === 'en' && link.labelEn}
                {activeLang === 'he' && link.labelHe}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions & Language & WhatsApp */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Lang switch */}
            <div className="flex items-center bg-atelier-surface/90 border border-gold-500/20 rounded-full p-1 text-xs">
              {(['ru', 'en', 'he'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLangChange(lang)}
                  className={`px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold transition-all ${
                    activeLang === lang
                      ? 'bg-gold-500 text-black shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 text-slate-400">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="p-2 rounded-full hover:text-gold-300 hover:bg-white/5 transition-colors"
              >
                <Instagram size={17} />
              </a>
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="p-2 rounded-full hover:text-gold-300 hover:bg-white/5 transition-colors"
              >
                <Facebook size={17} />
              </a>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-gradient text-black font-semibold text-xs tracking-wider uppercase transition-transform hover:scale-105 gold-glow"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="flex items-center bg-atelier-surface border border-gold-500/20 rounded-full p-0.5 text-xs">
              {(['ru', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLangChange(lang)}
                  className={`px-2 py-0.5 rounded-full uppercase font-medium ${
                    activeLang === lang ? 'bg-gold-500 text-black' : 'text-slate-400'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-gold-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-atelier-card/98 border-b border-gold-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 backdrop-blur-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-200 hover:text-gold-300 py-1 font-medium"
              >
                {activeLang === 'ru' && link.labelRu}
                {activeLang === 'en' && link.labelEn}
                {activeLang === 'he' && link.labelHe}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-gold-300"
            >
              <Phone size={16} className="text-gold-400" />
              <span>{STUDIO_INFO.phone}</span>
            </a>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-full bg-gold-gradient text-black font-semibold text-xs tracking-wider uppercase"
              >
                WhatsApp Чат
              </a>
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-atelier-surface border border-gold-500/30 text-gold-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-atelier-surface border border-gold-500/30 text-gold-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
