const path = require("path"); // 노드 모듈 중에 path를 가져와서 사용
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    // 여려 개의 모듈을 하나로 만들어서 저장시킬 위치를 설정
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    // css-loader를 설정합니다.
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
