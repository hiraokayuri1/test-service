const path = require("path");
const nodeExternals = require("webpack-node-externals");

const config = {
  entry: path.resolve(__dirname, "../src/index.ts"),
  target: "node",
  externals: [nodeExternals()], // warning解消??
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true } //  ビルドの高速化
          }
        ]
      },
      { test: /\.png$/, loader: "url-loader" }
    ]
  },

  /**
   * @field resolve
   * @description
   * import する際の拡張子指定の省略化
   * エイリアスの指定
   */
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "~application": path.resolve(__dirname, "../src/application"),
      "~src": path.resolve(__dirname, "../src")
    }
  }
};

module.exports = config;
