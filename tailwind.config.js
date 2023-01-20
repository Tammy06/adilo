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
        'main-header': '150px auto',
      },
      colors: {
        'saffron-mango': '#FBBD71',
        'rhino': '#21455E',
        'pacific-blue': '#0DABD8',
        'smokey-gray': '#707070',
        'gray-light-100': '#EBF2F6',
        'gray-light-200': '#637C8E',
        'gray-light-300': '#ECEBED',
        'gray-light-400': '#F8FAFB',
        'gray-dark-100': '#E2E5ED',
        'custom-red': '#EF5350',
        'modal': 'rgba(0, 0, 0, 0.3)',
      },
      width: {
        'header-wrapper': '90%',
      },
      fontSize: {
        '2xs': '10px',
      },
    },
  },
  plugins: [],
}
