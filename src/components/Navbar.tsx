import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Scissors,
  Mail,
  ShoppingBag,
  Heart,
  Gift,
  Ruler,
  Globe,
} from 'lucide-react';
import { Instagram, Facebook, Telegram, WhatsApp } from './Icons';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen, setIsSizeGuideOpen } = useCart();
  const { lang, setLang, t, dir } = useLanguage();
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
    { label: t.navServices, href: '#services' },
    { label: t.navCalculator, href: '#calculator' },
    { label: t.navJourney, href: '#journey' },
    { label: t.navCatalog, href: '#gallery' },
    { label: t.navCertificates, href: '#gift-certificates' },
    { label: t.navFaq, href: '#faq' },
    { label: t.navContact, href: '#contact' },
  ];

  const languages: { id: Language; label: string; flag: string }[] = [
    { id: 'ru', label: 'РУС', flag: '🇷🇺' },
    { id: 'en', label: 'ENG', flag: '🇬🇧' },
    { id: 'he', label: 'עברית', flag: '🇮🇱' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-noir-950/95 backdrop-blur-xl py-2.5 sm:py-3 border-b border-gold-400/20 shadow-2xl'
            : 'bg-gradient-to-b from-noir-950/95 via-noir-950/70 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center">
              <Logo size={42} showText={true} />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-cinzel text-xs uppercase tracking-[0.16em] text-slate-300 hover:text-gold-300 transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3">
              
              {/* Language Switcher (RU | EN | HE) */}
              <div className="flex items-center bg-noir-850 border border-gold-400/30 rounded-full p-0.5">
                {languages.map((item) => {
                  const active = lang === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setLang(item.id)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-cinzel font-bold tracking-wider transition-all ${
                        active
                          ? 'gold-gradient-bg text-black shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      title={item.label}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2.5 rounded-full bg-noir-850 hover:bg-noir-800 text-slate-300 hover:text-gold-300 border border-white/10 transition-colors"
                title={t.navWishlist}
                aria-label={t.navWishlist}
              >
                <Heart size={18} className={wishlist.length > 0 ? 'text-gold-400 fill-gold-400' : ''} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gold-gradient-bg text-black text-[10px] font-bold font-mono flex items-center justify-center shadow-md animate-in zoom-in">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full bg-noir-850 hover:bg-noir-800 text-slate-300 hover:text-gold-300 border border-gold-400/30 transition-colors group"
                title={t.navCart}
                aria-label={t.navCart}
              >
                <ShoppingBag size={18} className="text-gold-400 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gold-gradient-bg text-black text-[10px] font-bold font-mono flex items-center justify-center shadow-md animate-in zoom-in">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Fitting Booking Button */}
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.14em] transition-transform hover:scale-105 shadow-lg shadow-gold-500/10 active:scale-95"
              >
                <Scissors size={14} />
                <span>{t.navBookFitting}</span>
              </a>
            </div>

            {/* Mobile Actions: Language + Wishlist + Bag + Burger */}
            <div className="flex items-center gap-1.5 sm:hidden">
              {/* Quick Lang Switcher Mobile */}
              <button
                type="button"
                onClick={() => {
                  const nextLang: Record<Language, Language> = { ru: 'he', he: 'en', en: 'ru' };
                  setLang(nextLang[lang]);
                }}
                className="px-2 py-1.5 rounded-lg bg-noir-850 border border-gold-400/30 text-gold-300 text-[10px] font-cinzel font-bold"
                title="Сменить язык"
              >
                {lang.toUpperCase()}
              </button>

              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 rounded-full bg-noir-850 text-slate-300 border border-white/10"
                aria-label={t.navWishlist}
              >
                <Heart size={16} className={wishlist.length > 0 ? 'text-gold-400 fill-gold-400' : ''} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full gold-gradient-bg text-black text-[9px] font-bold flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full bg-noir-850 text-gold-300 border border-gold-400/30"
                aria-label={t.navCart}
              >
                <ShoppingBag size={16} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full gold-gradient-bg text-black text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 rounded-xl bg-noir-850 border border-gold-400/30 text-gold-300 hover:text-white transition-colors"
                aria-label="Открыть мобильное меню"
              >
                <Menu size={20} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Haute Couture Mobile Burger Menu Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-noir-950/98 backdrop-blur-2xl animate-in fade-in slide-in-from-right duration-300">
          
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gold-400/20">
            <Logo size={38} showText={true} />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2.5 rounded-full bg-noir-850 border border-white/10 text-slate-300 hover:text-white hover:bg-noir-800 transition-colors"
              aria-label="Закрыть меню"
            >
              <X size={20} />
            </button>
          </div>

          {/* Language Switcher in Mobile Drawer */}
          <div className="p-4 border-b border-white/10 bg-noir-900/40 flex items-center justify-between">
            <span className="text-xs font-cinzel text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Globe size={14} className="text-gold-400" />
              <span>Язык / Language / שפה:</span>
            </span>
            <div className="flex items-center gap-1 bg-noir-950 border border-gold-400/30 rounded-xl p-1">
              {languages.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setLang(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-cinzel font-bold transition-all ${
                    lang === item.id
                      ? 'gold-gradient-bg text-black shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Cart & Wishlist Banner in Mobile Menu */}
          <div className="p-4 grid grid-cols-2 gap-3 border-b border-white/10 bg-noir-900/50">
            <button
              onClick={() => {
                setMobileOpen(false);
                setIsCartOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-cinzel font-bold uppercase tracking-wider"
            >
              <ShoppingBag size={15} />
              <span>{t.navCart} ({cartCount})</span>
            </button>

            <button
              onClick={() => {
                setMobileOpen(false);
                setIsWishlistOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-noir-850 border border-white/10 text-slate-300 text-xs font-cinzel font-bold uppercase tracking-wider"
            >
              <Heart size={15} className={wishlist.length > 0 ? 'text-gold-400 fill-gold-400' : ''} />
              <span>{t.navWishlist} ({wishlist.length})</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1.5">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between p-3 rounded-2xl bg-noir-900/40 hover:bg-noir-850 border border-white/5 hover:border-gold-400/30 transition-all active:scale-[0.98]"
              >
                <span className="font-cormorant text-xl font-bold text-white group-hover:text-gold-200 transition-colors">
                  {link.label}
                </span>
                <span className="font-cormorant text-base text-gold-400/40 group-hover:text-gold-400 transition-colors">
                  0{idx + 1} →
                </span>
              </a>
            ))}

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                setIsSizeGuideOpen(true);
              }}
              className="w-full flex items-center justify-between p-3 rounded-2xl bg-noir-900/40 border border-white/5 text-left"
            >
              <span className="font-cormorant text-xl font-bold text-white">
                {t.navSizeGuide}
              </span>
              <Ruler size={16} className="text-gold-400" />
            </button>
          </div>

          {/* Bottom Actions inside Mobile Drawer */}
          <div className="p-5 border-t border-gold-400/20 bg-noir-900/90 space-y-3">
            
            {/* Quick Contact Bar */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold"
              >
                <WhatsApp size={15} /> WhatsApp
              </a>

              <a
                href={STUDIO_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#229ED9]/15 border border-[#229ED9]/40 text-[#229ED9] text-xs font-semibold"
              >
                <Telegram size={15} /> Telegram
              </a>

              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold"
              >
                <Mail size={15} /> Email
              </a>
            </div>

            {/* Direct Booking CTA */}
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.18em] shadow-xl"
            >
              <Scissors size={16} />
              <span>{t.navBookFitting}</span>
            </a>

            {/* Address */}
            <div className="text-center text-[11px] text-slate-400 pt-1">
              {lang === 'he' ? STUDIO_INFO.addressHe : STUDIO_INFO.addressRu}
            </div>

          </div>

        </div>
      )}
    </>
  );
};
