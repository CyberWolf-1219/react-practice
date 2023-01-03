/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsla(258, 90%, 66%, 0.7)',
        'secondary': '#1f2937',
        'fade': '#e5e5e5'
      }
    },
  },
  plugins: [],
}