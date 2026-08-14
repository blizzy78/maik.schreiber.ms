/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './node_modules/@blizzy/react-outline/dist/**'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        fog: '#e8f0f2',
        paper: '#f8fbfa',
        ink: '#102f40',
        blue: '#21647b',
        signal: '#df5b43',
        steel: '#b7c7cb',
        muted: '#5f747e',
        blush: '#ffc2b4',
        picture: '#d7e2e4',
        placeholder: '#d4e0e2',
      },

      fontFamily: {
        'geist-sans': 'var(--font-geist-sans)',
        display: ['Alegreya Variable', 'ui-serif', 'serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },

  plugins: [require('@tailwindcss/container-queries')],
}
