const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),

    devtool: process.env.NODE_ENV === 'production' ? 'none' : 'source-map',

    entry: "./index.jsx",
	
	resolve: {
      extensions: [".js", ".jsx"]
    },
	
	module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader",
          })
        }
      ]
    },

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),
        new HTMLWebpackPlugin({
            title: "Webpack App",
            hash: false,
            template: "./index.html"
        })
    ],

    watch: false
};
