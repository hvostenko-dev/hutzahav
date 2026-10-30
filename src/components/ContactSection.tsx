import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Phone, Mail, MessageCircle, Send, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Instagram, Facebook } from './Icons';

interface ContactSectionProps {
  activeLang: 'ru' | 'en' | 'he';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ activeLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Эксклюзивная одежда',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Здравствуйте, Галина!\n\nМеня зовут: ${formData.name}\nТелефон: ${formData.phone}\nИнтересует: ${formData.service}\nПожелания: ${formData.message}`
    );
    const waUrl = `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${text}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-atelier-dark overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-atelier-surface border border-gold-500/25 text-gold-300 text-xs tracking-widest uppercase">
            <MessageCircle size={13} />
            <span>Связаться с нами</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Контакты & Заказ
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            Мы с радостью ответим на любые вопросы, поможем с выбором фасона или ткани, рассчитаем стоимость и согласуем удобное время для визита или консультации.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-atelier-card border border-gold-500/25 space-y-4 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-gradient text-black flex items-center justify-center font-bold">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">
                    Прямой телефон & WhatsApp
                  </div>
                  <a
                    href={`tel:${STUDIO_INFO.phoneRaw}`}
                    className="font-serif text-2xl font-bold text-white hover:text-gold-300 transition-colors"
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
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs tracking-wider uppercase transition-transform hover:scale-[1.02] shadow-lg"
                >
                  <MessageCircle size={18} />
                  <span>Написать прямо в WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email & Location Card */}
            <div className="p-6 rounded-2xl bg-atelier-card border border-white/5 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-atelier-surface border border-white/5 text-gold-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">
                    Электронная почта
                  </div>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="text-base font-medium text-slate-200 hover:text-gold-300 transition-colors"
                  >
                    {STUDIO_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2 border-t border-white/5">
                <div className="p-3 rounded-xl bg-atelier-surface border border-white/5 text-gold-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">
                    Локация & Доставка
                  </div>
                  <div className="text-sm text-slate-200">
                    Израиль (доставка авторских изделий по всему миру)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-atelier-card border border-white/5 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Мы в социальных сетях:
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={STUDIO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-atelier-surface hover:bg-white/10 text-slate-200 hover:text-gold-300 border border-white/5 text-xs font-medium transition-colors"
                >
                  <Instagram size={18} className="text-pink-400" />
                  <span>Instagram</span>
                </a>

                <a
                  href={STUDIO_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-atelier-surface hover:bg-white/10 text-slate-200 hover:text-gold-300 border border-white/5 text-xs font-medium transition-colors"
                >
                  <Facebook size={18} className="text-blue-400" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Order Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-atelier-card border border-gold-500/25 glass-panel shadow-2xl space-y-6">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Оставить заявку на индивидуальный заказ
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Заполните форму, и сообщение мгновенно откроется в WhatsApp для прямой связи с Галиной
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle size={36} className="text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-white">
                    Заявка подготовлена!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Окно WhatsApp было открыто. Если этого не произошло, нажмите кнопку ниже:
                  </p>
                  <a
                    href={STUDIO_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2.5 rounded-full bg-gold-gradient text-black font-semibold text-xs uppercase"
                  >
                    Перейти в WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Например: Анна"
                        className="w-full bg-atelier-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5">
                        Телефон / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+972..."
                        className="w-full bg-atelier-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5">
                      Что вас интересует?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-atelier-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="Эксклюзивная одежда с ручной росписью">Эксклюзивная одежда с ручной росписью</option>
                      <option value="Пошив вечернего / праздничного платья">Пошив вечернего / праздничного платья</option>
                      <option value="Арт-жакет / Нуно-войлок">Арт-жакет / Нуно-войлок</option>
                      <option value="Шторы и домашний текстиль">Шторы и домашний текстиль</option>
                      <option value="Подгонка по фигуре / Ремонт одежды">Подгонка по фигуре / Ремонт одежды</option>
                      <option value="Картина на холсте для интерьера">Картина на холсте для интерьера</option>
                      <option value="Другой вопрос">Другой вопрос</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5">
                      Ваши пожелания или описание заказа
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите фасон, повод, примерные сроки или любые вопросы..."
                      className="w-full bg-atelier-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-gold-gradient text-black font-semibold text-sm uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-transform gold-glow"
                  >
                    <Send size={16} />
                    <span>Отправить запрос Галине в WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Нажимая кнопку, вы перейдете в чат с мастером в приложении WhatsApp
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
