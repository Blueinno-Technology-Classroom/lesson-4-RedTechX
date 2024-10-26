module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["night", "forest", "nord", "pastel"],
  },
  plugins: [require("daisyui")],
};
