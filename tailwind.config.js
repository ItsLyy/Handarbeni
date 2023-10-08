/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary: '#14b8a6',
        dark: '#0f172a',
        red: '#dc2626'
      },
      screens: {
        '2xl' : '1320px' ,
      }
    },
  },
  plugins: [],
}
