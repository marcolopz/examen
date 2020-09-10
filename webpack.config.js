module.exports = {
    entry: './PRESENTACION/src/index.js',
    output: {
        path: __dirname + '/PRESENTACION/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use:'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}