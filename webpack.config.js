module.exports = {
    context: __dirname + '/app',
    entry: './js/mainApp.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    devtool: 'source-map'
}