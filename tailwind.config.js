/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#fdf4f3',
          100: '#fbe8e6',
          200: '#f5d0cd',
          300: '#ecada7',
          400: '#e08079',
          500: '#d15c50',
          600: '#bc4c3e',
          700: '#9d3d31',
          800: '#82352c',
          900: '#6d3129',
        },
        sage: {
          50: '#f7f8f7',
          100: '#eef0ee',
          200: '#d9ddd9',
          300: '#b8c0b8',
          400: '#8f9b8f',
          500: '#6e7d6e',
          600: '#566356',
          700: '#465046',
          800: '#3a403a',
          900: '#323632',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f2',
          200: '#f9f1e3',
          300: '#f3e6cc',
          400: '#ebd4a8',
          500: '#e0c084',
          600: '#d3a869',
          700: '#b18d55',
          800: '#907249',
          900: '#745e3e',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
};