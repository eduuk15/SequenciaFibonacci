/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {
      fontSize: {
        title: ['2.2rem', '4rem']
      },
      colors: {
        'violetImage': '#6c32ff'
      }
    },
  },
  plugins: [],
}
