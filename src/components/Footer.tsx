import React from 'react';
import { STUDIO_INFO, CATEGORIES } from '../data/portfolioData';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { Instagram, Facebook } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gold-500/20 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="Hutzahav"
                className="w-10 h-10 rounded-full border border-gold-400/50 object-cover"
              />
              <span className="font-serif text-2xl font-bold text-gold-gradient">
                HUTZAHAV
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Авторская студия высокой моды и текстильного дизайна Галины Хвостенко. Эксклюзивная одежда с ручной росписью, нуно-войлок, пошив вечерних платьев и домашний уют.
            </p>
            <div className="text-[11px] text-gold-400 font-mono">
              חוט זהב • HUTZAHAV STUDIO
            </div>
          </div>

          {/* Directions / Collections */}
          <div className="space-y-3">
            <div className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Направления
            </div>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(1).map((cat) => (
                <li key={cat.id}>
                  <a href="#gallery" className="hover:text-gold-300 transition-colors">
                    {cat.titleRu}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-3">
            <div className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Контакты
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold-400 shrink-0" />
                <a href={`tel:${STUDIO_INFO.phoneRaw}`} className="hover:text-gold-300">
                  {STUDIO_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold-400 shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-gold-300">
                  {STUDIO_INFO.email}
                </a>
              </li>
              <li className="text-slate-500 pt-1">
                Израиль (доставка по всему миру)
              </li>
            </ul>
          </div>

          {/* Socials & Studio Hours */}
          <div className="space-y-3">
            <div className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Мы на связи
            </div>
            <p className="text-xs text-slate-400">
              Следите за новыми коллекциями и процессом создания в социальных сетях:
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-atelier-surface hover:bg-gold-500 hover:text-black text-slate-300 border border-white/10 transition-colors"
                title="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-atelier-surface hover:bg-gold-500 hover:text-black text-slate-300 border border-white/10 transition-colors"
                title="Facebook"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} HUTZAHAV STUDIO by Galina Khvostenko. Все права защищены.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-gold-300 transition-colors"
          >
            <span>Наверх</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
