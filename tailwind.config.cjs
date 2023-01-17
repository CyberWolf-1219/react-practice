/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#ffffff',
        'fade': '#a3a3a3'
      },
      fontFamily: {
        'f-heading': [ 'Rubik' ],
        'f-sub-heading': [ '"Nunito Sans"' ],
        'f-body': [ 'Questrial' ]
      }
    },
  },
  plugins: [],
}