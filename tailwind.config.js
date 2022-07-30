/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        gray_p: '#EDEDED',
        gray_1: '#F0F0F0',
        gray_2: '#E2E2E2',
        gray_3: '#ADADAD',
        gray_4: '#777777',
        turquoise: '#00BFCC',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
