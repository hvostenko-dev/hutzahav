import React, { useState, useEffect } from 'react';
import { PortfolioItem, STUDIO_INFO } from '../data/portfolioData';
import { useCart } from '../context/CartContext';
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('Индивидуальный пошив');
  const [copied, setCopied] = useState(false);

  const availableSizes = ['XS (34-36)', 'S (36-38)', 'M (38-40)', 'L (40-42)', 'XL (42-44)', 'Индивидуальный пошив'];

  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedSize('Индивидуальный пошив');
  }, [item?.id]);

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

  const whatsappOrderText = encodeURIComponent(
    `Здравствуйте, Галина! Меня заинтересовало изделие в ателье Hutzahav:\n«${item.nameRu}»\nРазмер: ${selectedSize}\nХочу согласовать примерку в ателье (Ашдод, Шавей Цион 2) или оформить заказ с доставкой.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/92 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-6xl max-h-[92vh] bg-noir-850 rounded-3xl border border-gold-400/30 shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/75 hover:bg-gold-500 hover:text-black text-slate-200 transition-colors border border-white/10"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        {/* LEFT: Master Photo Viewer */}
        <div className="relative flex-1 bg-black/70 flex flex-col items-center justify-center min-h-[380px] lg:min-h-[600px] overflow-hidden group">
          
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={currentImage.url}
              alt={item.nameRu}
              className="max-h-[60vh] lg:max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
            />
          </div>

          {/* Nav arrows inside item images */}
          {item.images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-gold-500 hover:text-black text-slate-200 transition-colors border border-white/10"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setActiveImageIndex((prev) => (prev + 1) % item.images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-gold-500 hover:text-black text-slate-200 transition-colors border border-white/10"
                aria-label="Следующее фото"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Thumbnails */}
          {item.images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md">
              {item.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
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
          <div className="absolute top-4 left-4 flex items-center gap-1.5">
            <button
              onClick={onPrevItem}
              className="px-3 py-1.5 rounded-full bg-black/70 text-xs font-cinzel text-slate-300 hover:text-gold-300 border border-white/10 flex items-center gap-1"
            >
              <ChevronLeft size={14} /> Назад
            </button>
            <button
              onClick={onNextItem}
              className="px-3 py-1.5 rounded-full bg-black/70 text-xs font-cinzel text-slate-300 hover:text-gold-300 border border-white/10 flex items-center gap-1"
            >
              Вперед <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* RIGHT: Bespoke Boutique Order Details Panel */}
        <div className="w-full lg:w-[440px] p-6 sm:p-7 bg-noir-850 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-400/20 overflow-y-auto max-h-[85vh]">
          <div className="space-y-5">
            
            {/* Header category badge & price */}
            <div className="flex items-center justify-between">
              <span className="font-cinzel text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gold-400/10 text-gold-300 border border-gold-400/30">
                {item.category === 'dresses' && 'Платья & Наряды'}
                {item.category === 'jackets_felting' && 'Арт-жакеты & Нуно-войлок'}
                {item.category === 'accessories' && 'Шарфы & Аксессуары'}
                {item.category === 'atelier_tailoring' && 'Индивидуальный пошив & Ремонт'}
                {item.category === 'home_textiles' && 'Домашний текстиль'}
              </span>

              {item.price && (
                <span className="font-cormorant text-2xl font-bold text-gold-300">
                  {item.price}
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <h2 className="font-cormorant text-2xl sm:text-3xl font-bold text-white leading-snug">
                {item.nameRu}
              </h2>
              <div className="text-xs text-slate-500 font-cinzel uppercase tracking-wider mt-1">
                {item.nameEn}
              </div>
            </div>

            {/* Description */}
            <div className="text-xs text-slate-300 leading-relaxed font-light space-y-2 border-y border-white/10 py-3.5">
              <p>
                {item.descriptionRu ||
                  'Авторское кутюрное изделие ателье Hutzahav. Создано по индивидуальным меркам с использованием премиальных натуральных тканей.'}
              </p>
            </div>

            {/* Size Selector with Size Guide Button */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="font-cinzel text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Scissors size={12} className="text-gold-400" />
                  <span>Размер / Посадка:</span>
                </label>

                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-[11px] text-gold-400 hover:text-gold-300 underline font-cinzel flex items-center gap-1"
                >
                  <Ruler size={11} />
                  <span>Гид по размерам</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {availableSizes.map((sz) => {
                  const isSelected = selectedSize === sz;
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 px-2 rounded-xl text-[11px] font-cinzel tracking-wider text-center transition-all ${
                        isSelected
                          ? 'gold-gradient-bg text-black font-bold shadow-md'
                          : 'bg-noir-900 text-slate-300 hover:text-white border border-white/10'
                      }`}
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
                <div className="font-cinzel text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Tag size={11} className="text-gold-400" /> Ткань и ручная работа:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-noir-800 text-slate-300 border border-gold-400/20 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Atelier Location Notice */}
            <div className="p-3.5 rounded-2xl bg-noir-800/80 border border-white/5 space-y-1 text-xs">
              <div className="font-semibold text-gold-300 font-cinzel uppercase tracking-wider flex items-center gap-1.5">
                <MapPin size={13} className="text-gold-400" />
                <span>Примерка в ателье:</span>
              </div>
              <div className="text-slate-400 text-[11px]">
                г. Ашдод, ул. Шавей Цион 2 • Доставка с примеркой по Израилю
              </div>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="pt-5 space-y-2.5">
            {/* Add to Order Cart Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.15em] shadow-xl hover:scale-[1.02] active:scale-95 transition-transform"
              >
                <ShoppingBag size={16} />
                <span>В корзину заказа</span>
              </button>

              <button
                type="button"
                onClick={() => toggleWishlist(item.id)}
                className={`p-3.5 rounded-full border transition-all ${
                  isFav
                    ? 'bg-gold-500 text-black border-gold-400 shadow-md'
                    : 'bg-noir-800 text-slate-300 hover:text-white border-white/10'
                }`}
                title={isFav ? 'В избранном' : 'В список желаний'}
              >
                <Heart size={16} className={isFav ? 'fill-black' : ''} />
              </button>
            </div>

            {/* Direct WhatsApp Instant Consultation */}
            <a
              href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${whatsappOrderText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-cinzel text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <WhatsApp size={15} />
              <span>Заказать сразу в WhatsApp</span>
            </a>

            {/* Secondary: Phone & Share */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-noir-800 hover:bg-noir-750 text-slate-300 border border-white/10 text-[11px] font-cinzel uppercase tracking-wider transition-colors"
              >
                <Phone size={12} className="text-gold-400" />
                <span>Позвонить</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-noir-800 hover:bg-noir-750 text-slate-300 border border-white/10 text-[11px] font-cinzel uppercase tracking-wider transition-colors"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Share2 size={12} />}
                <span>{copied ? 'Скопировано' : 'Поделиться'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
