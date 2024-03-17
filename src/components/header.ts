import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header class="header">
      <h1><img src="public/pokemon-logo.svg" alt="Pokedex" /></h1>
      <nav>
        <a href="#">MY POKEMON</a>
      </nav>
    </header>`;
  }
}
