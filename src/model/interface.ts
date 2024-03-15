export interface listPokemon {
  count: number;
  next: string | null;
  previus: string | null;
  result: {
    name: string;
    url: string;
  }[];
}
export interface pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}
