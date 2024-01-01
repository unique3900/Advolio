const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      keyframes: {
        'trans-bounce': {
          '0%,100%': { transform: 'translateY(10px)' },
          '50%': {transform:'translateY(0)'}
        }
      },
      animation: {
        'trans-bounce': 'trans-bounce 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
});