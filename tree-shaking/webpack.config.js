const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "production",
  // need for development mode, for production it is applied by default
  //   optimization: {
  //     usedExports: true,
  //   },
};
