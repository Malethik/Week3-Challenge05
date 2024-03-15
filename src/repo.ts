const urlBase = 'https://pokeapi.co/api/v2/';
import { listPokemon, pokemon } from './model/interface';

export class PokemonRepository {
  url: URL;
  constructor() {
    this.url = new URL('pokemon/', urlBase);
  }

  async getAll(offset: number = 0, limit: number = 20): Promise<any> {
    const url = new URL(this.url);
    url.searchParams.append('offset', offset.toString());
    url.searchParams.append('limit', limit.toString());
    console.log('api connessa:', url);
    const response = await fetch(url);
    if (!response.ok) {
      const message = `Error fetching Pokemon: ${response.status} ${response.statusText}`;

      throw new Error(message);
    }

    return response.json().then;
  }
}
