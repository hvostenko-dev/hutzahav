import React, { useState } from 'react';
import { X, Sparkles, Droplets, Wind, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FabricGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FabricGuideModal: React.FC<FabricGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const fabrics = [
    {
      title: 'Нуно-войлок (Nuno-felting)',
      subtitle: 'Шелк + Тончайшая мериносовая шерсть 18 микрон',
      desc: 'Уникальная авторская техника, где тончайшие волокна шерсти австралийского мериноса приваливаются к натуральному шёлку вручную с использованием мыльного раствора и тепла рук. Получается пластичное, «дышащее» и невесомое полотно, которое согревает зимой и дарит прохладу весной.',
      care: 'Бережная ручная стирка в воде до 30°C специальным средством для шерсти и шелка. Не выкручивать, отжать в махровом полотенце, сушить горизонтально.',
    },
    {
      title: '100% Натуральный Лён (Linen)',
      subtitle: 'Итальянский и прибалтийский умягченный лён stonewash',
      desc: 'Премиальный лён, прошедший предварительное энзимное умягчение. Он не колется, обладает великолепной текстурой, гипоаллергенен и становится только мягче и красивее с каждой стиркой. Мы комбинируем его с авторской росписью и вышивкой.',
      care: 'Машинная деликатная стирка при 30–40°C. Гладить слегка влажным с изнаночной стороны на среднем или высоком температурном режиме.',
    },
    {
      title: 'Натуральный Шёлк и Батик',
      subtitle: 'Крепдешин, атлас, газ-шифон и ручная роспись',
      desc: 'Благородный натуральный шелк с авторской ручной росписью специальными парозакрепляемыми красками. Каждый узор уникален и существует в единственном экземпляре на планете.',
      care: 'Исключительно деликатная ручная стирка в прохладной воде (20-30°C) с мягким шампунем или жидким гелем. Гладить с изнанки в режиме «Шёлк» без пара.',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-noir-900 border border-gold-400/30 rounded-3xl shadow-2xl overflow-y-auto p-4 sm:p-6 sm:p-8 space-y-5 sm:space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full bg-noir-850 text-slate-400 hover:text-white border border-white/10 transition-colors z-10"
          aria-label="Закрыть руководство по тканям"
        >
          <X size={18} />
        </button>

        <div className="space-y-2 pr-8 sm:pr-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 text-gold-300 font-cinzel text-[11px] sm:text-xs uppercase tracking-widest border border-gold-400/20">
            <Sparkles size={13} className="text-gold-400" />
            <span>Материалы & Ручная Работа Hutzahav</span>
          </div>
          <h2 className="font-cormorant text-2xl sm:text-4xl font-bold text-white leading-snug break-words">
            Ткани, Техника и Бережный Уход
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-light">
            Каждое изделие Галины Хвостенко создается вручную только из 100% экологичных и натуральных волокон высшего качества.
          </p>
        </div>

        <div className="space-y-4">
          {fabrics.map((f, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-noir-850 border border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-cormorant text-2xl font-bold text-gold-300">
                  {f.title}
                </h3>
                <span className="font-cinzel text-[10px] text-slate-400 uppercase tracking-wider">
                  {f.subtitle}
                </span>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {f.desc}
              </p>

              <div className="p-3 rounded-xl bg-noir-900 border border-gold-400/20 flex items-start gap-2.5 text-xs text-slate-400">
                <Droplets size={16} className="text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-cinzel uppercase text-[10px] tracking-wider block mb-0.5">
                    Рекомендации по уходу:
                  </strong>
                  {f.care}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center gap-3 text-xs text-gold-300">
          <HeartHandshake size={20} className="shrink-0" />
          <span>
            При покупке каждого изделия в нашем ателье в Ашдоде мастер лично рассказывает все тонкости ухода и дарит фирменную памятку по сохранению шедевра на долгие годы.
          </span>
        </div>
      </div>
    </div>
  );
};
