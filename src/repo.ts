const urlBase = 'https://pokeapi.co/api/v2/';

export class PokemonRepository {
  url: URL;
  detailsData: any;
  constructor() {
    this.url = new URL('pokemon/', urlBase);
    this.detailsData = {};
  }

  async nextPage(offset: number = 0, limit: number = 20): Promise<any> {
    const url = new URL(this.url);
    url.searchParams.append('offset', offset.toString());
    url.searchParams.append('limit', limit.toString());
    console.log('URL della richiesta PokemonRepository:', url);
    const response = await fetch(url);
    if (!response.ok) {
      const message = `Error fetching Pokemon: ${response.status} ${response.statusText}`;

      throw new Error(message);
    }

    const data = await response.json();

    return data;
  }

  async fetchPokemonDetails(pokemonUrl: string): Promise<any> {
    const response = await fetch(pokemonUrl);
    if (!response.ok) {
      throw new Error(`Error fetching Pokemon details from ${pokemonUrl}`);
    }

    const detailsData = await response.json();
    console.log(detailsData);
    return detailsData;
  }
}
