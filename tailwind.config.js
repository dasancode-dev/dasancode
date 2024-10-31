/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'primary-purple-dark': '#240046',
        'primary-purple-light': '#54148D',
        'primary-rose': '#F9626C',
        'primary-red': '#F72634',
        'secondary-pink': '#D067EF',
        'secondary-black': '#B49CB5',
        'secundary-gray': '#545454',
        'secundary-white': '#F4EEEF'
      }
    },
  },
  plugins: [],
};
