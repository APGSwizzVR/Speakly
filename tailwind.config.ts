import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],

  theme: {
    extend: {
      animation: {
        fade: "fade 0.5s ease-in-out",
        slide: "slide 0.4s ease-out",
        float: "float 3s ease-in-out infinite"
      },

      keyframes: {
        fade: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },

        slide: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },

        float: {
          "0%,100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        }
      }
    }
  },

  plugins: []
};

export default config;