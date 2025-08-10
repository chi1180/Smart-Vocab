/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#eaeaea",
        secondary: "#d9d9d9",
        accent: "#61dafb",
      },
      colors: {
        font: "#1a1a1a",
        accent: "#61dafb",
        primary: "#eaeaea",
        secondary: "#d9d9d9",
      },
    },
  },
  plugins: [],
};
