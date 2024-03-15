import { Component } from './component';
import {} from './main';
interface Series {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
}

export class Serie extends Component {
  serie: Series;
  deleteFromState: (_id: Series['id']) => void;
  update: (_serie: Serie) => void;
  constructor(
    selector: string,
    serie: Series,
    deleteSerie: (_id: Series['id']) => void,
    update: (_serie: Serie) => void
  ) {
    super(selector);
    this.serie = serie;
    this.deleteFromState = deleteSerie;
    this.update = update;
    this.template = this.createTemplate();
    this.render();
  }

  prepareDeleteButon() {
    const deleteButton =
      this.element.querySelector<HTMLButtonElement>('.icon--delete');
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        this.delete();
        // No this.element.remove();
        this.deleteFromState(this.serie.id);
      });
    }
  }

  prepareScore() {
    const scoreStars = this.element.querySelectorAll('.score__star');
    scoreStars.forEach((element) => {
      element.addEventListener('click', (event: Event) => {
        const liElement = event.target as HTMLLIElement;
        this.serie.watched = true;
        this.serie.score = Number(liElement.dataset.score);
        this.update(this.serie);
      });
    });
  }

  render(position?: 'beforeend') {
    this.template = this.createTemplate();
    super.render(position);
    prepareDeleteButon();
    prepareScore();
  }

  createTemplate() {
    return `<li class="serie">
                <img
                  class="serie__poster"
                  src=${this.serie.poster}
                  alt="${this.serie.name} poster"
                />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator} ${
      this.serie.year
    }</p>
                <ul class="score">
                  <li class="score__star" data-score="1">
                    <i class="icon--score ${
                      this.serie.score >= 1 ? 'fas' : 'fad'
                    } fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star" data-score="2">
                    <i class="icon--score ${
                      this.serie.score >= 2 ? 'fas' : 'fad'
                    } fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star" data-score="3">
                    <i class="icon--score ${
                      this.serie.score >= 3 ? 'fas' : 'fad'
                    } fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star" data-score="4">
                    <i class="icon--score ${
                      this.serie.score >= 4 ? 'fas' : 'fad'
                    } fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star" data-score="5">
                    <i class="icon--score ${
                      this.serie.score === 5 ? 'fas' : 'fad'
                    } fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              </li>`;
  }
}
