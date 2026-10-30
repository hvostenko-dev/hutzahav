import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Menu, X, Phone, MessageCircle, Scissors, Sparkles } from 'lucide-react';
import { Instagram, Facebook } from './Icons';
import { Logo } from './Logo';

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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Услуги ателье', href: '#services', sub: 'Индивидуальный пошив' },
    { label: 'Калькулятор', href: '#calculator', sub: 'Онлайн-расчет' },
    { label: 'Процесс пошива', href: '#journey', sub: 'Кутюрный путь' },
    { label: 'Коллекция', href: '#gallery', sub: 'Lookbook' },
    { label: 'О мастере', href: '#about', sub: 'Галина Хвостенко' },
    { label: 'Контакты', href: '#contact', sub: 'Запись на примерку' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-noir-950/95 backdrop-blur-xl py-2.5 sm:py-3 border-b border-gold-400/20 shadow-2xl'
            : 'bg-gradient-to-b from-noir-950/95 via-noir-950/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center">
              <Logo size={44} showText={true} />
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

            {/* Desktop Actions */}
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.15em] transition-transform hover:scale-105 shadow-lg shadow-gold-500/10 active:scale-95"
              >
                <Scissors size={14} />
                <span>Примерка в ателье</span>
              </a>
            </div>

            {/* Mobile Actions: WhatsApp + Burger button */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full gold-gradient-bg text-black shadow-md active:scale-95 transition-transform"
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

              <button
                onClick={() => setMobileOpen(true)}
                className="p-2.5 rounded-xl bg-noir-850 border border-gold-400/30 text-gold-300 hover:text-white transition-colors"
                aria-label="Открыть мобильное меню"
              >
                <Menu size={22} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Haute Couture Mobile Burger Menu Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-noir-950/98 backdrop-blur-2xl animate-in fade-in slide-in-from-right duration-300">
          
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gold-400/20">
            <Logo size={40} showText={true} />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2.5 rounded-full bg-noir-850 border border-white/10 text-slate-300 hover:text-white hover:bg-noir-800 transition-colors"
              aria-label="Закрыть меню"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-noir-900/60 hover:bg-noir-850 border border-white/5 hover:border-gold-400/30 transition-all active:scale-[0.98]"
              >
                <div className="flex flex-col">
                  <span className="font-cormorant text-2xl font-bold text-white group-hover:text-gold-200 transition-colors">
                    {link.label}
                  </span>
                  <span className="font-cinzel text-[10px] uppercase tracking-wider text-gold-400/80">
                    {link.sub}
                  </span>
                </div>
                <span className="font-cormorant text-lg text-gold-400/40 group-hover:text-gold-400 transition-colors">
                  0{idx + 1} →
                </span>
              </a>
            ))}
          </div>

          {/* Bottom Actions inside Mobile Drawer */}
          <div className="p-6 border-t border-gold-400/20 bg-noir-900/90 space-y-4">
            
            {/* Phone Button */}
            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 py-3 rounded-2xl bg-noir-800 border border-white/10 text-slate-200 text-sm font-medium"
            >
              <Phone size={16} className="text-gold-400" />
              <span>{STUDIO_INFO.phone}</span>
            </a>

            {/* Direct Booking CTA */}
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.18em] shadow-xl"
            >
              <Scissors size={16} />
              <span>Записаться на примерку</span>
            </a>

            {/* Socials Row */}
            <div className="flex items-center justify-center gap-6 pt-1 text-slate-400">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-gold-300"
              >
                <Instagram size={17} />
                <span>Instagram</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-gold-300"
              >
                <Facebook size={17} />
                <span>Facebook</span>
              </a>
            </div>

          </div>

        </div>
      )}
    </>
  );
};
