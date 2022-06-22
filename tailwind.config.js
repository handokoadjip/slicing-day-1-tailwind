/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        belleza: ["Belleza", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        marcellus: ["Marcellus", "serif"],
      },
    },
  },
  plugins: [],
};
