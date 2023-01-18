/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'nav': '1fr 3fr 1fr',
      },
      colors: {
        'saffron-mango': '#FBBD71',
        'rhino': '#21455E',
      },
      width: {
        'header-wrapper': '95%',
      }
    },
  },
  plugins: [],
}
