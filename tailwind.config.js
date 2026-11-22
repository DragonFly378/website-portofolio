/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito"],
      rodetta: ["Rodetta"],
      serif: ["Lora", "ui-serif", "Georgia", "serif"],
    },
    extend: {
      colors: {
        "dark-blue": "#0E3744",
        orange: "#FBA346",
        "light-blue": "#CCE8E6",
        ungu: "#6590FE",
        red: "#A13323",

        // Blog reading environment — deliberately distinct from the brand
        // teal/orange used everywhere else, so /blog reads like its own
        // "ink on paper at night" space.
        "blog-bg": "var(--blog-bg)",
        "blog-ink": "var(--blog-ink)",
        "blog-ink-soft": "var(--blog-ink-soft)",
        "blog-muted": "var(--blog-muted)",
        "blog-accent": "var(--blog-accent)",
        "blog-hairline": "var(--blog-hairline)",
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
