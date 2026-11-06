import React, { useState, useMemo } from 'react';
import { CATEGORIES, PortfolioItem, STUDIO_INFO } from '../data/portfolioData';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import {
  Search,
  Sparkles,
  Scissors,
  Shirt,
  Feather,
  MessageCircle,
  Maximize2,
  Heart,
  ShoppingBag,
  Ruler,
  Droplets,
} from 'lucide-react';

interface LookbookCatalogProps {
  items: PortfolioItem[];
  onItemSelect: (item: PortfolioItem) => void;
  onOpenFabricGuide?: () => void;
}

export const LookbookCatalog: React.FC<LookbookCatalogProps> = ({
  items,
  onItemSelect,
  onOpenFabricGuide,
}) => {
  const { addToCart, toggleWishlist, isInWishlist, setIsSizeGuideOpen } = useCart();
  const { lang, t } = useLanguage();
  const [category, setCategory] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchCat = category === 'all' || item.category === category;
      const q = search.toLowerCase().trim();
      if (!q) return matchCat;

      const matchSearch =
        item.nameRu.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.nameHe.toLowerCase().includes(q) ||
        item.descriptionRu.toLowerCase().includes(q) ||
        item.tags.some((tg) => tg.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });
  }, [items, category, search]);

  const counts = useMemo(() => {
    const res: Record<string, number> = { all: items.length };
    items.forEach((it) => {
      res[it.category] = (res[it.category] || 0) + 1;
    });
    return res;
  }, [items]);

  const getIcon = (id: string) => {
    switch (id) {
      case 'dresses':
        return <Shirt size={13} />;
      case 'jackets_felting':
        return <Scissors size={13} />;
      case 'accessories':
        return <Feather size={13} />;
      case 'atelier_tailoring':
        return <Scissors size={13} />;
      default:
        return <Sparkles size={13} />;
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'dresses':
        return t.catDresses;
      case 'jackets_felting':
        return t.catJackets;
      case 'accessories':
        return t.catAccessories;
      case 'atelier_tailoring':
        return t.catTailoring;
      default:
        return t.catAll;
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 relative bg-noir-950 border-t border-gold-400/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-900 border border-gold-400/30 text-gold-300 text-[10px] sm:text-xs tracking-[0.2em] font-cinzel uppercase">
            <Sparkles size={12} className="text-gold-400" />
            <span>Lookbook & Boutique</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {t.catalogTitle}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            {t.catalogSubtitle}
          </p>

          {/* Assistant Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-noir-900 hover:bg-noir-850 border border-gold-400/20 text-gold-300 text-[11px] font-cinzel tracking-wider transition-colors"
            >
              <Ruler size={12} />
              <span>{t.catalogSizeGuideBtn}</span>
            </button>

            {onOpenFabricGuide && (
              <button
                onClick={onOpenFabricGuide}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-noir-900 hover:bg-noir-850 border border-gold-400/20 text-gold-300 text-[11px] font-cinzel tracking-wider transition-colors"
              >
                <Droplets size={12} />
                <span>{t.catalogFabricGuideBtn}</span>
              </button>
            )}
          </div>
        </div>

        {/* Minimalist Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 sm:mb-10 pb-5 border-b border-white/10">
          
          {/* Category Pills */}
          <div className="w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none flex items-center gap-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const active = category === cat.id;
              const count = counts[cat.id] || 0;
              const title =
                cat.id === 'all'
                  ? t.catAll
                  : lang === 'he'
                  ? cat.titleHe
                  : lang === 'en'
                  ? cat.titleEn
                  : cat.titleRu;

              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full font-cinzel text-[11px] uppercase tracking-wider transition-all duration-200 shrink-0 ${
                    active
                      ? 'gold-gradient-bg text-black font-bold shadow-md'
                      : 'bg-noir-900 text-slate-300 hover:text-white border border-white/10'
                  }`}
                >
                  {getIcon(cat.id)}
                  <span>{title}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      active ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Minimalist Search Input */}
          <div className="relative w-full md:w-60 shrink-0">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.catalogSearchPlaceholder}
              className="w-full bg-noir-900 border border-white/10 rounded-full pl-9 pr-8 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400/50 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 rounded-3xl luxury-card bg-noir-900 border border-white/10">
            <p className="text-slate-400 text-sm font-light">
              {t.catalogEmpty}
            </p>
            <button
              onClick={() => {
                setCategory('all');
                setSearch('');
              }}
              className="mt-4 px-6 py-2.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase"
            >
              {t.catalogResetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredItems.map((item) => {
              const favorite = isInWishlist(item.id);
              const name =
                lang === 'he'
                  ? item.nameHe || item.nameRu
                  : lang === 'en'
                  ? item.nameEn || item.nameRu
                  : item.nameRu;
              const desc =
                lang === 'he'
                  ? item.descriptionHe || item.descriptionRu
                  : lang === 'en'
                  ? item.descriptionEn || item.descriptionRu
                  : item.descriptionRu;

              return (
                <div
                  key={item.id}
                  onClick={() => onItemSelect(item)}
                  className="group relative rounded-3xl overflow-hidden luxury-card bg-noir-900/90 border border-white/5 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1 shadow-xl cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Photo with zoom effect */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-black">
                      <img
                        src={item.coverImage}
                        alt={name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-black/20 opacity-65 group-hover:opacity-35 transition-opacity"></div>

                      {/* Top Action Buttons: Category Pill & Wishlist Heart */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="font-cinzel text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-gold-300 border border-gold-400/30 pointer-events-auto">
                          {getCategoryLabel(item.category)}
                        </span>

                        <div className="flex items-center gap-1.5 pointer-events-auto">
                          {item.images.length > 1 && (
                            <span className="bg-black/75 backdrop-blur-md text-[10px] font-medium text-slate-200 px-2 py-0.5 rounded-full border border-white/10">
                              +{item.images.length - 1}
                            </span>
                          )}

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleWishlist(item.id);
                            }}
                            className={`p-2 rounded-full backdrop-blur-md transition-all ${
                              favorite
                                ? 'bg-gold-500 text-black shadow-md'
                                : 'bg-black/70 text-white hover:text-gold-300 border border-white/15'
                            }`}
                            title={t.navWishlist}
                          >
                            <Heart size={13} className={favorite ? 'fill-black' : ''} />
                          </button>
                        </div>
                      </div>

                      {/* Hover Inspect Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                        <div className="w-11 h-11 rounded-full gold-gradient-bg text-black flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform shadow-2xl">
                          <Maximize2 size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Body Details */}
                    <div className="p-4 sm:p-5 space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        {item.price && (
                          <div className="font-cormorant text-lg sm:text-xl font-bold text-gold-300">
                            {item.price}
                          </div>
                        )}
                        <span className="text-[10px] text-slate-400 font-cinzel uppercase tracking-wider">
                          {t.catalogInStock}
                        </span>
                      </div>

                      <h3 className="font-cormorant text-xl font-bold text-white group-hover:text-gold-200 transition-colors line-clamp-2 leading-snug">
                        {name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-light">
                        {desc}
                      </p>
                    </div>
                  </div>

                  {/* Footer action bar */}
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item, lang === 'he' ? 'תפירה אישית' : lang === 'en' ? 'Bespoke Fit' : 'Индивидуальный пошив');
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-gold-400/10 hover:bg-gold-400 text-gold-300 hover:text-black border border-gold-400/30 transition-all font-cinzel text-[11px] font-bold uppercase tracking-wider"
                      >
                        <ShoppingBag size={13} />
                        <span>{t.catalogAddToBag}</span>
                      </button>

                      <a
                        href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                          lang === 'he'
                            ? `שלום גלינה! אני מעוניינת בפריט: "${name}". אשמח לפרטים ומדידה.`
                            : lang === 'en'
                            ? `Hello Galina! I am interested in the lookbook piece: "${name}".`
                            : `Здравствуйте, Галина! Меня заинтересовала работа из коллекции: «${name}».`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="WhatsApp"
                        className="p-2 rounded-full bg-noir-850 hover:bg-[#25D366] hover:text-black text-gold-400 border border-gold-400/20 transition-colors shrink-0"
                      >
                        <MessageCircle size={15} />
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
