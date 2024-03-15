/*  */
/* const urlBase = 'https://pokeapi.com/api/v2/';

export class Repo {
  url: URL;
  constructor() {
    this.url = new URL('pokemon/', urlBase);
  }

  async getAll(): Promise {
    const response = await fetch(this.url);
    if (!response.ok) {
      const message = `Error fetching pets: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }

  async add(pet: Omit<Pet, 'id'>): Promise<> {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(pet),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const message = `Error adding pets: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }

  async addWithId(pet: Pet): Promise<Pet> {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(pet),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const message = `Error adding pets: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }

  async update(pet: Pet): Promise<Pet> {
    const response = await fetch(this.url + '/' + pet.id, {
      method: 'PATCH',
      body: JSON.stringify(pet),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const message = `Error updating pets: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }

  async delete(pet: Pet): Promise<Pet> {
    const response = await fetch(this.url + '/' + pet.id, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const message = `Error deleting pets: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }
}
 */
