
(() => {
  'use strict'

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  // Referencia del html
  const btnPedir    = document.querySelector('#btnPedir'),
        btnDetener  = document.querySelector('#btnDetener'),
        btnNuevo    = document.querySelector('#btnNuevo');

  const divCartasJugador      = document.querySelector('#jugador-cartas'),
        divCartasComputadora  = document.querySelector('#computadora-cartas'),
        puntosHTML = document.querySelectorAll('small');

  // Esta función inicializa el juego
  const inicializarJuego = ( numJugadores = 2) => {
    deck = crearDeck();
    for ( let i = 0; i < numJugadores; i++ ) {
          puntosJugadores.push(0);
    }
    console.log({ puntosJugadores });
  }

  // Esta function crea un nuevo deck
  const crearDeck = () => {

    deck = [];
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

    // ._shuffle devuelve un nuevo array ordenado aleatoriamente
    return _.shuffle( deck );
  }

  // Esta function me permite tomar una carta
  const pedirCarta = () => {

    if ( deck.length === 0 ) {
      throw 'No hay cartas en el deck';
    }

    return deck.pop();
  }

  const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
  }

  const acumularPuntos = () => {

  }

  // turno de la computadora
  const turnoComputadora = ( puntosMinimos ) => {

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerHTML = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png" alt="cartas jugador">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
          break;
        }
    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ) );

    setTimeout(() => {
      if ( puntosComputadora === puntosMinimos ) {
        alert('Nadie gana :(');
      } else if ( puntosMinimos > 21 ) {
        alert('Computadora gana');
      } else if( puntosComputadora > 21 ) {
        alert('Jugador Gana');
      } else {
        alert('Computadora Gana');
      }
    }, 10);
  }

  // Events
  btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerHTML = puntosJugador;


    // <img class="carta" src="assets/cartas/2C.png" alt="cartas jugador">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
      console.warn('Lo siento mucho, perdiste');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if ( puntosJugador === 21 ) {
      console.warn('21, genial');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora( puntosJugador );
  });

  btnNuevo.addEventListener('click', () => {

    console.clear();
    inicializarJuego();

    // deck = [];
    // deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

  });


})();

