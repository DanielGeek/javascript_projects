const character = {
  name: 'Bruce Wayne',
  codeName: 'Batman',
  alive: false,
  age: 39,
  coords: {
    lat: 34.034,
    lng: -118.70
  },
  suits: ['Batman Black', 'Batman Yellow', 'Batman Green'],
  address: {
    zip: '10880, 90265',
    location: 'Malibu, California'
  },
  'last-movie': 'The Batman'
};

console.log(character);
console.log('Name ', character.name);
console.log('Name ', character['name']);
console.log('Age ', character.age);

console.log('Coords ', character.coords);
console.log('Lat ', character.coords.lat);

console.log('suits N  ', character.suits.length);

console.log('last suit  ', character.suits[ character.suits.length - 1 ]);

const x = 'alive';
console.log('Alive', character[x]);

console.log('Last Movie', character["last-movie"]);

// more details
// usando null mala practica
// character.age = null;

delete character.age;
console.log(character);

// otra forma de agregar un nuevo atributo al objeto
character.married = true;

// convertir obj a array interable
const entriesPairs = Object.entries( character );
console.log( entriesPairs );

// ejemplo asignando al character const un nuevo valor para que de error
// character = true;

console.log( character );

// bloquear el objeto para que no puedan asignarsele mas atributos o cambiarles los actuales de la primera gerarquia
Object.freeze( character );

character.money = 1000000;
character.married = false;
character.address.location = 'Venezuela';
console.log( character );

// obtener el nombre de las propiedades del objeto y convertirlo en array
const properties = Object.getOwnPropertyNames( character );
const values = Object.values( character );
console.log({ properties });
console.log({ values });

// references
// https://developer.mozilla.org/es/docs/web/javascript/reference/global_objects/object
