const path = require("path");

module.exports = {
  mode: "production", // 'production' | 'development' | 'none' | default: 'production'
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "output"), // default: 'dist'
    filename: "bundle.js", // default: 'main.js'
  },
};
