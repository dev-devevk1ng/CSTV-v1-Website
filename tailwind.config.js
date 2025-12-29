
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}", "./pages/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "720px",
      lg: "900px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
      "4xl": "1920px",
    },
    extend: {
      zIndex: {
        1000: "1000",
      },
      colors: {
        light: {
          background: 'blue',
          text: '#111827',
        },
        dark: {
          background: '#151515',
          text: '#f9fafb',
        },
        blastProSeries: {
          background: 'red',
          text: '#657b83',
        },
      },
    },
  },
  plugins: [],
}
