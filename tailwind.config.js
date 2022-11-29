/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'Arial', 'sans-serif'],
      serif: ['Noticia Text', 'Times', 'serif'],
      mono: ['"Roboto Mono"', '"Courier New"', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'about': "url('/assets/david-martin-6NpYOFB3VCI-unsplash.jpeg')",
      },
    },
  },
  plugins: [],
};
