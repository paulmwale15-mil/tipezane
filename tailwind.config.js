/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        fadeOut: { "0%": { opacity: 1 }, "100%": { opacity: 0 } },
        pulseSoft: { "0%,100%": { opacity: 0.6 }, "50%": { opacity: 1 } }
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
        pulseSoft: "pulseSoft 1.8s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};
