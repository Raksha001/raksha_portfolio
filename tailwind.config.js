const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./pages/**/*.ts",
    "./components/**/*.ts",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["ui-monospace", ...defaultTheme.fontFamily.mono],
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...colors,
        homepageIcon: "#225da5",
        accent: colors.teal["500"],
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
