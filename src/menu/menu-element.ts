import { Menu } from '../menu/menu';

function px(pixels: number): string {
  return `${pixels}px`;
}

export class MenuElement {
  public readonly activator: HTMLLIElement;
  public readonly element: HTMLUListElement;
  constructor(public menu: Menu, public parent?: MenuElement) {
    this.activator = document.createElement('li');
    this.activator.innerText = 'root';
    this.element = document.createElement('ul');
  }
  public addListeners() {
    this.element.addEventListener('mouseenter', () => {
      this.open(true);
    });
    this.element.addEventListener('mouseleave', () => {
      this.close(true);
    });
    this.activator.addEventListener('mouseenter', () => {
      this.open();
    });
    this.activator.addEventListener('mouseleave', () => {
      this.close();
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

  private open(includeParent?: boolean) {
    this.element.classList.add('open');
    this.activator.classList.add('open');
    if (includeParent) {
      this.forEachParent(c => c.open());
    }
  }
  private close(includeParent?: boolean) {
    this.element.classList.remove('open');
    this.activator.classList.remove('open');
    if (includeParent) {
      this.forEachParent(p => p.close(false));
    }
  }

  private forEachParent(cb: (m: MenuElement) => void): void {
    let p = this.parent;
    while (p) {
      cb(p);
      p = p.parent;
    }
  }
}
