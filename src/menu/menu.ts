/* tslint:disable:max-classes-per-file */
import { Item } from '../models';

export class Activator {
  constructor(public title: string) {}
}

export class MenuLine {
  constructor(public title: string, public readonly href?: string) {}
}

export class SubMenuLine extends MenuLine {
  constructor(
    public menu: Menu,
    public title: string,
    public readonly href?: string
  ) {
    super(title, href);
  }
}

export class Menu {
  public lines: MenuLine[] = [];
  public parent?: Menu;

  constructor(public activator: Activator) {}

  public accept(item: Item, parent?: Menu) {
    this.parent = parent;
    if (item.items) {
      const subm = new Menu(new Activator(item.text));
      item.items.forEach(i => subm.accept(i, this));
      this.lines.push(new SubMenuLine(subm, item.text, item.href));
    } else {
      this.lines.push(new MenuLine(item.text, item.href));
    }
  }

  public toString(): string {
    return this.lines.map(j => j.title).join(' ');
  }

  public static compile(items: Item[]): Menu {
    const nav = new Menu(new Activator('root'));
    items.forEach(i => nav.accept(i, undefined));
    return nav;
  }
}
