/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['Ubuntu', 'monospace'],
      },
    },
  },
  plugins: [],
}