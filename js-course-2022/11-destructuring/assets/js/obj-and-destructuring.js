
// function createPerson( name, lastName ) {
//   // retorna objeto
//   return {
//     name: name,
//     lastName: lastName
//   }
// }


// function createPerson( name, lastName ) {
//   // retorna objeto
//   return {
//     // desde emascript 6 no necesitas retornar el atributo y su valor si se llaman igual
//     name,
//     lastName
//   }
// }

// function de flecha
const createPerson = ( name, lastName ) => ({ name, lastName });

const person = createPerson('Daniel', 'Angel');
console.log( person );


// argumentos con funcion tradicional
function printArguments() {
  console.log( arguments );
}

printArguments(11, true, false, 'Dani', 'Hello!');

// argumentos con funcion de flecha
const printArguments2 = ( age, ...args ) => {
  // console.log({ age, args });
  return args;
}

// const arguments = printArguments2(12, false, true, 'Elias', 'Barreto');
const [ married, alive, name, greeting ] = printArguments2(12, false, true, 'Elias', 'Barreto');
console.log({ married, alive, name, greeting });

// destructuring con nuevo nombre de la variable
const { lastName: newLastName } = createPerson('Daniel', 'Angel');
console.log({ newLastName });

const batman = {
  firstName: 'Bruce Wayne',
  codeName: 'Batman',
  alive: false,
  age: 39,
  suits: ['Batman Black', 'Batman Yellow', 'Batman Green']
};

// imprimir propiedades sin usar destructuring
// const printProperties = ( character ) => {
//   console.log( 'firstName ', character.firstName );
//   console.log( 'codeName ', character.codeName );
//   console.log( 'Alive ', character.alive );
//   console.log( 'Age ', character.age );
//   console.log( 'Suits ', character.suits );
// }

// printProperties( batman );

// acceder a las propiedades usando destructuring y asignando el valor por defecto a age
const printProperties2 = ({ firstName, codeName, alive, age = 15, suits }) => {
  console.log({ firstName });
  console.log({ codeName });
  console.log({ alive });
  console.log({ age });
  console.log({ suits });
}

printProperties2( batman );
