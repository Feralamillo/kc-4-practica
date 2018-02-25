# Practica Front-end Ninja
## Módulo 4 - Frontend Avanzado - Keepcoding
Profesor: **Alberto Casero**
Febrero-Marzo 2018
****

To setup the development environment:
`git clone https://github.com/oscaranton/kc-4-practica.git`

`npm i`

`npm run serve`

****

`git init`
`npm init -y`
`npm i -D webpack`

```js
webpack.config.js
const path = require ('path');

module.exports = {

    // entry point: archivo que lee el webpack para construir el grafo de dependencias
    entry: './src/entry.js',
    // output: carpeta en la que quiero que webpack me deje el código generado
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // va a la carpeta dist del directorio actual
    }

};
```

```json
"scripts": {
    "webpack": "webpack",
    "dev": "webpack --watch",
    "build": "webpack -p",
    "serve": "webpack-dev-server"
  },
```

`npm run webpack` `npm run dev` `npm run build` `npm run serve`

```git
/dist
node_modules
```

```js
    // module loaders
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: path.join(__dirname, 'node_modules')
            }, {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    'file-loader?name=[name].[ext]&useRelativePath=true',
                    'image-webpack-loader'
                ]
            }, {
                test: /assets.[^img]/,
                use: 'file-loader?name=[name].[ext]&useRelativePath=true'
            }
        ]
    },
```

```js
	// plugins 
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            minify: {
                collapseWhitespace: true
            }
        }),
        new webpack.HotModuleReplacementPlugin(), // No funciona de momento
        new webpack.NamedModulesPlugin() // No funciona de momento
    ],
```

```js
	// dev server configuration
    devServer: {
        open: true, // abre el navegador por defecto
        port: 3000, // puerto del servidor web
        overlay: true, // muestra los errores en pantalla
        hot: true, // No funciona de momento
        contentBase: path.join(__dirname, 'src'), // No funciona de momento
        watchContentBase: true // No funciona de momento
    }
```

```js
const path = require ('path');
const webpack = require ('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // entry point: archivo que lee el webpack para construir el grafo de dependencias
    entry: path.join(__dirname, 'src', 'entry.js'),
    // output: carpeta en la que quiero que webpack me deje el código generado
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // va a la carpeta dist del directorio actual mediante el método path
    },

    // module loaders
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: path.join(__dirname, 'node_modules')
            }, {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    'file-loader?name=[name].[ext]&useRelativePath=true',
                    'image-webpack-loader'
                ]
            }, {
                test: /assets.[^img]/,
                use: 'file-loader?name=[name].[ext]&useRelativePath=true'
            }
        ]
    },
    
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            minify: {
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
```
`npm i -D style-loader css-loader sass-loader babel-loader file-loader image-webpack-loader html-webpack-plugin`
`npm i -D style-loader css-loader sass-loader node-sass babel-loader babel-core babel-preset-es2015 file-loader image-webpack-loader html-webpack-plugin webpack-dev-server reset-css`

```css
@import '~reset-css/reset';
@import 'variables';
@import 'html-tags';
```

`npm run webpack`

****

`npm i -D bootstrap jquery popper.js`

```css
@import '~reset-css/reset';
@import '~bootstrap/scss/bootstrap';
@import 'variables';
@import 'html-tags';
```

`npm run webpack`