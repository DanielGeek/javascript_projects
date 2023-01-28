// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videoGames = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videoGames });

console.log( videoGames[0] );

let arrayOfThings = [
  true,
  123,
  'Daniel',
  1 + 2,
  function(){},
  ()=>{},
  { a: 1},
  ['X', 'Megaman', 'Zero', 'Dr. Light', [
    'Dr. Willy',
    'Woodman'
  ]]
];

// console.log({ arrayOfThings });
// console.log( arrayOfThings[2] );
console.log( arrayOfThings[7][4][1] );