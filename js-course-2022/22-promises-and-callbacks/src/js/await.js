import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = [
  'capi',
  'iron',
  'spider'
];

export const obtenerHeroesArr = async() => {
  return await Promise.all( heroesIds.map( buscarHeroe ) );
};

export const obtenerHeroeAwait = async( id ) => {

  try {

    const heroe = await buscarHeroeAsync( id );
    return heroe;

  } catch ( err ) {
    console.log( 'CATCH!!!' );
    return {
      nombre: 'Sin nombre',
      poder: 'Sin poder'
    };
  }
};