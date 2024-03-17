const urlBase = 'https://pokeapi.co/api/v2/';

export class PokemonRepository {
  url: URL;
  detailsData: any;
  offset: number;
  limit = 20;
  constructor() {
    this.url = new URL('pokemon/', urlBase);
    this.offset = 0;
    this.limit = 20;
    this.detailsData = {};
  }

  async nextPage(offset: number = 0): Promise<any> {
    const url = new URL(this.url);
    url.searchParams.append('offset', offset.toString());
    url.searchParams.append('limit', this.limit.toString());
    console.log('URL della richiesta PokemonRepository:', url);
    const response = await fetch(url);
    if (!response.ok) {
      const message = `Error fetching Pokemon: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    const data = await response.json();
    offset += this.limit;
    return data;
  }

  async previousPage(offset: number): Promise<any> {
    if (offset < 20) {
      throw new Error('Already at the first page');
    }

    const newOffset = offset - 20;
    return this.nextPage(newOffset);
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
