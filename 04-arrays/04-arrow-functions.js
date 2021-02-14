// function duplicar(a) {
//   return a * 2
// }
// // arrow function
// const duplicar = a => a * 2
// console.log(duplicar2(2))

// function sumar(a, b) {
//   return a + b
// }
// // arrow function
// const sumar2 = (a, b) => a + b
// console.log(sumar2(2, 3))

// function saludar() {
//   return 'Hello World!'
// }
// // arrow function
// let saludar2 = () => 'Hello World!'

// console.log(saludar2())

class Persona {
  constructor(nombre) {
    this.nombre = nombre
  }

  saluda() {
    setTimeout(function() {
      console.log(`Hola ${this.nombre} desde función`)
    }, 100)
  }
  saluda2() {
    setTimeout(() => console.log(`Hola ${this.nombre} desde arrow function `), 100)
  }
}

let persona = new Persona('Daniel')
persona.saluda()
persona.saluda2()