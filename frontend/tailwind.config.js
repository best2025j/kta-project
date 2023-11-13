/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  // Enable dark mode based on the class applied to the <html> element
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        darkBackground: "#1a202c", // Dark mode background color
        darkText: "#ffffff", // Dark mode text color
      },
      fontFamily: {
        sans: ["SFPro", "sans"], // 'sans' is a generic font family fallback
      },
    },
  },
  plugins: [],
};
