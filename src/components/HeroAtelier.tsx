import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowRight, Scissors, Calculator, Crown, Award, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';

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
  const { lang, t, dir } = useLanguage();

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-noir-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[550px] bg-gold-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-700/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle background golden radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(213,180,109,0.14),rgba(0,0,0,0))] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Haute Couture Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left order-2 lg:order-1">
            
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-850/90 border border-gold-400/40 text-gold-300 text-[11px] sm:text-xs font-cinzel tracking-[0.2em] uppercase backdrop-blur-md shadow-lg shadow-gold-500/5">
              <Sparkles size={13} className="text-gold-400 shrink-0" />
              <span>{t.heroPill}</span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
              {t.heroTitleLine1}{' '}
              <span className="italic font-light text-gold-200">{t.heroTitleHighlight}</span>
              <span className="block gold-gradient-text mt-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                {t.heroTitleLine2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {t.heroSubtitle}
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
                <span>{t.heroBookBtn}</span>
              </a>

              <button
                type="button"
                onClick={onCalculatorClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-noir-850 hover:bg-noir-800 text-slate-200 hover:text-gold-300 border border-gold-400/30 text-xs font-cinzel font-semibold uppercase tracking-[0.15em] transition-all active:scale-95"
              >
                <Calculator size={15} className="text-gold-400" />
                <span>{t.heroCalcBtn}</span>
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-4 text-xs font-cinzel text-slate-400 hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>{t.heroExploreBtn}</span>
                <ArrowRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
              </button>
            </div>

            {/* Luxury Stats Bar */}
            <div className="pt-5 sm:pt-6 grid grid-cols-3 gap-3 sm:gap-6 border-t border-gold-400/20 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-300">
                  {t.heroStat1Val}
                </div>
                <div className="text-[10px] sm:text-[11px] font-cinzel text-slate-400 uppercase tracking-widest mt-0.5 sm:mt-1">
                  {t.heroStat1Lbl}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-300">
                  {t.heroStat2Val}
                </div>
                <div className="text-[10px] sm:text-[11px] font-cinzel text-slate-400 uppercase tracking-widest mt-0.5 sm:mt-1">
                  {t.heroStat2Lbl}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-300">
                  {t.heroStat3Val}
                </div>
                <div className="text-[10px] sm:text-[11px] font-cinzel text-slate-400 uppercase tracking-widest mt-0.5 sm:mt-1">
                  {t.heroStat3Lbl}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Haute Couture Photo Presentation (5 cols) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
              
              {/* Outer Golden Glow Halo */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-gold-500/30 via-amber-500/10 to-gold-300/30 blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Decorative Corner Filigree Brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold-400/80 rounded-tl-xl pointer-events-none z-20"></div>
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold-400/80 rounded-tr-xl pointer-events-none z-20"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold-400/80 rounded-bl-xl pointer-events-none z-20"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold-400/80 rounded-br-xl pointer-events-none z-20"></div>

              {/* Card Container with Double Metallic Gold Border */}
              <div className="relative rounded-3xl overflow-hidden p-2 sm:p-2.5 bg-gradient-to-b from-[#2a241b] via-noir-900 to-black border-2 border-gold-400/50 shadow-2xl">
                
                {/* Photo Display */}
                <div className="relative aspect-[2/3] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-black group">
                  <img
                    src="/images/hero-model.jpg"
                    alt="Авторский образ Hutzahav Atelier — Галина Хвостенко"
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-black/30 opacity-75 group-hover:opacity-50 transition-opacity"></div>

                  {/* Top Haute Couture Ribbon */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-cinzel text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/80 text-gold-300 backdrop-blur-md border border-gold-400/40 shadow-lg flex items-center gap-1.5">
                      <Crown size={12} className="text-gold-400" />
                      <span>{t.heroBadgeCollection}</span>
                    </span>
                  </div>

                  {/* Floating Top-Right Seal */}
                  <div className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-black/85 backdrop-blur-md border border-gold-400/40 flex items-center justify-center shadow-xl">
                    <Logo size={28} showText={false} />
                  </div>

                  {/* Bottom Vignette Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-left space-y-1.5 z-10">
                    <span className="font-cinzel text-[10px] text-gold-400 uppercase tracking-[0.2em] font-bold block">
                      Haute Couture • Ashdod
                    </span>
                    <h2 className="font-cormorant text-2xl sm:text-3xl font-bold text-white leading-snug">
                      {t.heroPhotoTitle}
                    </h2>
                    <p className="text-xs text-slate-300 font-light line-clamp-2">
                      {t.heroPhotoSubtitle}
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Luxury Glassmorphism Badge 1 (Bottom Left) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 z-20 hidden sm:flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-noir-900/90 border border-gold-400/40 backdrop-blur-xl shadow-2xl shadow-gold-500/10 animate-in fade-in slide-in-from-left duration-700">
                <div className="w-9 h-9 rounded-xl gold-gradient-bg text-black flex items-center justify-center shrink-0 shadow-md">
                  <Award size={18} />
                </div>
                <div className="text-left">
                  <div className="font-cinzel text-[11px] font-bold text-white uppercase tracking-wider">
                    {t.heroFloatingFit}
                  </div>
                  <div className="text-[10px] text-gold-400/90 font-light">
                    {STUDIO_INFO.addressRu}
                  </div>
                </div>
              </div>

              {/* Floating Luxury Glassmorphism Badge 2 (Top Right) */}
              <div className="absolute -top-4 -right-3 sm:-right-5 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-noir-900/90 border border-gold-400/40 backdrop-blur-xl shadow-xl text-gold-300 text-[10px] font-cinzel font-semibold tracking-wider">
                <Sparkles size={13} className="text-gold-400" />
                <span>{t.heroFloatingSilk}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
