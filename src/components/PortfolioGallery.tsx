import React, { useState, useMemo } from 'react';
import { CATEGORIES, PortfolioItem, STUDIO_INFO } from '../data/portfolioData';
import { Search, Sparkles, Scissors, Shirt, Home, Palette, MessageCircle, Maximize2, Tag } from 'lucide-react';

interface PortfolioGalleryProps {
  items: PortfolioItem[];
  activeLang: 'ru' | 'en' | 'he';
  onItemSelect: (item: PortfolioItem) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  items,
  activeLang,
  onItemSelect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shirt':
        return <Shirt size={16} />;
      case 'Scissors':
        return <Scissors size={16} />;
      case 'Home':
        return <Home size={16} />;
      case 'Palette':
        return <Palette size={16} />;
      default:
        return <Sparkles size={16} />;
    }
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        item.nameRu.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.descriptionRu.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: items.length };
    items.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [items]);

  return (
    <section id="gallery" className="py-20 relative bg-atelier-dark">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-atelier-surface border border-gold-500/25 text-gold-300 text-xs tracking-widest uppercase">
            <Sparkles size={13} />
            <span>
              {activeLang === 'ru' && 'Портфолио работ'}
              {activeLang === 'en' && 'Portfolio Gallery'}
              {activeLang === 'he' && 'גלריית עבודות'}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {activeLang === 'ru' && 'Коллекция авторских шедевров'}
            {activeLang === 'en' && 'Signature Creations & Works'}
            {activeLang === 'he' && 'קולקציית יצירות מופת'}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light">
            {activeLang === 'ru' &&
              'Каждое изделие — результат кропотливой ручной работы, индивидуального подхода и любви к деталям. Нажмите на работу для просмотра галереи и деталей.'}
            {activeLang === 'en' &&
              'Each piece is crafted with passion, precision, and hand-selected natural fabrics. Click any item to view high-resolution photos and details.'}
            {activeLang === 'he' &&
              'כל פריט הוא תוצאה של עבודת יד מדויקת, יחס אישי ואהבה לפרטים. לחצו על תמונה לצפייה בפרטים.'}
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                    isSelected
                      ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20 scale-105'
                      : 'bg-atelier-card text-slate-300 hover:text-white hover:bg-atelier-surface border border-white/5'
                  }`}
                >
                  {getIcon(cat.icon)}
                  <span>
                    {activeLang === 'ru' && cat.titleRu}
                    {activeLang === 'en' && cat.titleEn}
                    {activeLang === 'he' && cat.titleHe}
                  </span>
                  <span
                    className={`ml-1 text-[11px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={activeLang === 'ru' ? 'Поиск: шелк, платье, жакет...' : 'Search pieces...'}
              className="w-full bg-atelier-card border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-atelier-card rounded-2xl border border-white/5">
            <p className="text-slate-400 text-base">
              {activeLang === 'ru'
                ? 'Работы по данному запросу не найдены. Попробуйте сбросить фильтры.'
                : 'No works found for this criteria.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider"
            >
              {activeLang === 'ru' ? 'Сбросить фильтры' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onItemSelect(item)}
                className="group relative bg-atelier-card rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl cursor-pointer flex flex-col"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                  <img
                    src={item.coverImage}
                    alt={item.nameRu}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-atelier-card via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Multi-photo indicator */}
                  {item.images.length > 1 && (
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-[11px] font-medium text-slate-200 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-sm">
                      <span>📷</span>
                      <span>{item.images.length}</span>
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-gold-300 border border-gold-500/30">
                      {item.category === 'clothing' && 'Одежда'}
                      {item.category === 'atelier' && 'Ателье'}
                      {item.category === 'textiles' && 'Текстиль'}
                      {item.category === 'paintings' && 'Живопись'}
                    </span>
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="w-11 h-11 rounded-full bg-gold-500 text-black flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-xl">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {item.price && (
                      <div className="text-xs font-semibold text-gold-400 tracking-wide mb-1">
                        {item.price}
                      </div>
                    )}
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-200 transition-colors line-clamp-2">
                      {activeLang === 'ru' ? item.nameRu : item.nameEn}
                    </h3>
                    
                    {item.descriptionRu && (
                      <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                        {activeLang === 'ru' ? item.descriptionRu : item.descriptionEn || item.descriptionRu}
                      </p>
                    )}
                  </div>

                  {/* Tags & Action row */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 max-w-[70%]">
                      {item.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] bg-white/5 text-slate-400 px-2 py-0.5 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                        `Здравствуйте! Меня заинтересовала работа: "${item.nameRu}". Хочу узнать подробнее.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="Заказать похожее в WhatsApp"
                      className="p-2 rounded-full bg-atelier-surface hover:bg-gold-500 hover:text-black text-gold-400 border border-gold-500/20 transition-colors"
                    >
                      <MessageCircle size={15} />
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
