module.exports = {
    mode: 'development',
    entry: {
        carousel: './src/ScoreBoard.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: require.resolve('babel-loader'),
            },
        ],
    },
}
