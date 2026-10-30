import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Елена В.',
      city: 'Тель-Авив',
      order: 'Вечернее платье на свадьбу дочери',
      text: 'Галина сотворила настоящее чудо! Платье село с первой же примерки, как влитое, подчеркнув талию и скрыв все, что нужно было скрыть. На торжестве все гости спрашивали, из какого миланского бутика этот наряд!',
      rating: 5,
    },
    {
      name: 'Михаэль и Сара К.',
      city: 'Хайфа',
      order: 'Шторы и текстиль для дома',
      text: 'Заказывали шторы нестандартной высоты для гостиной и льняное постельное белье. Качество строчек безупречное, ткани натуральные, приятные на ощупь. В квартире сразу стало невероятно уютно и стильно.',
      rating: 5,
    },
    {
      name: 'Ольга Р.',
      city: 'Нетания',
      order: 'Льняное платье с ручной росписью & Нуно-палантин',
      text: 'Ношу это платье уже второе лето. Роспись абсолютно не изменилась после многочисленных стирок! Невероятно легкое, дышащее и при этом привлекает взгляды буквально на каждом шагу. Спасибо огромное!',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative bg-noir-850 border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-800 border border-gold-400/30 text-gold-300 text-xs tracking-[0.2em] font-cinzel uppercase">
            <Star size={13} className="text-gold-400 fill-gold-400" />
            <span>Истории Заказчиков</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Что говорят о нас наши клиенты
          </h2>

          <p className="text-slate-400 text-sm font-light">
            Настоящее доверие и эмоции тех, кто выбрал индивидуальный пошив в студии Hutzahav
          </p>
        </div>

        {/* 3 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl luxury-card bg-noir-800/70 border border-gold-400/20 flex flex-col justify-between space-y-6 relative group hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Stars and Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-gold-400" />
                    ))}
                  </div>
                  <Quote size={20} className="text-gold-400/30" />
                </div>

                <p className="font-cormorant italic text-base sm:text-lg text-slate-200 leading-relaxed">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1">
                <div className="font-cormorant text-lg font-bold text-white">
                  {rev.name}
                </div>
                <div className="text-[11px] text-gold-400 font-cinzel tracking-wider uppercase">
                  {rev.order} • {rev.city}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
