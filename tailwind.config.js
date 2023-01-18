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
        'nav': '1fr 4fr 2fr',
      },
      colors: {
        'saffron-mango': '#FBBD71',
        'rhino': '#21455E',
        'pacific-blue': '#0DABD8',
        'smokey-grey': '#707070',
      },
      width: {
        'header-wrapper': '90%',
      }
    },
  },
  plugins: [],
}
