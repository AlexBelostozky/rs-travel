const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
  },
  publicPath: process.env.NODE_ENV === "production" ? "/rs-travel/" : "/",
});
