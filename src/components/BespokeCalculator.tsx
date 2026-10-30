import React, { useState, useMemo } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Calculator, Sparkles, Check, ArrowRight, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  baseDays: string;
}

interface FabricOption {
  id: string;
  name: string;
  multiplier: number;
}

interface ExtraOption {
  id: string;
  name: string;
  addPrice: number;
}

export const BespokeCalculator: React.FC = () => {
  const services: ServiceOption[] = [
    { id: 'evening', name: 'Пошив вечернего / праздничного платья', basePrice: 800, baseDays: '10–14 дней' },
    { id: 'painted', name: 'Платье из льна/шелка с авторской росписью', basePrice: 1350, baseDays: '12–16 дней' },
    { id: 'denim_felting', name: 'Арт-жакет / пальто с нуно-войлоком', basePrice: 1200, baseDays: '10–14 дней' },
    { id: 'alteration', name: 'Сложная подгонка по фигуре / ремонт', basePrice: 120, baseDays: '3–5 дней' },
    { id: 'curtains', name: 'Пошив штор и домашнего текстиля', basePrice: 200, baseDays: '5–7 дней' },
    { id: 'kids', name: 'Пошив детской нарядной одежды', basePrice: 300, baseDays: '7–10 дней' },
  ];

  const fabrics: FabricOption[] = [
    { id: 'silk', name: 'Натуральный шелк / шифон (Италия)', multiplier: 1.35 },
    { id: 'linen', name: 'Премиальный умягченный лен 100%', multiplier: 1.2 },
    { id: 'wool', name: 'Тонкорунная шерсть мериноса', multiplier: 1.25 },
    { id: 'lace', name: 'Французское кружево / бархат', multiplier: 1.4 },
    { id: 'own', name: 'Ткань клиента (работа ателье)', multiplier: 1.0 },
  ];

  const extraCrafts: ExtraOption[] = [
    { id: 'hand_painting', name: 'Авторская ручная роспись стойкими красками', addPrice: 350 },
    { id: 'felting', name: 'Нуно-войлок (авторское валяние шерсти)', addPrice: 400 },
    { id: 'corset', name: 'Корсетный каркас с моделированием талии', addPrice: 300 },
    { id: 'embroidery', name: 'Ручная вышивка и декор', addPrice: 250 },
  ];

  const [selectedService, setSelectedService] = useState<string>('evening');
  const [selectedFabric, setSelectedFabric] = useState<string>('silk');
  const [selectedExtras, setSelectedExtras] = useState<string[]>(['corset']);
  const [isExpress, setIsExpress] = useState<boolean>(false);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentService = services.find((s) => s.id === selectedService) || services[0];
  const currentFabric = fabrics.find((f) => f.id === selectedFabric) || fabrics[0];

  const calculation = useMemo(() => {
    let total = currentService.basePrice * currentFabric.multiplier;
    selectedExtras.forEach((extraId) => {
      const extra = extraCrafts.find((e) => e.id === extraId);
      if (extra) total += extra.addPrice;
    });

    if (isExpress) {
      total *= 1.25; // 25% for express turnaround
    }

    const roundedMin = Math.round(total / 50) * 50;
    const roundedMax = Math.round((total * 1.2) / 50) * 50;

    return {
      min: roundedMin,
      max: roundedMax,
      days: isExpress ? '3–5 дней (Экспресс)' : currentService.baseDays,
    };
  }, [currentService, currentFabric, selectedExtras, isExpress]);

  const selectedExtrasNames = selectedExtras
    .map((id) => extraCrafts.find((e) => e.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = encodeURIComponent(
    `Здравствуйте, Галина! Я воспользовался калькулятором на сайте ателье Hutzahav:\n\n` +
      `• Услуга: ${currentService.name}\n` +
      `• Материал: ${currentFabric.name}\n` +
      `• Доп. опции: ${selectedExtrasNames || 'без доп. опций'}\n` +
      `• Срочность: ${isExpress ? 'Срочный заказ (3-5 дней)' : 'Стандарт'}\n` +
      `• Расчетная стоимость: ~${calculation.min} - ${calculation.max} ₪\n\n` +
      `Хочу записаться на примерку и обсудить детали.`
  );

  return (
    <section id="calculator" className="py-24 relative bg-noir-900 border-t border-gold-400/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-800 border border-gold-400/30 text-gold-300 text-xs tracking-[0.2em] font-cinzel uppercase">
            <Calculator size={13} className="text-gold-400" />
            <span>Интерактивный расчет пошива</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Калькулятор стоимости & Примерки
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            Выберите желаемую услугу, тип ткани и авторские техники, чтобы узнать предварительную стоимость и забронировать время примерки в ателье.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-3xl luxury-card bg-noir-850">
            
            {/* Step 1: Service */}
            <div>
              <label className="block font-cinzel text-xs font-semibold text-gold-300 tracking-[0.15em] uppercase mb-3">
                1. Выберите изделие или услугу:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => setSelectedService(srv.id)}
                    className={`text-left p-3.5 rounded-xl border text-xs transition-all duration-200 flex flex-col justify-between ${
                      selectedService === srv.id
                        ? 'border-gold-400 bg-gold-400/10 text-white shadow-md'
                        : 'border-white/10 bg-noir-800 text-slate-300 hover:border-gold-400/40 hover:bg-noir-700'
                    }`}
                  >
                    <span className="font-medium text-sm leading-snug">{srv.name}</span>
                    <span className="text-[11px] text-gold-400 mt-2 font-mono">от {srv.basePrice} ₪</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fabric */}
            <div>
              <label className="block font-cinzel text-xs font-semibold text-gold-300 tracking-[0.15em] uppercase mb-3">
                2. Ткань и материалы:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {fabrics.map((fb) => (
                  <button
                    key={fb.id}
                    onClick={() => setSelectedFabric(fb.id)}
                    className={`text-left p-3 rounded-xl border text-xs transition-all ${
                      selectedFabric === fb.id
                        ? 'border-gold-400 bg-gold-400/10 text-white'
                        : 'border-white/10 bg-noir-800 text-slate-300 hover:border-gold-400/40'
                    }`}
                  >
                    {fb.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Craft techniques */}
            <div>
              <label className="block font-cinzel text-xs font-semibold text-gold-300 tracking-[0.15em] uppercase mb-3">
                3. Дополнительные кутюрные техники:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {extraCrafts.map((ex) => {
                  const isChecked = selectedExtras.includes(ex.id);
                  return (
                    <button
                      key={ex.id}
                      onClick={() => toggleExtra(ex.id)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-gold-400 bg-gold-400/10 text-white'
                          : 'border-white/10 bg-noir-800 text-slate-400 hover:border-gold-400/30'
                      }`}
                    >
                      <span>{ex.name}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ml-2 border ${
                          isChecked ? 'bg-gold-500 border-gold-500 text-black' : 'border-white/20'
                        }`}
                      >
                        {isChecked && <Check size={12} strokeWidth={3} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Urgency toggle */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-white">Срочный пошив (Экспресс)</div>
                <div className="text-xs text-slate-400">Готовность от 3 до 5 рабочих дней (+25%)</div>
              </div>
              <button
                onClick={() => setIsExpress(!isExpress)}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  isExpress ? 'bg-gold-500' : 'bg-noir-700 border border-white/20'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    isExpress ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 rounded-3xl luxury-card bg-gradient-to-b from-noir-800 to-noir-850 border border-gold-400/30 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-cinzel text-xs uppercase tracking-widest text-gold-300">
                  Предварительный расчет
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock size={13} className="text-gold-400" />
                  {calculation.days}
                </span>
              </div>

              {/* Price Display */}
              <div className="space-y-1">
                <div className="text-xs uppercase text-slate-400 tracking-wider">
                  Ориентировочная стоимость:
                </div>
                <div className="font-cormorant text-4xl sm:text-5xl font-bold text-gold-gradient leading-none">
                  {calculation.min} – {calculation.max} ₪
                </div>
                <div className="text-[11px] text-slate-400 pt-1">
                  * Точная стоимость утверждается на примерке после утверждения лекал и расхода ткани
                </div>
              </div>

              {/* Summary List */}
              <div className="p-4 rounded-xl bg-noir-900/80 border border-white/5 space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Услуга:</span>
                  <span className="font-medium text-right text-white max-w-[65%]">{currentService.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Ткань:</span>
                  <span className="font-medium text-right text-white">{currentFabric.name}</span>
                </div>
                {selectedExtras.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Техники:</span>
                    <span className="font-medium text-right text-gold-300 max-w-[65%]">
                      {selectedExtrasNames}
                    </span>
                  </div>
                )}
                <div className="flex justify-between pt-1 border-t border-white/5">
                  <span className="text-slate-400">Сроки:</span>
                  <span className="font-medium text-right text-white">{calculation.days}</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-2 pt-1 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-gold-400" />
                  <span>Гарантия идеальной посадки по вашей фигуре</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={15} className="text-gold-400" />
                  <span>Снятие 25 индивидуальных мерок на примерке</span>
                </div>
              </div>

              {/* Direct Booking in WhatsApp */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.15em] shadow-xl hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle size={17} />
                  <span>Записаться на примерку с расчетом</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
