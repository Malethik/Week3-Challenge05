import { Main } from './components/main';
import { PokemonRepository } from './repo';
import { listPokemon } from './model/interface';
const repository = new PokemonRepository();

repository
  .getAll(0, 20)
  .then((data) => {
    console.log(data); // Controlla che i dati siano corretti
  })
  .catch((error) => {
    console.error(error);
  });
