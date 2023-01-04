const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './patterns/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './types/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)'],
    },
    extend: {
      screens: {
        'max-lg': { max: '1023px' },
      },
      boxShadow: {
        hover: '0 2px 40px -4px rgba(0, 0, 0, 1)',
      },
      colors: {
        gradient: {
          primary: '#fc50b7',
          secondary: '#FFC56F',
          tertiary: '#ff08ab',
          dark: {
            primary: '#0009D5',
            secondary: '#64FFB2',
            tertiary: '#9900BF',
          },
        },
      },
      keyframes: {
        gradient: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-3%) translateY(5%)' },
        },
      },
      animation: {
        gradient: 'gradient 5s ease-in-out infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2.5rem',
        md: '2.25rem',
        lg: '2.75rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))) or (-webkit-backdrop-filter:blur(0))',
      );
    }),
  ],
  safelist: [
    {
      pattern: /col-(span|start|end)-/,
      variants: ['md', 'lg', 'xl', '2xl'],
    },
  ],
};
