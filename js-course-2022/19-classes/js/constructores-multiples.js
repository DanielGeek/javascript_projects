

class Persona {

  static porObjecto({ nombre, apellido, pais }) {
    return new Persona( nombre, apellido, pais );
  }

  constructor( nombre, apellido, pais ) {
    this.nombre   = nombre;
    this.apellido = apellido;
    this.pais     = pais;
  }

  getInfo() {
    console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
  }
}

const nombre1   = 'Jessica',
      apellido1  = 'Baettig',
      pais1     = 'Venezuela';

const dangel = {
  nombre:   'Daniel',
  apellido: 'Angel',
  pais:     'Venezuela'
}

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjecto( dangel );

persona1.getInfo();
persona2.getInfo();
