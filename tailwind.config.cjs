
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
     },
     animation:{
        firstH1Animation: 'rightToLeft 1.4s ease-in-out',
        secondH1Animation: 'LeftToRight 1.4s ease-in-out',
        fadeIn: 'fadeIn 3s ease-in-out'
     }
    },
  },
  plugins: [
   require("tailwindcss-animate"),
  ],
}