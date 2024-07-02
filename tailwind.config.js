import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/images/Banner.png')",
        'Brand': "url('/images/Navlogo.png')",
      },
      colors: {
        mainColor: '#6200EE',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-in-out',
        fadeInUpDelay: 'fadeInUp 1.5s ease-in-out',
        slide: 'slide 10s linear infinite',
      },
    },
  },
  plugins: [
    tailwindScrollbar,
  ],
};
