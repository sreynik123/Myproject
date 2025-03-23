/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: "glowEffect 1.5s infinite alternate",
      },
      keyframes: {
        glowEffect: {
          "0%": { boxShadow: "0 0 10px rgba(255, 255, 0, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(255, 255, 0, 1)" },
        },
      },
    },
    },
  
  plugins: [],
}