/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-100": "rgba(15,15,15,1)",
        "dark-200": "rgba(30,30,30,1)",
        "dark-300": "rgba(45,45,45,1)",
        "dark-400": "rgba(60,60,60,1)",
        "dark-500": "rgba(75,75,75,1)",
        "dark-600": "rgba(90,90,90,1)",
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
