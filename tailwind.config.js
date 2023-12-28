/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   "gray-20": "#F8F4EB",
      //   "gray-50": "#EFE6E6",
      //   "gray-100": "#DFCCCC",
      //   "gray-500": "#5E0000",
      //   "primary-100": "#FFE1E0",
      //   "primary-300": "#FFA6A3",
      //   "primary-500": "#FF6B66",
      //   "secondary-400": "#FFCD5B",
      //   "secondary-500": "#FFC132",
      // },

      colors: {
        primary: {
          DEFAULT: "#1E429F", // Синій колір за замовчуванням
          100: "#D4EAF5", // Світло-синій
          300: "#75B2D9", // Середній синій
          500: "#1E429F", // Темно-синій
        },
        secondary: {
          DEFAULT: "#FFD700", // Жовтий колір за замовчуванням
          400: "#FFCD5B", // Жовтий (приблизно)
          500: "#FFC132", // Жовтий (темний)
        },
      },

      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),

      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      content: {
        evolvetext: "url('./assets/EvolveText1.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },

    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },

  plugins: [],
};
