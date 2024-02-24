/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        Oswald: ["Oswald", "sans serif"],
        Inter: ["Inter"],
        Poppins: ["Poppins"],
      },
      backgroundImage: {
        heroLight:
          "url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')",
        heroDark:
          "url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')",
      },
      colors: {
        primary: "#b033fd",
      },
    },
  },
  plugins: [],
};
