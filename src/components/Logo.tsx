import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 42, showText = true }) => {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer ${className}`}>
      {/* Authentic Hutzahav Golden Needle & Thread Emblem */}
      <div
        className="relative shrink-0 flex items-center justify-center"
        style={{ width: Math.round(size * 1.12), height: size }}
      >
        <svg
          viewBox="0 0 112 100"
          className="w-full h-full drop-shadow-[0_0_10px_rgba(213,180,109,0.3)] transition-transform duration-500 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hutzahavGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF3D1" />
              <stop offset="35%" stopColor="#E5C578" />
              <stop offset="70%" stopColor="#C59E47" />
              <stop offset="100%" stopColor="#9A7432" />
            </linearGradient>
          </defs>

          {/* Golden Thread Circle & Signature Top-Right Spiral Curl */}
          <path
            d="M 81 52
               A 37 37 0 1 1 67 21
               C 74 26, 79 31, 86 31
               C 94 31, 99 24, 99 17
               C 99 9, 92 4, 85 5
               C 78 6, 75 11, 76 16
               C 77 20, 81 22, 85 20
               C 88 19, 89 15, 86 12"
            stroke="url(#hutzahavGold)"
            strokeWidth="2.3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Upper Tapered Horizontal Gold Bar */}
          <path
            d="M 22 36 Q 44 34 66 36 Q 44 38 22 36 Z"
            fill="url(#hutzahavGold)"
          />

          {/* Lower Tapered Horizontal Gold Bar */}
          <path
            d="M 22 62 Q 44 60 66 62 Q 44 64 22 62 Z"
            fill="url(#hutzahavGold)"
          />

          {/* Upper Sewing Needle (with Eye of the Needle) piercing from top-right to upper bar */}
          <path
            d="M 48.5 36
               L 64.5 7.5
               C 66 5, 68.5 4.5, 69.5 5.2
               C 70.5 5.9, 69.8 8.2, 68.2 11
               L 54 36
               Z"
            fill="url(#hutzahavGold)"
          />
          {/* Eye of the Needle Cutout */}
          <ellipse
            cx="63.2"
            cy="15.2"
            rx="1.2"
            ry="6.2"
            transform="rotate(29.5 63.2 15.2)"
            fill="#08080A"
          />

          {/* Lower Sewing Needle Tip piercing from lower bar through bottom-left circle */}
          <path
            d="M 34.5 62 L 39 62 L 21.5 92 Z"
            fill="url(#hutzahavGold)"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-start">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span className="font-cinzel text-base sm:text-xl lg:text-2xl tracking-[0.18em] sm:tracking-[0.22em] font-bold text-white group-hover:text-gold-200 transition-colors">
              HUTZAHAV
            </span>
            <span className="font-cinzel text-[10px] text-gold-400 font-bold block sm:hidden">
              חוט זהב
            </span>
          </div>
          <span className="hidden sm:block font-cinzel text-[9px] uppercase tracking-[0.28em] text-gold-400/90 mt-1 font-medium whitespace-nowrap">
            Hutzahav Studio • חוט זהב
          </span>
        </div>
      )}
    </div>
  );
};
