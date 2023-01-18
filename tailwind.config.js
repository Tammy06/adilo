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
        'layout': '20% auto',
      },
      colors: {
        'saffron-mango': '#FBBD71',
        'rhino': '#21455E',
        'pacific-blue': '#0DABD8',
        'smokey-grey': '#707070',
        'grey-light-100': '#EBF2F6',
        'grey-dark-100': '#E2E5ED',
      },
      width: {
        'header-wrapper': '90%',
      }
    },
  },
  plugins: [],
}
