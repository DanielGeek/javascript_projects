/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// Esta function crea un nuevo deck
const crearDeck = () => {

  for( let i = 2; i <= 10; i++ ) {
    for( let tipo of tipos ) {
      deck.push(i + tipo);
    }
  }

  for( let tipo of tipos ) {
    for( let esp of especiales ) {
      deck.push(esp + tipo );
    }
  }

  // console.log( deck );
  // ._shuffle devuelve un nuevo array ordenado aleatoriamente
  deck = _.shuffle( deck );
  console.log( deck );
  return deck;
}

crearDeck();

// Esta function me permite tomar una carta
const pedirCarta = () => {

  if ( deck.length === 0 ) {
    throw 'No hay cartas en el deck';
  }

  const carta = deck.pop();

  console.log(deck);
  console.log(carta); // carta debe de ser de la baraja
  return carta;
}
// 1 mostrar error si no existen cartas
// deck = [];
// 2 mostrar error si no existen cartas
// for( let i = 0; i <= 100; i++ ) {
//   pedirCarta();
// }

  // pedirCarta();

  const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;

    // let puntos = 0;

    // lo mismo usando if else
    // if( isNaN( valor )) {
    //   // console.log('No es un número');
    //   puntos = ( valor === 'A' ) ? 11 : 10;
    // } else {
    //   // console.log('Es un número');
    //   // convertir el número string number
    //   puntos = valor * 1;
    // }

    // console.log(puntos);

  }

  const valor = valorCarta(pedirCarta());
  console.log({ valor });
