/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  important: true,
  
  theme: {
    fontFamily:{
      display: ["Poppins", "sans-serif"]
    },
  },

  plugins: [
    require('tailwind-scrollbar')({incompatible: true}),
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollBarWidth: "8px",
          scrollBarColor: "rgb(31 29 29) green",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#04826033",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#048260",
            borderRadius: "8px",
          },
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
}