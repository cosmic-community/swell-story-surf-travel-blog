/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f9f9',
          100: '#d4f0ef',
          200: '#a9e1df',
          300: '#76cbc9',
          400: '#48afae',
          500: '#2e9493',
          600: '#237676',
          700: '#1f5f60',
          800: '#1d4d4e',
          900: '#1b4142',
          950: '#0a2627',
        },
        sand: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d8b5',
          300: '#e9be86',
          400: '#df9d55',
          500: '#d88435',
          600: '#ca6e2a',
          700: '#a85525',
          800: '#874524',
          900: '#6e3a20',
          950: '#3b1c10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1d4d4e',
            h1: { color: '#1b4142' },
            h2: { color: '#1d4d4e' },
            h3: { color: '#1f5f60' },
            strong: { color: '#1b4142' },
            a: { color: '#2e9493', textDecoration: 'underline' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}