import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Sparkles, ArrowRight, Scissors, MessageCircle, Calculator, ShieldCheck } from 'lucide-react';

interface HeroAtelierProps {
  onExploreClick: () => void;
  onCalculatorClick: () => void;
  onBookClick: () => void;
}

export const HeroAtelier: React.FC<HeroAtelierProps> = ({
  onExploreClick,
  onCalculatorClick,
  onBookClick,
}) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-noir-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[550px] bg-gold-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-700/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle background golden radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(213,180,109,0.14),rgba(0,0,0,0))] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Haute Couture Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left order-2 lg:order-1">
            
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-850 border border-gold-400/40 text-gold-300 text-[11px] sm:text-xs font-cinzel tracking-[0.2em] uppercase backdrop-blur-md shadow-lg">
              <Sparkles size={13} className="text-gold-400 shrink-0" />
              <span>HUTZAHAV • ATELIER HAUTE COUTURE • חוט זהב</span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
              Искусство <span className="italic font-light text-gold-200">кутюрного кроя</span>
              <span className="block gold-gradient-text mt-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                & авторская роспись шелка
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Ателье дизайнера <strong className="text-white font-medium">Галины Хвостенко</strong>.
              Индивидуальный пошив вечерних платьев с безупречной посадкой по 25 анатомическим меркам,
              дизайнерские наряды из 100% льна с ручной росписью, арт-деним в технике нуно-войлока и тончайшая реставрация.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-gold-500/25 active:scale-95"
              >
                <Scissors size={15} />
                <span>Записаться на примерку</span>
              </a>

              <button
                onClick={onCalculatorClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-noir-850 hover:bg-noir-800 text-slate-200 hover:text-gold-300 border border-gold-400/30 text-xs font-cinzel font-semibold uppercase tracking-[0.15em] transition-all active:scale-95"
              >
                <Calculator size={15} className="text-gold-400" />
                <span>Рассчитать стоимость</span>
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-4 text-xs font-cinzel text-slate-400 hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>Коллекция</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Luxury Stats Bar */}
            <div className="pt-5 sm:pt-6 grid grid-cols-3 gap-3 sm:gap-6 border-t border-gold-400/20 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-300">15+</div>
                <div className="text-[10px] sm:text-[11px] font-cinzel text-slate-400 uppercase tracking-widest mt-0.5 sm:mt-1">
                  Лет мастерства
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-300">25+</div>
                <div className="text-[10px] sm:text-[11px] font-cinzel text-slate-400 uppercase tracking-widest mt-0.5 sm:mt-1">
                  Анатомических мерок
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-300">100%</div>
                <div className="text-[10px] sm:text-[11px] font-cinzel text-slate-400 uppercase tracking-widest mt-0.5 sm:mt-1">
                  Ручная работа
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: The ONLY Hero Model Photo as Requested */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
              
              {/* Outer Golden Glow Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gold-500/35 via-amber-600/15 to-gold-400/35 blur-2xl opacity-80 group-hover:opacity-100 transition duration-1000"></div>

              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden luxury-card border-2 border-gold-400/40 bg-noir-850 shadow-2xl p-1.5 sm:p-2">
                
                {/* Photo Display */}
                <div className="relative aspect-[2/3] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-black group">
                  <img
                    src="/images/hero-model.jpg"
                    alt="Авторский образ Hutzahav Atelier — Галина Хвостенко"
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="font-cinzel text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/75 text-gold-300 backdrop-blur-md border border-gold-400/40 shadow-lg">
                      Авторская коллекция Hutzahav
                    </span>
                  </div>

                  {/* Bottom Vignette Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-left space-y-1.5">
                    <span className="font-cinzel text-[10px] text-gold-400 uppercase tracking-[0.2em] font-semibold">
                      Haute Couture Look
                    </span>
                    <h2 className="font-cormorant text-2xl sm:text-3xl font-bold text-white leading-snug">
                      Неповторимый авторский стиль
                    </h2>
                    <p className="text-xs text-slate-300 font-light line-clamp-2">
                      Тонкая ручная работа, авторские украшения и натуральные дышащие ткани, подчеркивающие вашу индивидуальность.
                    </p>
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
