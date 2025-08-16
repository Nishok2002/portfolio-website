/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#34AADC', // Apple Blue
      secondary: '#5AC8FA', // Apple Light Blue
      accent: '#FF9500', // Apple Orange
      warning: '#FFCC00', // Apple Yellow
      success: '#4CD964', // Apple Green
      danger: '#FF2D55', // Apple Pink
      },
    },
  },
  plugins: [],
};
