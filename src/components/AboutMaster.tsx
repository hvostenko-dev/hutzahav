import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Sparkles, Heart, Award, CheckCircle2, Feather, Palette } from 'lucide-react';

interface AboutMasterProps {
  activeLang: 'ru' | 'en' | 'he';
}

export const AboutMaster: React.FC<AboutMasterProps> = ({ activeLang }) => {
  const principles = [
    {
      icon: <Palette className="text-gold-400" size={20} />,
      titleRu: 'Ручная роспись и нуно-войлок',
      descRu: 'Каждый рисунок наносится вручную специальными несмываемыми текстильными красками. Шерстяное валяние создает неповторимую тактильную текстуру.',
    },
    {
      icon: <Feather className="text-gold-400" size={20} />,
      titleRu: 'Только натуральные ткани',
      descRu: 'Благородный умягченный лен, натуральный струящийся шелк, шерсть австралийского мериноса и нежнейший хлопок, в которых легко дышится.',
    },
    {
      icon: <Award className="text-gold-400" size={20} />,
      titleRu: 'Идеальная посадка по фигуре',
      descRu: 'Каждая выкройка создается или адаптируется под индивидуальные особенности фигуры клиента, скрывая нюансы и подчеркивая достоинства.',
    },
    {
      icon: <Heart className="text-gold-400" size={20} />,
      titleRu: 'Вещи с душой и историей',
      descRu: 'Одежда и текстиль, которые дарят радость годами, передаются из поколения в поколение и вызывают восторженные взгляды окружающих.',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-atelier-card/50 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Atelier Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative border */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-gold-500/30 p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img
                    src="/images/portfolio/atelier/8f183f_7a9306154f4b4e77a28481bdc58d81c4.jpg"
                    alt="Галина Хвостенко в студии Hutzahav"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-atelier-dark via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating quote badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-gold-500/30">
                    <p className="font-serif italic text-xs sm:text-sm text-gold-200 leading-relaxed">
                      «Мы искренне любим свое дело и ценим наших клиентов. Вместе мы создаем стиль, подчеркивающий уникальность каждой личности.»
                    </p>
                    <div className="text-[11px] text-slate-400 mt-2 font-sans font-medium uppercase tracking-wider">
                      — Галина Хвостенко, дизайнер & основатель
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating experience badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-gold-gradient text-black p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Sparkles size={24} className="text-black" />
                <div>
                  <div className="font-serif text-2xl font-bold leading-none">15+</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider mt-0.5">
                    Лет мастерства
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Story & Master Credentials */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-atelier-surface border border-gold-500/30 text-gold-300 text-xs tracking-wider uppercase">
                <Sparkles size={13} />
                <span>О мастере и студии</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Галина Хвостенко
                <span className="block text-gold-gradient text-2xl sm:text-3xl lg:text-4xl mt-1 font-normal">
                  Студия «HUTZAHAV» (חוט זהב)
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                {STUDIO_INFO.aboutStoryRu}
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {principles.map((pr, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-atelier-surface/60 border border-white/5 hover:border-gold-500/30 transition-all space-y-1.5"
                >
                  <div className="flex items-center gap-2.5">
                    {pr.icon}
                    <h4 className="font-serif text-sm font-bold text-white">{pr.titleRu}</h4>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {pr.descRu}
                  </p>
                </div>
              ))}
            </div>

            {/* Signature / Quote footer */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
              <div className="space-y-0.5">
                <div className="text-sm font-serif font-bold text-white">
                  Галина Хвостенко
                </div>
                <div className="text-xs text-gold-400 tracking-wider uppercase">
                  Основатель и ведущий дизайнер Hutzahav
                </div>
              </div>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-atelier-surface hover:bg-gold-500 hover:text-black text-gold-300 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Обсудить заказ лично</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
