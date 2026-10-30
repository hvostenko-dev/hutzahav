import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Calendar, Clock, Scissors, MessageCircle, Phone, CheckCircle, Sparkles, Send } from 'lucide-react';

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Пошив вечернего / праздничного платья',
    date: '',
    time: '14:00',
    type: 'Визит в ателье',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Здравствуйте, Галина! Запись на примерку с сайта Hutzahav:\n\n` +
        `• Имя: ${formData.name}\n` +
        `• Телефон: ${formData.phone}\n` +
        `• Услуга: ${formData.service}\n` +
        `• Формат: ${formData.type}\n` +
        `• Желаемая дата/время: ${formData.date || 'В ближайшие дни'} в ${formData.time}\n` +
        `• Пожелания: ${formData.notes || 'Обсудим при встрече'}`
    );
    window.open(`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-noir-900 border-t border-gold-400/20">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-800 border border-gold-400/30 text-gold-300 text-xs tracking-[0.2em] font-cinzel uppercase">
            <Calendar size={13} className="text-gold-400" />
            <span>Индивидуальная встреча</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Запись на Примерку в Ателье
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            Личная встреча с дизайнером Галиной Хвостенко. Выбор тканей, снятие анатомических мерок и отрисовка эскиза будущего шедевра.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Atelier Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* VIP Hotline Card */}
            <div className="p-8 rounded-3xl luxury-card bg-noir-850 border border-gold-400/30 space-y-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl gold-gradient-bg text-black flex items-center justify-center font-bold shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-cinzel text-xs text-gold-400 tracking-wider uppercase">
                    Прямой телефон ателье
                  </div>
                  <a
                    href={`tel:${STUDIO_INFO.phoneRaw}`}
                    className="font-cormorant text-2xl sm:text-3xl font-bold text-white hover:text-gold-300 transition-colors"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-cinzel font-bold text-xs tracking-wider uppercase transition-transform hover:scale-[1.02] shadow-xl"
                >
                  <MessageCircle size={18} />
                  <span>Написать в WhatsApp-чат</span>
                </a>
              </div>
            </div>

            {/* Atelier Info & Schedule */}
            <div className="p-8 rounded-3xl luxury-card bg-noir-850 border border-white/5 space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-noir-800 border border-white/5 text-gold-400">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-cinzel text-xs text-gold-400 tracking-wider uppercase">
                    Режим работы ателье
                  </div>
                  <div className="text-sm text-slate-200 mt-0.5">
                    Воскресенье — Четверг: 09:00 — 19:00<br />
                    Пятница: 09:00 — 14:00 (по предварительной записи)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="p-3 rounded-2xl bg-noir-800 border border-white/5 text-gold-400">
                  <Sparkles size={20} />
                </div>
                <div>
                  <div className="font-cinzel text-xs text-gold-400 tracking-wider uppercase">
                    Доставка & Онлайн-примерки
                  </div>
                  <div className="text-sm text-slate-200 mt-0.5">
                    Израиль и доставка по всему миру. Возможна видеоконсультация по снятию мерок.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl luxury-card bg-noir-850 border border-gold-400/30 shadow-2xl">
              
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
                  <CheckCircle size={44} className="text-emerald-400 mx-auto" />
                  <h3 className="font-cormorant text-3xl font-bold text-white">
                    Заявка на примерку сформирована!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Окно WhatsApp было открыто. Если этого не произошло, нажмите кнопку ниже:
                  </p>
                  <a
                    href={STUDIO_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase"
                  >
                    Перейти в чат WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-1.5">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Например: Виктория"
                        className="w-full bg-noir-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-1.5">
                        Телефон / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+972..."
                        className="w-full bg-noir-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-1.5">
                        Формат встречи:
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full bg-noir-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400"
                      >
                        <option value="Визит в ателье (примерка)">Личный визит в ателье (примерка)</option>
                        <option value="Онлайн-консультация по видеосвязи">Онлайн-консультация (видеосвязь)</option>
                        <option value="Выезд мастера">Выезд мастера</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-1.5">
                        Желаемая дата:
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-noir-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-1.5">
                      Услуга или изделие:
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-noir-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="Пошив вечернего / праздничного платья">Пошив вечернего / праздничного платья</option>
                      <option value="Дизайнерское льняное платье с ручной росписью">Дизайнерское льняное платье с ручной росписью</option>
                      <option value="Арт-жакет / пальто в технике нуно-войлока">Арт-жакет / пальто в технике нуно-войлока</option>
                      <option value="Подгонка по фигуре / Ремонт брендовой одежды">Подгонка по фигуре / Ремонт брендовой одежды</option>
                      <option value="Пошив штор и домашнего текстиля">Пошив штор и домашнего текстиля</option>
                      <option value="Сценические и карнавальные костюмы">Сценические и карнавальные костюмы</option>
                      <option value="Интерьерная картина на холсте">Интерьерная картина на холсте</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-cinzel text-[11px] font-semibold text-gold-300 tracking-wider uppercase mb-1.5">
                      Пожелания, фасон, повод:
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Опишите ваши идеи, повод (свадьба, юбилей, отпуск), желаемую длину или цвет..."
                      className="w-full bg-noir-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-transform"
                  >
                    <Send size={16} />
                    <span>Отправить бронирование примерки в WhatsApp</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
