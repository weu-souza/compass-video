/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "500": "#00386C",
          "400": "#0063E5",
          "300": "#037AEB",
          "200": "#068DFF",
          "100": "#67BDFF"
        },
        "secondary": "#02E7F5",
        "neutral": {
          "700": "#101116",
          "600": "#1A1D29",
          "500": "#30333E",
          "400": "#5F6169",
          "300": "#74757D",
          "200": "#C8C9CB",
          "100": "#F9F9F9"
        },
        opacity: {
          "withe-12": "rgba(255, 255, 255, 0.12)",
          "black-10": "rgba(0, 0, 0, 0.1)",
          "gray-40": "rgba(249, 249, 249, 0.4)",
          "white-10": "rgba(255, 255, 255, 0.1)"
        },
        customColor: "rgba(53, 56, 67, 0.79)",
      },
      
      fontFamily: {
        montserrat: ['"work sans"', 'sans-serif'],
      }

    },
  },
  plugins: [],
};