import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowRight, Scissors, Crown, Award, MapPin } from 'lucide-react';
import { Logo } from './Logo';

interface HeroAtelierProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const HeroAtelier: React.FC<HeroAtelierProps> = ({
  onExploreClick,
}) => {
  const { lang, t, dir } = useLanguage();

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-12 pb-14 sm:pt-20 sm:pb-20 overflow-hidden bg-noir-950">
      {/* Subtle ambient golden glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[500px] bg-gold-600/8 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(213,180,109,0.12),rgba(0,0,0,0))] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Haute Couture Editorial Copy */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-5 sm:space-y-7 text-center lg:text-start order-2 lg:order-1 max-w-full">
            
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-900/90 border border-gold-400/35 text-gold-300 text-[10px] sm:text-xs font-cinzel tracking-[0.18em] uppercase backdrop-blur-md">
              <Sparkles size={12} className="text-gold-400 shrink-0" />
              <span className="truncate">{t.heroPill}</span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              {t.heroTitleLine1}{' '}
              <span className="italic font-light text-gold-200">{t.heroTitleHighlight}</span>
              <span className="block gold-gradient-text mt-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {t.heroTitleLine2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Minimalist 2-CTA Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.16em] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-gold-500/20 active:scale-95 whitespace-nowrap"
              >
                <Scissors size={14} className="shrink-0" />
                <span>{t.heroBookBtn}</span>
              </a>

              <button
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-noir-900 hover:bg-noir-850 text-slate-200 hover:text-gold-300 border border-gold-400/25 hover:border-gold-400/50 text-xs font-cinzel font-semibold uppercase tracking-[0.15em] transition-all active:scale-95 whitespace-nowrap"
              >
                <span>{t.heroExploreBtn}</span>
                <ArrowRight size={13} className={dir === 'rtl' ? 'rotate-180' : ''} />
              </button>
            </div>

            {/* Minimalist Luxury Stats Bar */}
            <div className="pt-5 sm:pt-7 grid grid-cols-3 gap-3 sm:gap-6 border-t border-gold-400/15 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-start">
                <div className="font-cormorant text-2xl sm:text-3xl font-bold text-gold-300">
                  {t.heroStat1Val}
                </div>
                <div className="text-[9px] sm:text-[10px] font-cinzel text-slate-400 uppercase tracking-wider mt-0.5 leading-tight">
                  {t.heroStat1Lbl}
                </div>
              </div>
              <div className="text-center lg:text-start">
                <div className="font-cormorant text-2xl sm:text-3xl font-bold text-gold-300">
                  {t.heroStat2Val}
                </div>
                <div className="text-[9px] sm:text-[10px] font-cinzel text-slate-400 uppercase tracking-wider mt-0.5 leading-tight">
                  {t.heroStat2Lbl}
                </div>
              </div>
              <div className="text-center lg:text-start">
                <div className="font-cormorant text-2xl sm:text-3xl font-bold text-gold-300">
                  {t.heroStat3Val}
                </div>
                <div className="text-[9px] sm:text-[10px] font-cinzel text-slate-400 uppercase tracking-wider mt-0.5 leading-tight">
                  {t.heroStat3Lbl}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Photo Presentation */}
          <div className="lg:col-span-5 xl:col-span-6 relative order-1 lg:order-2 max-w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[310px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[460px] xl:max-w-[500px]">
              
              {/* Outer Golden Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-gold-500/20 via-amber-500/5 to-gold-300/20 blur-2xl pointer-events-none"></div>

              {/* Card Container with Refined Metallic Gold Border */}
              <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-[#231e16] via-noir-900 to-black border border-gold-400/40 shadow-2xl space-y-2">
                
                {/* Photo Display Frame */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-black group">
                  <img
                    src="/images/hero-model.jpg"
                    alt="Авторский образ Hutzahav Atelier — Галина Хвостенко"
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-black/25 opacity-75"></div>

                  {/* Top Haute Couture Ribbon */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-cinzel text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/80 text-gold-300 backdrop-blur-md border border-gold-400/35 flex items-center gap-1.5">
                      <Crown size={11} className="text-gold-400 shrink-0" />
                      <span>{t.heroBadgeCollection}</span>
                    </span>
                  </div>

                  {/* Top-Right Seal */}
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/80 backdrop-blur-md border border-gold-400/35 flex items-center justify-center">
                    <Logo size={22} showText={false} />
                  </div>

                  {/* Bottom Vignette Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-start space-y-0.5 z-10 bg-gradient-to-t from-noir-950 via-noir-950/85 to-transparent">
                    <span className="font-cinzel text-[9px] text-gold-400 uppercase tracking-[0.2em] font-bold block">
                      Galina Khvostenko • Ashdod
                    </span>
                    <h2 className="font-cormorant text-xl sm:text-2xl font-bold text-white leading-snug">
                      {t.heroPhotoTitle}
                    </h2>
                    <p className="text-[11px] text-slate-300 font-light line-clamp-2">
                      {t.heroPhotoSubtitle}
                    </p>
                  </div>
                </div>

                {/* Integrated Minimalist Location & Craft Bar */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={STUDIO_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-xl bg-noir-900/90 hover:bg-gold-500/10 border border-gold-400/25 hover:border-gold-400/50 transition-all group/loc"
                  >
                    <div className="w-7 h-7 rounded-lg gold-gradient-bg text-black flex items-center justify-center shrink-0">
                      <MapPin size={13} />
                    </div>
                    <div className="text-start min-w-0">
                      <div className="font-cinzel text-[8px] uppercase tracking-wider text-slate-400 truncate">
                        {lang === 'he' ? 'אטלייה באשדוד' : lang === 'en' ? 'Ashdod Studio' : 'Ателье в Ашдоде'}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-semibold text-gold-300 group-hover/loc:text-white transition-colors truncate">
                        {lang === 'he' ? STUDIO_INFO.addressHe : 'Шавей Цион 2'}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-2 p-2 rounded-xl bg-noir-900/90 border border-white/10 text-slate-300">
                    <div className="w-7 h-7 rounded-lg bg-gold-400/15 border border-gold-400/30 text-gold-400 flex items-center justify-center shrink-0">
                      <Award size={14} />
                    </div>
                    <div className="text-start min-w-0">
                      <div className="font-cinzel text-[8px] uppercase tracking-wider text-slate-400 truncate">
                        {lang === 'he' ? 'איכות עילית' : lang === 'en' ? 'Bespoke Craft' : 'Натуральные ткани'}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-semibold text-slate-200 truncate">
                        {lang === 'he' ? 'משי, פשתן ומרינו' : lang === 'en' ? 'Silk, Linen & Wool' : 'Шёлк, Лён & Меринос'}
                      </div>
                    </div>
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
