/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'back': {
          DEFAULT: '#101010',
        },
        'indigo': {
          DEFAULT: '#4e3dfd',
        },
        'card': {
          DEFAULT: '#151515',
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  
}
