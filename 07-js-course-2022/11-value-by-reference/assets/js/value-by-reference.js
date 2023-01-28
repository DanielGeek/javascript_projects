
let a = 10;
let b = a;
a = 30;
// primitivos pasan por valor

console.log({a, b});

// paso por referencia
let dani = { firstName: 'Dani' };
// ejemplo sin el spread operator
// let jessica = dani;
// spread operator copia todo el objeto y rompe la referencia al espacio en memoria
let jessica = { ...dani };
jessica.firstName = 'Jessica';

console.log({dani, jessica});

const changeName = ({ ...person }) => {
  person.firstName = 'Eze';
  return person;
}

let jeremias = { firstName: 'Jeremias' };
let bruce = changeName( jeremias );

console.log({ jeremias, bruce });

// Arrays
const fruist = ['Apple', 'Pear', 'Banana'];

// romper la referencia al espacio en memoria
console.time('slice');
const otherFruist = fruist.slice();
console.timeEnd('slice');

console.time('spread');
const otherFruist2 = [...fruist];
console.timeEnd('spread');

otherFruist.push('Mango');

console.table({ fruist, otherFruist });
