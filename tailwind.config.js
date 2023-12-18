/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements-react/dist/js/**/*.js",
];
export const theme = {
  extend: {
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden",
        },
        "100%": {
          width: "100%",
        },
      },
      blink: {
        "50%": {
          borderColor: "transparent",
        },
        "100%": {
          borderColor: "white",
        },
      },
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
    },
  },
};
export const darkMode = "class";
// eslint-disable-next-line no-undef
export const plugins = [require("tw-elements-react/dist/plugin.cjs")];
