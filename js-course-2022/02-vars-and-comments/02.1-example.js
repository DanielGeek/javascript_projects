// this is a one line comment

/*
este es un comentario de varias lineas
this is a multi line comment
*/
// with commas
let a = 20, b = 20;
let c = 20;
let d = 20;
let x = a + b;

console.log(x);
console.log({x});
console.warn(x);
console.error(x);
console.info(x);
console.log('%c my var', 'color:blue; font-weight: bold');

let saludo = 'Hello ';
let nameCountry = 'España';
console.table({ a, b, c, d, x, saludo, nameCountry });
const saludar = saludo + nameCountry;
console.log(saludar);