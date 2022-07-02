/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'Arial', 'sans-serif'],
      serif: ['Noticia Text', 'Times', 'serif'],
      mono: ['"Roboto Mono"', '"Courier New"', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}
