import { Component } from './component';

export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
  }

  createTemplate() {
    return `
      <adress><p>Daniele Quintiliani as Malethik 2024</p></adress>
    `;
  }
}
