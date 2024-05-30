/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontFamily:{
      'inter':['Inter']
    },
    letterSpacing:{
      eight:'.08em',
      widest: '0.1em',
      double:'0.2em'
    },
    extend: {
      boxShadow:{
        'btn':'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1), 0 8px 10px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.1)',
      },
      rotate:{
        '40':'40deg',
        '30':'30deg'
      }
    },
  },
  plugins: [],
}

