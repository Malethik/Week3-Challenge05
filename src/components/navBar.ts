import { Component } from './component';

export class NavBar extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();

    this.addEventListeners();
  }

  createTemplate() {
    return `<div class="navBar">
      <button type="button" class="previus">PREVIUS</button>
      <h2>Pokemon list:</h2>
      <button type="button" class="next">NEXT</button>
    </div>`;
  }

  addEventListeners() {
    const prevButton = this.element.querySelector('.previus');
    const nextButton = this.element.querySelector('.next');

    prevButton?.addEventListener('click', () => {
      this.prevButton();
    });

    nextButton?.addEventListener('click', () => {
      this.nextButton();
    });
  }

  private prevButton() {
    console.log('Prima click');
  }

  private nextButton() {
    console.log('Dopo click');
  }
}
