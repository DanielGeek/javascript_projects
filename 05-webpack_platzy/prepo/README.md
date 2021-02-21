# Mi resumen

Tutorial: Cómo trabajar con preprocesadores de CSS en Webpack

Necesitas instalar los loaders de los preprocesadores:
`
 npm i sass-loader npm stylus-loader less-loader postcss-loader -D -E
 `

//Versión Corta

 npm install sass-loader stylus-loader less-loader postcss-loader --save-dev --save-exact
  Antes de configurar los preprocesadores en webpack necesitas tenerlos previamente instalado en tu computador, tenerlos en tus Peer dependencies.
Instalando preprocesadores de CSS

npm install -D -E sass
 npm install node-sass
 npm install stylus
 npm install less

//Short version

 npm install sass stylus less -D -E

  Necesitas añadir los loaders en tus archivo de webpack.config.js.
  <pre>
  `{
    test: /\.scss$/,
    use: [
     "style-loader",
     "css-loader",
     "sass-loader"
     ]
   },
   {
    test: /\.less$/,
    use: [
     "style-loader",
     "css-loader",
     "less-loader"
     ]
   },
   {
    test: /\.styl$/,
    use: [
     "style-loader",
     "css-loader",
     "stylus-loader"
     ]
   }`
</pre>
  ##### ¡Y voilá! Pon a correr tu webpack config y crea unos diseños inspiradores para tu aplicación web.
En mi caso:

`npm run build:prepo`
