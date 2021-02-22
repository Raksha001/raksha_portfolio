const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./Navbar/**/*.js",
    "./pages/**/*.ts",
    "./components/**/*.ts",
    "./Navbar/**/*.ts",
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
  plugins: [
    // Other plugins
    require("tailwindcss-animatecss")({
      classes: [
        "animate__animated",
        "animate__fadeIn",
        "animate__bounceIn",
        "animate__lightSpeedOut",
      ],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
      variants: ["responsive", "hover", "reduced-motion"],
    }),
  ],
};
