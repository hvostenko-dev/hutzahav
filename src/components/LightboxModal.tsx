import React, { useState, useEffect } from 'react';
import { PortfolioItem, STUDIO_INFO } from '../data/portfolioData';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Tag,
  Sparkles,
  Check,
  Scissors,
  ShoppingBag,
  Heart,
  Ruler,
  Share2,
  MapPin,
} from 'lucide-react';
import { WhatsApp } from './Icons';

interface LightboxModalProps {
  item: PortfolioItem | null;
  activeLang: 'ru' | 'en' | 'he';
  onClose: () => void;
  onNextItem: () => void;
  onPrevItem: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  activeLang,
  onClose,
  onNextItem,
  onPrevItem,
}) => {
  const { addToCart, toggleWishlist, isInWishlist, setIsSizeGuideOpen } = useCart();
  const { lang, t, dir } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('Индивидуальный пошив');
  const [copied, setCopied] = useState(false);

  const availableSizes = [
    'XS (34-36)',
    'S (36-38)',
    'M (38-40)',
    'L (40-42)',
    'XL (42-44)',
    lang === 'he' ? 'תפירה אישית לפי מידה' : lang === 'en' ? 'Bespoke Custom Fit' : 'Индивидуальный пошив',
  ];

  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedSize(lang === 'he' ? 'תפירה אישית לפי מידה' : lang === 'en' ? 'Bespoke Custom Fit' : 'Индивидуальный пошив');
  }, [item?.id, lang]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        if (item && activeImageIndex < item.images.length - 1) {
          setActiveImageIndex((prev) => prev + 1);
        } else {
          onNextItem();
        }
      }
      if (e.key === 'ArrowLeft') {
        if (activeImageIndex > 0) {
          setActiveImageIndex((prev) => prev - 1);
        } else {
          onPrevItem();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, activeImageIndex, onClose, onNextItem, onPrevItem]);

  if (!item) return null;

  const currentImage = item.images[activeImageIndex] || item.images[0];
  const isFav = isInWishlist(item.id);

  const handleAddToCart = () => {
    addToCart(item, selectedSize);
    onClose();
  };

  const name = lang === 'en' ? item.nameEn || item.nameRu : item.nameRu;
  const desc = lang === 'en' ? item.descriptionEn || item.descriptionRu : item.descriptionRu;

  const whatsappOrderText = encodeURIComponent(
    lang === 'he'
      ? `שלום גלינה! אני מעוניינת בפריט מהאטלייה:\n«${name}»\nמידה מבוקשת: ${selectedSize}\nאשמח לתאם מדידה באשדוד (שבי ציון 2) או הזמנה עם משלוח.`
      : lang === 'en'
      ? `Hello Galina! I am interested in this atelier creation:\n«${name}»\nSize: ${selectedSize}\nI would like to arrange a studio fitting in Ashdod or request shipping.`
      : `Здравствуйте, Галина! Меня заинтересовало изделие в ателье Hutzahav:\n«${name}»\nРазмер: ${selectedSize}\nХочу согласовать примерку в ателье (Ашдод, Шавей Цион 2) или оформить заказ с доставкой.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/92 backdrop-blur-2xl animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-6xl max-h-[96vh] sm:max-h-[92vh] bg-noir-850 rounded-2xl sm:rounded-3xl border border-gold-400/30 shadow-2xl overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 sm:p-2.5 rounded-full bg-black/80 hover:bg-gold-500 hover:text-black text-slate-200 transition-colors border border-white/10"
          aria-label={t.close}
        >
          <X size={18} />
        </button>

        {/* LEFT: Master Photo Viewer */}
        <div className="relative flex-1 bg-black/70 flex flex-col items-center justify-center min-h-[250px] sm:min-h-[380px] lg:min-h-[600px] overflow-hidden group">
          
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
            <img
              src={currentImage.url}
              alt={name}
              className="max-h-[38vh] sm:max-h-[55vh] lg:max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
            />
          </div>

          {/* Nav arrows inside item images */}
          {item.images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length)
                }
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-gold-500 hover:text-black text-slate-200 transition-colors border border-white/10"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setActiveImageIndex((prev) => (prev + 1) % item.images.length)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-gold-500 hover:text-black text-slate-200 transition-colors border border-white/10"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {/* Thumbnails */}
          {item.images.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md overflow-x-auto">
              {item.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    activeImageIndex === idx
                      ? 'border-gold-400 scale-105 shadow-md'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Item switcher pills */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <button
              onClick={onPrevItem}
              className="px-2.5 py-1 rounded-full bg-black/80 text-[11px] font-cinzel text-slate-300 hover:text-gold-300 border border-white/10 flex items-center gap-1"
            >
              <ChevronLeft size={12} /> {lang === 'he' ? 'הקודם' : lang === 'en' ? 'Prev' : 'Назад'}
            </button>
            <button
              onClick={onNextItem}
              className="px-2.5 py-1 rounded-full bg-black/80 text-[11px] font-cinzel text-slate-300 hover:text-gold-300 border border-white/10 flex items-center gap-1"
            >
              {lang === 'he' ? 'הבא' : lang === 'en' ? 'Next' : 'Вперед'} <ChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* RIGHT: Bespoke Boutique Order Details Panel */}
        <div className="w-full lg:w-[440px] p-4 sm:p-7 bg-noir-850 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-400/20 overflow-y-auto">
          <div className="space-y-4 sm:space-y-5">
            
            {/* Header category badge & price */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="font-cinzel text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gold-400/10 text-gold-300 border border-gold-400/30">
                {item.category === 'dresses' && t.catDresses}
                {item.category === 'jackets_felting' && t.catJackets}
                {item.category === 'accessories' && t.catAccessories}
                {item.category === 'atelier_tailoring' && t.catTailoring}
                {item.category === 'home_textiles' && t.catHomeTextiles}
              </span>

              {item.price && (
                <span className="font-cormorant text-2xl font-bold text-gold-300">
                  {item.price}
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <h2 className="font-cormorant text-2xl sm:text-3xl font-bold text-white leading-snug break-words">
                {name}
              </h2>
              {item.nameEn && lang !== 'en' && (
                <div className="text-xs text-slate-500 font-cinzel uppercase tracking-wider mt-0.5">
                  {item.nameEn}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light space-y-1.5 border-y border-white/10 py-3">
              <p>{desc}</p>
            </div>

            {/* Size Selector with Size Guide Button */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="font-cinzel text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Scissors size={12} className="text-gold-400" />
                  <span>{lang === 'he' ? 'מידה / גזרה:' : lang === 'en' ? 'Size / Fitting:' : 'Размер / Посадка:'}</span>
                </label>

                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-[11px] text-gold-400 hover:text-gold-300 underline font-cinzel flex items-center gap-1"
                >
                  <Ruler size={11} />
                  <span>{t.catalogSizeGuideBtn}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                {availableSizes.map((sz) => {
                  const isSelected = selectedSize === sz;
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 px-1.5 rounded-xl text-[10px] sm:text-[11px] font-cinzel tracking-wider text-center transition-all truncate ${
                        isSelected
                          ? 'gold-gradient-bg text-black font-bold shadow-md'
                          : 'bg-noir-900 text-slate-300 hover:text-white border border-white/10'
                      }`}
                      title={sz}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tags / Materials */}
            {item.tags.length > 0 && (
              <div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] sm:text-[11px] bg-noir-800 text-slate-300 border border-gold-400/20 px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Atelier Location Notice */}
            <div className="p-3 rounded-xl bg-noir-800/80 border border-white/5 space-y-0.5 text-xs">
              <div className="font-semibold text-gold-300 font-cinzel uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
                <MapPin size={12} className="text-gold-400 shrink-0" />
                <span>{lang === 'he' ? 'מדידה ואיסוף באטלייה:' : lang === 'en' ? 'Atelier Fitting:' : 'Примерка в ателье:'}</span>
              </div>
              <div className="text-slate-400 text-[10px] sm:text-[11px]">
                {lang === 'he' ? STUDIO_INFO.addressHe : STUDIO_INFO.addressRu}
              </div>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="pt-4 sm:pt-5 space-y-2">
            {/* Add to Order Cart Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.14em] shadow-xl hover:scale-[1.02] active:scale-95 transition-transform"
              >
                <ShoppingBag size={15} />
                <span>{t.catalogAddToBag}</span>
              </button>

              <button
                type="button"
                onClick={() => toggleWishlist(item.id)}
                className={`p-3 rounded-full border transition-all shrink-0 ${
                  isFav
                    ? 'bg-gold-500 text-black border-gold-400 shadow-md'
                    : 'bg-noir-800 text-slate-300 hover:text-white border-white/10'
                }`}
                title="Wishlist"
              >
                <Heart size={16} className={isFav ? 'fill-black' : ''} />
              </button>
            </div>

            {/* Direct WhatsApp Instant Consultation */}
            <a
              href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${whatsappOrderText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-cinzel text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <WhatsApp size={14} />
              <span>WhatsApp</span>
            </a>

            {/* Secondary: Phone & Share */}
            <div className="flex items-center gap-2 pt-0.5">
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-noir-800 hover:bg-noir-750 text-slate-300 border border-white/10 text-[10px] sm:text-[11px] font-cinzel uppercase tracking-wider transition-colors"
              >
                <Phone size={11} className="text-gold-400" />
                <span>{lang === 'he' ? 'חיוג' : lang === 'en' ? 'Call' : 'Позвонить'}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-noir-800 hover:bg-noir-750 text-slate-300 border border-white/10 text-[10px] sm:text-[11px] font-cinzel uppercase tracking-wider transition-colors"
              >
                {copied ? <Check size={11} className="text-emerald-400" /> : <Share2 size={11} />}
                <span>{copied ? (lang === 'he' ? 'הועתק' : 'Скопировано') : (lang === 'he' ? 'שיתוף' : 'Поделиться')}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
