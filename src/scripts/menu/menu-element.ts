import { createElement } from '../factory/elements';
import { Menu } from '../menu/menu';
import { State } from '../state';

function px(pixels: number): string {
  return `${pixels}px`;
}

export class MenuElement {
  public readonly activator: HTMLLIElement;
  public readonly element: HTMLUListElement;
  constructor(
    public menu: Menu,
    public parent?: MenuElement,
    private readonly state: State = new State()
  ) {
    this.activator = createElement('li');
    this.activator.innerText = 'root';
    this.element = createElement('ul');
  }
  public addListeners() {
    this.element.addEventListener('mouseenter', () => {
      this.state.receive('entering', this);
    });
    this.element.addEventListener('mouseleave', () => {
      this.state.receive('leaving', this);
    });
    this.activator.addEventListener('mouseenter', () => {
      this.state.receive('activating', this);
    });
    this.activator.addEventListener('mouseleave', () => {
      this.state.receive('deactivating', this);
    });
  }
  public moveToHome(): void {
    if (!!this.parent) {
      const bcr = this.activator.getBoundingClientRect();
      if (!!this.parent.parent) {
        this.element.style.left = px(bcr.right + window.scrollX);
        this.element.style.top = px(bcr.top + window.scrollY);
      } else {
        this.element.style.left = px(bcr.left + window.scrollX);
        this.element.style.top = px(bcr.bottom + window.scrollY);
        this.element.style.minWidth = px(bcr.width);
      }
    }
  }
}
