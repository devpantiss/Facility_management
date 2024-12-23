/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-clockwise": "spin-clockwise 10s linear infinite",
        "spin-anticlockwise": "spin-anticlockwise 10s linear infinite",
      },
      keyframes: {
        "spin-clockwise": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-anticlockwise": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },

  plugins: [],
};
