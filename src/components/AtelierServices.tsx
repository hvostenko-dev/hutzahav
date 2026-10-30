import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Scissors, Shirt, Sparkles, Home, Clock, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export const AtelierServices: React.FC = () => {
  const services = [
    {
      id: 'evening-couture',
      title: 'Пошив вечерних и свадебных нарядов',
      category: 'Bespoke Evening & Bridal Couture',
      desc: 'Создание безупречных вечерних, выпускных и свадебных платьев по индивидуальным анатомическим меркам. Корсетная основа, моделирование силуэта, работа с французским кружевом, шелковым шифоном, тафтой и бархатом.',
      price: 'от 800 ₪',
      timeline: '10–14 дней',
      image: '/images/portfolio/atelier/8f183f_7a9306154f4b4e77a28481bdc58d81c4.jpg',
      features: [
        'Индивидуальный корсетный каркас',
        'Французское кружево и натуральный шелк',
        '1–2 промежуточные примерки для идеальной посадки',
        'Эксклюзивный единичный экземпляр',
      ],
    },
    {
      id: 'hand-painted',
      title: 'Дизайнерская одежда & Ручная роспись',
      category: 'Hand-Painted Silks & Linens',
      desc: 'Авторские платья из 100% умягченного льна и натурального шелка с ручной художественной росписью специальными несмываемыми пигментами. Неповторимая живопись на ткани, в которой каждая линия уникальна.',
      price: 'от 1,350 ₪',
      timeline: '12–16 дней',
      image: '/images/portfolio/exclusive_clothing/8f183f_f0890a6485f349469fdb956bef48b976.jpg',
      features: [
        '100% натуральный лен и шелк высшего сорта',
        'Стойкая ручная роспись — не линяет при стирке',
        'Свободный, элегантный, дышащий силуэт',
        'Авторские эскизы Галины Хвостенко',
      ],
    },
    {
      id: 'felting-denim',
      title: 'Арт-жакеты & Нуно-войлок (Валяние)',
      category: 'Wool Nuno-Felting & Denim Art',
      desc: 'Авангардные джинсовые жакеты и пальто, инкрустированные тонкорунной шерстью австралийского мериноса в технике нуно-фелтинг, вязаными деталями и авторской вышивкой. Теплые, фактурные, привлекающие восхищенные взгляды.',
      price: 'от 1,200 ₪',
      timeline: '10–14 дней',
      image: '/images/portfolio/exclusive_clothing/8f183f_dde2c9ed2a784fbea1ef5c407111b464.jpg',
      features: [
        'Австралийский меринос 18 микрон',
        'Сложная техника сваливания шерсти с тканью',
        'Объемная тактильная фактура и вышивка',
        'Шелково-шерстяные палантины и аксессуары',
      ],
    },
    {
      id: 'luxury-repairs',
      title: 'Премиум подгонка & Реставрация брендов',
      category: 'Haute Alterations & Leather Restoration',
      desc: 'Подгонка костюмов, пальто и вечерних платьев точно по вашей фигуре. Укорачивание с сохранением фабричного края, перекрой, замена подклада, сложная реставрация трикотажа, кожи, дубленок, обуви и любимых сумок.',
      price: 'от 85 ₪',
      timeline: '2–5 дней',
      image: '/images/portfolio/atelier/8f183f_214cf4c6649b4474bef0c12d369a4c19.jpg',
      features: [
        'Посадка готовой брендовой одежды по фигуре',
        'Реставрация кожи, дубленок и меха',
        'Замена сложной фурнитуры и молний',
        'Ремонт и восстановление сумок и обуви',
      ],
    },
    {
      id: 'home-couture',
      title: 'Индивидуальный текстиль & Шторы',
      category: 'Bespoke Curtains & Home Textiles',
      desc: 'Создание текстильного уюта для вашего дома. Пошив штор любой сложности, авторские комплекты постельного белья из премиального сатина и льна нестандартных размеров, покрывала, декоративные подушки.',
      price: 'от 59 ₪',
      timeline: '5–8 дней',
      image: '/images/portfolio/home_textiles/8f183f_ec1fe805d7f8403f98b1da0022dc85c7.jpg',
      features: [
        'Шторы по индивидуальным размерам окон',
        'Постельное белье из сатина и умягченного льна',
        'Стеганые авторские покрывала',
        'Подбор интерьерных тканей из Европы',
      ],
    },
    {
      id: 'costumes-kids',
      title: 'Сценические костюмы & Детская мода',
      category: 'Stage Costumes & Children Couture',
      desc: 'Пошив ярких сценических образов, костюмов для Пурима, театральных постановок и фотосессий. Индивидуальный пошив праздничных детских платьев из нежнейших гипоаллергенных тканей с комфортной мягкой подкладкой.',
      price: 'от 200 ₪',
      timeline: '5–10 дней',
      image: '/images/portfolio/atelier/8f183f_d2de953de21545eba90b2625f9b9221f.jpg',
      features: [
        'Карнавальные образы любой сложности',
        'Детские нарядные платья для торжеств',
        'Комфортная посадка без раздражения кожи',
        'Корпоративная форменная одежда для бутиков',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-noir-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-800 border border-gold-400/30 text-gold-300 text-xs tracking-[0.2em] font-cinzel uppercase">
            <Scissors size={13} className="text-gold-400" />
            <span>Услуги Высокого Пошива</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Мастерство Ателье «Золотая Нить»
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            От создания вечернего шедевра до тончайшей реставрации любимой вещи — каждое изделие создается с безупречным вниманием к деталям.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="group rounded-3xl overflow-hidden luxury-card luxury-card-hover bg-noir-850 flex flex-col justify-between"
            >
              <div>
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-850 via-transparent to-black/30"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="font-cinzel text-[10px] font-semibold tracking-widest text-gold-300 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-gold-400/30">
                      {srv.category}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 font-cormorant text-lg font-bold text-gold-300 px-3 py-0.5 rounded-full bg-noir-900/90 backdrop-blur-md border border-gold-400/20">
                    {srv.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-cormorant text-2xl font-bold text-white group-hover:text-gold-200 transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-white/5">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check size={13} className="text-gold-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock size={12} className="text-gold-400" /> {srv.timeline}
                  </span>

                  <a
                    href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                      `Здравствуйте, Галина! Хочу записаться на консультацию и примерку по услуге: "${srv.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-cinzel text-xs font-semibold text-gold-400 hover:text-gold-200 tracking-wider uppercase transition-colors"
                  >
                    <span>Записаться</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
