import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Award, Scissors, Feather, Palette } from 'lucide-react';

export const AtelierAtmosphere: React.FC = () => {
  const { lang } = useLanguage();

  const pillars =
    lang === 'he'
      ? [
          {
            icon: <Palette className="text-gold-400" size={18} />,
            title: 'ציור אמנותי על בד',
            desc: 'ציור ידני בצבעי טקסטיל עמידים — כל שמלה נוצרת בעותק יחיד במינו.',
          },
          {
            icon: <Feather className="text-gold-400" size={18} />,
            title: 'בדים טבעיים מובחרים',
            desc: 'פשתן מרוכך, משי טבעי, שיפון, צמר מרינו אוסטרלי 18 מיקרון ותחרה צרפתית.',
          },
          {
            icon: <Award className="text-gold-400" size={18} />,
            title: '15+ שנות מומחיות',
            desc: 'ידע עמוק בגזרה אנטומית, בניית מחוכים והתאמה מושלמת לכל מבנה גוף.',
          },
          {
            icon: <Heart className="text-gold-400" size={18} />,
            title: 'יחס אישי וחם',
            desc: 'ליווי צמוד מהסקיצה הראשונה ועד הרגע שבו הבגד יושב עלייך בצורה מושלמת.',
          },
        ]
      : lang === 'en'
      ? [
          {
            icon: <Palette className="text-gold-400" size={18} />,
            title: 'Wearable Silk Art',
            desc: 'Hand-painted with permanent textile pigments — every garment is a 1-of-1 original.',
          },
          {
            icon: <Feather className="text-gold-400" size={18} />,
            title: 'Pure Natural Fibers',
            desc: 'Softened linen, pure silk, chiffon, 18-micron Australian merino wool, and French lace.',
          },
          {
            icon: <Award className="text-gold-400" size={18} />,
            title: '15+ Years of Mastery',
            desc: 'Deep expertise in anatomical pattern making, corsetry, and flattering every silhouette.',
          },
          {
            icon: <Heart className="text-gold-400" size={18} />,
            title: 'Personal Couture Care',
            desc: 'Warm, attentive guidance from the first sketch to your final fitting in Ashdod.',
          },
        ]
      : [
          {
            icon: <Palette className="text-gold-400" size={18} />,
            title: 'Живопись по ткани',
            desc: 'Ручная роспись стойкими пигментами — каждое изделие существует в единственном экземпляре.',
          },
          {
            icon: <Feather className="text-gold-400" size={18} />,
            title: 'Натуральные ткани',
            desc: 'Благородный лен, натуральный шелк, шифон, австралийский меринос и французское кружево.',
          },
          {
            icon: <Award className="text-gold-400" size={18} />,
            title: '15+ лет мастерства',
            desc: 'Глубокие знания анатомического кроя, моделирования корсетов и идеальной посадки по фигуре.',
          },
          {
            icon: <Heart className="text-gold-400" size={18} />,
            title: 'Душевный подход',
            desc: 'Теплая атмосфера и бережное внимание к каждой детали вашего будущего образа.',
          },
        ];

  return (
    <section id="about" className="py-20 sm:py-24 relative bg-noir-900 border-t border-gold-400/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Atelier Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Main Master Card */}
              <div className="relative rounded-3xl overflow-hidden luxury-card border border-gold-400/30 p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img
                    src="/images/portfolio/atelier/8f183f_7a9306154f4b4e77a28481bdc58d81c4.jpg"
                    alt="Галина Хвостенко — Hutzahav Atelier"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-85"></div>
                  
                  {/* Floating Quote in Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-gold-400/30">
                    <p className="font-cormorant italic text-sm text-gold-200 leading-relaxed">
                      {lang === 'he'
                        ? '«בגד צריך לא רק לשבת בצורה מושלמת — הוא צריך להעניק השראה ולבטא את האופי הייחודי של הלובשת אותו.»'
                        : lang === 'en'
                        ? '“A garment should not merely fit flawlessly — it should inspire and reflect the unique soul of the woman who wears it.”'
                        : '«Одежда должна не просто сидеть идеально — она должна вдохновлять и раскрывать уникальный характер своей обладательницы.»'}
                    </p>
                    <div className="font-cinzel text-[10px] text-slate-400 mt-1.5 tracking-widest uppercase">
                      {lang === 'he'
                        ? '— גלינה חבוסטנקו, מעצבת ומייסדת'
                        : lang === 'en'
                        ? '— Galina Khvostenko, Couturier & Founder'
                        : '— Галина Хвостенко, дизайнер и основатель'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Supporting preview cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-gold-400/20 aspect-[4/3] bg-black">
                  <img
                    src="/images/portfolio/exclusive_clothing/8f183f_dde2c9ed2a784fbea1ef5c407111b464.jpg"
                    alt="Арт-жакет ручной работы"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-gold-400/20 aspect-[4/3] bg-black">
                  <img
                    src="/images/portfolio/exclusive_clothing/8f183f_f0890a6485f349469fdb956bef48b976.jpg"
                    alt="Роспись по ткани"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Master Biography & Studio Philosophy */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-850 border border-gold-400/30 text-gold-300 text-[10px] sm:text-xs tracking-[0.2em] font-cinzel uppercase">
                <Scissors size={12} className="text-gold-400" />
                <span>{lang === 'he' ? 'על המעצבת והסטודיו' : lang === 'en' ? 'About the Couturier' : 'О мастере и студии'}</span>
              </div>

              <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                {lang === 'he' ? STUDIO_INFO.masterNameHe : lang === 'en' ? STUDIO_INFO.masterNameEn : STUDIO_INFO.masterNameRu}
                <span className="block gold-gradient-text text-lg sm:text-2xl mt-1 font-normal font-cinzel">
                  HUTZAHAV ATELIER • חוט זהב
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed whitespace-pre-line">
                {lang === 'he' ? STUDIO_INFO.aboutStoryHe : lang === 'en' ? STUDIO_INFO.aboutStoryEn : STUDIO_INFO.aboutStoryRu}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {pillars.map((p, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-noir-850/80 border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    {p.icon}
                    <h4 className="font-cormorant text-lg font-bold text-white">{p.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Booking Callout */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-cormorant text-xl font-bold text-white">
                  {lang === 'he'
                    ? 'מזמינה אותך לפגישה אישית באטלייה באשדוד'
                    : lang === 'en'
                    ? 'Welcome to our Ashdod studio for a personal consultation'
                    : 'Приглашаем в ателье в Ашдоде на личную встречу'}
                </div>
                <div className="text-xs text-slate-400">
                  {lang === 'he'
                    ? 'שבי ציון 2, אשדוד • בתיאום מראש'
                    : lang === 'en'
                    ? 'Shavei Tzion 2, Ashdod • By appointment'
                    : 'ул. Шавей Цион 2 • Обсудим фасон, ткани и снимем мерки'}
                </div>
              </div>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full gold-gradient-bg text-black font-cinzel text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 shadow-lg"
              >
                {lang === 'he' ? 'תיאום פגישה בווטסאפ' : lang === 'en' ? 'Message Galina' : 'Написать Галине'}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
