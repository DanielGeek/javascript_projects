const users = [
  {name: 'Yuliana', age: 20},
  {name: 'Eduardo', age: 3},
  {name: 'Lalito', age: 1},
  {name: 'Damian', age: 1},
];
// si alguno de ellos cumple la condición retur true caso contrario false
const hasMinors = users.some(user => user.age < 18)
console.log(hasMinors)

// si todos los elementos cumplen la condición return true caso contrario false
const allMinors = users.every(user => user.age < 18)
console.log(allMinors)

// si encuentra al menos 1 elemento en el array return true, caso contrario false
const frutas = ['plátano', 'fresa', 'uva', 'melón']
const hasUva = frutas.includes('fresa')
console.log(hasUva)

// suma el total de los valores de un array
const dailyIncomes = [100, 120, 130, 140, 150, 100, 100];
const totalIncome = dailyIncomes.reduce((total, income) => total += income)
console.log(totalIncome)