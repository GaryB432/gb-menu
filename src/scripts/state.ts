import { MenuElement } from './menu/menu-element';

export type ActionType = 'activating' | 'entering' | 'leaving' | 'deactivating';

export class State {
  private activated?: MenuElement;
  private entered?: MenuElement;
  public receive(action: ActionType, sender: MenuElement) {
    switch (action) {
      case 'activating': {
        // sender.open();
        this.activated = sender;
        this.activated.open();
        break;
      }
      case 'entering': {
        this.entered = sender;
        this.walkToRoot(sender, s => s.open());
        break;
      }
      case 'leaving': {
        // this.entered!.close();
        this.walkToRoot(this.entered!, s => s.close());
        this.entered = undefined;
        break;
      }
      case 'deactivating': {
        if (this.entered !== sender) {
          this.activated!.close();
        }
        this.activated = undefined;
        break;
      }
    }
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
