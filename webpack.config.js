const path = require("path");

module.exports = {
  mode: "development", // 'production' | 'development' | 'none' | default: 'production'
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "output"), // default: 'dist'
    filename: "bundle.js", // default: 'main.js'
  },
  watch: true,
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
