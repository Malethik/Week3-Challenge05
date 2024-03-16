import { Component } from './component';
import { PokemonRepository } from '../repo';

export class Footer extends Component {
  repository: PokemonRepository;

  constructor(selector: string, repository: PokemonRepository) {
    super(selector);
    this.repository = repository;
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    const prevButton = this.element.querySelector('.previus');
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        this.repository
          .previousPage()
          .then(() => {
            console.log('Naviga alla pagina precedente');
            // Aggiorna la visualizzazione con i nuovi dati ottenuti
          })
          .catch((error) => {
            console.error(
              'Errore durante la navigazione alla pagina precedente:',
              error
            );
          });
      });
    }

    const nextButton = this.element.querySelector('.next');
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        this.repository
          .nextPage()
          .then(() => {
            console.log('Naviga alla pagina successiva');
            // Aggiorna la visualizzazione con i nuovi dati ottenuti
          })
          .catch((error) => {
            console.error(
              'Errore durante la navigazione alla pagina successiva:',
              error
            );
          });
      });
    }
  }

  createTemplate() {
    return `<button type="button" class="previus">PREVIOUS</button>
            <button type="button" class="next">NEXT</button>`;
  }
}
