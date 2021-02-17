const path = require('path')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src', 'js', 'index.js'),
    // precios: path.resolve(__dirname, 'src', 'js', 'precios.js'),
    // contacto: path.resolve(__dirname, 'src', 'js', 'contacto.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: 'bundle-[name].js'
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
          // css-loader => Sirve para **interpretar **el código css.
          'css-loader'
        ]
      }
    ]
  }
}
