/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
export default {
  content: ["./node_modules/flowbite/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito"'],
      },
      colors: {
        primary: "#D20653",
        // gray: "#828282",
        secondary: '#FF951D',
        title: "#333333",
        'light-bg': "#FFF5E9",
        description: '#4F4F4F',
        ...colors,
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
