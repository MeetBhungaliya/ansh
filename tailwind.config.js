/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        line: {
          from: {
            top: "0"
          },
          to: {
            top: "100%"
          }
        }
      },
      animation: {
        line: "line 20s ease infinite"
      }
    },
  },
  plugins: [],
}