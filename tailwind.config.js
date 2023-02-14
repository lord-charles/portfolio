/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxxs: "20px",
      xxs: "360px",
      xs: "480px",
      s: "640px",
      sm: "1000px",
      md: "1025px",
      lg: "1100px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        "light-yellow": "#F8F7F1",
      },
    },
  },
  plugins: [],
};
