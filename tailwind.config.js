/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "425px",
      tablet: "700px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        "dark-100": "rgba(15,15,15,1)",
        "dark-200": "rgba(30,30,30,1)",
        "dark-300": "rgba(45,45,45,1)",
        "dark-400": "rgba(60,60,60,1)",
        "dark-500": "rgba(75,75,75,1)",
        "dark-600": "rgba(90,90,90,1)",
        "light-100": "rgba(245,245,245,1)",
        "light-200": "rgba(224,224,224,1)",
        "light-300": "rgba(204,204,204,1)",
        "light-400": "rgba(189,189,189,1)",
        "light-500": "rgba(158,158,158,1)",
        "vsc-blue": "#0078D7",
        "mongo-green": "#6B9B63",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
};
