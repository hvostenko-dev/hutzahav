import React from 'react';
import { useCart } from '../context/CartContext';
import { PORTFOLIO_ITEMS, STUDIO_INFO, PortfolioItem } from '../data/portfolioData';
import { X, Heart, ShoppingBag, Trash2, ArrowRight, Sparkles } from 'lucide-react';
import { WhatsApp } from './Icons';

interface WishlistDrawerProps {
  onItemSelect: (item: PortfolioItem) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ onItemSelect }) => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart } = useCart();

  if (!isWishlistOpen) return null;

  const savedItems = PORTFOLIO_ITEMS.filter((item) => wishlist.includes(item.id));

  const handleShareWishlistWhatsApp = () => {
    let text = `Здравствуйте, Галина! Мне понравились следующие изделия из коллекции Hutzahav (мой вишлист):\n\n`;
    savedItems.forEach((item, idx) => {
      text += `${idx + 1}. ${item.nameRu} (${item.price || 'цена по запросу'})\n`;
    });
    text += `\nХочу узнать наличие и возможность примерки в ателье в Ашдоде!`;
    window.open(`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleMoveAllToCart = () => {
    savedItems.forEach((item) => {
      addToCart(item, 'Индивидуальный пошив');
    });
    setIsWishlistOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={() => setIsWishlistOpen(false)}
    >
      <div
        className="w-full max-w-full sm:max-w-lg h-full bg-noir-900 border-l border-gold-400/30 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-noir-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center font-bold">
              <Heart size={20} className="fill-gold-400" />
            </div>
            <div>
              <h3 className="font-cinzel text-base font-bold text-white tracking-wider uppercase">
                Список Желаний
              </h3>
              <div className="text-xs text-gold-400 font-mono">
                {savedItems.length === 0 ? 'Нет избранных' : `${savedItems.length} сохраненных изделий`}
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 rounded-full bg-noir-850 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
            aria-label="Закрыть список желаний"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 sm:space-y-4">
          {savedItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-16 h-16 rounded-full bg-noir-850 border border-white/10 flex items-center justify-center mx-auto text-slate-600">
                <Heart size={30} />
              </div>
              <h4 className="font-cormorant text-2xl font-bold text-white">
                Ваш список желаний пуст
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                Нажимайте на значок сердечка на карточках каталога, чтобы сохранить понравившиеся платья и жакеты.
              </p>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="mt-4 px-6 py-2.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-wider"
              >
                Перейти в каталог
              </button>
            </div>
          ) : (
            savedItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-noir-850 border border-white/10 flex items-center gap-4 hover:border-gold-400/30 transition-all group"
              >
                <div
                  className="w-16 h-20 rounded-xl overflow-hidden bg-black shrink-0 cursor-pointer"
                  onClick={() => {
                    setIsWishlistOpen(false);
                    onItemSelect(item);
                  }}
                >
                  <img
                    src={item.coverImage}
                    alt={item.nameRu}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <h4
                    className="font-cormorant text-lg font-bold text-white truncate cursor-pointer hover:text-gold-300 transition-colors"
                    onClick={() => {
                      setIsWishlistOpen(false);
                      onItemSelect(item);
                    }}
                  >
                    {item.nameRu}
                  </h4>
                  {item.price && (
                    <div className="text-xs font-semibold text-gold-400">{item.price}</div>
                  )}
                  <div className="text-[11px] text-slate-400 truncate">{item.tags.join(' • ')}</div>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <button
                    onClick={() => addToCart(item, 'Индивидуальный пошив')}
                    className="p-2 rounded-xl gold-gradient-bg text-black hover:scale-105 transition-transform"
                    title="Добавить в заказ"
                  >
                    <ShoppingBag size={15} />
                  </button>
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="p-2 rounded-xl bg-noir-800 text-slate-400 hover:text-red-400 border border-white/5 transition-colors"
                    title="Удалить из избранного"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {savedItems.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-white/10 bg-noir-950 space-y-3">
            <button
              onClick={handleMoveAllToCart}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform shadow-xl"
            >
              <ShoppingBag size={16} />
              <span>Добавить все в корзину заказа</span>
            </button>

            <button
              onClick={handleShareWishlistWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-cinzel text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <WhatsApp size={15} />
              <span>Обсудить избранное в WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
