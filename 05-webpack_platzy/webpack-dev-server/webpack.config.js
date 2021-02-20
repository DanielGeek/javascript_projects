const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src', 'js', 'index.js'),
    // precios: path.resolve(__dirname, 'src', 'js', 'precios.js'),
    // contacto: path.resolve(__dirname, 'src', 'js', 'contacto.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle-[name].js'
  },
  devServer: {
    // recarga inteligente solo recarga los archivos que sufren cambios
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // primero se ejecuta css-loader y después se ejecuta style-loader.
        // Si tuviéramos 5 loaders en el array, webpack los ejecutará en el orden de 5, 4, 3, 2 y 1
        use: [
          // style-loader => Sirve para **inyectar **el css a mi html
          'style-loader',
          // {
          //   // extrae el css
          //   loader: MiniCSSExtractPlugin.loader
          // },
          // css-loader => Sirve para **interpretar **el código css.
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // refleja los cambios en tiempo real de solo los archivos que sufren cambios
    new webpack.HotModuleReplacementPlugin(),
    // crea el html con los js y css
    new HtmlWebpackPlugin({
      title: 'Plugins webpack',
      // toma el html original y crea el nuevo en dist/
      template: path.resolve(__dirname, 'index.html'),
      // minifica el html
      minify: {
        collapseWhitespace: true
      }
    }),
    // crea los archivos css
    // new MiniCSSExtractPlugin({
    //   filename: 'css/[name].css'
    // })
  ]
}
