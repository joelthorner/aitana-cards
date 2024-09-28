import { Collection } from "../data/collections";

export enum CardStatus {
  Falti = 'falti',
  Tengui = 'tengui',
  Pending = 'pending',
};

export enum CardBrilli {
  Default = 'default',
  Stars = 'stars',
};

export type Card = {
  id: string,
  images: string[],
  name: string,
  description?: string,
  rarity: 1 | 2 | 3 | 4 | 5,
  status: CardStatus,
  collection: Collection,
  searchKey?: string,
  year: number,
  brilli?: CardBrilli,
  links?: string[];
};