const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('./header_bg.jpeg')",
      },
      backgroundSize: {
        '50%': '50%',
        '16': '4rem',
      }
    },
    screens: {
      'xs': '425px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
