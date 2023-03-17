
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': '320px'
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif']
      },
     keyframes: {
        rightToLeft: {
          '0%': { opacity:0, transform: 'translateX(-10rem)' },
          '100%': { opacity:1, transform: 'translateX(0)' },
        },
        LeftToRight: {
          '0%': { opacity:0, transform: 'translateX(10rem)' },
          '100%': { opacity:1, transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%, 50%': {opacity: 0},
          '100%': {opacity: 1}
        },
        downUp:{
          '0%': {opacity:0, transform: 'translateY(10rem)'},
          '100%': {opacity:1, transform: 'translateY(0)'}
        }
     },
     animation:{
        rightLeft: 'rightToLeft 1.4s ease-in-out ',
        leftRight: 'LeftToRight 1.4s ease-in-out',
        fadeIn: 'fadeIn 3s ease-in-out',
        downUp: 'downUp 1.4s ease-in-out'
     }
    },
  },
  plugins: [
   require("tailwindcss-animate"),
   require('tailwind-scrollbar')
  ],
}