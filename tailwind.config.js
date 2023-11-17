/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './node_modules/@blizzy/react-outline/dist/**'],
  darkMode: 'class',

  theme: {
    linearGradientColors: (theme) => theme('colors'),

    boxShadow: {
      sm: '0 1px 3px rgb(0 0 0 / 0.12), 0 1px 2px rgb(0 0 0 / 0.24)',
      DEFAULT: '0 3px 6px rgb(0 0 0 / 0.15), 0 2px 4px rgb(0 0 0 / 0.12)',
      md: '0 10px 20px rgb(0 0 0 / 0.15), 0 3px 6px rgb(0 0 0 / 0.1)',
      lg: '0 15px 25px rgb(0 0 0 / 0.15), 0 5px 10px rgb(0 0 0 / 0.05)',
      xl: '0 20px 40px rgb(0 0 0 / 0.2)',
    },

    extend: {
      colors: {
        bzyellow: 'rgba(231, 178, 50, 1)',
      },

      width: {
        '1/8': '12.5%',
      },

      height: {
        '1/8': '12.5%',
      },

      fontFamily: {
        headline: 'var(--font-montserrat)',
        copy: 'var(--font-poppins)',
      },
    },
  },

  plugins: [require('tailwindcss-gradients')],
}
