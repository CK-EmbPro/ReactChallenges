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

  plugins: [],
}