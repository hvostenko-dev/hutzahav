import React, { useState, useEffect } from 'react';
import { STUDIO_INFO, PORTFOLIO_ITEMS } from '../data/portfolioData';
import { Sparkles, ArrowRight, Scissors, MessageCircle, ChevronLeft, ChevronRight, Calculator, ShieldCheck } from 'lucide-react';

interface HeroAtelierProps {
  onExploreClick: () => void;
  onCalculatorClick: () => void;
  onItemSelect: (item: any) => void;
}

export const HeroAtelier: React.FC<HeroAtelierProps> = ({
  onExploreClick,
  onCalculatorClick,
  onItemSelect,
}) => {
  const featured = PORTFOLIO_ITEMS.filter((i) => i.featured).slice(0, 6);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % featured.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const current = featured[index] || PORTFOLIO_ITEMS[0];

  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden bg-noir-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-gold-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-700/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Subtle background golden grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(213,180,109,0.12),rgba(255,255,255,0))] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Haute Couture Editorial Copy */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-noir-850 border border-gold-400/40 text-gold-300 text-xs font-cinzel tracking-[0.25em] uppercase backdrop-blur-md shadow-lg">
              <Sparkles size={13} className="text-gold-400" />
              <span>HUTZAHAV • ATELIER DE COUTURE • חוט זהב</span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
              Искусство <span className="italic font-light text-gold-200">кутюрного кроя</span>
              <span className="block gold-gradient-text mt-1">
                & ручная роспись шелка
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Премиальное ателье дизайнера <strong className="text-white font-medium">Галины Хвостенко</strong>.
              Индивидуальный пошив вечерних платьев с идеальной посадкой по 25 анатомическим меркам,
              арт-жакеты в технике нуно-войлока, тончайшая подгонка брендовой одежды и текстильный уют.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-gold-500/20"
              >
                <Scissors size={16} />
                <span>Записаться на примерку</span>
              </a>

              <button
                onClick={onCalculatorClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-noir-850 hover:bg-noir-800 text-slate-200 hover:text-gold-300 border border-gold-400/30 text-xs font-cinzel font-semibold uppercase tracking-[0.15em] transition-all"
              >
                <Calculator size={15} className="text-gold-400" />
                <span>Рассчитать стоимость</span>
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-4 text-xs font-cinzel text-slate-400 hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>Lookbook (54)</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Luxury Stats Bar */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-gold-400/20 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-3xl sm:text-4xl font-bold text-gold-300">15+</div>
                <div className="text-[11px] font-cinzel text-slate-400 uppercase tracking-widest mt-1">
                  Лет мастерства
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-3xl sm:text-4xl font-bold text-gold-300">25+</div>
                <div className="text-[11px] font-cinzel text-slate-400 uppercase tracking-widest mt-1">
                  Точных мерок
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-3xl sm:text-4xl font-bold text-gold-300">100%</div>
                <div className="text-[11px] font-cinzel text-slate-400 uppercase tracking-widest mt-1">
                  Ручная работа
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Atelier Masterpiece Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Glow Aura */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-gold-500/40 via-amber-600/20 to-gold-400/40 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden luxury-card border border-gold-400/30 bg-noir-850 shadow-2xl">
                
                {/* Photo Display */}
                <div
                  className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
                  onClick={() => onItemSelect(current)}
                >
                  <img
                    src={current.coverImage}
                    alt={current.nameRu}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/20 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="font-cinzel text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/75 text-gold-300 backdrop-blur-md border border-gold-400/30">
                      Шедевр ателье
                    </span>
                  </div>

                  {current.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md text-slate-200 text-xs px-2.5 py-1 rounded-full border border-white/10">
                      📷 {current.images.length} ракурса
                    </div>
                  )}

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 text-left">
                    {current.price && (
                      <div className="font-cormorant text-2xl font-bold text-gold-300 tracking-wide">
                        {current.price}
                      </div>
                    )}
                    <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white leading-snug group-hover:text-gold-200 transition-colors">
                      {current.nameRu}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-light">
                      {current.descriptionRu}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs font-cinzel text-gold-400 uppercase tracking-wider">
                      <span>Рассмотреть в деталях</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="px-5 py-3.5 bg-noir-900 border-t border-gold-400/20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {featured.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === idx ? 'w-6 bg-gold-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIndex((prev) => (prev - 1 + featured.length) % featured.length)}
                      className="p-1.5 rounded-full bg-noir-800 text-slate-300 hover:text-gold-300 border border-white/10 transition-colors"
                      aria-label="Previous"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setIndex((prev) => (prev + 1) % featured.length)}
                      className="p-1.5 rounded-full bg-noir-800 text-slate-300 hover:text-gold-300 border border-white/10 transition-colors"
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
