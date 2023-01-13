/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./PageSections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f6f6f6',
        'secondary': '#1B2534',
        'fade': '#606060',
        'accent': '#29A0F5'
      }
    },
  },
  plugins: [],
}