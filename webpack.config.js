const path = require ('path');
const webpack = require ('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // entry point
    entry: path.join(__dirname, 'src', 'entry.js'),

    // output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

 // module loaders
 module: {
    rules: [
        {   // css modules (packaging and compiling)
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, { // js retro-compatibility module
            test: /\.js$/,
            use: 'babel-loader',
            exclude: path.join(__dirname, 'node_modules')
        }, { // image filing and compression module in assets folder
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [
                'file-loader?name=[name].[ext]&useRelativePath=true',
                'image-webpack-loader'
            ]
        }, { // files (not images) filing in assets folder
            test: /assets.[^img]/,
            use: 'file-loader?name=[name].[ext]&useRelativePath=true'
        }
    ]
},

// plugins que estamos utilizando
plugins: [
    new HtmlWebpackPlugin({ // html packaging
        template: path.join(__dirname, 'src', 'index.html'),
        minify: { // html minify
            collapseWhitespace: true
        }
    }),
    new webpack.HotModuleReplacementPlugin(), // No funciona de momento
    new webpack.NamedModulesPlugin() // No funciona de momento
],

// dev server configuration
devServer: {
    open: true, // abre el navegador por defecto
    port: 3000, // puerto del servidor web
    overlay: true, // muestra los errores en pantalla
    hot: true, // No funciona de momento
    contentBase: path.join(__dirname, 'src'), // No funciona de momento
    watchContentBase: true // No funciona de momento
}

};