import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { useCart } from '../context/CartContext';
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
} from 'lucide-react';
import { Instagram, Facebook, Telegram, WhatsApp } from './Icons';
import { Logo } from './Logo';

interface NavbarProps {
  activeLang: 'ru' | 'en' | 'he';
  onLangChange: (lang: 'ru' | 'en' | 'he') => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeLang, onLangChange, onBookClick }) => {
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen, setIsSizeGuideOpen } = useCart();
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
    { label: 'Коллекция', href: '#gallery', sub: 'Lookbook & Заказ' },
    { label: 'Сертификаты', href: '#gift-certificates', sub: 'Подарок' },
    { label: 'FAQ', href: '#faq', sub: 'Вопросы & Ответы' },
    { label: 'Контакты', href: '#contact', sub: 'Ашдод, Shavei Tzion 2' },
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
              
              {/* Socials & Messengers */}
              <div className="flex items-center gap-0.5 text-slate-400">
                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="p-2 rounded-full hover:text-[#25D366] hover:bg-white/5 transition-colors"
                >
                  <WhatsApp size={16} />
                </a>
                <a
                  href={STUDIO_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram"
                  className="p-2 rounded-full hover:text-[#229ED9] hover:bg-white/5 transition-colors"
                >
                  <Telegram size={16} />
                </a>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  title={`Написать на почту: ${STUDIO_INFO.email}`}
                  className="p-2 rounded-full hover:text-gold-300 hover:bg-white/5 transition-colors"
                >
                  <Mail size={16} />
                </a>
              </div>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2.5 rounded-full bg-noir-850 hover:bg-noir-800 text-slate-300 hover:text-gold-300 border border-white/10 transition-colors"
                title="Список желаний"
                aria-label="Открыть список желаний"
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
                title="Корзина заказа"
                aria-label="Открыть корзину заказа"
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
                <span>Примерка в ателье</span>
              </a>
            </div>

            {/* Mobile Actions: Wishlist + Bag + Burger */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 rounded-full bg-noir-850 text-slate-300 border border-white/10"
                aria-label="Список желаний"
              >
                <Heart size={17} className={wishlist.length > 0 ? 'text-gold-400 fill-gold-400' : ''} />
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
                aria-label="Корзина заказа"
              >
                <ShoppingBag size={17} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full gold-gradient-bg text-black text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileOpen(true)}
                className="p-2.5 rounded-xl bg-noir-850 border border-gold-400/30 text-gold-300 hover:text-white transition-colors"
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
              <span>Корзина ({cartCount})</span>
            </button>

            <button
              onClick={() => {
                setMobileOpen(false);
                setIsWishlistOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-noir-850 border border-white/10 text-slate-300 text-xs font-cinzel font-bold uppercase tracking-wider"
            >
              <Heart size={15} className={wishlist.length > 0 ? 'text-gold-400 fill-gold-400' : ''} />
              <span>Избранное ({wishlist.length})</span>
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
                <div className="flex flex-col">
                  <span className="font-cormorant text-xl font-bold text-white group-hover:text-gold-200 transition-colors">
                    {link.label}
                  </span>
                  <span className="font-cinzel text-[10px] uppercase tracking-wider text-gold-400/80">
                    {link.sub}
                  </span>
                </div>
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
              <div className="flex flex-col">
                <span className="font-cormorant text-xl font-bold text-white">
                  Таблица размеров
                </span>
                <span className="font-cinzel text-[10px] uppercase tracking-wider text-gold-400/80">
                  Снятие мерок & посадка
                </span>
              </div>
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
              <span>Записаться на примерку в Ашдоде</span>
            </a>

            {/* Address */}
            <div className="text-center text-[11px] text-slate-400 pt-1">
              {STUDIO_INFO.addressRu}
            </div>

          </div>

        </div>
      )}
    </>
  );
};
