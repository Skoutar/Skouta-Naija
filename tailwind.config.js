/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/images/Banner.png')",
      },
      colors: {
        mainColor: '#6200EE',
      },
    },
  },
  plugins: [],
};
