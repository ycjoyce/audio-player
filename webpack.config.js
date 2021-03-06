const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const DotEnv = require("dotenv-webpack");

const commonConfig = {
  entry: {
    main: "./index.tsx",
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "@img": path.resolve(__dirname, "./src/images"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "source-map-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name() {
                if (process.env.NODE_ENV === "development") {
                  return "img/[name].[ext]";
                }
                return "img/[contenthash].[ext]";
              },
              esModule: false,
            },
          },
        ],
        type: "javascript/auto",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
    new DotEnv(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

const developmentConfig = {
  devtool: "source-map",
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 5000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
};

const productionConfig = {
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/audio-player/",
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};

module.exports = (env, args) => {
  switch (args.mode) {
    case "development":
      return merge(commonConfig, developmentConfig);
    case "production":
      return merge(commonConfig, productionConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};
