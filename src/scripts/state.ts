import { MenuElement } from './menu/menu-element';

export type ActionType = 'activating' | 'entering' | 'leaving' | 'deactivating';

export class State {
  private lastAction?: ActionType;
  private lastSender?: MenuElement;
  public receive(action: ActionType, sender: MenuElement) {
    switch (action) {
      case 'activating':
      case 'entering': {
        this.walkToRoot(sender, e => {
          e.element.classList.add('open');
          e.activator.classList.add('open');
        });
        break;
      }
      case 'leaving': {
        this.walkToRoot(sender, e => {
          e.element.classList.remove('open');
          e.activator.classList.remove('open');
        });
        break;
      }
      case 'deactivating': {
        sender.activator.classList.remove('open');
        sender.element.classList.remove('open');
        break;
      }
    }
    console.log(
      // sender.menu.parent,
      action,
      sender.parent,
      sender === this.lastSender,
      sender.menu.toString(),
      // '<>',
      // this.lastSender ? this.lastSender.menu.toString() : '?',
      this.lastAction
    );
    this.lastAction = action;
    this.lastSender = sender;
  }
  private walkToRoot(e: MenuElement, cb: (m: MenuElement) => void) {
    cb(e);
    this.forEachParent(e, cb);
  }

  private forEachParent(tis: MenuElement, cb: (m: MenuElement) => void): void {
    let p = tis.parent;
    while (p) {
      cb(p);
      p = p.parent;
    }
  }
}
