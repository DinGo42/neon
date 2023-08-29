/** @type {import('tailwindcss').Config} */
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
      screens: {
        phoneM: '480px',
        tabletS: '768px',
        tabletM: '1024px',
      },
      scale: {
        102: '1.02',
      },
      maxWidth: { 32: '32rem' },
      maxHeight: { 32: '32rem' },
      minWidth: { 19: '19rem' },
      minHeight: { 19: '19rem' },
    },
  },
  plugins: [],
} satisfies Config;
