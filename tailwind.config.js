/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#a0a0a0',
        accent: '#333333',
        background: '#000000',
        surface: '#0a0a0a',
      },
    },
  },
  plugins: [],
}
