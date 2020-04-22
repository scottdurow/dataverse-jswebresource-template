const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  watch: true,
  //mode:"development",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "WebresourceTemplate",
    libraryTarget: "var",
  },
};
