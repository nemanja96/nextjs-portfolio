/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          black: {
            500: "#17181d", 
          },
          green: {
            500: "#32ffaa", 
          },
          yellow: {
            500: "#feda54", 
          },
          gray: {
            500: "#d9d9d9", 
          },
      }
    },
  },
  plugins: [],
}
