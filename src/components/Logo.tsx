import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 48, showText = true }) => {
  return (
    <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
      {/* Golden Couture Monogram Emblem */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-full p-1"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(213,180,109,0.35)] transition-transform duration-500 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Glowing Ring */}
          <circle cx="50" cy="50" r="47" stroke="url(#goldGradOuter)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          
          {/* Main Gold Circle */}
          <circle cx="50" cy="50" r="43" stroke="url(#goldGrad)" strokeWidth="2" />
          <circle cx="50" cy="50" r="40" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.5" />

          {/* Golden Thread Swirl (חוט זהב) */}
          <path
            d="M 28,75 Q 35,25 50,22 Q 65,19 72,45 Q 78,70 50,78 Q 22,86 28,50 Q 32,20 70,25"
            stroke="url(#threadGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.85"
            className="animate-pulse"
          />

          {/* Elegant Stylized "H" Monogram */}
          <path
            d="M 37,30 L 37,70 M 63,30 L 63,70 M 37,50 L 63,50"
            stroke="url(#goldGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Sewing Needle through the H */}
          <path
            d="M 68,26 L 32,74"
            stroke="url(#silverGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Eye of the Needle */}
          <ellipse cx="66" cy="28.5" rx="1.2" ry="2.5" transform="rotate(-45 66 28.5)" fill="#08080A" stroke="url(#silverGrad)" strokeWidth="0.8" />
          
          {/* Golden Sparkle / Star */}
          <path
            d="M 50,14 L 51.5,19 L 56.5,20.5 L 51.5,22 L 50,27 L 48.5,22 L 43.5,20.5 L 48.5,19 Z"
            fill="url(#goldGrad)"
          />

          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4D0" />
              <stop offset="35%" stopColor="#E5C578" />
              <stop offset="70%" stopColor="#C59E47" />
              <stop offset="100%" stopColor="#8A6732" />
            </linearGradient>
            <linearGradient id="goldGradOuter" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D5B46D" />
              <stop offset="100%" stopColor="#F9F1DC" />
            </linearGradient>
            <linearGradient id="threadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE8A3" />
              <stop offset="50%" stopColor="#D5B46D" />
              <stop offset="100%" stopColor="#967026" />
            </linearGradient>
            <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#A8B2C1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-cinzel text-xl sm:text-2xl tracking-[0.22em] font-bold text-white group-hover:text-gold-200 transition-colors leading-none">
            HUTZAHAV
          </span>
          <span className="font-cinzel text-[9px] uppercase tracking-[0.35em] text-gold-400/90 mt-1 font-medium">
            Atelier Haute Couture • חוט זהב
          </span>
        </div>
      )}
    </div>
  );
};
