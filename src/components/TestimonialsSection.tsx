import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const reviews =
    lang === 'he'
      ? [
          {
            name: 'אלנה ו.',
            city: 'תל אביב',
            order: 'תפירת שמלת ערב לחתונת הבת',
            text: 'גלינה חוללה נס של ממש! השמלה ישבה כבר מהמדידה הראשונה כמו כפפה ליד, החמיאה לגזרה בצורה מדהימה. באירוע כל האורחים שאלו מאיזה בוטיק במילאנו השמלה הזו!',
            rating: 5,
          },
          {
            name: 'אולגה ר.',
            city: 'נתניה',
            order: 'שמלת פשתן בציור ידני & צעיף נונו-לבד',
            text: 'אני לובשת את השמלה הזו כבר קיץ שני ברציפות. הציור לא השתנה כלל אחרי כביסות רבות! בד קליל, נושם ומושך מחמאות בכל מקום שאני הולכת אליו. תודה ענקית!',
            rating: 5,
          },
          {
            name: 'אירינה מ.',
            city: 'אשדוד',
            order: 'ז׳קט דנים אמנותי והתאמת שמלת מותג',
            text: 'ידי זהב! גלינה התאימה לי שמלת ערב מורכבת ממשי בצורה מושלמת למבנה הגוף, ורכשתי גם ז׳קט דנים בעבודת יד עם צמר מרינו — יצירת אמנות אמיתית.',
            rating: 5,
          },
        ]
      : lang === 'en'
      ? [
          {
            name: 'Elena V.',
            city: 'Tel Aviv',
            order: 'Bespoke Evening Gown for Daughter’s Wedding',
            text: 'Galina worked a true miracle! The gown fit like a second skin from the very first fitting, sculpting the waist beautifully. Every guest at the wedding asked which Milan boutique it came from!',
            rating: 5,
          },
          {
            name: 'Olga R.',
            city: 'Netanya',
            order: 'Hand-Painted Linen Dress & Nuno Stole',
            text: 'I have been wearing this dress for two summers now. The hand-painted artwork looks brand new even after many washes! Effortlessly light, breathable, and receives compliments everywhere.',
            rating: 5,
          },
          {
            name: 'Irina M.',
            city: 'Ashdod',
            order: 'Art Denim Jacket & Couture Alteration',
            text: 'Golden hands! Galina tailored a delicate silk designer gown to my exact figure and crafted a bespoke merino-felted denim jacket for me — a true wearable work of art.',
            rating: 5,
          },
        ]
      : [
          {
            name: 'Елена В.',
            city: 'Тель-Авив',
            order: 'Вечернее платье на свадьбу дочери',
            text: 'Галина сотворила настоящее чудо! Платье село с первой же примерки как влитое, подчеркнув силуэт и скрыв все нюансы. На торжестве все гости спрашивали, из какого миланского бутика этот наряд!',
            rating: 5,
          },
          {
            name: 'Ольга Р.',
            city: 'Нетания',
            order: 'Льняное платье с ручной росписью & Палантин',
            text: 'Ношу это платье уже второе лето. Роспись абсолютно не изменилась после многочисленных стирок! Невероятно легкое, дышащее и при этом привлекает взгляды буквально на каждом шагу.',
            rating: 5,
          },
          {
            name: 'Ирина М.',
            city: 'Ашдод',
            order: 'Арт-жакет & Подгонка вечернего платья',
            text: 'Золотые руки! Галина идеально посадила по фигуре сложное шелковое платье, за которое боялись браться в других местах, а ее джинсовый жакет с мериносом стал моей самой любимой вещью.',
            rating: 5,
          },
        ];

  return (
    <section className="py-20 sm:py-24 relative bg-noir-950 border-t border-gold-400/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-900 border border-gold-400/30 text-gold-300 text-[10px] sm:text-xs tracking-[0.2em] font-cinzel uppercase">
            <Star size={12} className="text-gold-400 fill-gold-400" />
            <span>{lang === 'he' ? 'חוויות לקוחות' : lang === 'en' ? 'Client Reviews' : 'Отзывы клиентов'}</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {t.testimonialsTitle}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            {t.testimonialsSubtitle}
          </p>
        </div>

        {/* 3 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl luxury-card bg-noir-900/80 border border-gold-400/15 flex flex-col justify-between space-y-5 hover:border-gold-400/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-gold-400" />
                    ))}
                  </div>
                  <Quote size={18} className="text-gold-400/30" />
                </div>

                <p className="font-cormorant italic text-base sm:text-lg text-slate-200 leading-relaxed">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-0.5">
                <div className="font-cormorant text-lg font-bold text-white">
                  {rev.name}
                </div>
                <div className="text-[10px] text-gold-400 font-cinzel tracking-wider uppercase">
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
