/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      d: '1140px',
      t: { min: '768px', max: '1139px' },
      s: { max: '767px' },
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
    extend: {
      boxShadow: {
        card: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
      animation: {
        'show-down':
          'show-down 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   forwards',
      },
      keyframes: {
        'show-down': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, -30px, 0)',
          },
          to: {
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
