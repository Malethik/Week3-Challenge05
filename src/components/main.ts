import { Component } from './component';

export class Main extends Component {
  constructor(selector: string, repository: any) {
    super(selector);
    repository
      .nextPage(0)
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
        this.template = this.createTemplate(pokemonDetails);
        this.render();
      })
      .catch((error) => {
        console.error('Errore durante il recupero dei dati:', error);
      });
  }

  createTemplate(pokemonDetails: any[]) {
    const pokemonTemplates = pokemonDetails.map(
      (pokemon, _index) => `
        <div class="pokemon">
          <p>${pokemon.id}</p>
          <img src="../assets/heart.png" alt="" class="hearts"/>
          <p>${pokemon.name}</p>
          <p>Type: ${pokemon.types[0].type.name}</p>
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        </div>
      `
    );

    return pokemonTemplates.join('');
  }
}
