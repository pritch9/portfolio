import { Injectable } from '@angular/core';
import {PortfolioItem} from '../Models/PortfolioItem';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  items: PortfolioItem[] = [];
  constructor() {
    // create dummy data
    const rand = new Random(42);
    for (let i = 0; i < 10; ++i) {
      this.items.push({
        id: i,
        name: `Project #${i}`,
        year: getDate(rand),
        img: {
          url: 'http://placehold.it/400x300',
          alt: 'Example alt text'
        },
        liner: 'The future is the past of the future\'s future',
        // tslint:disable-next-line:max-line-length
        description: '#### Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a est hendrerit, dictum metus nec, commodo massa. Maecenas bibendum bibendum diam et volutpat.',
        link: 'https://google.com/',
        technology: getTech(rand)
      });
    }
  }

  getProjects(): Promise<PortfolioItem[]> {
    this.items.sort((a, b) => b.year[0].getTime() - a.year[0].getTime());
    return Promise.resolve(this.items);
  }
}

function getDate(rand: Random) {
  const length = Math.ceil(rand.random() * 2);
  const dates = Array(length).fill(0)
    .map(o =>  new Date(Date.UTC(2000 + Math.ceil(20 * rand.random()),  Math.floor(12 * rand.random()),  Math.floor(30 * rand.random()))));
  if (length === 2) {
    if (dates[0] > dates[1]) {
      const temp = dates[1];
      dates[1] = dates[0];
      dates[0] = temp;
    }
  }
  return dates;
}

const tech = [
  'HTML',
  'CSS',
  'PHP',
  'Angular',
  'Node.js',
  'Express.js',
  'SQL',
  'Python'
];

function getTech(rand: Random) {
  const length = Math.floor(rand.random() * (tech.length - 3)) + 3;
  return Array(length).fill(0)
    .map(o => tech[Math.floor(rand.random() * tech.length)]);
}


class Random {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  public random(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }
}
