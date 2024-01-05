module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#f9faff", 600: "#828282", 900: "#25282b" },
        yellow: { 700: "#fdc435" },
        blue_gray: { 900: "#333333", "400_19": "#7090b019" },
        indigo: { 50: "#e7ebf4" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        playfairdisplay: "Playfair Display",
        comfortaa: "Comfortaa",
        nunito: "Nunito",
        raleway: "Raleway",
        roboto: "Roboto",
      },
      boxShadow: { bs: "0px 6px  64px 0px #7090b019" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
