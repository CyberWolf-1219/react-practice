/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(213, 100%, 45%, 0.8)',
        'shade-1': 'hsl(203, 65%, 92%, 0.5)',
        'dark': '#222433',
        'light': '#e6e9f0'
      }
    },
  },
  plugins: [],
}