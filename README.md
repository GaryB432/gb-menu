# gb-menu

## Fetch dependencies
```
npm install
```

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

## Run webpack
```
npm run build
```

## Start http-server
```
npm start
```

## Package for npm
```
cd pack
gulp
```

themes from [w3schools](https://www.w3schools.com/colors/colors_monochromatic.asp).
