import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Sparkles, Heart, Award, Scissors, Feather, Palette } from 'lucide-react';

export const AtelierAtmosphere: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-noir-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Atelier Collages */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Main Master Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden luxury-card border border-gold-400/30 p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img
                    src="/images/portfolio/atelier/8f183f_7a9306154f4b4e77a28481bdc58d81c4.jpg"
                    alt="Галина Хвостенко в студии Hutzahav"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-85"></div>
                  
                  {/* Floating Quote in Card */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-gold-400/30">
                    <p className="font-cormorant italic text-sm text-gold-200 leading-relaxed">
                      «Одежда должна не просто сидеть идеально — она должна вдохновлять и передавать уникальный характер своей обладательницы.»
                    </p>
                    <div className="font-cinzel text-[10px] text-slate-400 mt-2 tracking-widest uppercase">
                      — Галина Хвостенко, кутюрье & основатель
                    </div>
                  </div>
                </div>
              </div>

              {/* Small supporting preview cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-gold-400/20 aspect-[4/3] bg-black">
                  <img
                    src="/images/portfolio/exclusive_clothing/8f183f_dde2c9ed2a784fbea1ef5c407111b464.jpg"
                    alt="Арт-жакет ручной работы"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-gold-400/20 aspect-[4/3] bg-black">
                  <img
                    src="/images/portfolio/exclusive_clothing/8f183f_f0890a6485f349469fdb956bef48b976.jpg"
                    alt="Роспись по шелку"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Master Biography & Studio Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-800 border border-gold-400/30 text-gold-300 text-xs tracking-[0.2em] font-cinzel uppercase">
                <Scissors size={13} className="text-gold-400" />
                <span>Основательница Ателье</span>
              </div>

              <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Галина Хвостенко
                <span className="block gold-gradient-text text-2xl sm:text-3xl lg:text-4xl mt-1 font-normal font-cinzel">
                  HUTZAHAV ATELIER • חוט זהב
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                {STUDIO_INFO.aboutStoryRu}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-noir-850/80 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <Palette className="text-gold-400" size={18} />
                  <h4 className="font-cormorant text-lg font-bold text-white">Живопись по ткани</h4>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Ручная роспись специальными стойкими пигментами — каждая вещь существует в единственном экземпляре.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-noir-850/80 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <Feather className="text-gold-400" size={18} />
                  <h4 className="font-cormorant text-lg font-bold text-white">Натуральные материалы</h4>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Благородный лен, итальянский шелк, шифон, шерсть австралийского мериноса и французское кружево.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-noir-850/80 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <Award className="text-gold-400" size={18} />
                  <h4 className="font-cormorant text-lg font-bold text-white">15+ лет практики</h4>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Глубокие знания анатомического кроя, моделирования корсетов и посадки на нестандартные фигуры.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-noir-850/80 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <Heart className="text-gold-400" size={18} />
                  <h4 className="font-cormorant text-lg font-bold text-white">Душевное отношение</h4>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Клиенты становятся нашими друзьями и доверяют нам свои самые важные торжества на протяжении многих лет.
                </p>
              </div>
            </div>

            {/* Direct Booking Callout */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-cormorant text-xl font-bold text-white">
                  Приглашаем в студию на чашку кофе
                </div>
                <div className="text-xs text-slate-400">
                  Обсудим эскиз, потрогаем ткани и снимем мерки
                </div>
              </div>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-noir-800 hover:bg-gold-500 hover:text-black text-gold-300 border border-gold-400/40 font-cinzel text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Личная встреча с Галиной
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
