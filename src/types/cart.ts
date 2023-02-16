import { product } from './product';

export type cart = {
  id: number;
  value: number;
  items: product[];
  itemsCount: number;
}