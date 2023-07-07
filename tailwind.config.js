/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        text: "#0e1025",
        background: "#fbfbfe",
        primarybutton: "#af93d7",
        secondarybutton: "#ffffff",
        accent: "#d193d7",
        secbg: "#2c5d87",
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
