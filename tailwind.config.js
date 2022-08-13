/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    linearGradientColors: theme => theme('colors'),

    extend: {
      colors: {
        bzyellow: '#E7B232'
      },

      width: {
        '1/8': '12.5%'
      },

      height: {
        '1/8': '12.5%'
      },

      fontFamily: {
        headline: ['Arvo'],
        copy: ['Lato']
      }
    }
  },
  plugins: [
    require('tailwindcss-gradients')
  ]
}
