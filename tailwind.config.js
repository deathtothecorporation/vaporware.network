const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    theme: {
      extend: {
        transform: ['hover', 'focus'],
        fontFamily: {
          'sans': ['Inter', 'Arial', 'sans-serif'],
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.mirror': {
          display: 'inline-block',
          transform: 'scaleX(-1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
