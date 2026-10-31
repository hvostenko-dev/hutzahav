import React, { useState, useMemo } from 'react';
import { CATEGORIES, PortfolioItem, STUDIO_INFO } from '../data/portfolioData';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import {
  Search,
  Sparkles,
  Scissors,
  Shirt,
  Home,
  Feather,
  MessageCircle,
  Maximize2,
  Grid,
  LayoutList,
  Heart,
  ShoppingBag,
  SlidersHorizontal,
  Ruler,
  HelpCircle,
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
  const [sortBy, setSortBy] = useState<'featured' | 'price_asc' | 'price_desc' | 'name'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'editorial'>('grid');

  const filteredAndSorted = useMemo(() => {
    const list = items.filter((item) => {
      const matchCat = category === 'all' || item.category === category;
      const q = search.toLowerCase().trim();
      if (!q) return matchCat;

      const matchSearch =
        item.nameRu.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.descriptionRu.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });

    const getPriceNumber = (priceStr?: string) => {
      if (!priceStr) return 0;
      return parseFloat(priceStr.replace(/[^\d.]/g, '')) || 0;
    };

    if (sortBy === 'price_asc') {
      return [...list].sort((a, b) => getPriceNumber(a.price) - getPriceNumber(b.price));
    }
    if (sortBy === 'price_desc') {
      return [...list].sort((a, b) => getPriceNumber(b.price) - getPriceNumber(a.price));
    }
    if (sortBy === 'name') {
      const field = lang === 'en' ? 'nameEn' : 'nameRu';
      return [...list].sort((a, b) => a[field].localeCompare(b[field]));
    }

    return list;
  }, [items, category, search, sortBy, lang]);

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
        return <Shirt size={14} />;
      case 'jackets_felting':
        return <Scissors size={14} />;
      case 'accessories':
        return <Feather size={14} />;
      case 'atelier_tailoring':
        return <Scissors size={14} />;
      case 'home_textiles':
        return <Home size={14} />;
      default:
        return <Sparkles size={14} />;
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
      case 'home_textiles':
        return t.catHomeTextiles;
      default:
        return t.catAll;
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 relative bg-noir-950 border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-850 border border-gold-400/30 text-gold-300 text-[11px] sm:text-xs tracking-[0.2em] font-cinzel uppercase">
            <Sparkles size={13} className="text-gold-400" />
            <span>Lookbook & Atelier Boutique</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {t.catalogTitle}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            {t.catalogSubtitle}
          </p>

          {/* Assistant Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-noir-900 hover:bg-noir-850 border border-gold-400/25 text-gold-300 text-xs font-cinzel tracking-wider transition-colors"
            >
              <Ruler size={13} />
              <span>{t.catalogSizeGuideBtn}</span>
            </button>

            {onOpenFabricGuide && (
              <button
                onClick={onOpenFabricGuide}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-noir-900 hover:bg-noir-850 border border-gold-400/25 text-gold-300 text-xs font-cinzel tracking-wider transition-colors"
              >
                <Droplets size={13} />
                <span>{t.catalogFabricGuideBtn}</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-5 mb-8 sm:mb-10 pb-6 border-b border-white/10">
          
          {/* Category Pills */}
          <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-none flex items-center gap-2 justify-start lg:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
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
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-cinzel text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 shrink-0 ${
                    active
                      ? 'gold-gradient-bg text-black font-bold shadow-lg shadow-gold-500/25 scale-102'
                      : 'bg-noir-850 text-slate-300 hover:text-white hover:bg-noir-800 border border-white/10'
                  }`}
                >
                  {getIcon(cat.id)}
                  <span>{title}</span>
                  <span
                    className={`ml-1 text-[10px] sm:text-[11px] px-1.5 py-0.2 rounded-full ${
                      active ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search, Sort & Layout toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full lg:w-auto justify-end">
            
            {/* Search */}
            <div className="relative w-full sm:w-52 md:w-56">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.catalogSearchPlaceholder}
                className="w-full bg-noir-850 border border-white/10 rounded-full pl-9 pr-8 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
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

            <div className="flex items-center justify-between sm:justify-start gap-2">
              {/* Sorting Dropdown */}
              <div className="relative flex-1 sm:flex-initial">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full sm:w-auto bg-noir-850 border border-white/10 rounded-full px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-gold-400 transition-colors cursor-pointer font-cinzel truncate"
                >
                  <option value="featured">{t.catalogSortDefault}</option>
                  <option value="price_asc">{t.catalogSortPriceAsc}</option>
                  <option value="price_desc">{t.catalogSortPriceDesc}</option>
                  <option value="name">{t.catalogSortName}</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-noir-850 border border-white/10 rounded-full p-1 text-slate-400 shrink-0">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-full transition-colors ${
                    viewMode === 'grid' ? 'bg-gold-500 text-black' : 'hover:text-white'
                  }`}
                  title="Grid"
                >
                  <Grid size={15} />
                </button>
                <button
                  onClick={() => setViewMode('editorial')}
                  className={`p-1.5 rounded-full transition-colors ${
                    viewMode === 'editorial' ? 'bg-gold-500 text-black' : 'hover:text-white'
                  }`}
                  title="Editorial"
                >
                  <LayoutList size={15} />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Gallery Content */}
        {filteredAndSorted.length === 0 ? (
          <div className="text-center py-20 rounded-3xl luxury-card bg-noir-900 border border-white/10">
            <p className="text-slate-400 text-base font-light">
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
        ) : viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredAndSorted.map((item) => {
              const favorite = isInWishlist(item.id);
              const name = lang === 'en' ? item.nameEn || item.nameRu : item.nameRu;
              const desc = lang === 'en' ? item.descriptionEn || item.descriptionRu : item.descriptionRu;

              return (
                <div
                  key={item.id}
                  onClick={() => onItemSelect(item)}
                  className="group relative rounded-3xl overflow-hidden luxury-card bg-noir-850 border border-white/5 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Photo with zoom effect */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-black">
                      <img
                        src={item.coverImage}
                        alt={name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-transparent to-black/25 opacity-70 group-hover:opacity-40 transition-opacity"></div>

                      {/* Top Action Buttons: Wishlist Heart & Category Pill */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="font-cinzel text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-gold-300 border border-gold-400/30 pointer-events-auto">
                          {getCategoryLabel(item.category)}
                        </span>

                        <div className="flex items-center gap-1.5 pointer-events-auto">
                          {item.images.length > 1 && (
                            <span className="bg-black/75 backdrop-blur-md text-[11px] font-medium text-slate-200 px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-1 shadow-sm">
                              📷 {item.images.length}
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
                                ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/30 scale-105'
                                : 'bg-black/70 text-white hover:text-gold-300 hover:bg-black/90 border border-white/15'
                            }`}
                            title="Wishlist"
                          >
                            <Heart size={14} className={favorite ? 'fill-black' : ''} />
                          </button>
                        </div>
                      </div>

                      {/* Hover Inspect Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                        <div className="w-12 h-12 rounded-full gold-gradient-bg text-black flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-2xl">
                          <Maximize2 size={18} />
                        </div>
                      </div>
                    </div>

                    {/* Body Details */}
                    <div className="p-4 sm:p-5 space-y-1.5 sm:space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        {item.price && (
                          <div className="font-cormorant text-xl font-bold text-gold-400">
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
                  <div className="p-4 sm:p-5 pt-0">
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item, 'Индивидуальный пошив');
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-gold-400/10 hover:bg-gold-400 text-gold-300 hover:text-black border border-gold-400/30 transition-all font-cinzel text-[11px] font-bold uppercase tracking-wider"
                      >
                        <ShoppingBag size={13} />
                        <span>{t.catalogAddToBag}</span>
                      </button>

                      <a
                        href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                          lang === 'he'
                            ? `שלום גלינה! אני מעוניינת בפריט: "${item.nameRu}". אשמח לפרטים ומדידה.`
                            : lang === 'en'
                            ? `Hello Galina! I am interested in the lookbook piece: "${item.nameEn || item.nameRu}".`
                            : `Здравствуйте, Галина! Меня заинтересовала работа из каталога: "${item.nameRu}". Хочу примерить или заказать похожее.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="WhatsApp"
                        className="p-2 rounded-full bg-noir-800 hover:bg-gold-500 hover:text-black text-gold-400 border border-gold-400/20 transition-colors shrink-0"
                      >
                        <MessageCircle size={15} />
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Editorial Lookbook View */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredAndSorted.map((item) => {
              const favorite = isInWishlist(item.id);
              const name = lang === 'en' ? item.nameEn || item.nameRu : item.nameRu;
              const desc = lang === 'en' ? item.descriptionEn || item.descriptionRu : item.descriptionRu;

              return (
                <div
                  key={item.id}
                  onClick={() => onItemSelect(item)}
                  className="group rounded-3xl overflow-hidden luxury-card bg-noir-850 border border-white/10 hover:border-gold-400/40 transition-all duration-300 cursor-pointer grid grid-cols-1 sm:grid-cols-12"
                >
                  {/* Photo (5 cols) */}
                  <div className="sm:col-span-5 relative aspect-[3/4] sm:aspect-auto overflow-hidden bg-black">
                    <img
                      src={item.coverImage}
                      alt={name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="font-cinzel text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-gold-300 border border-gold-400/30">
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(item.id);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                        favorite
                          ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/30'
                          : 'bg-black/70 text-white hover:text-gold-300 border border-white/15'
                      }`}
                      title="Wishlist"
                    >
                      <Heart size={14} className={favorite ? 'fill-black' : ''} />
                    </button>
                  </div>

                  {/* Details (7 cols) */}
                  <div className="sm:col-span-7 p-5 sm:p-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-cinzel uppercase tracking-wider">
                          {t.catalogInStock}
                        </span>
                        {item.price && (
                          <span className="font-cormorant text-2xl font-bold text-gold-300">
                            {item.price}
                          </span>
                        )}
                      </div>

                      <h3 className="font-cormorant text-2xl font-bold text-white group-hover:text-gold-200 transition-colors leading-snug">
                        {name}
                      </h3>

                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tg, idx) => (
                          <span key={idx} className="text-[10px] bg-noir-800 text-slate-400 px-2 py-0.5 rounded-md border border-white/5">
                            {tg}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item, 'Индивидуальный пошив');
                        }}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
                      >
                        <ShoppingBag size={13} />
                        <span>{t.catalogAddToBag}</span>
                      </button>

                      <a
                        href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                          `Здравствуйте, Галина! Хочу заказать работу из каталога: "${item.nameRu}".`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-noir-800 hover:bg-noir-750 text-gold-300 border border-gold-400/20 font-cinzel text-[11px] sm:text-xs uppercase tracking-wider"
                      >
                        <MessageCircle size={13} />
                        <span>WhatsApp</span>
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
