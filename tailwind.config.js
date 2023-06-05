/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      backgroundColor: {
        card: '#F6F6F0',
        dark: '#D9D9D9',
        'less-dark': '#F6F6F0',
      },
      colors: {
        'light-gray': '#838383',
        'dark-gray': '#777775',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
