/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: {
          900: '#064163',
        },
        slate: {
          200: '#E6ECEF',
          700: '#5D6B82',
          600: '#42526D',
          500: '#5D6B82',
          800: '#243757',
        },
        gray: {
          50: '#FAFBFB',
        },
        neutra: {
          300: '#C2C7D0',
        },
        blue: {
          700: '#243757',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg-1.png'), url('/images/bg-2.png')",
      },
    },
  },
  plugins: [],
};
