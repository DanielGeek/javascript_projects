import '../css/index.css'
import '../css/index2.css'

import text from './text'

text()
// si cambia el metodo text ejecuta nuevamente el metodo y muestra el cambio sin recargar el navegagor por completo
if(module.hot) {
  module.hot.accept('./text.js', function() {
    text()
  })
}