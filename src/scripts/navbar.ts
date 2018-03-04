import { createElement, createElementNS } from './factory/elements';
import { Menu, SubMenuLine } from './menu/menu';
import { MenuElement } from './menu/menu-element';
import { Item } from './models';
import { State } from './state';

export class NavBar {
  private state: State = new State();
  constructor(private items: Item[]) {}

  public run(container: HTMLElement): void {
    const navMenu = Menu.compile(this.items);
    this.apply(this.loadControls(navMenu), container);
  }

  private apply(menuSet: MenuElement[], container: HTMLElement) {
    this.addToDOM(menuSet, container);
  }

  private addToDOM(menus: MenuElement[], container: HTMLElement) {
    menus.forEach(m => {
      m.element.classList.add('init');
      const mparent = !!m.menu.parent;
      if (mparent) {
        m.element.classList.add('menu');
        container.appendChild(m.element);
      } else {
        const nav = createElement('nav');
        nav.appendChild(m.element);
        container.appendChild(nav);
      }
    });
    menus.forEach(m => {
      m.addListeners();
      m.moveToHome();
    });
    menus.forEach(m => {
      m.element.classList.remove('init');
    });
  }

  private loadControls(navMenu: Menu): MenuElement[] {
    const menus: Menu[] = [];
    const mes: MenuElement[] = [];

    const take = (menu: Menu, parent?: MenuElement): void => {
      menus.push(menu);
      const nme = new MenuElement(menu, parent, this.state);
      mes.push(nme);
      menu.lines.forEach(ml => {
        if (ml instanceof SubMenuLine) {
          take(ml.menu, nme);
        }
      });
    };
    take(navMenu, undefined);

    mes.forEach((me, n, ms) => {
      me.menu.lines.forEach(line => {
        let li: HTMLLIElement;
        if (line instanceof SubMenuLine) {
          const target = ms.find(q => line.menu === q.menu);
          li = target!.activator;
          this.fillSubMenuLI(li, line);
        } else {
          li = createElement('li');
          if (line.title === '-') {
            const hr = createElement('hr');
            li.classList.add('separator');
            li.appendChild(hr);
          } else {
            const a = createElement('a');
            a.href = line.href || '#';
            li.classList.add('anchor');
            a.textContent = line.title;
            li.appendChild(a);
          }
        }
        me.element.appendChild(li);
      });
    });

    return mes;
  }

  private fillSubMenuLI(li: HTMLLIElement, line: SubMenuLine) {
    const grandParent = line.menu.parent!.parent;
    const title = createElement('div');
    li.innerHTML = '';
    title.innerText = line.title;
    li.appendChild(title);
    if (grandParent) {
      li.classList.add('submenu');
      li.appendChild(this.newCaretElement());
    }
  }

  private newCaretElement(): SVGElement {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = createElementNS(svgNS, 'svg');
    const path = createElementNS(svgNS, 'path');
    svg.setAttribute('viewBox', '0 0 638 1030');
    svg.setAttribute('width', '12');
    svg.setAttribute('height', '12');
    path.setAttribute(
      'd',
      'M68 13l558 476q12 11 12 26t-12 26L68 1017q-19 16-43.5 7T0 991V39Q0 15 24.5 6T68 13z'
    );
    svg.appendChild(path);
    return svg;
  }
}
