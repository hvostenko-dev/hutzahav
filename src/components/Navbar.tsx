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
  Globe,
  Sparkles,
  Ruler,
  ChevronRight,
} from 'lucide-react';
import { Telegram, WhatsApp } from './Icons';
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

  const languages: { id: Language; label: string; full: string }[] = [
    { id: 'ru', label: 'РУС', full: 'Русский' },
    { id: 'en', label: 'ENG', full: 'English' },
    { id: 'he', label: 'עב', full: 'עברית' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-noir-950/95 backdrop-blur-2xl py-3 border-b border-gold-400/20 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-noir-950/98 via-noir-950/80 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            
            {/* 1. LEFT: Brand Atelier Logo (Always fixed & never shrinks) */}
            <div className="flex items-center shrink-0">
              <a href="#" className="flex items-center transition-opacity hover:opacity-90">
                <Logo size={42} showText={true} />
              </a>
            </div>

            {/* 2. CENTER: Desktop Navigation Links (Centered, balanced with even spacing) */}
            <nav className="hidden xl:flex items-center justify-center gap-6 2xl:gap-8 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-cinzel text-[11px] 2xl:text-xs uppercase tracking-[0.16em] text-slate-300 hover:text-gold-300 transition-colors relative py-1.5 whitespace-nowrap group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-200 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* 3. RIGHT: Controls, Actions & Language Switcher (Symmetrical & spacious) */}
            <div className="hidden lg:flex items-center gap-3.5 2xl:gap-4 shrink-0">
              
              {/* Language Switcher Segmented Control */}
              <div className="flex items-center bg-noir-900 border border-gold-400/30 rounded-full p-1 shadow-inner">
                {languages.map((item) => {
                  const active = lang === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setLang(item.id)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-cinzel font-bold tracking-wider transition-all duration-200 ${
                        active
                          ? 'gold-gradient-bg text-black shadow-md shadow-gold-500/20 scale-102'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      title={item.full}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Vertical Hairline Divider */}
              <div className="h-5 w-px bg-white/10 shrink-0"></div>

              {/* Interactive Wishlist & Cart cluster */}
              <div className="flex items-center gap-2">
                
                {/* Wishlist Button */}
                <button
                  type="button"
                  onClick={() => setIsWishlistOpen(true)}
                  className="relative p-2.5 rounded-full bg-noir-900 hover:bg-noir-850 text-slate-300 hover:text-gold-300 border border-white/10 transition-all hover:border-gold-400/40 group active:scale-95"
                  title={t.navWishlist}
                  aria-label={t.navWishlist}
                >
                  <Heart
                    size={17}
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      wishlist.length > 0 ? 'text-gold-400 fill-gold-400' : ''
                    }`}
                  />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full gold-gradient-bg text-black text-[9px] font-bold font-mono flex items-center justify-center shadow-md animate-in zoom-in">
                      {wishlist.length}
                    </span>
                  )}
                </button>

                {/* Shopping Bag Button */}
                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2.5 rounded-full bg-noir-900 hover:bg-noir-850 text-slate-300 hover:text-gold-300 border border-gold-400/30 transition-all hover:border-gold-400 shadow-md group active:scale-95"
                  title={t.navCart}
                  aria-label={t.navCart}
                >
                  <ShoppingBag
                    size={17}
                    className="text-gold-400 transition-transform duration-300 group-hover:scale-110"
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full gold-gradient-bg text-black text-[9px] font-bold font-mono flex items-center justify-center shadow-md animate-in zoom-in">
                      {cartCount}
                    </span>
                  )}
                </button>

              </div>

              {/* Vertical Hairline Divider */}
              <div className="h-5 w-px bg-white/10 shrink-0"></div>

              {/* Atelier Fitting Booking CTA Button */}
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.14em] transition-all duration-300 hover:scale-105 shadow-lg shadow-gold-500/15 active:scale-95 whitespace-nowrap"
              >
                <Scissors size={14} className="shrink-0" />
                <span>{t.navBookFitting}</span>
              </a>

            </div>

            {/* 4. TABLET & MOBILE ACTIONS CLUSTER (Balanced & Symmetrical) */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              
              {/* Quick Language Toggle Pill */}
              <button
                type="button"
                onClick={() => {
                  const nextLang: Record<Language, Language> = { ru: 'he', he: 'en', en: 'ru' };
                  setLang(nextLang[lang]);
                }}
                className="px-2.5 py-1.5 rounded-xl bg-noir-900 border border-gold-400/30 text-gold-300 text-[11px] font-cinzel font-bold tracking-wider hover:bg-noir-850 active:scale-95 transition-all"
                title="Сменить язык"
              >
                {lang === 'he' ? 'עב' : lang.toUpperCase()}
              </button>

              {/* Wishlist Button (Mobile) */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 rounded-xl bg-noir-900 border border-white/10 text-slate-300 active:scale-95 transition-all"
                aria-label={t.navWishlist}
              >
                <Heart size={17} className={wishlist.length > 0 ? 'text-gold-400 fill-gold-400' : ''} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full gold-gradient-bg text-black text-[9px] font-bold flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Button (Mobile) */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-xl bg-noir-900 border border-gold-400/30 text-gold-300 active:scale-95 transition-all"
                aria-label={t.navCart}
              >
                <ShoppingBag size={17} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full gold-gradient-bg text-black text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Burger Menu Button (Mobile & Tablet) */}
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 rounded-xl bg-noir-900 border border-gold-400/40 text-gold-300 hover:text-white hover:bg-noir-850 transition-all active:scale-95 ml-0.5"
                aria-label="Открыть мобильное меню"
              >
                <Menu size={20} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Haute Couture Mobile & Tablet Menu Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-noir-950/98 backdrop-blur-2xl animate-in fade-in duration-300">
          
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gold-400/20 bg-noir-950">
            <Logo size={40} showText={true} />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2.5 rounded-full bg-noir-900 border border-white/10 text-slate-300 hover:text-white hover:bg-noir-800 transition-colors"
              aria-label="Закрыть меню"
            >
              <X size={20} />
            </button>
          </div>

          {/* Symmetrical Language Switcher Bar in Mobile Drawer */}
          <div className="px-5 py-4 border-b border-white/10 bg-noir-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-cinzel text-slate-300 uppercase tracking-wider">
              <Globe size={15} className="text-gold-400 shrink-0" />
              <span>Язык / Language:</span>
            </div>
            
            <div className="flex items-center gap-1.5 bg-noir-950 border border-gold-400/30 rounded-full p-1 shadow-inner">
              {languages.map((item) => {
                const active = lang === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setLang(item.id)}
                    className={`px-3 py-1 rounded-full text-xs font-cinzel font-bold transition-all ${
                      active
                        ? 'gold-gradient-bg text-black shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Symmetrical Cart & Wishlist 2-Col Banner in Drawer */}
          <div className="p-4 sm:p-5 grid grid-cols-2 gap-3 border-b border-white/10 bg-noir-900/40">
            <button
              onClick={() => {
                setMobileOpen(false);
                setIsCartOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-cinzel font-bold uppercase tracking-wider active:scale-95 transition-transform"
            >
              <ShoppingBag size={15} />
              <span>{t.navCart} ({cartCount})</span>
            </button>

            <button
              onClick={() => {
                setMobileOpen(false);
                setIsWishlistOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-noir-900 border border-white/10 text-slate-300 text-xs font-cinzel font-bold uppercase tracking-wider active:scale-95 transition-transform"
            >
              <Heart size={15} className={wishlist.length > 0 ? 'text-gold-400 fill-gold-400' : ''} />
              <span>{t.navWishlist} ({wishlist.length})</span>
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-noir-900/50 hover:bg-noir-850 border border-white/5 hover:border-gold-400/30 transition-all active:scale-[0.98]"
              >
                <span className="font-cormorant text-xl sm:text-2xl font-bold text-white group-hover:text-gold-200 transition-colors">
                  {link.label}
                </span>
                <span className="font-cinzel text-xs text-gold-400/60 group-hover:text-gold-300 transition-colors">
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
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-noir-900/50 hover:bg-noir-850 border border-white/5 hover:border-gold-400/30 transition-all text-left"
            >
              <span className="font-cormorant text-xl sm:text-2xl font-bold text-white">
                {t.navSizeGuide}
              </span>
              <Ruler size={16} className="text-gold-400" />
            </button>
          </div>

          {/* Bottom Actions inside Mobile Drawer */}
          <div className="p-5 sm:p-6 border-t border-gold-400/20 bg-noir-950 space-y-3">
            
            {/* Quick Contact Icons */}
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
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.16em] shadow-xl active:scale-95"
            >
              <Scissors size={15} />
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
