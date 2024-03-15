import './styles.css';
/*  */
/* import { Header } from './components/header';
import { Main } from './components/main.ts'; */

/* new Header('header');
new Main('main'); */
import { PokemonRepository } from './repo';

console.log('Connesso desde index.ts');

const repository = new PokemonRepository();

repository
  .getAll(0, 20)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
