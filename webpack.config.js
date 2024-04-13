const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    stats: {
        warnings: false,
    },
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        // Specify the public path where the bundle.js file should be served from
        publicPath: "/",
        // Specify the output directory
        path: path.resolve(__dirname, "dist"),
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
                "./ItemTable": "./src/ItemTable",
                "./App1Index": "./src/bootstrap",
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: "^18.2.0",
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: "^18.2.0",
                },
                "@mui/material": {
                    singleton: true,
                    requiredVersion: "^5.15.15",
                },
                "@emotion/styled": {
                    singleton: true,
                    requiredVersion: "^11.11.5",
                },
                "@emotion/react": {
                    singleton: true,
                    requiredVersion: "^11.11.4",
                },
                /*"react-router-dom": {
                    singleton: true,
                    version: "6.22.3",
                    eager: true,
                },*/
            },
        }),
    ],
    optimization: {
        minimize: false,
    },
};
