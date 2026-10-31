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
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-noir-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[650px] h-[300px] sm:h-[550px] bg-gold-600/10 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-amber-700/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>

      {/* Subtle background golden radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(213,180,109,0.14),rgba(0,0,0,0))] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Haute Couture Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left order-2 lg:order-1 max-w-full">
            
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-noir-850/90 border border-gold-400/40 text-gold-300 text-[10px] sm:text-xs font-cinzel tracking-[0.16em] sm:tracking-[0.2em] uppercase backdrop-blur-md shadow-lg max-w-full truncate">
              <Sparkles size={12} className="text-gold-400 shrink-0" />
              <span className="truncate">{t.heroPill}</span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-cormorant text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.12] text-white break-words">
              {t.heroTitleLine1}{' '}
              <span className="italic font-light text-gold-200">{t.heroTitleHighlight}</span>
              <span className="block gold-gradient-text mt-1 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                {t.heroTitleLine2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-gold-500/25 active:scale-95 whitespace-nowrap"
              >
                <Scissors size={14} className="shrink-0" />
                <span>{t.heroBookBtn}</span>
              </a>

              <button
                type="button"
                onClick={onCalculatorClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-full bg-noir-850 hover:bg-noir-800 text-slate-200 hover:text-gold-300 border border-gold-400/30 text-xs font-cinzel font-semibold uppercase tracking-[0.14em] transition-all active:scale-95 whitespace-nowrap"
              >
                <Calculator size={14} className="text-gold-400 shrink-0" />
                <span>{t.heroCalcBtn}</span>
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-1 px-4 py-2.5 sm:py-4 text-xs font-cinzel text-slate-400 hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>{t.heroExploreBtn}</span>
                <ArrowRight size={13} className={dir === 'rtl' ? 'rotate-180' : ''} />
              </button>
            </div>

            {/* Luxury Stats Bar */}
            <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-2 sm:gap-6 border-t border-gold-400/20 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-300">
                  {t.heroStat1Val}
                </div>
                <div className="text-[9px] sm:text-[11px] font-cinzel text-slate-400 uppercase tracking-wider mt-0.5 sm:mt-1 leading-tight">
                  {t.heroStat1Lbl}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-300">
                  {t.heroStat2Val}
                </div>
                <div className="text-[9px] sm:text-[11px] font-cinzel text-slate-400 uppercase tracking-wider mt-0.5 sm:mt-1 leading-tight">
                  {t.heroStat2Lbl}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-300">
                  {t.heroStat3Val}
                </div>
                <div className="text-[9px] sm:text-[11px] font-cinzel text-slate-400 uppercase tracking-wider mt-0.5 sm:mt-1 leading-tight">
                  {t.heroStat3Lbl}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Photo Presentation (5 cols) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 max-w-full overflow-visible">
            <div className="relative mx-auto max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-none">
              
              {/* Outer Golden Glow Halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gold-500/25 via-amber-500/10 to-gold-300/25 blur-xl pointer-events-none"></div>

              {/* Card Container with Double Metallic Gold Border */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-1.5 sm:p-2.5 bg-gradient-to-b from-[#2a241b] via-noir-900 to-black border-2 border-gold-400/50 shadow-2xl">
                
                {/* Photo Display */}
                <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-black group">
                  <img
                    src="/images/hero-model.jpg"
                    alt="Авторский образ Hutzahav Atelier — Галина Хвостенко"
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-black/30 opacity-75 group-hover:opacity-50 transition-opacity"></div>

                  {/* Top Haute Couture Ribbon */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-cinzel text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/80 text-gold-300 backdrop-blur-md border border-gold-400/40 shadow-lg flex items-center gap-1.5">
                      <Crown size={11} className="text-gold-400 shrink-0" />
                      <span className="truncate max-w-[170px] sm:max-w-none">{t.heroBadgeCollection}</span>
                    </span>
                  </div>

                  {/* Floating Top-Right Seal */}
                  <div className="absolute top-3 right-3 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/85 backdrop-blur-md border border-gold-400/40 flex items-center justify-center shadow-xl">
                    <Logo size={24} showText={false} />
                  </div>

                  {/* Bottom Vignette Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-left space-y-1 z-10">
                    <span className="font-cinzel text-[9px] sm:text-[10px] text-gold-400 uppercase tracking-[0.2em] font-bold block">
                      Haute Couture • Ashdod
                    </span>
                    <h2 className="font-cormorant text-xl sm:text-3xl font-bold text-white leading-snug">
                      {t.heroPhotoTitle}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-light line-clamp-2">
                      {t.heroPhotoSubtitle}
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Luxury Glassmorphism Badge 1 (Bottom Left - Hidden on smallest screens to prevent overflow) */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 z-20 hidden md:flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-noir-900/95 border border-gold-400/40 backdrop-blur-xl shadow-2xl shadow-gold-500/10">
                <div className="w-8 h-8 rounded-xl gold-gradient-bg text-black flex items-center justify-center shrink-0 shadow-md">
                  <Award size={16} />
                </div>
                <div className="text-left">
                  <div className="font-cinzel text-[10px] font-bold text-white uppercase tracking-wider">
                    {t.heroFloatingFit}
                  </div>
                  <div className="text-[9px] text-gold-400/90 font-light">
                    {STUDIO_INFO.addressRu}
                  </div>
                </div>
              </div>

              {/* Floating Luxury Glassmorphism Badge 2 (Top Right - Hidden on small screens) */}
              <div className="absolute -top-3 -right-2 sm:-right-4 z-20 hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-noir-900/95 border border-gold-400/40 backdrop-blur-xl shadow-xl text-gold-300 text-[9px] font-cinzel font-semibold tracking-wider">
                <Sparkles size={11} className="text-gold-400" />
                <span>{t.heroFloatingSilk}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
