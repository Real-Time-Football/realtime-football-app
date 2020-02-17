const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        scoreboard: './src/components/ScoreBoard.js',
        page: './src/pages/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Score Board Page',
            chuncks: ['page'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: require.resolve('babel-loader'),
            },
        ],
    },
}
