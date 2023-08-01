//** @type {import('tailwindcss').Config} */
const defaultThem = require("tailwindcss/defaultTheme");
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
        "planets":
          "url('https://live.staticflickr.com/65535/53083483233_9a55507c37_h.jpg')",
        "wizard":
          "url('https://live.staticflickr.com/65535/53082419997_e9501e9881_o.png')",
      },
    },
    fontFamily: {
      trifuno: "Trifuno Heavy",
      sans: ["Trifuno Heavy", ...defaultThem.fontFamily.sans],
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};
