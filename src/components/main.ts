import { listPokemon, pokemon } from '../model/interface';
import { Component } from './component';
import { PokemonRepository } from '../repo';

export class Main extends Component {
  pokemon: pokemon[] = []; // Usi l'interfaccia pokemon per definire l'array dei pokemon

  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    super.render();
  }

  createTemplate() {
    return `
      <div class="pokemon-container">
        ${this.pokemon
          .map(
            (pokemon) => `
          <div class="pokemon">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>${pokemon.name}</p>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  }
}
