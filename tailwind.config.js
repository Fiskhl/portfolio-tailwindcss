/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', 'index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#10b981',
        'secondary': '#64748b',
        'dark': '#0f172a',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
