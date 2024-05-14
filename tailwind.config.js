/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito"],
      rodetta: ["Rodetta"],
    },
    extend: {
      colors: {
        "dark-blue": "#0E3744",
        orange: "#FBA346",
        "light-blue": "#CCE8E6",
        ungu: "#6590FE",
        red: "#A13323",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1920px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
