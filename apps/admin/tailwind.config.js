const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        primary: {
          DEFAULT: '#FFF3EC',
          100: '#FFE8DA',
          200: '#FFDCC7',
          300: '#FFD0B4',
          400: '#FFC4A1',
          500: '#FEB88E',
          600: '#FCAC7A',
          700: '#FAA065',
          800: '#F8934F',
          900: '#F68634',
        },
        secondary: {
          DEFAULT: '#FF7A4F',
          100: '#252B42',
          200: '#027AC8',
          300: '#252B42',
          400: '#737373',
          500: '#FAFAFA',
          600: '#EBA572',
          700: '#FFF8F3',
          800: '#DBE0EF',
          900: '#BABFC7',
        },
        neutral: {
          DEFAULT: '#F5F5F5',
          100: '#EFF2F4',
          200: '#E5E7EB',
          300: '#D3D5DA',
          400: '#9CA3AF',
          500: '#6D7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontSize: {
        xs: '8px',
        sm: '12px',
        base: '14px',
        md: '16px',
        heading: '18px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '38px',
        '4xl': '48px',
      },
      borderRadius: {
        DEFAULT: '5px',
        sm: '8px',
        md: '10px',
        lg: '12px',
        xl: '15px',
        '2xl': '22px',
      },
      boxShadow: {
        DEFAULT: '0px 10px 19px 0px rgba(0, 0, 0, 0.07);',
        sm: '0px 3.5px 11px 0px #0000000D;',
        md: '0px 18px 40px 0px rgba(246, 138, 59, 0.09);',
        lg: '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 7px 16px 0px rgba(0, 0, 0, 0.08);',
        xl: '0px 18px 40px 0px rgba(246, 138, 59, 0.05);',
        certificate: '0px 0.1px 3px 0px rgba(108, 106, 106, 0.25);',
        chart:
          '0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)',
      },
      animation: {
        skeleton: 'skeleton 1s infinite steps(10, end) alternate',
      },
      keyframes: {
        skeleton: {
          '0%': { opacity: 0.25 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
