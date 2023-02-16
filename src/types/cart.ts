import { item } from './item';

export type cart = {
  id: number;
  value: number;
  items: item[];
  itemsCount: number;
}