import '../styles/base.scss';

import { Item } from './models';

const items: Item[] = [
  {
    href: '#',
    items: [
      {
        href: '#',
        text: 'stack overflow one',
      },
      {
        href: '#',
        text: 'SO is a loger name also',
      },
    ],
    text: 'Stack Overflow',
  },
  {
    href: '#',
    items: [
      {
        items: [{ text: 'one stuff' }, { text: 'one two' }],
        text: 'one',
      },
      {
        items: [
          { text: 'two stuff a' },
          { text: 'two stuff b' },
          {
            href: '#',
            items: [
              { text: 'nested I told you (text)' },
              {
                items: [
                  { text: 'there can' },
                  { href: '/tbd', text: 'be moar' },
                ],
                text: 'oh dear so many',
              },
            ],
            text: 'nested more',
          },
          { text: '-' },
          { text: 'two stuff e' },
          { text: 'two stuff f' },
          { text: 'two two g' },
        ],
        text: 'two is a menu with 7',
      },
      {
        href: '#',
        items: [
          {
            href: '#',
            text: 'yes indeed',
          },
        ],
        text: 'this even has some items',
      },
      {
        href: '#',
        items: [
          { text: 'one stuff' },
          { text: 'one stuff' },
          { text: 'one two' },
        ],
        text: 'two is a loger name also',
      },
      {
        href: '#',
        text: 'two is a loger name also',
      },
    ],
    text: 'Dashboards',
  },
  {
    href: '#',
    items: [
      { text: 'one' },
      {
        items: [
          { text: 'one stuff' },
          { text: 'one stuff' },
          { text: 'one two' },
        ],

        text: 'two',
      },
    ],
    text: 'Portals',
  },
];

// const so1: HTMLElement = document.querySelector('#so1')! as HTMLElement;
// const so2: HTMLElement = document.querySelector('#so2')! as HTMLElement;
// const m22: HTMLElement = document.querySelector('#m22')! as HTMLElement;
// function doit() {
//   const ff = Array.from(document.querySelectorAll('nav > ul > li'));

//   ff.forEach(function(a, b) {
//     const bcr = a.getBoundingClientRect();
//     console.log(bcr, b);
//     if (b === 0) {
//       console.log(b);
//       so1.style.top = bcr.bottom + 'px';
//       so1.style.left = bcr.left + 'px';
//     }
//     if (b === 2) {
//       console.log(b);
//       // m22.style.top = bcr.bottom + "px";
//       m22.style.top = bcr.bottom + 'px';
//       m22.style.left = bcr.left + 'px';
//     }
//   });

//   const el = document.querySelector('#so1')! as HTMLElement;
//   // el.style.left = "190px";
//   const ii = Array.from(el.querySelectorAll('li'));
//   ii.forEach(function(k, n) {
//     console.log(k, n);
//     k.addEventListener('mouseenter', function(oo) {
//       const elfo = oo.target as HTMLElement;
//       const aa = elfo.querySelector('a') as HTMLAnchorElement;
//       console.log(aa.text);
//       const bcr = k.getBoundingClientRect();
//       if (aa.text !== 'SO two') {
//         so2.style.left = bcr.right + 'px';
//         so2.style.top = bcr.top + 'px';
//         console.log(aa, 23);
//       }
//     });
//     k.addEventListener('mouseleave', function(oo) {
//       const elfo = oo.target as HTMLElement;
//       const aa = elfo.querySelector('a') as HTMLAnchorElement;
//       console.log(aa.text);
//       // const bcr = k.getBoundingClientRect();
//       if (aa.text !== 'SO two') {
//         so2.style.left = '0';
//         so2.style.top = '200px';
//       }
//     });
//   });
// }
// doit();

import { NavBar } from './navbar';

const fewItems: Item[] = [
  {
    items: [{ text: 'a1' }, { text: 'a2' }],
    text: 'top a',
  },
  {
    items: [
      { text: 'b1', items: [{ text: 'b1a' }, { text: 'b1b' }] },
      { text: 'b2' },
    ],
    text: 'top b',
  },
  {
    items: [{ text: 'c1' }, { text: 'c2' }],
    text: 'top c',
  },
];

console.log(fewItems.length);

const n = new NavBar(items);
n.run(document.getElementById('navbar')!);
