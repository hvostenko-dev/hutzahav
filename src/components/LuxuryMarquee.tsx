import React from 'react';

export const LuxuryMarquee: React.FC = () => {
  const words = [
    'HAUTE COUTURE',
    'ИНДИВИДУАЛЬНЫЙ ПОШИВ',
    'РУЧНАЯ РОСПИСЬ ШЕЛКА И ЛЬНА',
    'НУНО-ФЕЛТИНГ & ШЕРСТЬ',
    'ПОШИВ ВЕЧЕРНИХ ПЛАТЬЕВ',
    'ПОДГОНКА & РЕСТАВРАЦИЯ БРЕНДОВ',
    'ШТОРЫ И ДОМАШНИЙ ТЕКСТИЛЬ',
    'КАРТИНЫ НА ХОЛСТЕ',
    'חוט זהב • HUTZAHAV ATELIER',
    'ИДЕАЛЬНАЯ ПОСАДКА',
  ];

  return (
    <div className="relative py-4 bg-noir-850 border-y border-gold-400/20 overflow-hidden select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-noir-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-noir-900 to-transparent z-10 pointer-events-none"></div>

      <div className="flex whitespace-nowrap animate-marquee">
        {[...words, ...words].map((word, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="font-cinzel text-xs tracking-[0.25em] text-gold-300/80 font-medium uppercase">
              {word}
            </span>
            <span className="ml-6 text-gold-500/40 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};
