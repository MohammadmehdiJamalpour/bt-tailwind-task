/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    fontFamily: {
      sans: ["vazir"],
    },
    extend: {
      screens: {
        xs: "378px",
      },
    },
  },
  plugins: [],
};
