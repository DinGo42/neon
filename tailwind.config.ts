/** @type {import('tailwindcss').Config} */
import { url } from 'inspector';
import type { Config } from 'tailwindcss';

enum AppColors {
  BLACK_300 = 'black-300',
  BLACK_600 = 'black-600',
  PINK_700 = 'pink-700',
  BLUE_700 = 'blue-700',
  GREEN_700 = 'green-700',
  PURPLE_700 = 'purple-700',
  ORANGE_700 = 'orange-700',
}
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        [AppColors.BLACK_300]: '#D9D9D9',
        [AppColors.BLACK_600]: '#333',
        [AppColors.PINK_700]: '#FF66CC',
        [AppColors.BLUE_700]: '#00FFFF',
        [AppColors.GREEN_700]: '#33FF00',
        [AppColors.PURPLE_700]: '#e800ff',
        [AppColors.ORANGE_700]: '#f28500',
      },
      skew: {
        '-45': '-45deg',
        '45': '45deg',
      },
      screens: {
        phoneS: '320px',
        phoneM: '480px',
        tabletS: '768px',
        tabletM: '1024px',
        dectopS: '1280px',
        dectopM: '1440px',
      },
      scale: {
        102: '1.02',
      },
      maxWidth: { 32: '32rem' },
      maxHeight: { 32: '32rem' },
      minWidth: { 19: '19rem' },
      minHeight: { 19: '19rem' },
      backgroundImage: {
        moss: 'url(/imgs/moss.jpg)',
      },
      animation: {
        flicker: 'flicker 7s linear infinite',
      },
      keyframes: {
        flicker: {
          from: {
            opacity: '1',
          },

          '4%': {
            opacity: '0.9',
          },

          '6%': {
            opacity: '0.85',
          },

          '8%': {
            opacity: '0.95',
          },

          '10%': {
            opacity: '0.9',
          },

          '11%': {
            opacity: '0.922',
          },

          '12%': {
            opacity: '0.9',
          },

          '14%': {
            opacity: '0.95',
          },

          '16%': {
            opacity: '0.98',
          },

          '17%': {
            opacity: '0.9',
          },

          '19%': {
            opacity: '0.93',
          },

          '20%': {
            opacity: '0.99',
          },

          '24%': {
            opacity: '1',
          },

          '26%': {
            opacity: '0.94',
          },

          '28%': {
            opacity: '0.98',
          },

          '37%': {
            opacity: '0.93',
          },

          '38%': {
            opacity: '0.5',
          },

          '39%': {
            opacity: '0.96',
          },

          '42%': {
            opacity: '1',
          },

          '44%': {
            opacity: '0.97',
          },

          '46%': {
            opacity: '0.94',
          },

          '56%': {
            opacity: '0.9',
          },

          '58%': {
            opacity: '0.9',
          },

          '60%': {
            opacity: '0.99',
          },

          '68%': {
            opacity: '1',
          },

          '70%': {
            opacity: '0.9',
          },

          '72%': {
            opacity: '0.95',
          },

          '93%': {
            opacity: '0.93',
          },

          '95%': {
            opacity: '0.95',
          },

          '97%': {
            opacity: '0.93',
          },
          to: {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
