module.exports = {
  devServer: {
    overlay: false,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/main.scss";`,
      },
    },
  },
};
