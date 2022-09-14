/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#7C5DFA',
      'primary-light': '#9277FF',
      'secondary': '#DFE3FA',
      'secondary-dark': '#7E88C3',
      'midnight': '#1E2139',
      'gray-dark': '#252945',
      'gray-light': '#888EB0',
      'black': '#0C0E16',
      'white': '#FFFFFF',
      'warning': '#EC5757',
      'warning-light': '#9277FF',
      'light': '#F8F8FB',
      'dark': '#141625',
    },
  },
  fontFamily: {
    sans: ['Spartan', 'sans-serif'],
  },
  plugins: [],
}
