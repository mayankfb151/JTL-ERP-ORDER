const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    devServer: {
        port: 3001,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css$/,
                loader: "css-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new ModuleFederationPlugin({
            name: "OrdersMicroApp",
            filename: "dist/remoteEntry.js",
            exposes: {
                "./FancyButton": "./src/FancyButton",
            },
            shared: {
                "@mui/material": {
                    singleton: true,
                },
            },
        }),
    ],
    optimization: {
        minimize: false,
    },
};
