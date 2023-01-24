/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.vue",
    "./src/layouts/**/*.vue",
    "./src/fragments/**/*.vue",
    "./src/views/**/*.vue",
    "./index.html",
    "./src/core/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat']
      }
    },
  },
  plugins: [],
}
