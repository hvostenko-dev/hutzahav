import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Scissors, Shirt, Sparkles, Home, Clock, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export const AtelierServices: React.FC = () => {
  const { lang, t } = useLanguage();

  const services = [
    {
      id: 'evening-couture',
      title: lang === 'he' ? 'תפירת שמלות ערב וכלה' : lang === 'en' ? 'Bespoke Evening & Bridal Couture' : 'Пошив вечерних и свадебных нарядов',
      category: lang === 'he' ? 'תפירה עילית אישית' : 'Bespoke Evening & Bridal Couture',
      desc: lang === 'he'
        ? 'יצירת שמלות ערב, נשף וכלות ללא פשרות בהתאמה אנטומית מדויקת לפי 25 מידות גוף. מחוכים מחטבים, משי טבעי, שיפון ותחרה צרפתית.'
        : lang === 'en'
        ? 'Bespoke evening, prom, and bridal gowns crafted to your exact anatomical silhouette. Corsetry foundation, pure silk, French lace, chiffon, and velvet.'
        : 'Создание безупречных вечерних, выпускных и свадебных платьев по индивидуальным анатомическим меркам. Корсетная основа, моделирование силуэта, работа с французским кружевом, шелковым шифоном, тафтой и бархатом.',
      price: lang === 'he' ? 'החל מ-₪800' : lang === 'en' ? 'from 800 ₪' : 'от 800 ₪',
      timeline: lang === 'he' ? '10–14 ימים' : lang === 'en' ? '10–14 days' : '10–14 дней',
      image: '/images/portfolio/atelier/8f183f_7a9306154f4b4e77a28481bdc58d81c4.jpg',
      features: lang === 'he'
        ? [
            'מחוך פנימי מובנה לתמיכה מושלמת',
            'תחרה צרפתית ומשי טבעי מובחר',
            '1–2 מדידות ביניים לדיוק מקסימלי',
            'דגם יחיד ומיוחד במינו בעולם',
          ]
        : lang === 'en'
        ? [
            'Sculpting inner corset structure',
            'French lace & pure natural silk',
            '1–2 intermediate fitting sessions',
            'Exclusive 1-of-1 haute creation',
          ]
        : [
            'Индивидуальный корсетный каркас',
            'Французское кружево и натуральный шелк',
            '1–2 промежуточные примерки для идеальной посадки',
            'Эксклюзивный единичный экземпляр',
          ],
    },
    {
      id: 'hand-painted',
      title: lang === 'he' ? 'בגדי מעצבים & ציור ידני על בד' : lang === 'en' ? 'Designer Wear & Hand-Painted Silk/Linen' : 'Дизайнерская одежда & Ручная роспись',
      category: lang === 'he' ? 'משי ופשתן טהור' : 'Hand-Painted Silks & Linens',
      desc: lang === 'he'
        ? 'שמלות ובגדים מ-100% פשתן איטלקי מרוכך ומשי טבעי עם ציור אמנותי מקורי בצבעים עמידים שאינם יורדים בכביסה.'
        : lang === 'en'
        ? 'Signature dresses crafted from 100% pre-washed Italian linen and pure silk featuring bespoke hand-painted artwork that withstands washing.'
        : 'Авторские платья из 100% умягченного льна и натурального шелка с ручной художественной росписью специальными несмываемыми пигментами. Неповторимая живопись на ткани, в которой каждая линия уникальна.',
      price: lang === 'he' ? 'החל מ-₪1,350' : lang === 'en' ? 'from 1,350 ₪' : 'от 1,350 ₪',
      timeline: lang === 'he' ? '12–16 ימים' : lang === 'en' ? '12–16 days' : '12–16 дней',
      image: '/images/portfolio/exclusive_clothing/8f183f_f0890a6485f349469fdb956bef48b976.jpg',
      features: lang === 'he'
        ? [
            '100% פשתן ומשי טבעי מהאיכות הגבוהה ביותר',
            'ציור ידני עמיד שאינו דוהה בכביסה',
            'גזרה חופשית, נושמת ומחמיאה',
            'סקיצות בלעדיות של גלינה חבוסטנקו',
          ]
        : lang === 'en'
        ? [
            '100% pure organic linen & silk',
            'Permanent hand-painted artwork (washable)',
            'Flattering, airy & elegant silhouettes',
            'Original sketches by Galina Khvostenko',
          ]
        : [
            '100% натуральный лен и шелк высшего сорта',
            'Стойкая ручная роспись — не линяет при стирке',
            'Свободный, элегантный, дышащий силуэт',
            'Авторские эскизы Галины Хвостенко',
          ],
    },
    {
      id: 'felting-denim',
      title: lang === 'he' ? 'ז׳קטים אמנותיים & נונו-לבד (צמר ומשי)' : lang === 'en' ? 'Art Denim & Merino Nuno-Felting' : 'Арт-жакеты & Нуно-войлок (Валяние)',
      category: lang === 'he' ? 'שילוב צמר ומשי' : 'Wool Nuno-Felting & Denim Art',
      desc: lang === 'he'
        ? 'ז׳קטים ומעילי דנים ייחודיים המשלבים צמר מרינו אוסטרלי 18 מיקרון, משי ורקמה ידנית בטכניקת נונו-פלט שאין לאף אחד אחר.'
        : lang === 'en'
        ? 'Avant-garde denim jackets and art coats infused with 18-micron Australian merino wool and silk in artisanal nuno-felting technique.'
        : 'Авангардные джинсовые жакеты и пальто, инкрустированные тонкорунной шерстью австралийского мериноса в технике нуно-фелтинг, вязаными деталями и авторской вышивкой. Теплые, фактурные, привлекающие восхищенные взгляды.',
      price: lang === 'he' ? 'החל מ-₪1,200' : lang === 'en' ? 'from 1,200 ₪' : 'от 1,200 ₪',
      timeline: lang === 'he' ? '10–14 ימים' : lang === 'en' ? '10–14 days' : '10–14 дней',
      image: '/images/portfolio/exclusive_clothing/8f183f_dde2c9ed2a784fbea1ef5c407111b464.jpg',
      features: lang === 'he'
        ? [
            'צמר מרינו אוסטרלי עדין 18 מיקרון',
            'טכניקת שילוב צמר מיוחדת עם משי',
            'טקסטורות עשירות ורקמת יד תלת-ממדית',
            'צעיפים ופונצ׳ואים תואמים',
          ]
        : lang === 'en'
        ? [
            'Fine 18-micron Australian merino wool',
            'Intricate wool-on-silk bonding craft',
            'Rich tactile 3D texture & embroidery',
            'Matching silk-wool stoles & accessories',
          ]
        : [
            'Австралийский меринос 18 микрон',
            'Сложная техника сваливания шерсти с тканью',
            'Объемная тактильная фактура и вышивка',
            'Шелково-шерстяные палантины и аксессуары',
          ],
    },
    {
      id: 'luxury-repairs',
      title: lang === 'he' ? 'התאמת בגדי מותגים & תיקוני יוקרה' : lang === 'en' ? 'Haute Alterations & Leather Restoration' : 'Премиум подгонка & Реставрация брендов',
      category: lang === 'he' ? 'התאמה מדויקת למבנה הגוף' : 'Haute Alterations & Leather Restoration',
      desc: lang === 'he'
        ? 'התאמת חליפות, מעילים ושמלות ערב בדיוק למידות גופך. קיצור תוך שמירה על תפר מקורי, החלפת בטנות וחידוש בגדי עור ותיקים.'
        : lang === 'en'
        ? 'Custom fit tailoring for designer suits, coats, and evening gowns. Original hem preservation, lining replacements, and leather restorations.'
        : 'Подгонка костюмов, пальто и вечерних платьев точно по вашей фигуре. Укорачивание с сохранением фабричного края, перекрой, замена подклада, сложная реставрация трикотажа, кожи, дубленок, обуви и любимых сумок.',
      price: lang === 'he' ? 'החל מ-₪85' : lang === 'en' ? 'from 85 ₪' : 'от 85 ₪',
      timeline: lang === 'he' ? '2–5 ימים' : lang === 'en' ? '2–5 days' : '2–5 дней',
      image: '/images/portfolio/atelier/8f183f_214cf4c6649b4474bef0c12d369a4c19.jpg',
      features: lang === 'he'
        ? [
            'התאמת מותגי יוקרה בדיוק מושלם לגוף',
            'חידוש ותיקון עור, זמש ופרווה',
            'החלפת רוכסנים ורכיבי פרימיום',
            'שחזור ותיקון תיקי יוקרה ונעליים',
          ]
        : lang === 'en'
        ? [
            'Exact silhouette fitting for luxury labels',
            'Leather, shearling, and fur restoration',
            'High-end hardware & zip replacement',
            'Designer handbag & footwear touch-ups',
          ]
        : [
            'Посадка готовой брендовой одежды по фигуре',
            'Реставрация кожи, дубленок и меха',
            'Замена сложной фурнитуры и молний',
            'Ремонт и восстановление сумок и обуви',
          ],
    },
    {
      id: 'home-couture',
      title: lang === 'he' ? 'וילונות בהתאמה אישית & טקסטיל לבית' : lang === 'en' ? 'Bespoke Curtains & Luxury Home Textiles' : 'Индивидуальный текстиль & Шторы',
      category: lang === 'he' ? 'טקסטיל יוקרתי לבית' : 'Bespoke Curtains & Home Textiles',
      desc: lang === 'he'
        ? 'עיצוב ותפירת וילונות בכל מידה וסגנון, מצעי סאטן ופשתן טהור בהתאמה אישית, כיסויי מיטה וכריות נוי.'
        : lang === 'en'
        ? 'Custom curtain design and fabrication, tailored satin and linen bedding sets for non-standard mattresses, and decorative pillows.'
        : 'Создание текстильного уюта для вашего дома. Пошив штор любой сложности, авторские комплекты постельного белья из премиального сатина и льна нестандартных размеров, покрывала, декоративные подушки.',
      price: lang === 'he' ? 'החל מ-₪59' : lang === 'en' ? 'from 59 ₪' : 'от 59 ₪',
      timeline: lang === 'he' ? '5–8 ימים' : lang === 'en' ? '5–8 days' : '5–8 дней',
      image: '/images/portfolio/home_textiles/8f183f_1e31e527baa24398bfd063e3cd9a7a1c.jpg',
      features: lang === 'he'
        ? [
            'תפירת וילונות לפי מידות חלון מדויקות',
            'מצעים מ-100% סאטן ופשתן איטלקי',
            'כיסויי מיטה יוקרתיים בתפירה ידנית',
            'מבחר בדים איכותיים מאירופה',
          ]
        : lang === 'en'
        ? [
            'Custom window sizing & drape shaping',
            'Premium Italian satin & pre-washed linen',
            'Artisan quilted luxury bedspreads',
            'Carefully curated European fabrics',
          ]
        : [
            'Шторы по индивидуальным размерам окон',
            'Постельное белье из сатина и умягченного льна',
            'Стеганые авторские покрывала',
            'Подбор интерьерных тканей из Европы',
          ],
    },
    {
      id: 'costumes-kids',
      title: lang === 'he' ? 'תלבושות במה, תחפושות פורים & אופנת ילדים' : lang === 'en' ? 'Stage Costumes, Purim & Kids Couture' : 'Сценические костюмы & Детская мода',
      category: lang === 'he' ? 'תלבושות במה ואירועים' : 'Stage Costumes & Children Couture',
      desc: lang === 'he'
        ? 'תפירת תלבושות במה למופעים, תחפושות פורים מרהיבות בהזמנה אישית, ושמלות אירועים חלומיות לילדות מבדים רכים והיפואלרגניים.'
        : lang === 'en'
        ? 'Show-stopping theatrical costumes, Purim outfits, photoshoot styling, and gentle luxury celebration dresses for children.'
        : 'Пошив ярких сценических образов, костюмов для Пурима, театральных постановок и фотосессий. Индивидуальный пошив праздничных детских платьев из нежнейших гипоаллергенных тканей с комфортной мягкой подкладкой.',
      price: lang === 'he' ? 'החל מ-₪200' : lang === 'en' ? 'from 200 ₪' : 'от 200 ₪',
      timeline: lang === 'he' ? '5–10 ימים' : lang === 'en' ? '5–10 days' : '5–10 дней',
      image: '/images/portfolio/atelier/8f183f_d2de953de21545eba90b2625f9b9221f.jpg',
      features: lang === 'he'
        ? [
            'תחפושות פורים ותלבושות במה בכל מורכבות',
            'שמלות חגיגיות לילדות לאירועים מיוחדים',
            'בדים רכים ללא גירויים בעור הילד',
            'בגדי עבודה וייצוג אלגנטיים לבוטיקים',
          ]
        : lang === 'en'
        ? [
            'Bespoke carnival & theater outfits',
            'Fairytale celebration dresses for girls',
            'Ultra-soft, skin-safe hypoallergenic touch',
            'Corporate uniforms for boutique teams',
          ]
        : [
            'Карнавальные образы любой сложности',
            'Детские нарядные платья для торжеств',
            'Комфортная посадка без раздражения кожи',
            'Корпоративная форменная одежда для бутиков',
          ],
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-noir-900 border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-850 border border-gold-400/30 text-gold-300 text-xs tracking-[0.2em] font-cinzel uppercase">
            <Sparkles size={14} className="text-gold-400" />
            <span>{t.servicesCategoryBadge}</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {t.servicesTitle}
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* 6 Cards Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden luxury-card bg-noir-850 border border-white/5 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* Photo with zoom effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-850 via-transparent to-black/30 opacity-80 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="font-cinzel text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-gold-300 border border-gold-400/30">
                      {item.category}
                    </span>
                  </div>

                  {/* Price Tag Badge */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-gold-300 text-xs font-cinzel font-bold px-3 py-1 rounded-full border border-gold-400/40 shadow-lg">
                    {item.price}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-7 space-y-3 sm:space-y-4">
                  <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-white group-hover:text-gold-200 transition-colors leading-snug">
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
              <div className="p-4 sm:p-7 pt-0">
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400 font-cinzel">
                    <Clock size={13} className="text-gold-400" />
                    <span>{item.timeline}</span>
                  </div>

                  <a
                    href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                      lang === 'he'
                        ? `שלום גלינה! אני מעוניינת במידע ותיאום מדידה עבור: "${item.title}".`
                        : lang === 'en'
                        ? `Hello Galina! I would like to book a consultation for: "${item.title}".`
                        : `Здравствуйте, Галина! Хочу записаться на примерку/консультацию по услуге: "${item.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-cinzel text-gold-300 hover:text-white uppercase font-bold tracking-wider group-hover:translate-x-1 transition-all"
                  >
                    <span>{t.servicesBtn}</span>
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
