/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#040406',
          900: '#08080A',
          850: '#0D0D11',
          800: '#13131A',
          700: '#1C1C26',
          600: '#262633',
          500: '#3A3A4A',
        },
        gold: {
          50: '#FDFBF7',
          100: '#F8F2E6',
          200: '#EFE2C5',
          300: '#E4CEA0',
          400: '#D5B46D',
          500: '#C59E47',
          600: '#A37C2D',
          700: '#7E5B1D',
          800: '#5A3E13',
          900: '#3A2609',
        },
        champagne: '#F3E9D5',
        silk: '#FAF7F2',
        bronze: '#8A6732'
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
