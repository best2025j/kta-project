/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Enable dark mode based on the class applied to the <html> element
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        darkBackground: "#1a202c", // Dark mode background color
        darkText: "#ffffff", // Dark mode text color
      },
    },
  },
  plugins: [],
};
