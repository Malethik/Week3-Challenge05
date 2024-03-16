/* eslint-disable no-new */
import { Header } from './components/header';
import { Main } from './components/main';
import { PokemonRepository } from './repo';

console.log('Connesso desde index.ts');
new Header('.header');

const repository = new PokemonRepository();

repository
  .nextPage(0, 20)
  .then((data) => {
    const pokemonPromises = data.results.map((pokemon: any) =>
      fetch(pokemon.url)
        .then((detailsResponse) => {
          if (!detailsResponse.ok) {
            throw new Error(
              `Errore durante il recupero dei dettagli del Pokémon ${pokemon.name}`
            );
          }

          return detailsResponse.json();
        })
        .catch((error) => {
          console.error(error);
        })
    );

    return Promise.all(pokemonPromises);
  })
  .then((pokemonDetails) => {
    new Main('main', pokemonDetails);
  })
  .catch((error) => {
    console.error('Errore durante il recupero dei dati:', error);
  });
