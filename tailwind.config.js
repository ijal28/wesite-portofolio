/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4/3',
        '3/4': '3/4',
        '2/3': '2/3',
        '2/5': '2/5',
        '1/3': '1/3',
        '3/1': '3/1',
        '9/16': '9/16',
      },
    },
    fontFamily: {
      body: ['Fira Sans', 'sans-serif'],
      body_dua : ['Fira Mono', 'monospace'],
      protes_riot: ['Protest Riot', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    },
  },
  plugins: [],
}

