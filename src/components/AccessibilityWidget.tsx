import React, { useState, useEffect } from 'react';
import { Eye, X, ZoomIn, ZoomOut, Contrast, Type, MousePointer, Pause, RotateCcw } from 'lucide-react';

export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Accessibility states
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0); // -1, 0, 1, 2
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [monochrome, setMonochrome] = useState<boolean>(false);
  const [readableFont, setReadableFont] = useState<boolean>(false);
  const [highlightLinks, setHighlightLinks] = useState<boolean>(false);
  const [stopAnimations, setStopAnimations] = useState<boolean>(false);

  // Apply classes to document root
  useEffect(() => {
    const root = document.documentElement;

    // Font size
    root.style.fontSize = fontSizeLevel === 1 ? '112%' : fontSizeLevel === 2 ? '125%' : fontSizeLevel === -1 ? '90%' : '';

    // Contrast & Filters
    if (highContrast) {
      root.classList.add('a11y-high-contrast');
    } else {
      root.classList.remove('a11y-high-contrast');
    }

    if (monochrome) {
      root.classList.add('a11y-monochrome');
    } else {
      root.classList.remove('a11y-monochrome');
    }

    if (readableFont) {
      root.classList.add('a11y-readable-font');
    } else {
      root.classList.remove('a11y-readable-font');
    }

    if (highlightLinks) {
      root.classList.add('a11y-highlight-links');
    } else {
      root.classList.remove('a11y-highlight-links');
    }

    if (stopAnimations) {
      root.classList.add('a11y-stop-animations');
    } else {
      root.classList.remove('a11y-stop-animations');
    }
  }, [fontSizeLevel, highContrast, monochrome, readableFont, highlightLinks, stopAnimations]);

  const resetAll = () => {
    setFontSizeLevel(0);
    setHighContrast(false);
    setMonochrome(false);
    setReadableFont(false);
    setHighlightLinks(false);
    setStopAnimations(false);
  };

  const hasActiveSettings = fontSizeLevel !== 0 || highContrast || monochrome || readableFont || highlightLinks || stopAnimations;

  return (
    <>
      {/* Floating Accessibility Trigger (Bottom Left, accessible via Tab and Touch) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Открыть меню доступности / Меню для людей с ограниченными возможностями (נגישות)"
          title="Меню доступности (נגישות)"
          className={`group w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border-2 ${
            hasActiveSettings
              ? 'bg-blue-600 border-white text-white scale-105 ring-4 ring-blue-500/30'
              : 'bg-noir-850 hover:bg-gold-500 hover:text-black border-gold-400/50 text-gold-300'
          }`}
        >
          {/* Universal Accessibility Person Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="4" r="2" />
            <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H11c-.35 0-.69.11-.97.31L6.18 10.36c-.46.33-.67.9-.53 1.44.15.54.64.91 1.2.91h2.15v7.29c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1v-7.29h2c.56 0 1.05-.37 1.2-.91.14-.54-.07-1.11-.53-1.44L14.7 8.5c.6.66 1.45 1.15 2.3 1.34V13c0 .55.45 1 1 1s1-.45 1-1z" />
          </svg>
        </button>
      </div>

      {/* Accessibility Panel Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-start sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full sm:w-[380px] max-h-[85vh] bg-noir-850 text-white rounded-t-3xl sm:rounded-3xl border border-gold-400/30 shadow-2xl p-6 overflow-y-auto space-y-5"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Панель специальных возможностей"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-gold-400/10 text-gold-400 border border-gold-400/30">
                  <Eye size={20} />
                </div>
                <div>
                  <h3 className="font-cinzel text-base font-bold text-white">Доступность сайта</h3>
                  <div className="text-[11px] text-gold-400 font-medium">נגישות • Accessibility</div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Закрыть"
              >
                <X size={18} />
              </button>
            </div>

            {/* Options List */}
            <div className="space-y-3 text-xs">
              
              {/* Font Size */}
              <div className="p-3 rounded-2xl bg-noir-800 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-200 flex items-center gap-2">
                    <Type size={16} className="text-gold-400" /> Размер текста
                  </span>
                  <span className="text-[11px] text-gold-400 font-mono">
                    {fontSizeLevel === 0 ? 'Стандарт' : fontSizeLevel > 0 ? `+${fontSizeLevel * 10}%` : '-10%'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFontSizeLevel((prev) => Math.max(-1, prev - 1))}
                    className="flex-1 py-1.5 rounded-xl bg-noir-700 hover:bg-noir-600 border border-white/10 text-slate-200 font-medium flex items-center justify-center gap-1"
                  >
                    <ZoomOut size={13} /> Меньше
                  </button>
                  <button
                    onClick={() => setFontSizeLevel(0)}
                    className="px-3 py-1.5 rounded-xl bg-noir-700 hover:bg-noir-600 border border-white/10 text-slate-200"
                  >
                    100%
                  </button>
                  <button
                    onClick={() => setFontSizeLevel((prev) => Math.min(2, prev + 1))}
                    className="flex-1 py-1.5 rounded-xl bg-noir-700 hover:bg-noir-600 border border-white/10 text-slate-200 font-medium flex items-center justify-center gap-1"
                  >
                    <ZoomIn size={13} /> Больше
                  </button>
                </div>
              </div>

              {/* High Contrast */}
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-colors ${
                  highContrast ? 'bg-gold-500 text-black border-gold-500 font-semibold' : 'bg-noir-800 border-white/5 text-slate-200 hover:bg-noir-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Contrast size={16} /> Высокая контрастность
                </span>
                <span className="text-[11px] uppercase tracking-wider">{highContrast ? 'Вкл' : 'Выкл'}</span>
              </button>

              {/* Monochrome */}
              <button
                onClick={() => setMonochrome(!monochrome)}
                className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-colors ${
                  monochrome ? 'bg-gold-500 text-black border-gold-500 font-semibold' : 'bg-noir-800 border-white/5 text-slate-200 hover:bg-noir-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Eye size={16} /> Черно-белый режим (монохром)
                </span>
                <span className="text-[11px] uppercase tracking-wider">{monochrome ? 'Вкл' : 'Выкл'}</span>
              </button>

              {/* Dyslexia / Readable Font */}
              <button
                onClick={() => setReadableFont(!readableFont)}
                className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-colors ${
                  readableFont ? 'bg-gold-500 text-black border-gold-500 font-semibold' : 'bg-noir-800 border-white/5 text-slate-200 hover:bg-noir-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Type size={16} /> Четкий системный шрифт (без засечек)
                </span>
                <span className="text-[11px] uppercase tracking-wider">{readableFont ? 'Вкл' : 'Выкл'}</span>
              </button>

              {/* Highlight Links */}
              <button
                onClick={() => setHighlightLinks(!highlightLinks)}
                className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-colors ${
                  highlightLinks ? 'bg-gold-500 text-black border-gold-500 font-semibold' : 'bg-noir-800 border-white/5 text-slate-200 hover:bg-noir-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <MousePointer size={16} /> Подсветка всех ссылок и кнопок
                </span>
                <span className="text-[11px] uppercase tracking-wider">{highlightLinks ? 'Вкл' : 'Выкл'}</span>
              </button>

              {/* Stop Animations */}
              <button
                onClick={() => setStopAnimations(!stopAnimations)}
                className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-colors ${
                  stopAnimations ? 'bg-gold-500 text-black border-gold-500 font-semibold' : 'bg-noir-800 border-white/5 text-slate-200 hover:bg-noir-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Pause size={16} /> Отключить анимации и мерцания
                </span>
                <span className="text-[11px] uppercase tracking-wider">{stopAnimations ? 'Вкл' : 'Выкл'}</span>
              </button>

            </div>

            {/* Reset Button */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={resetAll}
                disabled={!hasActiveSettings}
                className={`text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  hasActiveSettings ? 'text-red-400 hover:text-red-300' : 'text-slate-600 cursor-not-allowed'
                }`}
              >
                <RotateCcw size={13} /> Сбросить все настройки
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl gold-gradient-bg text-black font-cinzel font-bold text-xs uppercase"
              >
                Готово
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
