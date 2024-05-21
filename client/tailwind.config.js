/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        shake: {
          '0%, 12.5%, 100%': { transform: 'translateX(0)' },
          '15%, 22.5%, 27.5%, 35%, 40%': { transform: 'translateX(-10px)' },
          '17.5%, 25%, 30%, 37.5%': { transform: 'translateX(10px)' },
          '50%, 62.5%, 75%, 87.5%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        shake: 'shake 2s linear infinite alternate'
      },
    },
  },
  variants: {},
  plugins: [],
}
