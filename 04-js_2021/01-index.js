
const arr = [undefined, 'Zelda', 'Link', 'Navy'];
const [character1, character2, character3] = arr;
console.log(character1, character2, character3);
const [badGuys = 'Ganon', ...goodGuys] = arr;
console.log('badGuys', badGuys)
console.log('goodGuys', goodGuys)

const person = {
  first_name: 'Eduardo',
  gender: 'Male',
  age: 30
};

const { first_name: firstName, age } = person;
console.log('persona obj', firstName, age);

const place = {
  name: 'Monterry',
  coords: {
    lat: 23,
    lng: -99,
  }
}

const { coords: { lat, lng } } = place;
lat;
lng;

const users = [
  { id: 1, name: 'Eduardo' },
  { id: 2, name: 'Dan' },
  { id: 3, name: 'Eze' },
];

for (const { id } of users) {
  id;
}

const daniel = { id: 1, name: 'Daniel' };
function greet({ id, name }) {
  console.log(`Hello ${name}`);
  console.log(id);
}

greet(daniel);

let a = 10, b = 20;
let temp = a;
a = b;
b = temp;
a;
b;
[a, b] = [b, a]
a;
b;


