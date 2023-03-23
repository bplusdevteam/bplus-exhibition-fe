/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
      aspectRatio: {
        "1920/894": "1920 / 894",
      },
      maxWidth: {
        "1/3": "33%",
      },
      animation: {
        spin: "spin 1s linear infinite;",
      },
    },
    keyframes: {
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
  },
  plugins: [],
};
