/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      fontFamily: {
        spacemono: ['"Space Mono"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
