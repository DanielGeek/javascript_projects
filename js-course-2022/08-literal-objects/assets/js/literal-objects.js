let character = {
  name: 'Bruce Wayne',
  codeName: 'Batman',
  alive: false,
  age: 39,
  coords: {
    lat: 34.034,
    lng: -118.70
  },
  suits: ['Batman Black', 'Batman Yellow', 'Batman Green'],
  direction: {
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