const word = 'Hello';
const letters = [...word];
letters;

const mainCharacters = ['Link', 'Zelda', 'Ganon'];
const allCharacters = ['Navy', ...mainCharacters, 'Saria', 'Duke Tree'];
allCharacters;

greetFullName = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
}

const args = ['Eduardo', 'Ibarra'];
greetFullName(...args);

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
let arr3 = [6, 7, 8];
const combinedArray1 = arr1.concat(arr2).concat(arr3);
combinedArray1;
const combinedArray2 = [...arr1, ...arr2, ...arr3];
combinedArray2;

// REST operator
massGreeter = (greet, ...names) => {
  console.log(names.map(name => `${greet}! ${name}`));
}
massGreeter('Hi', 'Daniel', 'Jessica', 'Ruth', ...allCharacters)
