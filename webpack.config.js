const path = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: "production",
  entry: {
    light: { import: "./app/assets/light.js", layer: 'light' },
    dark: { import: "./app/assets/dark.js", layer: 'dark' },
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, "public/assets"),
    clean: true,
  },
  experiments: {
    layers: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.sass$/i,
        oneOf: [
          {
            issuerLayer: 'light',
            use:
              [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                  loader: 'sass-loader',
                  options: {
                    additionalData: '$color: white',
                  }
                },
              ],
          },
          {
            issuerLayer: 'dark',
            use:
              [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                  loader: 'sass-loader',
                  options: {
                    additionalData: '$color: black',
                  }
                },
              ],
          },
        ]
      },
    ],
  },
}
