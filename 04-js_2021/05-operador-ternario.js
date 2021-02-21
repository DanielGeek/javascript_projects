const edad = 18
let puedeManejar

if (edad > 17) {
  puedeManejar = 'Sí'
} else {
  puedeManejar = 'No'
}

console.log(puedeManejar)

// condition ? expresion_1 : expresion_2
let puedeManejar2 = edad > 17 ? (
  console.log('Sí puedes manejar'), 'Sí'
) : (
    console.log('No puedes manejar'), 'No'
  )
console.log(puedeManejar2)

const authenticated = 1
const canEdit = authenticated === 1 ? true : false
console.log(canEdit)
const canEdit2 = authenticated === 1
console.log(canEdit2)

const speed = 240
const message = speed > 180
  ? 'Demasiado Rápido'
  : speed >= 110 ? 'Rápido' : 'Normal'
console.log(message)