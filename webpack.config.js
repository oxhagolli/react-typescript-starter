const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
