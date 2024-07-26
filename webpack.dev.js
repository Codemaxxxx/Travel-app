const path = require('path');
const webpack = require('webpack');
const common = require("./webpack.common");
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [

            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
    },
    plugins: [
        
    ],
});