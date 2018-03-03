# gb-menu

## Add to application
```typescript
const items: Item[] = [
  {
    items: [{ text: 'a1' }, { text: 'a2' }], text: 'top a'
  },
  {
    items: [
      { text: 'b1', items: [{ text: 'b1a' }, { text: 'b1b' }] },
      { text: 'b2' },
    ],
    text: 'top b'
  },
  {
    items: [{ text: 'c1' }, { text: 'c2' }],
    text: 'top c'
  }
];

new NavBar(items).run(document.getElementById('navbar')!);
```
