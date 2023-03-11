/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        toTop: "toTop 0.1s ease-in-out",
        toHeightAuto: "toHeightAuto 0.6s ease-in-out",
      },
    },
    keyframes: {
      toTop: {
        "0%": { transform: "translateY(-5px)", opacity: "0.8" },
        "100%": { transform: "translateY(0px)", opacity: "1" },
      },
      toHeightAuto: {
        "0%": { height: "0px", opacity: "0", visibility: "hidden" },
        "100%": { height: "auto", opacity: "1", visibility: "visible" },
      },
    },
  },
  plugins: [],
};
