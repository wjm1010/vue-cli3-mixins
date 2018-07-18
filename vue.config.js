module.exports = {
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 1010,
    https: false,
    hotOnly: false,
    proxy: null,
    before: app => {}
  }
};
