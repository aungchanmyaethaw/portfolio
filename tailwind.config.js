/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#4979EE",
        light: "#f2ecff",
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
