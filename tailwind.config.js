/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx}",
  ],
  plugins: [],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
