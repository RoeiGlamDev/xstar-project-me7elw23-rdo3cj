import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#E0BBE4',
          DEFAULT: '#9B59B6',
          dark: '#6A1B9A',
        },
        white: '#FFFFFF',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInUp: 'fadeInUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
});