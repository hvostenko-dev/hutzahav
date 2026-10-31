import React, { useState, useMemo } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
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
  const { lang, t, dir } = useLanguage();

  const services: ServiceOption[] = [
    {
      id: 'evening',
      name: lang === 'he' ? 'שמלת ערב / כלה יוקרתית' : lang === 'en' ? 'Bespoke Evening / Gala Gown' : 'Пошив вечернего / праздничного платья',
      basePrice: 800,
      baseDays: lang === 'he' ? '10–14 ימים' : lang === 'en' ? '10–14 days' : '10–14 дней',
    },
    {
      id: 'painted',
      name: lang === 'he' ? 'שמלת פשתן/משי עם ציור ידני מקורי' : lang === 'en' ? 'Hand-Painted Silk/Linen Dress' : 'Платье из льна/шелка с авторской росписью',
      basePrice: 1350,
      baseDays: lang === 'he' ? '12–16 ימים' : lang === 'en' ? '12–16 days' : '12–16 дней',
    },
    {
      id: 'denim_felting',
      name: lang === 'he' ? 'ז׳קט אמנותי בטכניקת נונו-לבד (צמר ומשי)' : lang === 'en' ? 'Art Denim & Merino Nuno-Felting' : 'Арт-жакет / пальто с нуно-войлоком',
      basePrice: 1200,
      baseDays: lang === 'he' ? '10–14 ימים' : lang === 'en' ? '10–14 days' : '10–14 дней',
    },
    {
      id: 'alteration',
      name: lang === 'he' ? 'התאמת בגדי מותגים / תיקוני יוקרה' : lang === 'en' ? 'Haute Alterations / Fitting' : 'Сложная подгонка по фигуре / ремонт',
      basePrice: 120,
      baseDays: lang === 'he' ? '3–5 ימים' : lang === 'en' ? '3–5 days' : '3–5 дней',
    },
    {
      id: 'curtains',
      name: lang === 'he' ? 'וילונות וטקסטיל יוקרתי לבית' : lang === 'en' ? 'Bespoke Curtains & Home Textiles' : 'Пошив штор и домашнего текстиля',
      basePrice: 200,
      baseDays: lang === 'he' ? '5–7 ימים' : lang === 'en' ? '5–7 days' : '5–7 дней',
    },
    {
      id: 'kids',
      name: lang === 'he' ? 'תלבושות במה ושמלות ילדות' : lang === 'en' ? 'Stage Costumes & Kids Couture' : 'Пошив детской нарядной одежды',
      basePrice: 300,
      baseDays: lang === 'he' ? '7–10 ימים' : lang === 'en' ? '7–10 days' : '7–10 дней',
    },
  ];

  const fabrics: FabricOption[] = [
    {
      id: 'silk',
      name: lang === 'he' ? '100% משי טבעי / שיפון איטלקי' : lang === 'en' ? 'Pure Italian Silk / Chiffon' : 'Натуральный шелк / шифон (Италия)',
      multiplier: 1.35,
    },
    {
      id: 'linen',
      name: lang === 'he' ? 'פשתן איטלקי טהור מרוכך' : lang === 'en' ? '100% Pre-washed Pure Linen' : 'Премиальный умягченный лен 100%',
      multiplier: 1.2,
    },
    {
      id: 'wool',
      name: lang === 'he' ? 'צמר מרינו אוסטרלי 18 מיקרון' : lang === 'en' ? '18-Micron Merino Wool' : 'Тонкорунная шерсть мериноса',
      multiplier: 1.25,
    },
    {
      id: 'lace',
      name: lang === 'he' ? 'תחרה צרפתית / קטיפה מובחרת' : lang === 'en' ? 'French Lace / Velvet' : 'Французское кружево / бархат',
      multiplier: 1.4,
    },
    {
      id: 'own',
      name: lang === 'he' ? 'בד שמביאה הלקוחה (עבודה בלבד)' : lang === 'en' ? 'Customer Fabric (Labor only)' : 'Ткань клиента (работа ателье)',
      multiplier: 1.0,
    },
  ];

  const extraCrafts: ExtraOption[] = [
    {
      id: 'hand_painting',
      name: lang === 'he' ? 'ציור ידני אמנותי בצבעים עמידים' : lang === 'en' ? 'Hand-Painted Washable Art' : 'Авторская ручная роспись стойкими красками',
      addPrice: 350,
    },
    {
      id: 'felting',
      name: lang === 'he' ? 'שילוב צמר ומשי (נונו-פלט)' : lang === 'en' ? 'Nuno-Felting Wool Inlay' : 'Нуно-войлок (авторское валяние шерсти)',
      addPrice: 400,
    },
    {
      id: 'corset',
      name: lang === 'he' ? 'מחוך פנימי מחטב לפי מידה' : lang === 'en' ? 'Sculpted Anatomical Corset' : 'Корсетный каркас с моделированием талии',
      addPrice: 300,
    },
    {
      id: 'embroidery',
      name: lang === 'he' ? 'רקמת יד תלת-ממדית וחריזה' : lang === 'en' ? 'Hand Embroidery & Beading' : 'Ручная вышивка и декор',
      addPrice: 250,
    },
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
      total *= 1.25;
    }

    const roundedMin = Math.round(total / 50) * 50;
    const roundedMax = Math.round((total * 1.2) / 50) * 50;

    return {
      min: roundedMin,
      max: roundedMax,
      days: isExpress
        ? lang === 'he'
          ? '3–5 ימים (אקספרס)'
          : lang === 'en'
          ? '3–5 days (Express)'
          : '3–5 дней (Экспресс)'
        : currentService.baseDays,
    };
  }, [currentService, currentFabric, selectedExtras, isExpress, lang]);

  const selectedExtrasNames = selectedExtras
    .map((id) => extraCrafts.find((e) => e.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = encodeURIComponent(
    lang === 'he'
      ? `שלום גלינה! ביצעתי חישוב במחשבון האתר של חוט זהב:\n\n• שירות: ${currentService.name}\n• סוג בד: ${currentFabric.name}\n• שדרוגים: ${selectedExtrasNames || 'ללא'}\n• דחיפות: ${isExpress ? 'דחוף (3-5 ימים)' : 'רגיל'}\n• מחיר משוער: כ-${calculation.min} - ${calculation.max} ₪\n\nאשמח לתאם מדידה באשדוד.`
      : lang === 'en'
      ? `Hello Galina! I calculated an estimate on Hutzahav Atelier website:\n\n• Service: ${currentService.name}\n• Fabric: ${currentFabric.name}\n• Extras: ${selectedExtrasNames || 'None'}\n• Urgency: ${isExpress ? 'Express (3-5 days)' : 'Standard'}\n• Estimated Total: ~${calculation.min} - ${calculation.max} ₪\n\nI would love to book a fitting session in Ashdod.`
      : `Здравствуйте, Галина! Я воспользовался калькулятором на сайте ателье Hutzahav:\n\n• Услуга: ${currentService.name}\n• Материал: ${currentFabric.name}\n• Доп. опции: ${selectedExtrasNames || 'без доп. опций'}\n• Срочность: ${isExpress ? 'Срочный заказ (3-5 дней)' : 'Стандарт'}\n• Расчетная стоимость: ~${calculation.min} - ${calculation.max} ₪\n\nХочу записаться на примерку и обсудить детали.`
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
            <span>{t.calcTitle}</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {t.calcTitle}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            {t.calcSubtitle}
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-3xl luxury-card bg-noir-850">
            
            {/* Step 1: Service */}
            <div>
              <label className="block font-cinzel text-xs font-semibold text-gold-300 tracking-[0.15em] uppercase mb-3">
                {lang === 'he' ? '1. בחירת פריט או שירות:' : lang === 'en' ? '1. Select Garment or Service:' : '1. Выберите изделие или услугу:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => setSelectedService(srv.id)}
                    className={`text-left p-3.5 rounded-xl border text-xs transition-all duration-200 flex flex-col justify-between ${
                      selectedService === srv.id
                        ? 'border-gold-400 bg-gold-400/10 text-white shadow-md'
                        : 'border-white/10 bg-noir-800 text-slate-300 hover:border-gold-400/40 hover:bg-noir-750'
                    }`}
                  >
                    <span className="font-medium leading-snug">{srv.name}</span>
                    <span className="text-[11px] text-gold-400 font-mono mt-2 block">
                      {lang === 'he' ? `החל מ-₪${srv.basePrice}` : lang === 'en' ? `from ${srv.basePrice} ₪` : `от ${srv.basePrice} ₪`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fabric */}
            <div>
              <label className="block font-cinzel text-xs font-semibold text-gold-300 tracking-[0.15em] uppercase mb-3">
                {lang === 'he' ? '2. בחירת סוג הבד:' : lang === 'en' ? '2. Select Fabric Quality:' : '2. Выберите тип ткани:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {fabrics.map((fb) => (
                  <button
                    key={fb.id}
                    onClick={() => setSelectedFabric(fb.id)}
                    className={`text-left p-3.5 rounded-xl border text-xs transition-all duration-200 ${
                      selectedFabric === fb.id
                        ? 'border-gold-400 bg-gold-400/10 text-white shadow-md'
                        : 'border-white/10 bg-noir-800 text-slate-300 hover:border-gold-400/40 hover:bg-noir-750'
                    }`}
                  >
                    {fb.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Extra Crafts */}
            <div>
              <label className="block font-cinzel text-xs font-semibold text-gold-300 tracking-[0.15em] uppercase mb-3">
                {lang === 'he' ? '3. שדרוגים וטכניקות אמנותיות:' : lang === 'en' ? '3. Couture Techniques & Enhancements:' : '3. Авторские техники и декор:'}
              </label>
              <div className="space-y-2">
                {extraCrafts.map((ex) => {
                  const checked = selectedExtras.includes(ex.id);
                  return (
                    <div
                      key={ex.id}
                      onClick={() => toggleExtra(ex.id)}
                      className={`p-3.5 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                        checked
                          ? 'border-gold-400/60 bg-gold-400/10 text-white'
                          : 'border-white/10 bg-noir-800 text-slate-300 hover:border-gold-400/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            checked ? 'bg-gold-500 border-gold-500 text-black' : 'border-slate-500'
                          }`}
                        >
                          {checked && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span>{ex.name}</span>
                      </div>
                      <span className="font-mono text-gold-400 text-xs">+{ex.addPrice} ₪</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Urgency */}
            <div className="pt-2 border-t border-white/5 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-white font-cinzel uppercase tracking-wider">
                  {lang === 'he' ? 'הזמנת אקספרס דחופה (3–5 ימים)' : lang === 'en' ? 'Express Fast-Track (3–5 days)' : 'Срочный заказ (3–5 дней)'}
                </div>
                <div className="text-[11px] text-slate-400">
                  {lang === 'he' ? 'תעדוף עבודה וקדימות בלו״ז האטלייה' : lang === 'en' ? 'Priority turnaround' : '+25% к стоимости за сверхурочную работу мастера'}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsExpress(!isExpress)}
                className={`w-12 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                  isExpress ? 'bg-gold-500 justify-end' : 'bg-noir-800 justify-start border border-white/20'
                }`}
              >
                <div className={`w-5 h-5 rounded-full ${isExpress ? 'bg-black' : 'bg-slate-400'}`}></div>
              </button>
            </div>

          </div>

          {/* Result Column (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl luxury-card bg-gradient-to-b from-noir-850 to-noir-900 border-2 border-gold-400/40 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-cinzel text-xs uppercase tracking-widest text-slate-400">
                {t.calcTotalLabel}
              </span>
              <span className="font-cinzel text-xs text-gold-400 font-bold tracking-widest">
                ₪ ILS
              </span>
            </div>

            <div>
              <div className="font-cormorant text-5xl sm:text-6xl font-bold gold-gradient-text tracking-tight">
                ~{calculation.min} – {calculation.max} ₪
              </div>
              <div className="text-xs text-slate-400 mt-2">
                * {lang === 'he' ? 'הערכה ראשונית. מחיר סופי נקבע לאחר בחירת הבד והמדידה באטלייה.' : lang === 'en' ? 'Preliminary estimate. Exact quote confirmed upon fabric choice and fitting.' : 'Точная стоимость фиксируется после выбора ткани и снятия мерок.'}
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock size={14} className="text-gold-400" />
                  <span>{t.calcTimelineLabel}</span>
                </span>
                <span className="font-semibold text-white">{calculation.days}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-gold-400" />
                  <span>{lang === 'he' ? 'מדידות אישיות:' : lang === 'en' ? 'Bespoke Fittings:' : 'Примерка:'}</span>
                </span>
                <span className="font-semibold text-white">{lang === 'he' ? 'כלול בשירות' : lang === 'en' ? 'Included' : '1–2 сессии в ателье'}</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.15em] shadow-xl hover:scale-[1.02] transition-transform"
              >
                <MessageCircle size={17} />
                <span>{t.calcBookBtn}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
