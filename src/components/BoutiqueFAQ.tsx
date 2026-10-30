import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

export const BoutiqueFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
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
            <span>Частые Вопросы</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Всё о Заказе, Примерке & Доставке
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            Ответы на главные вопросы об онлайн-заказе и визите в ателье в Ашдоде.
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
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="font-cormorant text-xl sm:text-2xl font-bold text-white pr-4">
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
