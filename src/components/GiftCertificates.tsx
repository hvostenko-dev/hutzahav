import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Gift, Sparkles, Check, ArrowRight, Heart, Crown } from 'lucide-react';
import { WhatsApp, Telegram } from './Icons';
import { Logo } from './Logo';

export const GiftCertificates: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [recipientName, setRecipientName] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const amounts = [300, 500, 1000, 2000];

  const finalAmount = customAmount ? parseInt(customAmount, 10) || selectedAmount : selectedAmount;

  const handleOrderWhatsApp = () => {
    let text = `Здравствуйте, Галина! Хочу оформить подарочный сертификат ателье Hutzahav:\n\n`;
    text += `🎁 Номинал: ${finalAmount} ₪\n`;
    if (recipientName) text += `👤 Кому: ${recipientName}\n`;
    if (senderName) text += `💌 От кого: ${senderName}\n`;
    if (message) text += `💬 Пожелание: «${message}»\n`;
    text += `\nХочу получить красивый именной сертификат (электронный или в подарочном конверте в ателье в Ашдоде)!`;
    window.open(`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="gift-certificates" className="py-20 sm:py-24 bg-noir-900 border-t border-gold-400/20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-850 border border-gold-400/30 text-gold-300 text-[11px] sm:text-xs tracking-[0.2em] font-cinzel uppercase">
            <Gift size={13} className="text-gold-400" />
            <span>Эксклюзивный Подарок</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Подарочные Сертификаты Ателье
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            Подарите незабываемые эмоции создания идеального наряда. Сертификат на индивидуальный пошив или авторские изделия у мастера Галины Хвостенко.
          </p>
        </div>

        {/* Certificate Designer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* LEFT: Live Certificate Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[1.6/1] sm:aspect-[1.58/1] rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-noir-950 via-noir-900 to-[#1c1813] border-2 border-gold-400/40 shadow-2xl shadow-gold-500/10 flex flex-col justify-between overflow-hidden group">
              {/* Gold luxury border pattern */}
              <div className="absolute inset-2 border border-gold-400/20 rounded-2xl pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl"></div>

              {/* Card Top */}
              <div className="flex items-start justify-between relative z-10">
                <Logo size={42} showText={true} />
                <div className="flex flex-col items-end">
                  <span className="font-cinzel text-[9px] uppercase tracking-widest text-gold-400">
                    GIFT CERTIFICATE
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">
                    № HZ-{finalAmount}-ASH
                  </span>
                </div>
              </div>

              {/* Card Center: Recipient & Value */}
              <div className="relative z-10 py-3">
                <div className="font-cinzel text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">
                  Сертификат на сумму:
                </div>
                <div className="font-cormorant text-4xl sm:text-5xl font-bold gold-gradient-text">
                  {finalAmount.toLocaleString()} ₪
                </div>
                <div className="text-xs text-slate-300 font-cormorant italic mt-1 line-clamp-1">
                  {recipientName ? `Для: ${recipientName}` : 'На индивидуальный пошив и авторские изделия'}
                </div>
              </div>

              {/* Card Bottom */}
              <div className="flex items-end justify-between relative z-10 pt-2 border-t border-gold-400/20">
                <div className="text-[10px] text-slate-400 font-cinzel">
                  <div>Ателье «HUTZAHAV»</div>
                  <div className="text-gold-400/80">Ашдод, Шавей Цион 2</div>
                </div>
                <div className="w-8 h-8 rounded-full gold-gradient-bg text-black flex items-center justify-center font-bold text-xs shadow-md">
                  <Crown size={14} />
                </div>
              </div>
            </div>

            <div className="mt-4 text-center text-xs text-slate-400">
              * Доступен в электронном виде (PDF) или в подарочной бархатной упаковке с доставкой.
            </div>
          </div>

          {/* RIGHT: Customization Controls (7 cols) */}
          <div className="lg:col-span-7 luxury-card bg-noir-850 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            
            {/* Amount Selection */}
            <div>
              <label className="block font-cinzel text-xs uppercase tracking-wider text-gold-300 mb-3">
                1. Выберите номинал сертификата (₪):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {amounts.map((amt) => {
                  const active = selectedAmount === amt && !customAmount;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-4 rounded-2xl font-cinzel text-sm uppercase font-bold tracking-wider transition-all ${
                        active
                          ? 'gold-gradient-bg text-black shadow-lg shadow-gold-500/20 scale-105'
                          : 'bg-noir-900 text-slate-300 hover:text-white border border-white/10 hover:border-gold-400/40'
                      }`}
                    >
                      {amt} ₪
                    </button>
                  );
                })}
              </div>

              <div className="mt-3">
                <input
                  type="number"
                  placeholder="Или введите свою сумму (₪)..."
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full bg-noir-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
            </div>

            {/* Recipient details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-cinzel text-xs uppercase tracking-wider text-slate-300 mb-2">
                  Имя получателя:
                </label>
                <input
                  type="text"
                  placeholder="Например: Любимая мама, Анна..."
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full bg-noir-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>

              <div>
                <label className="block font-cinzel text-xs uppercase tracking-wider text-slate-300 mb-2">
                  Ваше имя (от кого):
                </label>
                <input
                  type="text"
                  placeholder="Ваше имя..."
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full bg-noir-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
            </div>

            {/* Wishing Message */}
            <div>
              <label className="block font-cinzel text-xs uppercase tracking-wider text-slate-300 mb-2">
                Теплые пожелания (будут напечатаны на открытке):
              </label>
              <textarea
                rows={2}
                placeholder="С любовью в день рождения! Пусть это платье подчеркнет твою красоту..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-noir-900 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform shadow-xl"
              >
                <WhatsApp size={16} />
                <span>Заказать сертификат в WhatsApp</span>
              </button>

              <a
                href={STUDIO_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#229ED9]/20 hover:bg-[#229ED9]/30 text-[#229ED9] border border-[#229ED9]/40 font-cinzel font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <Telegram size={16} />
                <span>Telegram</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
