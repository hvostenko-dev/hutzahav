import React, { useState, useMemo } from 'react';
import { CATEGORIES, PortfolioItem, STUDIO_INFO } from '../data/portfolioData';
import { Search, Sparkles, Scissors, Shirt, Home, Palette, MessageCircle, Maximize2, Grid, LayoutList } from 'lucide-react';

interface LookbookCatalogProps {
  items: PortfolioItem[];
  onItemSelect: (item: PortfolioItem) => void;
}

export const LookbookCatalog: React.FC<LookbookCatalogProps> = ({ items, onItemSelect }) => {
  const [category, setCategory] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'editorial'>('grid');

  const filtered = useMemo(() => {
    return items.filter((item) => {
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
      case 'clothing':
        return <Shirt size={14} />;
      case 'atelier':
        return <Scissors size={14} />;
      case 'textiles':
        return <Home size={14} />;
      case 'paintings':
        return <Palette size={14} />;
      default:
        return <Sparkles size={14} />;
    }
  };

  return (
    <section id="gallery" className="py-24 relative bg-noir-950 border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-850 border border-gold-400/30 text-gold-300 text-xs tracking-[0.2em] font-cinzel uppercase">
            <Sparkles size={13} className="text-gold-400" />
            <span>Lookbook Коллекций & Ателье</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Каталог Авторских Работ
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            Каждое изделие — результат кропотливого труда, ручной росписи и авторского кроя. Нажмите на любое изделие для детального просмотра и заказа.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mb-12 pb-6 border-b border-white/10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = category === cat.id;
              const count = counts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-cinzel text-xs uppercase tracking-wider transition-all duration-300 ${
                    active
                      ? 'gold-gradient-bg text-black font-bold shadow-lg shadow-gold-500/20 scale-105'
                      : 'bg-noir-850 text-slate-300 hover:text-white hover:bg-noir-800 border border-white/10'
                  }`}
                >
                  {getIcon(cat.id)}
                  <span>{cat.titleRu}</span>
                  <span
                    className={`ml-1 text-[11px] px-1.5 py-0.2 rounded-full ${
                      active ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Layout toggle */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
            {/* Search */}
            <div className="relative flex-1 lg:w-64">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск: шелк, лен, вечернее..."
                className="w-full bg-noir-850 border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
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

            {/* View Mode Toggle */}
            <div className="flex items-center bg-noir-850 border border-white/10 rounded-full p-1 text-slate-400">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-gold-500 text-black' : 'hover:text-white'
                }`}
                title="Сетка"
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

        {/* Gallery Content */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 rounded-3xl luxury-card bg-noir-900 border border-white/10">
            <p className="text-slate-400 text-base font-light">
              Ничего не найдено по данному запросу.
            </p>
            <button
              onClick={() => {
                setCategory('all');
                setSearch('');
              }}
              className="mt-4 px-6 py-2.5 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View (3-4 cols) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
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
                      alt={item.nameRu}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-transparent to-black/25 opacity-70 group-hover:opacity-40 transition-opacity"></div>

                    {/* Multi-angle indicator */}
                    {item.images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-[11px] font-medium text-slate-200 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-sm">
                        <span>📷</span>
                        <span>{item.images.length}</span>
                      </div>
                    )}

                    {/* Category pill */}
                    <div className="absolute top-3 left-3">
                      <span className="font-cinzel text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-gold-300 border border-gold-400/30">
                        {item.category === 'clothing' && 'Одежда'}
                        {item.category === 'atelier' && 'Ателье'}
                        {item.category === 'textiles' && 'Текстиль'}
                        {item.category === 'paintings' && 'Живопись'}
                      </span>
                    </div>

                    {/* Hover Inspect Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <div className="w-12 h-12 rounded-full gold-gradient-bg text-black flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-2xl">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-5 space-y-2">
                    {item.price && (
                      <div className="font-cormorant text-xl font-bold text-gold-400">
                        {item.price}
                      </div>
                    )}
                    <h3 className="font-cormorant text-xl font-bold text-white group-hover:text-gold-200 transition-colors line-clamp-2 leading-snug">
                      {item.nameRu}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-light">
                      {item.descriptionRu}
                    </p>
                  </div>
                </div>

                {/* Footer action bar */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 max-w-[70%]">
                      {item.tags.slice(0, 2).map((tg, idx) => (
                        <span key={idx} className="text-[10px] bg-noir-800 text-slate-400 px-2 py-0.5 rounded-full border border-white/5">
                          #{tg}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                        `Здравствуйте, Галина! Меня заинтересовала работа из каталога: "${item.nameRu}". Хочу примерить или заказать похожее.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="Заказать в WhatsApp"
                      className="p-2 rounded-full bg-noir-800 hover:bg-gold-500 hover:text-black text-gold-400 border border-gold-400/20 transition-colors"
                    >
                      <MessageCircle size={15} />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Editorial Lookbook View (Large 2-col cards) */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => onItemSelect(item)}
                className="group rounded-3xl overflow-hidden luxury-card bg-noir-850 border border-white/10 hover:border-gold-400/40 transition-all duration-300 cursor-pointer grid grid-cols-1 sm:grid-cols-12"
              >
                {/* Photo (5 cols) */}
                <div className="sm:col-span-5 relative aspect-[3/4] sm:aspect-auto overflow-hidden bg-black">
                  <img
                    src={item.coverImage}
                    alt={item.nameRu}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  {item.images.length > 1 && (
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-[11px] text-slate-200 px-2.5 py-1 rounded-full border border-white/10">
                      📷 {item.images.length} фото
                    </div>
                  )}
                </div>

                {/* Details (7 cols) */}
                <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-cinzel text-[10px] uppercase tracking-widest text-gold-400">
                        {item.category}
                      </span>
                      {item.price && (
                        <span className="font-cormorant text-2xl font-bold text-gold-300">
                          {item.price}
                        </span>
                      )}
                    </div>

                    <h3 className="font-cormorant text-2xl font-bold text-white group-hover:text-gold-200 transition-colors leading-snug">
                      {item.nameRu}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {item.descriptionRu}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tg, idx) => (
                        <span key={idx} className="text-[10px] bg-noir-800 text-slate-400 px-2 py-0.5 rounded-md border border-white/5">
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-cinzel text-xs text-gold-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      Рассмотреть детали →
                    </span>

                    <a
                      href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                        `Здравствуйте, Галина! Хочу заказать работу из каталога: "${item.nameRu}".`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase tracking-wider"
                    >
                      <MessageCircle size={14} />
                      <span>Заказать</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
