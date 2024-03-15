import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header class="main-header">
        <h1 class="main-title">My series</h1>
      </header>`;
  }
}
