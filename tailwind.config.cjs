
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
          '0%': { opacity:0, transform: 'translateX(-50%)' },
          '100%': { opacity:1, transform: 'translateX(0)' },
        },
        LeftToRight: {
          '0%': { opacity:0, transform: 'translateX(50%)' },
          '100%': { opacity:1, transform: 'translateX(0)' },
        }
     },
     animation:{
        firstH1Animation: 'rightToLeft 1s ease-in-out',
        secondH1Animation: 'LeftToRight 1s ease-in-out'
     }
    },
  },
  plugins: [],
}