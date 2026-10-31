import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Ruler, Sparkles, CheckCircle2, Scissors, HelpCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useCart();

  if (!isSizeGuideOpen) return null;

  const sizeTable = [
    { size: 'XS', eu: '34-36', us: '2-4', bust: '82-86 см', waist: '62-66 см', hips: '88-92 см' },
    { size: 'S', eu: '36-38', us: '4-6', bust: '86-90 см', waist: '66-70 см', hips: '92-96 см' },
    { size: 'M', eu: '38-40', us: '6-8', bust: '90-94 см', waist: '70-74 см', hips: '96-100 см' },
    { size: 'L', eu: '40-42', us: '8-10', bust: '94-98 см', waist: '74-78 см', hips: '100-104 см' },
    { size: 'XL', eu: '42-44', us: '10-12', bust: '98-104 см', waist: '78-84 см', hips: '104-110 см' },
    { size: 'XXL+', eu: '46+', us: '14+', bust: '104+ см', waist: '84+ см', hips: '110+ см' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setIsSizeGuideOpen(false)}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-noir-900 border border-gold-400/30 rounded-3xl shadow-2xl overflow-y-auto p-4 sm:p-6 sm:p-8 space-y-5 sm:space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSizeGuideOpen(false)}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full bg-noir-800 text-slate-400 hover:text-white border border-white/10 transition-colors z-10"
          aria-label="Закрыть таблицу размеров"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8 sm:pr-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 text-gold-300 font-cinzel text-[11px] sm:text-xs uppercase tracking-widest border border-gold-400/20">
            <Ruler size={13} className="text-gold-400" />
            <span>Гид по размерам & Посадка Hutzahav</span>
          </div>
          <h2 className="font-cormorant text-2xl sm:text-4xl font-bold text-white leading-snug break-words">
            Таблица Размеров и Снятие Мерок
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-light">
            Большинство наших изделий создаются в технике нуно-войлока и струящегося шелка, имея комфортную пластичную посадку. Мы также шьем любые модели строго по вашим персональным меркам.
          </p>
        </div>

        {/* Size Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-noir-950 -mx-1 sm:mx-0">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gold-400/20 bg-noir-850 font-cinzel text-gold-300 uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Размер</th>
                <th className="py-3.5 px-4">EU / ISR</th>
                <th className="py-3.5 px-4">US</th>
                <th className="py-3.5 px-4">Обхват груди</th>
                <th className="py-3.5 px-4">Обхват талии</th>
                <th className="py-3.5 px-4">Обхват бёдер</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300 font-light">
              {sizeTable.map((row) => (
                <tr key={row.size} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-4 font-bold font-cinzel text-gold-400">{row.size}</td>
                  <td className="py-3 px-4">{row.eu}</td>
                  <td className="py-3 px-4">{row.us}</td>
                  <td className="py-3 px-4">{row.bust}</td>
                  <td className="py-3 px-4">{row.waist}</td>
                  <td className="py-3 px-4">{row.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to measure */}
        <div className="space-y-4 pt-2">
          <h3 className="font-cinzel text-sm uppercase tracking-wider text-white flex items-center gap-2">
            <Sparkles size={14} className="text-gold-400" />
            <span>Как правильно измерить свои параметры:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-noir-850 border border-white/5 space-y-2">
              <div className="font-bold text-xs uppercase tracking-wider text-gold-300 font-cinzel">
                1. Обхват груди (ОГ)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Измеряется сантиметровой лентой горизонтально вокруг туловища по наиболее выступающим точкам бюста.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-noir-850 border border-white/5 space-y-2">
              <div className="font-bold text-xs uppercase tracking-wider text-gold-300 font-cinzel">
                2. Обхват талии (ОТ)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Сантиметровая лента проходит строго горизонтально по самой узкой части талии при свободном дыхании.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-noir-850 border border-white/5 space-y-2">
              <div className="font-bold text-xs uppercase tracking-wider text-gold-300 font-cinzel">
                3. Обхват бёдер (ОБ)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Измеряется по наиболее выступающим точкам ягодиц, ноги вместе.
              </p>
            </div>
          </div>
        </div>

        {/* Bespoke Fitting Note in Ashdod */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-transparent border border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-cinzel text-sm font-bold text-gold-300 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2">
              <Scissors size={15} />
              <span>Сомневаетесь в размере? Индивидуальный пошив!</span>
            </div>
            <p className="text-xs text-slate-400 font-light max-w-xl">
              Галина снимет ваши точные мерки в ателье (Ашдод, ул. Шавей Цион 2) или подскажет по видеосвязи, гарантируя безупречную посадку.
            </p>
          </div>

          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105"
          >
            Консультация в WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
};
