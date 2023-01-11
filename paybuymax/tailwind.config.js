/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#F24405',
        'accent-2': '#FFCC29',
        'primary': '#FFFFFF',
        'secondary': '#000000'
      }
    },
  },
  plugins: [],
}