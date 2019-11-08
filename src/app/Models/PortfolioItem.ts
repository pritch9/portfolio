import { Image } from './Image';

export class PortfolioItem {
  id: number;
  name: string;
  year: Date[];
  liner: string;
  description: string;
  link: string;
  img: Image;
  technology: string[];
}
