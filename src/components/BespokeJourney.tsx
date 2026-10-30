import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Sparkles, MessageCircle, Ruler, Scissors, Eye, CheckCircle2 } from 'lucide-react';

export const BespokeJourney: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Встреча, Эскиз & 25 мерок',
      desc: 'За чашкой кофе в студии мы обсуждаем повод, фасон, комфортный крой и ваши пожелания. Мастер снимает более 25 анатомических мерок для создания индивидуальных лекал.',
      icon: <Ruler size={24} className="text-gold-400" />,
    },
    {
      step: '02',
      title: 'Премиум ткани & Макет',
      desc: 'Подбираем натуральные ткани из Италии и Франции: шелк, лен, кашемир или меринос. Для сложных вечерних платьев создается черновой макет (toile) для первичной проверки силуэта.',
      icon: <Scissors size={24} className="text-gold-400" />,
    },
    {
      step: '03',
      title: 'Примерка & Ручная роспись',
      desc: 'На промежуточной примерке наряд садится строго по вашим линиям. Если изделие с росписью или нуно-войлоком, мастер вручную наносит рисунок специальными стойкими пигментами.',
      icon: <Eye size={24} className="text-gold-400" />,
    },
    {
      step: '04',
      title: 'Выдача вашего шедевра',
      desc: 'Финальная проверка качества, ручная отпаривание и упаковка в фирменный чехол. Вы получаете эксклюзивный наряд, созданный в единственном экземпляре специально для вас.',
      icon: <CheckCircle2 size={24} className="text-gold-400" />,
    },
  ];

  return (
    <section id="journey" className="py-24 relative bg-noir-850 border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-800 border border-gold-400/30 text-gold-300 text-xs tracking-[0.2em] font-cinzel uppercase">
            <Sparkles size={13} className="text-gold-400" />
            <span>Процесс Индивидуального Пошива</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Как рождается кутюрный наряд
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            Индивидуальный пошив — это не просто одежда, это вдохновляющее сотворчество и наслаждение каждым этапом.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl luxury-card bg-noir-800/80 border border-gold-400/20 flex flex-col justify-between space-y-6 group hover:border-gold-400/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-noir-900 border border-gold-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {st.icon}
                  </div>
                  <span className="font-cormorant text-4xl font-bold text-gold-400/40 group-hover:text-gold-400 transition-colors">
                    {st.step}
                  </span>
                </div>

                <h3 className="font-cormorant text-2xl font-bold text-white mt-6 group-hover:text-gold-200 transition-colors">
                  {st.title}
                </h3>

                <p className="text-xs text-slate-400 font-light leading-relaxed mt-2.5">
                  {st.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-cinzel text-gold-400 tracking-wider uppercase">
                Этап {idx + 1} из 4
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.15em] hover:scale-105 transition-transform shadow-2xl"
          >
            <MessageCircle size={16} />
            <span>Записаться на встречу с Галиной</span>
          </a>
        </div>

      </div>
    </section>
  );
};
