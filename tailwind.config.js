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
        from: {
          width: "0%",
          visibility: "hidden",
        },
        to: {
          width: "100%",
        },
      },
      blink: {
        from: {
          borderColor: "transparent",
        },
        to: {
          borderColor: "transparent",
        },
      },
    },
    animation: {
      typing: "typing 2s steps(20) alternate, blink .7s infinite",
    },
  },
};
export const darkMode = "class";
// eslint-disable-next-line no-undef
export const plugins = [require("tw-elements-react/dist/plugin.cjs")];
