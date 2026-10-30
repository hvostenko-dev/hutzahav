import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { Instagram, Facebook } from './Icons';

export const AtelierFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-noir-950 border-t border-gold-400/20 pt-20 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Atelier */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/images/logo.jpg"
                alt="Hutzahav"
                className="w-12 h-12 rounded-full border border-gold-400/60 object-cover shadow-lg"
              />
              <div>
                <span className="font-cinzel text-2xl font-bold tracking-[0.2em] text-white">
                  HUTZAHAV
                </span>
                <div className="font-cinzel text-[9px] uppercase tracking-[0.3em] text-gold-400">
                  Atelier Haute Couture
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Авторская мастерская высокого пошива Галины Хвостенко. Вечерние и дизайнерские платья, ручная живопись по ткани, нуно-войлок, безупречная подгонка брендовой одежды и интерьерный текстиль.
            </p>

            <div className="font-cinzel text-xs text-gold-400/80 tracking-widest pt-1">
              חוט זהב • СТУДИЯ «ЗОЛОТАЯ НИТЬ»
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <div className="font-cinzel text-xs font-bold text-white uppercase tracking-[0.2em]">
              Услуги ателье
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  Пошив вечерних платьев
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  Платья с ручной росписью
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  Арт-жакеты & Нуно-войлок
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  Подгонка и ремонт брендов
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  Пошив штор и текстиля
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gold-400 hover:text-gold-200 transition-colors font-medium">
                  Калькулятор пошива →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts */}
          <div className="space-y-3">
            <div className="font-cinzel text-xs font-bold text-white uppercase tracking-[0.2em]">
              Прямая связь
            </div>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold-400 shrink-0" />
                <a href={`tel:${STUDIO_INFO.phoneRaw}`} className="text-slate-200 hover:text-gold-300 font-mono">
                  {STUDIO_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-gold-400 shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="text-slate-200 hover:text-gold-300 font-mono">
                  {STUDIO_INFO.email}
                </a>
              </li>
              <li className="text-slate-400 pt-1 leading-relaxed">
                Студия в Израиле.<br />Примерки по предварительной записи.<br />Доставка изделий по всему миру.
              </li>
            </ul>
          </div>

          {/* Col 4: Socials */}
          <div className="space-y-3">
            <div className="font-cinzel text-xs font-bold text-white uppercase tracking-[0.2em]">
              Социальные сети
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Следите за закулисьем ателье, новыми процессами росписи и коллекциями:
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-noir-850 hover:bg-gold-500 hover:text-black text-slate-200 border border-white/10 text-xs font-cinzel uppercase tracking-wider transition-all"
                title="Instagram"
              >
                <Instagram size={16} />
                <span>Instagram</span>
              </a>
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-noir-850 hover:bg-gold-500 hover:text-black text-slate-200 border border-white/10 text-xs font-cinzel uppercase tracking-wider transition-all"
                title="Facebook"
              >
                <Facebook size={16} />
                <span>Facebook</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <div>
            © {new Date().getFullYear()} HUTZAHAV ATELIER by Galina Khvostenko. Все права защищены.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-cinzel text-xs text-slate-400 hover:text-gold-300 transition-colors uppercase tracking-widest"
          >
            <span>В начало</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
