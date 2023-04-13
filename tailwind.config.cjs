/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      d: '1140px',
      t: { min: '768px', max: '1139px' },
      s: { min: '390px', max: '767px' },
    },
    colors: {
      bgprimary: '#353543',
      bgsecondary: '#282833',
      textWhite: '#D1D1DB',
      blue: '#5683f6',
      cardBg: '#3f3f50',
    },
    fontFamily: {
      montserrat: ['montserrat', 'sans-serif'],
      worksans: ['Work Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
