import { Component } from './component';

export class Main extends Component {
  constructor(selector: string, pokemonData: any[]) {
    super(selector);
    this.template = this.createTemplate(pokemonData);
    this.render();
  }

  createTemplate(pokemonData: any[]) {
    const pokemonTemplates = pokemonData.map(
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
