import { Component } from './component';
import { PokemonRepository } from '../repo';

export class Footer extends Component {
  repository: PokemonRepository;

  constructor(selector: string, repository: PokemonRepository) {
    super(selector);
    this.repository = repository;

    this.render();
    this.createTemplate();
    this.addEventListeners();
  }

  render() {
    super.render();
    this.createTemplate();
    this.addEventListeners();
  }

  createTemplate() {
    return `<p>prova</p>
    <button type="button" class="previus">PREVIOUS</button>
            <button type="button" class="next">NEXT</button>`;
  }

  addEventListeners() {
    if (!this.element) {
      console.log(this.element);
      console.error('previus non trovato');
      return;
    }

    const prevButton =
      this.element.querySelector<HTMLButtonElement>('.previus');
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        this.repository
          .previousPage(20)
          .then(() => {
            console.log('Naviga alla pagina precedente');
          })
          .catch((error) => {
            console.error(
              'Errore durante la navigazione alla pagina precedente:',
              error
            );
          });
      });
    }

    const nextButton = this.element.querySelector<HTMLButtonElement>('.next');
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        if (!this.element) {
          console.error('next button non caricato');
          return;
        }

        this.repository
          .nextPage(20)
          .then(() => {
            console.log('Naviga alla pagina successiva');
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
}
