import { obtenerHeroesArr, obtenerHeroeAwait } from "./js/await";

console.time('await');

obtenerHeroeAwait('capi2')
    .then( heroe => {
      console.log( heroe );

      console.timeEnd('await');
}).catch( console.warn );