/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-primary)"],
      },
      screens: {
        ss: "421px",
      },

      colors: {
        my_black: {
          DEFAULT: "#13192b",
          light: "#495664",
          lightest: "#f3f4f6",
        },
        my_white: "#f7f9fa",
      },
    },
  },
  plugins: [],
};
