//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#4a8cf4",
        },
        secondary: {
          "50": "#f8f8f8",
          "100": "#ed1c24",
        },
      },
      backgroundImage: {
        "planets": "url('./src/assets/img/header.jpg')",
        "jamie": "url('./src/assets/img/jamie-kriegel.png')",
      },
    },
    fontFamily: {},
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};
