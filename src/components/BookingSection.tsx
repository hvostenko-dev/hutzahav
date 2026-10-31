import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Clock, Scissors, MessageCircle, Phone, CheckCircle, Sparkles, Send, Mail, MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Telegram, WhatsApp, Instagram, Facebook } from './Icons';

export const BookingSection: React.FC = () => {
  const { lang, t, dir } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Пошив вечернего / праздничного платья',
    date: '',
    time: '14:00',
    type: 'Визит в ателье (Ашдод)',
    notes: '',
  });
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email' | 'telegram'>('whatsapp');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Запрос в ателье Hutzahav: ${formData.service} — ${formData.name}`);
    const messageBody =
      lang === 'he'
        ? `שלום גלינה!\n\nפנייה לתיאום מדידה / תפירה אישית:\n• שם: ${formData.name}\n• טלפון: ${formData.phone}\n• שירות מבוקש: ${formData.service}\n• פורמט: ${formData.type}\n• מועד רצוי: ${formData.date || 'בימים הקרובים'} בשעה ${formData.time}\n• הערות: ${formData.notes || 'נשוחח באופן אישי'}`
        : lang === 'en'
        ? `Hello Galina!\n\nBooking inquiry for Hutzahav Atelier:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${formData.service}\n• Format: ${formData.type}\n• Preferred Date: ${formData.date || 'Upcoming days'} at ${formData.time}\n• Notes: ${formData.notes || 'Discuss in person'}`
        : `Здравствуйте, Галина!\n\nЗаявка на индивидуальный пошив / примерку:\n• Имя: ${formData.name}\n• Телефон: ${formData.phone}\n• Услуга: ${formData.service}\n• Формат: ${formData.type}\n• Дата и время: ${formData.date || 'В ближайшие дни'} в ${formData.time}\n• Пожелания: ${formData.notes || 'Обсудим лично'}`;

    if (sendMethod === 'whatsapp') {
      window.open(`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(messageBody)}`, '_blank');
    } else if (sendMethod === 'telegram') {
      window.open(`https://t.me/+${STUDIO_INFO.phoneRaw}`, '_blank');
    } else {
      window.location.href = `mailto:${STUDIO_INFO.email}?subject=${subject}&body=${encodeURIComponent(messageBody)}`;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative bg-noir-900 border-t border-gold-400/20">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gold-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-850 border border-gold-400/30 text-gold-300 text-[11px] sm:text-xs tracking-[0.2em] font-cinzel uppercase">
            <MapPin size={13} className="text-gold-400" />
            <span>{t.bookingLocationHeading}</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {t.bookingTitle}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            {t.bookingSubtitle}
          </p>
        </div>

        {/* Top 4 Direct Communication Channels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-10 sm:mb-12">
          
          {/* WhatsApp */}
          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 sm:p-5 rounded-2xl luxury-card bg-noir-850 hover:bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2.5 sm:mb-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                <WhatsApp size={20} />
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase font-cinzel tracking-wider text-[#25D366] font-semibold">Online</span>
            </div>
            <div>
              <div className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">WhatsApp</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">{lang === 'he' ? 'צ׳אט מהיר עם המעצבת' : lang === 'en' ? 'Quick chat with Galina' : 'Быстрый чат с мастером'}</div>
            </div>
          </a>

          {/* Telegram */}
          <a
            href={STUDIO_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 sm:p-5 rounded-2xl luxury-card bg-noir-850 hover:bg-[#229ED9]/10 border border-[#229ED9]/30 hover:border-[#229ED9] transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2.5 sm:mb-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#229ED9]/15 text-[#229ED9] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Telegram size={19} />
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase font-cinzel tracking-wider text-[#229ED9] font-semibold">Chat</span>
            </div>
            <div>
              <div className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">Telegram</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">+972 58-587-7708</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${STUDIO_INFO.email}?subject=${encodeURIComponent('Запрос в ателье Hutzahav')}`}
            className="p-3.5 sm:p-5 rounded-2xl luxury-card bg-noir-850 hover:bg-gold-500/10 border border-gold-400/30 hover:border-gold-400 transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2.5 sm:mb-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={19} />
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase font-cinzel tracking-wider text-gold-400 font-semibold">Email</span>
            </div>
            <div>
              <div className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">{lang === 'he' ? 'דואר אלקטרוני' : lang === 'en' ? 'Send Email' : 'Написать Email'}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate" title={STUDIO_INFO.email}>
                {STUDIO_INFO.email}
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${STUDIO_INFO.phoneRaw}`}
            className="p-3.5 sm:p-5 rounded-2xl luxury-card bg-noir-850 hover:bg-gold-500/10 border border-gold-400/30 hover:border-gold-400 transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2.5 sm:mb-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={18} />
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase font-cinzel tracking-wider text-gold-400 font-semibold">Direct</span>
            </div>
            <div>
              <div className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">{lang === 'he' ? 'טלפון ישיר' : lang === 'en' ? 'Studio Phone' : 'Телефон ателье'}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate">{STUDIO_INFO.phone}</div>
            </div>
          </a>

        </div>

        {/* Main Content Grid: Interactive Form & Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-6">
            <div className="p-4 sm:p-8 rounded-3xl luxury-card bg-noir-850 border border-gold-400/30 shadow-2xl space-y-5 sm:space-y-6">
              
              <div>
                <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white">
                  {lang === 'he' ? 'תיאום מדידה אישית באטלייה' : lang === 'en' ? 'Schedule a Private Fitting' : 'Запись на индивидуальную примерку'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'he' ? 'ההודעה תיפתח מיידית בווטסאפ, טלגרם או בדוא״ל' : lang === 'en' ? 'Select your channel — the request will open in WhatsApp, Telegram or Email' : 'Выберите способ связи — заявка моментально откроется в WhatsApp, Telegram или почтовом клиенте'}
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
                  <CheckCircle size={44} className="text-emerald-400 mx-auto" />
                  <h4 className="font-cormorant text-2xl font-bold text-white">
                    {lang === 'he' ? 'הפנייה מוכנה לשליחה!' : lang === 'en' ? 'Request Prepared!' : 'Заявка сформирована!'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {lang === 'he' ? 'תוכלי גם לפנות לגלינה ישירות בכל עת:' : lang === 'en' ? 'You can also reach Galina directly:' : 'Вы также можете напрямую связаться с Галиной:'}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center pt-2">
                    <a
                      href={STUDIO_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#25D366] text-black font-cinzel font-bold text-xs uppercase"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="px-5 py-2.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase"
                    >
                      Email
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-1.5">
                        {lang === 'he' ? 'שם מלא *' : lang === 'en' ? 'Your Name *' : 'Ваше имя *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.bookingNamePlaceholder}
                        className="w-full bg-noir-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-1.5">
                        {lang === 'he' ? 'טלפון / ווטסאפ *' : lang === 'en' ? 'Phone / WhatsApp *' : 'Телефон / WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.bookingPhonePlaceholder}
                        className="w-full bg-noir-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Format and Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-1.5">
                        {lang === 'he' ? 'אופי הפגישה:' : lang === 'en' ? 'Meeting Format:' : 'Формат встречи:'}
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full bg-noir-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400"
                      >
                        <option value="Визит в ателье (Ашдод, Shavei Tzion 2)">
                          {lang === 'he' ? 'הגעה לאטלייה (אשדוד, שבי ציון 2)' : lang === 'en' ? 'Studio Visit (Ashdod)' : 'Визит в ателье (Ашдод)'}
                        </option>
                        <option value="Онлайн-консультация (видеосвязь)">
                          {lang === 'he' ? 'ייעוץ וידאו אונליין' : lang === 'en' ? 'Remote Video Consultation' : 'Онлайн-консультация'}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-1.5">
                        {lang === 'he' ? 'תאריך רצוי:' : lang === 'en' ? 'Preferred Date:' : 'Желаемая дата:'}
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-noir-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-1.5">
                      {lang === 'he' ? 'פרטים או הערות לבגד:' : lang === 'en' ? 'Vision, Fabric, or Event Notes:' : 'Пожелания к наряду:'}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={t.bookingNotesPlaceholder}
                      className="w-full bg-noir-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  {/* Sending Channel Choice */}
                  <div>
                    <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-2">
                      {lang === 'he' ? 'ערוץ שליחה מועדף:' : lang === 'en' ? 'Send Request Via:' : 'Куда отправить заявку:'}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setSendMethod('whatsapp')}
                        className={`py-2 px-3 rounded-xl border text-xs font-cinzel font-semibold uppercase flex items-center justify-center gap-1.5 transition-all ${
                          sendMethod === 'whatsapp'
                            ? 'bg-[#25D366] text-black border-[#25D366] shadow-md'
                            : 'bg-noir-800 text-slate-300 border-white/10 hover:border-[#25D366]/40'
                        }`}
                      >
                        <WhatsApp size={15} /> WhatsApp
                      </button>

                      <button
                        type="button"
                        onClick={() => setSendMethod('telegram')}
                        className={`py-2 px-3 rounded-xl border text-xs font-cinzel font-semibold uppercase flex items-center justify-center gap-1.5 transition-all ${
                          sendMethod === 'telegram'
                            ? 'bg-[#229ED9] text-white border-[#229ED9] shadow-md'
                            : 'bg-noir-800 text-slate-300 border-white/10 hover:border-[#229ED9]/40'
                        }`}
                      >
                        <Telegram size={15} /> Telegram
                      </button>

                      <button
                        type="button"
                        onClick={() => setSendMethod('email')}
                        className={`py-2 px-3 rounded-xl border text-xs font-cinzel font-semibold uppercase flex items-center justify-center gap-1.5 transition-all ${
                          sendMethod === 'email'
                            ? 'gold-gradient-bg text-black border-gold-400 shadow-md'
                            : 'bg-noir-800 text-slate-300 border-white/10 hover:border-gold-400/40'
                        }`}
                      >
                        <Mail size={15} /> Email
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-transform active:scale-95"
                  >
                    <Send size={16} />
                    <span>{t.bookingSubmitBtn}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Google Maps Geolocation & Physical Address */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Interactive Embedded Google Maps Frame */}
            <div className="rounded-3xl overflow-hidden luxury-card border border-gold-400/30 shadow-2xl bg-noir-850 p-2">
              <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-noir-800">
                <iframe
                  title="Hutzahav Sewing Workshop Location"
                  src={STUDIO_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Floating Map Pin Badge */}
                <div className="absolute top-3 left-3 bg-noir-950/90 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl border border-gold-400/30 flex items-center gap-2 sm:gap-2.5 shadow-xl max-w-[calc(100%-24px)]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full gold-gradient-bg text-black flex items-center justify-center font-bold shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div className="truncate">
                    <div className="font-cinzel text-xs font-bold text-white truncate">HUTZAHAV • חוט זהב</div>
                    <div className="text-[10px] text-gold-300 font-mono truncate">Shavei Tzion 2, Ashdod</div>
                  </div>
                </div>
              </div>

              {/* Navigation Action Buttons Row */}
              <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-noir-800 hover:bg-gold-500 hover:text-black border border-white/10 text-slate-200 text-xs font-cinzel font-medium transition-all"
                >
                  <MapPin size={14} className="text-gold-400" />
                  <span>{t.bookingOpenGoogleMaps}</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>

                <a
                  href={STUDIO_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-noir-800 hover:bg-[#33ccff] hover:text-black border border-white/10 text-slate-200 text-xs font-cinzel font-medium transition-all"
                >
                  <Navigation size={14} className="text-[#33ccff]" />
                  <span>{t.bookingOpenWaze}</span>
                </a>

                <a
                  href={STUDIO_INFO.easyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-noir-800 hover:bg-gold-500 hover:text-black border border-white/10 text-slate-200 text-xs font-cinzel font-medium transition-all"
                >
                  <span>{t.bookingOpenEasy}</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </div>
            </div>

            {/* Address Details & Working Hours */}
            <div className="p-4 sm:p-7 rounded-3xl luxury-card bg-noir-850 border border-white/5 space-y-4">
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-noir-800 border border-white/5 text-gold-400 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="font-cinzel text-xs text-gold-400 tracking-wider uppercase font-semibold">
                    {lang === 'he' ? 'כתובת האטלייה:' : lang === 'en' ? 'Studio Address:' : 'Точный адрес студии:'}
                  </div>
                  <div className="font-cormorant text-xl font-bold text-white mt-1">
                    {lang === 'he' ? STUDIO_INFO.addressHe : STUDIO_INFO.addressRu}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-mono">
                    Shavei Tzion 2, Ashdod, Israel
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-white/5">
                <div className="p-3 rounded-2xl bg-noir-800 border border-white/5 text-gold-400 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-cinzel text-xs text-gold-400 tracking-wider uppercase font-semibold">
                    {lang === 'he' ? 'שעות פעילות:' : lang === 'en' ? 'Working Hours:' : 'Часы работы:'}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {lang === 'he' ? 'ראשון — חמישי: 09:00 — 19:00 | שישי: 09:00 — 14:00 (בתיאום מראש)' : lang === 'en' ? 'Sunday — Thursday: 09:00 — 19:00 | Friday: 09:00 — 14:00 (by appointment)' : 'Воскресенье — Четверг: 09:00 — 19:00 | Пятница: 09:00 — 14:00 (по предварительной записи)'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-white/5">
                <div className="p-3 rounded-2xl bg-noir-800 border border-white/5 text-gold-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-cinzel text-xs text-gold-400 tracking-wider uppercase font-semibold">
                    {lang === 'he' ? 'דוא״ל רשמי:' : lang === 'en' ? 'Official Email:' : 'Официальная почта:'}
                  </div>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="text-xs text-gold-300 hover:text-gold-200 transition-colors font-mono mt-1 block"
                  >
                    {STUDIO_INFO.email}
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
