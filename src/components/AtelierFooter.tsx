import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, ArrowUp, MapPin, Navigation, ExternalLink, MessageCircle } from 'lucide-react';
import { Instagram, Facebook, Telegram } from './Icons';
import { Logo } from './Logo';

export const AtelierFooter: React.FC = () => {
  const { lang, t, dir } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-noir-950 border-t border-gold-400/20 pt-16 sm:pt-20 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Atelier */}
          <div className="space-y-4">
            <Logo size={48} showText={true} />

            <p className="text-xs text-slate-400 font-light leading-relaxed pt-1">
              {lang === 'he'
                ? 'אטלייה תפירה עילית של המעצבת גלינה חבוסטנקו. שמלות ערב וכלה, ציור ידני מקורי על משי ופשתן טהור, נונו-לבד וחידוש בגדי יוקרה באשדוד.'
                : lang === 'en'
                ? 'Haute couture bespoke atelier by Galina Khvostenko. Gala gowns, hand-painted natural silks and linens, nuno-felting art, and luxury label alterations in Ashdod, Israel.'
                : 'Авторское ателье высокого пошива Галины Хвостенко. Вечерние платья, ручная художественная роспись по ткани, нуно-войлок, премиум-подгонка брендовой одежды и интерьерный текстиль.'}
            </p>

            <div className="font-cinzel text-xs text-gold-400/80 tracking-widest pt-1">
              חוט זהב • HUTZAHAV ATELIER • ASHDOD
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <div className="font-cinzel text-xs font-bold text-white uppercase tracking-[0.2em]">
              {t.navServices}
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  {lang === 'he' ? 'תפירת שמלות ערב וכלה' : lang === 'en' ? 'Bespoke Evening & Bridal Gowns' : 'Пошив вечерних платьев'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  {lang === 'he' ? 'בגדים עם ציור ידני על משי' : lang === 'en' ? 'Hand-Painted Silks & Linens' : 'Платья с ручной росписью'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  {lang === 'he' ? 'ז׳קטים אמנותיים בצמר ומשי' : lang === 'en' ? 'Nuno-Felting & Art Denim' : 'Арт-жакеты & Нуно-войлок'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  {lang === 'he' ? 'התאמת בגדי מותגים ותיקונים' : lang === 'en' ? 'Designer Label Alterations' : 'Подгонка и ремонт брендов'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  {lang === 'he' ? 'וילונות וטקסטיל לבית' : lang === 'en' ? 'Curtains & Bedding Couture' : 'Пошив штор и текстиля'}
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gold-400 hover:text-gold-200 transition-colors font-medium">
                  {t.navCalculator} →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts */}
          <div className="space-y-3">
            <div className="font-cinzel text-xs font-bold text-white uppercase tracking-[0.2em]">
              {lang === 'he' ? 'יצירת קשר' : lang === 'en' ? 'Direct Contact' : 'Прямая связь'}
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
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <div className="text-slate-300 leading-relaxed">
                  <strong>{lang === 'he' ? STUDIO_INFO.addressHe : STUDIO_INFO.addressRu}</strong><br />
                  <span className="text-[11px] text-slate-400">Shavei Tzion 2, Ashdod</span>
                </div>
              </li>
              <li className="flex items-center gap-2 pt-1 text-[11px]">
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:underline flex items-center gap-1"
                >
                  <MapPin size={11} /> Google Maps
                </a>
                <span>•</span>
                <a
                  href={STUDIO_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:underline flex items-center gap-1"
                >
                  <Navigation size={11} /> Waze
                </a>
                <span>•</span>
                <a
                  href={STUDIO_INFO.easyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:underline"
                >
                  Easy.co.il
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Socials & Messengers */}
          <div className="space-y-3">
            <div className="font-cinzel text-xs font-bold text-white uppercase tracking-[0.2em]">
              {lang === 'he' ? 'רשתות חברתיות' : lang === 'en' ? 'Socials & Chat' : 'Мессенджеры & Соцсети'}
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              {lang === 'he'
                ? 'מוזמנות לכתוב לנו לכל שאלה או לעקוב אחרי היצירות החדשות:'
                : lang === 'en'
                ? 'Message us for immediate assistance or follow our atelier backstage:'
                : 'Напишите нам для мгновенной консультации или следите за закулисьем ателье:'}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-noir-850 hover:bg-[#25D366] hover:text-black text-slate-200 border border-white/10 text-xs transition-all"
                title="WhatsApp"
              >
                <MessageCircle size={14} className="text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={STUDIO_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-noir-850 hover:bg-[#229ED9] hover:text-white text-slate-200 border border-white/10 text-xs transition-all"
                title="Telegram"
              >
                <Telegram size={14} className="text-[#229ED9]" />
                <span>Telegram</span>
              </a>

              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-noir-850 hover:bg-gold-500 hover:text-black text-slate-200 border border-white/10 text-xs transition-all"
                title="Instagram"
              >
                <Instagram size={14} />
                <span>Instagram</span>
              </a>

              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-noir-850 hover:bg-gold-500 hover:text-black text-slate-200 border border-white/10 text-xs transition-all"
                title="Facebook"
              >
                <Facebook size={14} />
                <span>Facebook</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light text-center sm:text-left">
          <div className="break-words max-w-full">
            © {new Date().getFullYear()} HUTZAHAV ATELIER • חוט זהב by Galina Khvostenko • Shavei Tzion 2, Ashdod. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-cinzel text-xs text-slate-400 hover:text-gold-300 transition-colors uppercase tracking-widest"
          >
            <span>{lang === 'he' ? 'לראש העמוד' : lang === 'en' ? 'Back to Top' : 'В начало'}</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
