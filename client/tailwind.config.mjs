/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      athiti: ["Athiti", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      Dancing: ["Dancing Script", "cursive"],
      inter: ["Inter", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
