/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          700: "#0050a0",
          600: "#0063c5",
          500: "#0077e6",
          400: "#3399ff",
          300: "#66b2ff",
          200: "#99ccff",
          100: "#ddeeff",
          50: "#f0f7ff",
        },
        accent: {
          600: "#00897b",
          500: "#00a896",
          400: "#26bfad",
          100: "#d0f5f1",
          50: "#edfaf8",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
