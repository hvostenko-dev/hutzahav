import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Menu, X, Phone, MessageCircle, Scissors } from 'lucide-react';
import { Instagram, Facebook } from './Icons';

interface NavbarProps {
  activeLang: 'ru' | 'en' | 'he';
  onLangChange: (lang: 'ru' | 'en' | 'he') => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeLang, onLangChange, onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Услуги ателье', href: '#services' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Процесс пошива', href: '#journey' },
    { label: 'Lookbook', href: '#gallery' },
    { label: 'О мастере', href: '#about' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-noir-950/95 backdrop-blur-xl py-3 border-b border-gold-400/20 shadow-2xl'
          : 'bg-gradient-to-b from-noir-950/90 via-noir-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400/60 shadow-lg group-hover:border-gold-300 transition-colors">
              <img
                src="/images/logo.jpg"
                alt="Hutzahav Atelier Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl tracking-[0.2em] font-bold text-white group-hover:text-gold-200 transition-colors">
                HUTZAHAV
              </span>
              <span className="font-cinzel text-[9px] uppercase tracking-[0.3em] text-gold-400/90 -mt-0.5">
                Atelier Haute Couture • חוט זהב
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-cinzel text-xs uppercase tracking-[0.18em] text-slate-300 hover:text-gold-300 transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions & Book Button */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Phone */}
            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-xs text-slate-300 hover:text-gold-300 transition-colors"
            >
              <Phone size={14} className="text-gold-400" />
              <span>{STUDIO_INFO.phone}</span>
            </a>

            {/* Socials */}
            <div className="flex items-center gap-1.5 text-slate-400">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="p-2 rounded-full hover:text-gold-300 hover:bg-white/5 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="p-2 rounded-full hover:text-gold-300 hover:bg-white/5 transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>

            {/* Primary Action Button */}
            <a
              href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                'Здравствуйте, Галина! Хочу записаться на примерку и консультацию в ателье Hutzahav.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.15em] transition-transform hover:scale-105 shadow-lg shadow-gold-500/10"
            >
              <Scissors size={14} />
              <span>Примерка в ателье</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full gold-gradient-bg text-black"
              title="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-200 hover:text-gold-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-noir-950/98 border-b border-gold-400/20 px-6 py-6 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-cinzel text-sm uppercase tracking-widest text-slate-200 hover:text-gold-300 py-1.5"
              >
                {link.label}
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

            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-widest"
            >
              Записаться на примерку в WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
