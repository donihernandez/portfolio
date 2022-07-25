module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      Nicollast: ["Nicollast", "sans serif"],
      Montserrat: ["Montserrat", "sans serif"],
      "Montserrat-Bold": ["Montserrat-Bold", "sans serif"],
      "Montserrat-Light": ["Montserrat-Light", "sans serif"],
      "Montserrat-Thin": ["Montserrat-Thin", "sans serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
