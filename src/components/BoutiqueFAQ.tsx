import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { STUDIO_INFO } from '../data/portfolioData';

export const BoutiqueFAQ: React.FC = () => {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = lang === 'he' ? [
    {
      q: 'איך מבצעים הזמנה באתר אם אין תשלום ישיר באשראי?',
      a: 'אנחנו פועלים כאטלייה הוט-קוטור מסורתי. את בוחרת את הפריט שאהבת, מוסיפה אותו לתיק ההזמנה או לוחצת על «הזמנה בווטסאפ / טלגרם». גלינה חוזרת אלייך, מבררת את מידות הגוף והעדפות הבד שלך, ומתאמת אופן תשלום נוח (ביט, פייבוקס, העברה בנקאית או מזומן באטלייה) בעת אישור ההזמנה.',
    },
    {
      q: 'האם ניתן להגיע למדידת פריטים מוכנים באטלייה באשדוד?',
      a: `בוודאי! האטלייה שלנו ממוקם ברחוב שבי ציון 2, אשדוד. אנו מקבלות לקוחות בתיאום מראש בימים ראשון עד שישי. תוכלי למדוד שמלות, מעילים ובגדים מהמלאי באווירה נעימה עם כוס קפה.`,
    },
    {
      q: 'מה לעשות אם אני גרה בתל אביב, ירושלים, חיפה או בצפון/בדרום?',
      a: 'למעלה מ-60% מהלקוחות שלנו מזמינות מרחוק. גלינה מסבירה בדיוק איך לקחת 3–4 מידות מפתח (או מדריכה אותך בשיחת וידאו בווטסאפ). הפריט המוכן נשלח עם שליח עד לפתח ביתך בכל רחבי הארץ.',
    },
    {
      q: 'כמה זמן אורכת תפירת בגד בהתאמה אישית?',
      a: 'אם הפריט קיים במלאי באטלייה — ניתן לאסוף אותו מיידית או לקבל במשלוח תוך 1–2 ימים. תפירת שמלה או ז׳קט חדש לפי מידותייך אורכת לרוב בין 5 ל-14 ימי עסקים בהתאם למורכבות עבודת היד והציור.',
    },
    {
      q: 'האם אתם מבצעים התאמה ותיקונים לבגדי מותגים וערב?',
      a: 'כן! באטלייה חוט זהב מתבצעים תיקוני יוקרה והתאמה מדויקת: הצרה והרחבה של שמלות ערב, קיצור מכפלות תוך שמירה על התפר המקורי, החלפת רוכסנים וחידוש בדי עור ומשי.',
    },
    {
      q: 'האם קיימת אפשרות למשלוח בינלאומי?',
      a: 'כן, אנו שולחות יצירות בעיצוב אישי עם שירותי אקספרס DHL / EMS לארה״ב, אירופה, קנדה ועוד. כל בגד נארז בקפידה בכיסוי מגן יוקרתי עם ברכה אישית מהמעצבת.',
    },
  ] : lang === 'en' ? [
    {
      q: 'How do I place an order if there is no credit card checkout on the website?',
      a: 'We operate as a classic haute couture atelier. You choose your favorite design, add it to your order bag or click «Order via WhatsApp / Telegram». We get in touch with you to confirm your exact measurements, fabric choices, and preferred payment method (Bit, PayBox, bank transfer, or cash in the atelier) upon confirmation.',
    },
    {
      q: 'Can I visit the atelier in Ashdod to try on finished dresses?',
      a: `Absolutely! Our studio is located at Shavei Tzion 2, Ashdod, Israel. We welcome clients by appointment Sunday through Friday. You can try on finished gowns, jackets, and accessories in a relaxed, personal atmosphere.`,
    },
    {
      q: 'What if I live outside Ashdod (Tel Aviv, Jerusalem, Haifa, North or South)?',
      a: 'More than 60% of our clients order remotely. Galina guides you through taking 3-4 key measurements (or assists you over a quick WhatsApp video call). The finished masterpiece is delivered by express courier straight to your door anywhere in Israel.',
    },
    {
      q: 'How long does custom bespoke tailoring take?',
      a: 'In-stock pieces can be picked up immediately or delivered within 1–2 days. Custom bespoke creations typically take 5 to 14 business days depending on the complexity of hand painting or nuno-felting work.',
    },
    {
      q: 'Do you offer designer clothing alterations and restorations?',
      a: 'Yes! We specialize in high-end alterations: bespoke fitting of evening gowns and suits, hem adjustments with original edge preservation, lining renewal, delicate knit repairs, and luxury leather/handbag restoration.',
    },
    {
      q: 'Do you ship internationally outside Israel?',
      a: 'Yes, we ship worldwide via DHL / EMS express to the US, Canada, Europe, and worldwide. Every piece is carefully packaged in a luxury garment case with a personalized greeting from Galina Khvostenko.',
    },
  ] : [
    {
      q: 'Как сделать заказ, если нет онлайн-оплаты картой на сайте?',
      a: 'Мы работаем как классическое кутюрное ателье. Вы выбираете понравившееся изделие на сайте, добавляете его в корзину заказа или нажимаете кнопку «Заказать в WhatsApp / Telegram». Мы связываемся с вами, уточняем ваш размер, особенности посадки или пожелания по ткани, и согласовываем удобный способ оплаты (Bit, PayBox, банковский перевод или наличными в ателье) после подтверждения заказа.',
    },
    {
      q: 'Можно ли приехать на примерку готовых изделий в ателье в Ашдоде?',
      a: `Конечно! Наше ателье находится по адресу: г. Ашдод, ул. Шавей Цион 2 (Shavei Tzion 2, Ashdod). Мы принимаем клиентов по предварительной записи с воскресенья по пятницу. Вы сможете примерить платья и пальто из наличия в приятной атмосфере за чашкой кофе.`,
    },
    {
      q: 'Что делать, если я живу в Тель-Авиве, Иерусалиме, Хайфе или на севере/юге страны?',
      a: 'Более 60% наших клиентов заказывают удаленно. Галина подсказывает, как снять 3-4 ключевые мерки (или делает это вместе с вами по видеосвязи в WhatsApp). Готовое изделие отправляется надежной курьерской доставкой прямо к вашей двери в любой город Израиля.',
    },
    {
      q: 'Сколько времени занимает индивидуальный пошив на заказ?',
      a: 'Если изделие есть в наличии в ателье — вы можете забрать его сразу или получить доставкой за 1-2 дня. Пошив нового платья или жакета по вашим меркам обычно занимает от 5 до 14 рабочих дней в зависимости от сложности ручной росписи или нуно-войлока.',
    },
    {
      q: 'Делаете ли вы подгонку по фигуре и ремонт брендовых вещей?',
      a: 'Да! В ателье Hutzahav выполняется профессиональная подгонка любой сложности: посадка вечерних и свадебных платьев, укорачивание низа с сохранением фирменного шва, подгонка пиджаков и брюк, замена молний и реставрация деликатных тканей.',
    },
    {
      q: 'Возможна ли доставка за пределы Израиля?',
      a: 'Да, мы отправляем авторские изделия экспресс-службами DHL / EMS в США, Канаду, Европу и страны СНГ. Каждое изделие бережно упаковывается в фирменный чехол с открыткой от мастера.',
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 bg-noir-950 border-t border-gold-400/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-850 border border-gold-400/30 text-gold-300 text-[11px] sm:text-xs tracking-[0.2em] font-cinzel uppercase">
            <HelpCircle size={13} className="text-gold-400" />
            <span>FAQ • {lang.toUpperCase()}</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {t.faqTitle}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="luxury-card rounded-2xl bg-noir-900 border border-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-start transition-colors hover:bg-white/[0.02]"
                >
                  <span className="font-cormorant text-lg sm:text-2xl font-bold text-white pr-3 rtl:pr-0 rtl:pl-3">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-gold-400/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-gold-400/10 text-gold-300' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm font-light leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
