/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f4f4f4',
        'secondary': '#252422',
        'accent': '#f9cdcd'
      }
    },
  },
  plugins: [],
}