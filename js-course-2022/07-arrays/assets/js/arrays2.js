let games = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Length: ', games.length);

let first = games[ 2 - 2];
let last = games[ games.length - 1];

console.log({ first, last });

games.forEach( ( element, index, arr ) => {
  console.log({ element, index, arr });
});

// agrega un nuevo elemento al final
let newLength = games.push('F-Zero');
console.log({ newLength, games });

// agrega un nuevo elemento al inicio
newLength = games.unshift('Fire Emblem');
console.log({ newLength, games });

let gameDelete = games.pop();
console.log({ gameDelete, games });

let pos = 1;
console.log({ games });
// eliminar n elementos desde posicion pos y return el elemento o los elementos eliminados
let gamesDeletes = games.splice( pos, 2);
console.log({ gamesDeletes, games });

// encontra la posicion del elemento por su indice
let metroidIndex = games.indexOf('Metroid');
console.log({ metroidIndex });
