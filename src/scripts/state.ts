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
          e.element.classList.remove('closing');
          e.element.classList.add('open');
          e.activator.classList.add('open');
        });
        break;
      }
      case 'leaving': {
        if (sender.parent) {
          sender.element.addEventListener(
            'transitionend',
            () => {
              this.walkToRoot(sender, s => {
                if (s.element.classList.contains('closing')) {
                  s.element.classList.remove('open', 'closing');
                } else {
                  console.log('hmmm 34');
                  s.element.classList.remove('open');
                }
                s.activator.classList.remove('open');
              });
            },
            { once: true }
          );
          sender.element.classList.add('closing');
        } else {
          sender.element.classList.remove('open');
        }
        break;
      }
      case 'deactivating': {
        sender.activator.classList.remove('open');
        sender.element.classList.remove('open', 'closing');
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
