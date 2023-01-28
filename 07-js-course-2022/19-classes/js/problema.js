
const dangel = {
  nombre: 'Daniel',
  edad: 27,
  imprimir() {
    console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
  }
}

const pedro = {
  nombre: 'Pedro',
  edad: 15,
  imprimir() {
    console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
  }
}

dangel.imprimir();

// forma antigua
function Persona(nombre, edad) {
  console.log('Se ejecuto esta linea');

  this.nombre = nombre;
  this.edad   = edad;

  this.imprimir = function() {
    console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
  }

}

const maria = new Persona('Maria', 18);
const jessica = new Persona('Jessica', 30);
// console.log(maria);
maria.imprimir();
jessica.imprimir();
