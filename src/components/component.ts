/* eslint-disable no-undef */

export class Component {
  selector: string;
  template: string = '';
  element!: HTMLElement;
  constructor(selector: string) {
    this.selector = selector;
  }

  replace() {
    this.element.outerHTML = this.template;
  }

  delete() {
    this.element.outerHTML = '';
  }

  render(position: InsertPosition = 'beforeend') {
    const targetElement = document.querySelector<HTMLElement>(this.selector);
    if (!targetElement) return;
    targetElement.insertAdjacentHTML(position, this.template);
    if (position === 'beforeend') {
      this.element = targetElement.lastElementChild! as HTMLElement;
    }
  }
}
