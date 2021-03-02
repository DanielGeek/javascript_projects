function newFunction(name, age, country) {
  var name = name || 'Daniel';
  var age = age || 32;
  var country = country || 'VZ';
  console.log(name, age, country);
}

// es6
function newFunction2(name = 'Daniel', age = 32, country = "VZ" ) {
  console.log(name, age, country);
};

newFunction2();
newFunction2('Elias', '30', 'CH');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)