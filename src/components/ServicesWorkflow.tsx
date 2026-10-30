import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Scissors, Shirt, Home, Sparkles, Check, ArrowRight, MessageCircle } from 'lucide-react';

interface ServicesWorkflowProps {
  activeLang: 'ru' | 'en' | 'he';
}

export const ServicesWorkflow: React.FC<ServicesWorkflowProps> = ({ activeLang }) => {
  const services = [
    {
      title: 'Индивидуальный пошив на заказ',
      subtitle: 'Вечерние платья, костюмы, свадебные и выпускные образы',
      desc: 'Создание выкройки с нуля по вашим меркам. Работа со сложными деликатными тканями: шелк, кружево, бархат, жаккард. Идеальная посадка гарантирована.',
      priceFrom: 'от 800 ₪',
      icon: <Scissors size={24} className="text-gold-400" />,
      features: ['Вечерние и коктейльные платья', 'Сценические и карнавальные костюмы', 'Детская нарядная одежда'],
    },
    {
      title: 'Авторская одежда и роспись',
      subtitle: 'Уникальные платья, арт-жакеты, палантины, нуно-войлок',
      desc: 'Ручная художественная роспись стойкими текстильными пигментами по натуральному льну и шелку. Арт-деним с шерстяной вышивкой и валянием.',
      priceFrom: 'от 250 ₪',
      icon: <Shirt size={24} className="text-gold-400" />,
      features: ['Льняные платья с ручной росписью', 'Джинсовые жакеты в технике нуно-фелтинг', 'Шелковые шарфы и палантины'],
    },
    {
      title: 'Подгонка и сложная реставрация',
      subtitle: 'Ремонт брендовой одежды, подгонка по фигуре, обувь и сумки',
      desc: 'Безупречная подгонка костюмов и платьев по фигуре, укорачивание, ушивание, замена молний и фурнитуры, реставрация кожи, дубленок и любимых сумок.',
      priceFrom: 'от 49 ₪',
      icon: <Sparkles size={24} className="text-gold-400" />,
      features: ['Идеальная посадка готовой одежды', 'Реставрация брендовых вещей', 'Ремонт кожаных сумок и обуви'],
    },
    {
      title: 'Домашний текстиль и шторы',
      subtitle: 'Индивидуальный текстильный дизайн и уют для интерьера',
      desc: 'Пошив штор, авторского постельного белья из сатина и льна нестандартных размеров, покрывала, декоративные подушки и подбор премиальных тканей.',
      priceFrom: 'от 59 ₪',
      icon: <Home size={24} className="text-gold-400" />,
      features: ['Шторы и гардины на заказ', 'Постельное белье нестандартных размеров', 'Интерьерные картины на холсте'],
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Консультация & Идея',
      desc: 'Обсуждаем фасон, цветовую гамму, особенности фигуры и повод.',
    },
    {
      num: '02',
      title: 'Выбор ткани & Мерки',
      desc: 'Подбираем натуральные ткани премиум-качества и снимаем точные мерки.',
    },
    {
      num: '03',
      title: 'Примерка & Роспись',
      desc: 'Проводим промежуточную примерку, наносим ручную роспись или валяние.',
    },
    {
      num: '04',
      title: 'Готовый шедевр',
      desc: 'Вы получаете безупречный эксклюзивный наряд, созданный лично для вас.',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-atelier-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-atelier-surface border border-gold-500/25 text-gold-300 text-xs tracking-widest uppercase">
            <Scissors size={13} />
            <span>Услуги ателье</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Индивидуальный пошив & Услуги
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            Мы беремся за задачи любой сложности: от создания единственного в своем роде вечернего платья до тонкой реставрации любимых вещей.
          </p>
        </div>

        {/* 4 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-atelier-card border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-atelier-surface border border-gold-500/20 flex items-center justify-center">
                    {srv.icon}
                  </div>
                  <span className="font-serif text-base font-bold text-gold-300">
                    {srv.priceFrom}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-200 transition-colors">
                    {srv.title}
                  </h3>
                  <div className="text-xs text-gold-400/90 font-medium mt-1">
                    {srv.subtitle}
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {srv.desc}
                </p>

                <div className="pt-2 space-y-2 border-t border-white/5">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <Check size={14} className="text-gold-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <a
                  href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                    `Здравствуйте, Галина! Хочу проконсультироваться по услуге: "${srv.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                >
                  <span>Записаться на консультацию</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Process Bar */}
        <div className="p-8 sm:p-12 rounded-3xl bg-atelier-card/80 border border-gold-500/20 glass-panel">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Как создается ваш наряд
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Прозрачный и комфортный процесс от первой встречи до готового изделия
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, sIdx) => (
              <div
                key={sIdx}
                className="relative p-6 rounded-2xl bg-atelier-surface/80 border border-white/5 space-y-3"
              >
                <div className="font-serif text-3xl font-bold text-gold-400/50">
                  {st.num}
                </div>
                <h4 className="font-serif text-base font-bold text-white">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider gold-glow hover:scale-105 transition-transform"
            >
              <MessageCircle size={16} />
              <span>Начать обсуждение в WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
