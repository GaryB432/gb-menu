import { Activator, Menu, SubMenuLine } from './menu';

it('should be defined', () => {
  const doc = new Menu(new Activator('test'));
  expect(doc).toBeDefined();
});

it('should compile empty', () => {
  const m = Menu.compile([]);
  expect(m).toEqual({ activator: { title: 'root' }, lines: [] });
  expect(m.parent).toBeUndefined();
});

describe('a few items', () => {
  let sut: Menu;
  beforeEach(() => {
    sut = Menu.compile([
      {
        items: [{ text: 'a1' }, { text: 'a2' }],
        text: 'top a',
      },
      {
        items: [
          {
            items: [
              { items: [{ text: 'b1a1' }, { text: 'b1a2' }], text: 'b1a' },
              { text: 'b1b' },
            ],
            text: 'b1',
          },
          { href: '/b2', text: 'b2' },
        ],
        text: 'top b',
      },
      {
        items: [{ text: 'c1' }, { text: 'c2' }],
        text: 'top c',
      },
    ]);
  });

  it('should compile ', () => {
    expect(sut.activator).toBeDefined();
    expect(sut.activator.title).toBe('root');
    expect(sut.parent).toBeUndefined();
  });

  it('should compile few items', () => {
    expect(sut.lines.length).toBe(3);
    expect(sut.lines.map(n => n.title)).toEqual(['top a', 'top b', 'top c']);
    expect(sut.parent).toBeUndefined();
  });

  it('should do topb', () => {
    const topb = sut.lines[1] as SubMenuLine;
    expect(topb instanceof SubMenuLine).toBeTruthy();
    expect(topb.title).toBe('top b');
    expect(topb.menu).toBeDefined();
  });

  it('should do b2', () => {
    const topb = sut.lines[1] as SubMenuLine;
    const b = topb.menu.lines[1];
    expect(b instanceof SubMenuLine).toBeFalsy();
    expect(b.title).toBe('b2');
    expect(b.href).toBe('/b2');
  });

  it('should do b1', () => {
    const topb = sut.lines[1] as SubMenuLine;
    const b = topb.menu.lines[0] as SubMenuLine;
    expect(b instanceof SubMenuLine).toBeTruthy();
    expect(b.title).toBe('b1');
    expect(b.menu).toBeDefined();
    expect(b.href).toBeUndefined();
  });

  it('should do b1a', () => {
    const topb = sut.lines[1] as SubMenuLine;
    const b = topb.menu.lines[0] as SubMenuLine;
    const b1a = b.menu.lines[0] as SubMenuLine;
    const m = b1a.menu;
    expect(b1a.title).toBe('b1a');
    expect(m).toBeDefined();
    expect(m.lines.length).toBe(2);
    expect(m.lines[1].title).toBe('b1a2');
    expect(m.activator.title).toBe(b1a.title);
    expect(m.parent!.activator.title).toBe('b1');
    expect(m.parent!.parent!.activator.title).toBe('top b');
    expect(m.parent!.parent!.parent!.activator.title).toBe('root');
  });

  it('should do b1b', () => {
    const topb = sut.lines[1] as SubMenuLine;
    const b = topb.menu.lines[0] as SubMenuLine;
    const b1b = b.menu.lines[1];
    expect(b1b.title).toBe('b1b');
    expect(b1b instanceof SubMenuLine).toBeFalsy();
  });
});
