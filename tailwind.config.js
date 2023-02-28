const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      ...colors,
      primary: '#1a202c',
      secondary: '#2d3748',
      tertiary: '#4a5568',
    },
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    //   '2xl': '1536px',
    // },
    // fontFamily: {
    //   sans: ['Open Sans', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderStyle: ['hover'],
      borderWidth: ['first', 'last'],
      textColor: ['active'],
      outline: ['focus-visible'],
      ringColor: ['focus-visible'],
      ringOffsetColor: ['focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      ringOpacity: ['focus-visible'],
      ringWidth: ['focus-visible'],
      cursor: ['disabled'],
      opacity: ['disabled'],
    },
  },
  plugins: [require('tailwindcss-animate')],
}
