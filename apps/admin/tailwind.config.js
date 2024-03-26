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
    '../../node_modules/preline/preline.js',
  ],
  darkMode: 'class',
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
          DEFAULT: '#CF202D',
        },
        neutral: {
          DEFAULT: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D3D5DA',
          400: '#9CA3AF',
          500: '#6D7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        success: {
          DEFAULT: '#1EB564',
        },
        warning: {
          DEFAULT: '',
        },
        danger: {
          DEFAULT: '',
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
  plugins: [require('preline/plugin'), require('@tailwindcss/forms')],
};
