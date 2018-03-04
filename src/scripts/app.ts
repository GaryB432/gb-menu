import '../styles/blueish.scss';

import { Item } from './models';
import { NavBar } from './navbar';

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

const n = new NavBar(items);
n.run(document.getElementById('navbar')!);
