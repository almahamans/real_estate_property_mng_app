/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'lobester': ['Lobster', 'cursive'],
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      'lg': {'min':'852px','max': '1444px'},
      'md': {'min':'641px','max': '850px'},
      'sm': {'min':'440px','max': '639px'},
      'xs': {'max': '439px'}
    },
  },
  plugins: [],
}

