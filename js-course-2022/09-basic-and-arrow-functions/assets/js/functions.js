// function tradicional, su uso es centralizar la lógica de algo que se repite o fragmentar tu código para que sea mas legible
// function hello() {
//   console.log('hello world');
// }

// ejemplo reasginando a hello algo
// hello = true;
// console.log(hello);

// function con paso de parametro
function hello( name ) {
  console.log( arguments );
  console.log('hello world ' + name);
}

// función anonima, esto refuerza la seguridad por si quieres reasginarle a hello2 algo
const hello2 = function( name ) {
  console.log('hello world 2 ' + name);
}

// function de flecha intro en EcmaScript 2015
const helloRow = () => {
  console.log('hello row');
}

const helloRow2 = ( name ) => {
  console.log('hello row 2 ' + name);
}

const helloRow3 = name => {
  console.log('hello row 3 ' + name);
}


hello('Daniel', 40, true, 'Venezuela');
hello2('Elias');
helloRow();
helloRow2('Tomas');
helloRow3('Elizabeth');