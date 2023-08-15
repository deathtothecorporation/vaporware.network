const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
   purge: ['./index.html', './_frontend/src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    'index.html',
    './_frontend/src/**/*.{js,jsx,ts,tsx,vue,html}',
    // "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.5rem',
        'sm': '0.65rem',
        base: '1.00rem',
        lg: '1.3rem',
        xl: '1.75rem',
        '2xl': '1.85',
        '3xl': '2.441rem',
        '4xl': '3.052rem',
      },
      colors: {
        'black': '#000000',
        'blue': '#008EFF',
        'soft-blue': '#E5F4FF',
        'green': '#2AD546',
        'soft-green': '#EAFBEC',
        'indigo': '#615FD3',
        'soft-indigo': '#EFEFFB',
        'orange': '#FF9040',
        'soft-orange': '#FFF4EC',
        'red': '#FF6240',
        'soft-red': '#FFEFEC',
        'yellow': '#FADE7A',
        'soft-yellow': '#FAF5D9',
        'black-100': '#000000',
        'black-04': '#F5F5F5',
        'black-19': '#E5E5E5',
        'black-20': '#CCCCCC',
        'black-30': '#B3B3B3',
        'black-40': '#999999',
        'black-50': '#808080',
        'black-60': '#666666',
        'black-70': '#4C4C4C',
        'black-80': '#333333',
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [],
}

