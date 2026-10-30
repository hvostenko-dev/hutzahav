import React, { useState, useEffect } from 'react';
import { STUDIO_INFO, PORTFOLIO_ITEMS } from '../data/portfolioData';
import { Sparkles, ArrowRight, Scissors, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  activeLang: 'ru' | 'en' | 'he';
  onExploreClick: () => void;
  onItemSelect: (item: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ activeLang, onExploreClick, onItemSelect }) => {
  // Select top featured masterpieces
  const featuredItems = PORTFOLIO_ITEMS.filter((item) => item.featured).slice(0, 6);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [featuredItems.length]);

  const currentItem = featuredItems[currentIndex] || PORTFOLIO_ITEMS[0];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-2/3 right-10 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Story */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-atelier-surface/90 border border-gold-500/30 text-gold-300 text-xs tracking-wider uppercase backdrop-blur-sm">
              <Sparkles size={14} className="text-gold-400" />
              <span>
                {activeLang === 'ru' && 'Авторская мастерская высокой моды'}
                {activeLang === 'en' && 'Haute Couture & Bespoke Atelier'}
                {activeLang === 'he' && 'סטודיו לאופנה עילית ותפירה אישית'}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              <span className="block text-slate-100">
                {activeLang === 'ru' && 'Искусство костюма &'}
                {activeLang === 'en' && 'The Art of Couture &'}
                {activeLang === 'he' && 'אמנות האופנה &'}
              </span>
              <span className="text-gold-gradient block mt-1">
                {activeLang === 'ru' && 'Живопись на ткани'}
                {activeLang === 'en' && 'Hand-Painted Fabrics'}
                {activeLang === 'he' && 'ציור על בדי משי ופשתן'}
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {activeLang === 'ru' && (
                <>
                  Эксклюзивные наряды ручной работы от дизайнера{' '}
                  <strong className="text-white font-medium">Галины Хвостенко</strong>. Натуральный лен и шелк,
                  нуно-войлок, индивидуальный пошив вечерних платьев и уютный домашний текстиль.
                </>
              )}
              {activeLang === 'en' && (
                <>
                  Exclusive handcrafted apparel by designer{' '}
                  <strong className="text-white font-medium">Galina Khvostenko</strong>. Natural silk, linen,
                  nuno-felting art, bespoke evening gowns, and fine home decor.
                </>
              )}
              {activeLang === 'he' && (
                <>
                  בגדי מעצבים בעבודת יד מאת{' '}
                  <strong className="text-white font-medium">גלינה חבוסטנקו</strong>. בדי פשתן ומשי עם ציור ידני,
                  ליבוד צמר, תפירת שמלות ערב בהתאמה אישית.
                </>
              )}
            </p>

            {/* Buttons & CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gold-gradient text-black font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 gold-glow"
              >
                <span>
                  {activeLang === 'ru' && 'Смотреть работы (54+)'}
                  {activeLang === 'en' && 'Explore Portfolio'}
                  {activeLang === 'he' && 'לצפייה בגלריה'}
                </span>
                <ArrowRight size={17} />
              </button>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-atelier-surface/90 border border-gold-500/30 text-slate-100 hover:text-gold-300 hover:border-gold-400 text-sm font-medium transition-all"
              >
                <MessageCircle size={17} className="text-gold-400" />
                <span>
                  {activeLang === 'ru' && 'Индивидуальный заказ'}
                  {activeLang === 'en' && 'Order Bespoke via WhatsApp'}
                  {activeLang === 'he' && 'הזמנה אישית ב-WhatsApp'}
                </span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-300">15+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                  {activeLang === 'ru' ? 'Лет опыта' : 'Years Craft'}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-300">100%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                  {activeLang === 'ru' ? 'Ручная работа' : 'Handmade Art'}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-300">2019</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                  {activeLang === 'ru' ? 'Студия Hutzahav' : 'Established'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Featured Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-gold-500/40 via-amber-700/20 to-gold-400/40 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-gold-500/30 shadow-2xl bg-atelier-card">
                
                {/* Image Container with aspect ratio */}
                <div
                  className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
                  onClick={() => onItemSelect(currentItem)}
                >
                  <img
                    src={currentItem.coverImage}
                    alt={currentItem.nameRu}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-atelier-dark via-atelier-dark/20 to-transparent"></div>

                  {/* Ribbon / Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/60 text-gold-300 backdrop-blur-md border border-gold-500/30">
                      <Scissors size={12} />
                      {activeLang === 'ru' ? 'Шедевр коллекции' : 'Featured Piece'}
                    </span>
                  </div>

                  {/* Multi-photo badge */}
                  {currentItem.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-slate-200 text-xs px-2.5 py-1 rounded-full border border-white/10">
                      📷 {currentItem.images.length} фото
                    </div>
                  )}

                  {/* Details Overlay on bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 text-left">
                    {currentItem.price && (
                      <div className="text-sm font-semibold text-gold-300 tracking-wide">
                        {currentItem.price}
                      </div>
                    )}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-gold-200 transition-colors">
                      {activeLang === 'ru' ? currentItem.nameRu : currentItem.nameEn}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {activeLang === 'ru' ? currentItem.descriptionRu : currentItem.descriptionEn || currentItem.descriptionRu}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs text-gold-400 font-medium">
                      <span>Нажмите, чтобы рассмотреть детали</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Slider Controls Bar */}
                <div className="px-5 py-3.5 bg-atelier-surface/80 border-t border-gold-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {featuredItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentIndex === idx ? 'w-6 bg-gold-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length)}
                      className="p-1.5 rounded-full bg-atelier-dark text-slate-300 hover:text-gold-300 hover:border-gold-400 border border-white/10 transition-colors"
                      aria-label="Previous"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setCurrentIndex((prev) => (prev + 1) % featuredItems.length)}
                      className="p-1.5 rounded-full bg-atelier-dark text-slate-300 hover:text-gold-300 hover:border-gold-400 border border-white/10 transition-colors"
                      aria-label="Next"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
