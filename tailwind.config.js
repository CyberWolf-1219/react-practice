/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Poppins": [ "Poppins" ]
    },
    extend: {
      colors: {
        'primary': "#000000",
        'secondary': "#ffffff",
        'accent': "#FDCF09"
      }
    },
  },
  plugins: [],
}