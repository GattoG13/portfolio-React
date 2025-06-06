/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        softBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }, // rebote suave hacia arriba
        },
      },
      animation: {
        softBounce: 'softBounce 1s ease-in-out infinite', // nombre de la animación
      },
    },
  },
  plugins: [],
}