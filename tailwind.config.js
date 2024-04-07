/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      fraunces: ['Fraunces', 'sans-serif'],
    },
    extend: {
      screens: {
        mb: '500px',
      },
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        'dark-blue': 'hsl(212, 21%, 14%)',
        'grayish-blue': 'hsl(228, 12%, 48%)',
      },
    },
  },
  plugins: [],
};
