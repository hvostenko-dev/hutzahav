import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { STUDIO_INFO } from '../data/portfolioData';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle, Mail, MapPin, Sparkles, ShieldCheck, Scissors } from 'lucide-react';
import { WhatsApp, Telegram } from './Icons';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    setIsSizeGuideOpen,
  } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [deliveryType, setDeliveryType] = useState('Примерка в ателье (Ашдод, Шавей Цион 2)');

  if (!isCartOpen) return null;

  const buildOrderSummary = () => {
    let text = `Здравствуйте, Галина! Хочу оформить заказ в ателье Hutzahav:\n\n`;
    cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.product.nameRu}\n`;
      text += `   • Размер: ${item.size}\n`;
      text += `   • Количество: ${item.quantity} шт.\n`;
      text += `   • Цена: ${item.product.price || 'По запросу'}\n\n`;
    });
    text += `💰 ИТОГО: ~${cartTotal.toLocaleString()} ₪\n\n`;
    if (customerName) text += `👤 Имя: ${customerName}\n`;
    if (customerPhone) text += `📱 Телефон: ${customerPhone}\n`;
    text += `📍 Способ получения: ${deliveryType}\n`;
    if (customerNotes) text += `📝 Пожелания/мерки: ${customerNotes}\n`;
    text += `\nУдобно обсудить детали и согласовать время примерки.`;
    return text;
  };

  const handleCheckoutWhatsApp = () => {
    const text = encodeURIComponent(buildOrderSummary());
    window.open(`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  const handleCheckoutTelegram = () => {
    window.open(`https://t.me/+${STUDIO_INFO.phoneRaw}`, '_blank');
  };

  const handleCheckoutEmail = () => {
    const subject = encodeURIComponent(`Заказ из интернет-магазина Hutzahav (${customerName || 'Новый клиент'})`);
    const body = encodeURIComponent(buildOrderSummary());
    window.location.href = `mailto:${STUDIO_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="w-full max-w-full sm:max-w-lg h-full bg-noir-900 border-l border-gold-400/30 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-noir-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gold-gradient-bg text-black flex items-center justify-center font-bold">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 className="font-cinzel text-base font-bold text-white tracking-wider uppercase">
                Корзина Заказа
              </h3>
              <div className="text-xs text-gold-400 font-mono">
                {cartCount === 0 ? 'Пусто' : `${cartCount} ${cartCount === 1 ? 'изделие' : cartCount < 5 ? 'изделия' : 'изделий'}`}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-slate-500 hover:text-red-400 p-1.5 transition-colors"
                title="Очистить корзину"
              >
                Очистить
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full bg-noir-850 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
              aria-label="Закрыть корзину"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Body Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 sm:space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-16 h-16 rounded-full bg-noir-800 border border-white/10 flex items-center justify-center mx-auto text-slate-600">
                <ShoppingBag size={30} />
              </div>
              <h4 className="font-cormorant text-2xl font-bold text-white">
                Ваша корзина пуста
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                Добавьте понравившиеся авторские платья, жакеты или текстиль из каталога ателье.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-wider"
              >
                Перейти в Lookbook
              </button>
            </div>
          ) : (
            <>
              {cart.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="p-4 rounded-2xl luxury-card bg-noir-850 border border-white/5 flex gap-4 group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
                    <img
                      src={item.product.coverImage}
                      alt={item.product.nameRu}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="font-cormorant text-lg font-bold text-white leading-snug line-clamp-1 group-hover:text-gold-200 transition-colors">
                          {item.product.nameRu}
                        </h5>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                          title="Удалить"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div className="text-xs text-gold-400 font-mono font-medium mt-0.5">
                        {item.product.price || 'Цена по запросу'}
                      </div>

                      <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-noir-800 border border-white/5 text-slate-300">
                          {item.size}
                        </span>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 bg-noir-800 border border-white/10 rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, -1)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-mono font-bold px-2 text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, 1)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="text-xs text-slate-400">
                        № {idx + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Order Options & Customizer */}
              <div className="pt-4 border-t border-white/10 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="font-cinzel text-xs font-bold text-gold-300 uppercase tracking-wider">
                    Детали заказа и примерки:
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-[11px] text-gold-400 hover:text-gold-300 underline font-cinzel"
                  >
                    Таблица размеров
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full bg-noir-850 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Телефон / WhatsApp"
                    className="w-full bg-noir-850 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <select
                    value={deliveryType}
                    onChange={(e) => setDeliveryType(e.target.value)}
                    className="w-full bg-noir-850 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-gold-400"
                  >
                    <option value="Примерка в ателье (Ашдод, Шавей Цион 2)">
                      📍 Примерка и самовывоз в Ашдоде (ул. Шавей Цион 2)
                    </option>
                    <option value="Курьерская доставка по Израилю">
                      📦 Доставка по Израилю
                    </option>
                    <option value="Международная доставка">
                      ✈️ Международная доставка
                    </option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={2}
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="Индивидуальные мерки (грудь, талия, рост) или пожелания..."
                    className="w-full bg-noir-850 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout Area */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-6 bg-noir-950 border-t border-gold-400/20 space-y-4">
            
            {/* Total */}
            <div className="flex items-baseline justify-between">
              <span className="font-cinzel text-xs uppercase tracking-widest text-slate-400">
                Итого к заказу:
              </span>
              <div className="text-right">
                <span className="font-cormorant text-3xl font-bold text-gold-300">
                  ~{cartTotal.toLocaleString()} ₪
                </span>
                <div className="text-[10px] text-slate-500">
                  * Оплата при примерке в ателье или согласовании
                </div>
              </div>
            </div>

            {/* Direct Checkout Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
              >
                <WhatsApp size={17} />
                <span>Оформить заказ в WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCheckoutTelegram}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-noir-850 hover:bg-[#229ED9] hover:text-white text-slate-200 border border-white/10 text-xs font-cinzel font-semibold transition-all"
                >
                  <Telegram size={15} className="text-[#229ED9]" />
                  <span>В Telegram</span>
                </button>

                <button
                  onClick={handleCheckoutEmail}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-noir-850 hover:bg-gold-500 hover:text-black text-slate-200 border border-white/10 text-xs font-cinzel font-semibold transition-all"
                >
                  <Mail size={15} className="text-gold-400" />
                  <span>По почте</span>
                </button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="pt-2 flex items-center justify-center gap-4 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Scissors size={11} className="text-gold-400" /> Подгонка бесплатно
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck size={11} className="text-gold-400" /> Примерка в Ашдоде
              </span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
