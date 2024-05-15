/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
      screens: {
        xs: "378px",
      },
      fontSize: {
        "2xs": "0.5rem", // Adjust the font size as needed
      },
    },
  },
  plugins: [],
};
