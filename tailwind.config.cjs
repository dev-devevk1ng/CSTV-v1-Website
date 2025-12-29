
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "720px",
      lg: "800px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1600px",
      "4xl": "1920px",
    },
    extend: {
      zIndex: {
        1000: "1000",
      },
      colors: {
        primary: '#123456'
      }

    },
  },
  plugins: [],
}
