const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     fontFamily: {
//       roboto: ['Roboto']
//     }
//   },
//   plugins: [],
//   darkMode: "class",
// };


module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ['Roboto']
    }
  },
  plugins: [],
  darkMode: "class",
});