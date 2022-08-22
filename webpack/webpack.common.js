/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const entries = {
  main: {
    filename: "main.js",
    import: join(__dirname, "../src/main.js"),
  },
};

module.exports = {
  entry: entries,
  output: {
    filename: "[name].bundle.js",
    path: join(__dirname, "../dist"),
    publicPath: "/dist",
  },
  module: {},
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: [".js"],
  },
};
