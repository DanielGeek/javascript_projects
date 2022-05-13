// import { init } from './js/usuarios-page';

import * as CRUD from './js/crud-provider';


CRUD.getUsuario( 2 ).then( console.log );

CRUD.crearUsuario({
  name: 'Daniel',
  job: 'Pintor'
}).then( console.log );
