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
  return 1;

  console.log('este console.log no se ejecutara');
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


const returnHello = hello('Daniel', 40, true, 'Venezuela');
console.log({ returnHello });

hello2('Elias');
helloRow();
helloRow2('Tomas');
helloRow3('Elizabeth');

function calculate( a, b ) {
  return a + b;
}

const calculate2 = (a,b) => {
  return a + b;
}

// si solo necesitas ejecutar una sola linea
const calculate3 = (a,b) => a + b;

function getRandom() {
  return Math.random();
}

const getRandom2 = () => Math.random();

console.log(calculate(1,2));
console.log(calculate2(1,2));
console.log(calculate3(1,2));
console.log(getRandom())
console.log(getRandom2())