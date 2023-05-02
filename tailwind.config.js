/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D2C39",
        secondary: "#4979EE",
        light: "#F0EDFF",
      },
      fontFamily: {
        heading: ["Open-Sans", "sans-serif"],
        paragraph: ["Inter", "sans-serif"],
        bebas: ["Bebas-Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
