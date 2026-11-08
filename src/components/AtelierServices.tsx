import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { UI_LABELS } from '../seo/servicePages';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export const AtelierServices: React.FC = () => {
  const { lang, t, dir, pathFor } = useLanguage();
  const ui = UI_LABELS[lang];

  const services = [
    {
      id: 'evening-couture',
      num: '01',
      title:
        lang === 'he'
          ? 'תפירת שמלות ערב, כלה ואירועים'
          : lang === 'en'
          ? 'Bespoke Evening, Bridal & Celebration Couture'
          : 'Индивидуальный пошив вечерних и праздничных нарядов',
      category:
        lang === 'he'
          ? 'תפירה עילית לפי מידה'
          : lang === 'en'
          ? 'Bespoke Tailoring'
          : 'Индивидуальный пошив',
      desc:
        lang === 'he'
          ? 'יצירת שמלות ערב, נשף, כלות ושמלות חגיגיות בהתאמה אנטומית מדויקת למבנה הגוף. בניית מחוכים מחטבים, עבודה עם משי טבעי, שיפון, קטיפה ותחרה צרפתית.'
          : lang === 'en'
          ? 'Custom evening, bridal, prom, and celebration gowns crafted to your exact anatomical silhouette. Sculpting corsetry, pure silk, chiffon, velvet, and French lace.'
          : 'Создание вечерних, свадебных, выпускных и праздничных детских платьев по вашим индивидуальным меркам. Корсетная основа, моделирование силуэта, работа с шелком, шифоном и кружевом.',
      image: '/images/portfolio/atelier/8f183f_7a9306154f4b4e77a28481bdc58d81c4.jpg',
      features:
        lang === 'he'
          ? [
              'התאמה אישית מדויקת ומחמיאה לגזרה',
              'תחרה צרפתית, משי טבעי ובדים מובחרים',
              'דגם ייחודי שנתפר במיוחד עבורך',
            ]
          : lang === 'en'
          ? [
              'Flawless anatomical silhouette & corsetry',
              'French lace, pure natural silk & fine fabrics',
              'Exclusive 1-of-1 bespoke creation',
            ]
          : [
              'Безупречная посадка точно по вашей фигуре',
              'Французское кружево, натуральный шелк и бархат',
              'Эксклюзивный наряд в единственном экземпляре',
            ],
    },
    {
      id: 'hand-painted',
      num: '02',
      title:
        lang === 'he'
          ? 'שמלות מעצבים & ציור ידני על משי ופשתן'
          : lang === 'en'
          ? 'Designer Dresses & Hand-Painted Silk / Linen'
          : 'Дизайнерские платья & Ручная роспись ткани',
      category:
        lang === 'he'
          ? '100% פשתן ומשי טבעי'
          : lang === 'en'
          ? 'Hand-Painted Couture'
          : 'Живопись на ткани',
      desc:
        lang === 'he'
          ? 'שמלות ובגדים מ-100% פשתן איטלקי מרוכך ומשי טבעי עם ציור אמנותי מקורי במכחול בצבעי טקסטיל עמידים שאינם דוהים בכביסה.'
          : lang === 'en'
          ? 'Signature dresses crafted from 100% softened linen and pure silk featuring bespoke hand-painted artwork with permanent washable pigments.'
          : 'Авторские платья из 100% умягченного льна и натурального шелка с ручной художественной росписью стойкими пигментами. Живая живопись на ткани, которая не смывается при стирке.',
      image: '/images/portfolio/exclusive_clothing/8f183f_f0890a6485f349469fdb956bef48b976.jpg',
      features:
        lang === 'he'
          ? [
              '100% פשתן מרוכך ומשי טבעי נושם',
              'ציור ידני עמיד השומר על צבעיו בכביסה',
              'גזרות אלגנטיות ומחמיאות לכל מידה',
            ]
          : lang === 'en'
          ? [
              '100% breathable softened linen & pure silk',
              'Permanent hand-painted artwork (washable)',
              'Airy, flattering silhouettes for every figure',
            ]
          : [
              '100% натуральный дышащий лен и шелк',
              'Стойкая ручная роспись — не тускнеет при стирке',
              'Элегантный, комфортный и женственный крой',
            ],
    },
    {
      id: 'felting-denim',
      num: '03',
      title:
        lang === 'he'
          ? 'ז׳קטים אמנותיים & נונו-לבד (צמר מרינו ומשי)'
          : lang === 'en'
          ? 'Art Denim & Merino Nuno-Felting'
          : 'Арт-жакеты & Нуно-войлок (Меринос и Шелк)',
      category:
        lang === 'he'
          ? 'עבודת יד ייחודית'
          : lang === 'en'
          ? 'Nuno-Felting Craft'
          : 'Авторский арт-текстиль',
      desc:
        lang === 'he'
          ? 'ז׳קטים, עליוניות וצעיפים המשלבים צמר מרינו אוסטרלי עדין (18 מיקרון), סיבי משי ורקמת יד תלת-ממדית בטכניקת נונו-לבד נדירה.'
          : lang === 'en'
          ? 'Avant-garde denim jackets, coats, and stoles infused with 18-micron Australian merino wool and silk fibers using artisanal nuno-felting.'
          : 'Эксклюзивные джинсовые жакеты, наряды и невесомые палантины, созданные методом приваливания тончайшей шерсти австралийского мериноса (18 микрон) к натуральному шелку.',
      image: '/images/portfolio/exclusive_clothing/8f183f_dde2c9ed2a784fbea1ef5c407111b464.jpg',
      features:
        lang === 'he'
          ? [
              'צמר מרינו אוסטרלי מובחר 18 מיקרון',
              'שילוב אומנותי של משי, דנים ורקמת יד',
              'צעיפים ועליוניות קלילות בעבודת יד',
            ]
          : lang === 'en'
          ? [
              'Ultra-fine 18-micron Australian merino wool',
              '3D tactile wool-on-silk bonding & embroidery',
              'Bespoke jackets, coats & silk-wool stoles',
            ]
          : [
              'Тончайший австралийский меринос 18 микрон',
              'Объемная фактура и ручная авторская вышивка',
              'Невесомые шелково-шерстяные палантины и жакеты',
            ],
    },
    {
      id: 'luxury-repairs',
      num: '04',
      title:
        lang === 'he'
          ? 'התאמת בגדי מותגים & תיקוני יוקרה'
          : lang === 'en'
          ? 'Haute Alterations & Luxury Garment Restoration'
          : 'Премиум подгонка & Реставрация одежды',
      category:
        lang === 'he'
          ? 'דיוק ללא פשרות'
          : lang === 'en'
          ? 'Precision Alterations'
          : 'Идеальная посадка',
      desc:
        lang === 'he'
          ? 'התאמת שמלות ערב, חליפות ומעילים בדיוק למבנה גופך. קיצור תוך שמירה על מכפלת מקורית, החלפת בטנות ורוכסנים, וחידוש בגדי עור וסריגים.'
          : lang === 'en'
          ? 'Precision custom fitting for designer suits, coats, and evening gowns. Original hem preservation, lining renewal, and delicate leather & knitwear restoration.'
          : 'Деликатная посадка готовых вечерних платьев, костюмов и пальто по вашей фигуре. Укорачивание с сохранением фабричного края, перекрой, реставрация трикотажа, кожи и меха.',
      image: '/images/portfolio/atelier/8f183f_642a3166de1749be9e9a9cb8e471642a.jpg',
      features:
        lang === 'he'
          ? [
              'התאמת שמלות ערב וחליפות בדיוק לגוף',
              'תיקון וחידוש בגדי עור, זמש וסריגים עדינים',
              'החלפת רוכסנים ובטנות ברמת גימור עילית',
            ]
          : lang === 'en'
          ? [
              'Exact silhouette fitting for luxury labels',
              'Delicate leather, suede & knitwear restoration',
              'Invisible hem adjustments & hardware renewal',
            ]
          : [
              'Идеальная посадка брендовой одежды по фигуре',
              'Бережная реставрация кожи, дубленок и трикотажа',
              'Замена подклада, молний и сложный перекрой',
            ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 relative bg-noir-900 border-t border-gold-400/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-850 border border-gold-400/30 text-gold-300 text-[10px] sm:text-xs tracking-[0.2em] font-cinzel uppercase">
            <Sparkles size={13} className="text-gold-400" />
            <span>{t.servicesCategoryBadge}</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {t.servicesTitle}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Symmetrical 2x2 Minimalist Couture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden luxury-card bg-noir-850/90 border border-white/5 hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Photo with subtle zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-850 via-transparent to-black/25 opacity-80"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="font-cinzel text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-gold-300 border border-gold-400/30">
                      {item.category}
                    </span>
                  </div>

                  {/* Minimalist Number Badge */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/80 backdrop-blur-md text-gold-400 text-xs font-cormorant font-bold flex items-center justify-center border border-gold-400/30">
                    {item.num}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-7 space-y-3.5">
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-200 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {item.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-2 border-t border-white/5">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check size={14} className="text-gold-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-5 pb-5 sm:px-7 sm:pb-7">
                <a
                  href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                    lang === 'he'
                      ? `שלום גלינה! אשמח לתיאום והתייעצות לגבי: "${item.title}".`
                      : lang === 'en'
                      ? `Hello Galina! I would like to inquire about: "${item.title}".`
                      : `Здравствуйте, Галина! Хочу записаться на примерку / обсудить: «${item.title}».`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-noir-900 hover:bg-gold-500/15 border border-gold-400/25 hover:border-gold-400/50 flex items-center justify-between text-xs font-cinzel text-gold-300 hover:text-white uppercase font-bold tracking-wider transition-all"
                >
                  <span>{t.servicesBtn}</span>
                  <ArrowRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Links to the dedicated local service pages */}
        <nav aria-label={ui.otherServices} className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {(['alterations', 'evening', 'bridal'] as const).map((id) => (
            <a
              key={id}
              href={pathFor(id)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/30 text-sm text-gold-200 hover:bg-gold-400/10 transition-colors"
            >
              {ui.serviceNames[id]}
              <ArrowRight size={13} className={dir === 'rtl' ? 'rotate-180' : ''} />
            </a>
          ))}
        </nav>

      </div>
    </section>
  );
};
