/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {
      fontSize: {
        title: ['3.0rem', '4rem'],
        clamp: ['clamp(1em, 1em + 1vw, 1.5em)', '2rem']
      },
      colors: {
        'violetImage': '#6c32ff'
      }
    },
  },
  plugins: [],
}
