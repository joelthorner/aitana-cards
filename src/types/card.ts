import { Collection } from "./collection";

export enum CardStatus {
  Falti = 'falti',
  Tengui = 'tengui',
  Pending = 'pending',
};

export enum CardBrilli {
  ShinyHolo = 'shinyHolo',
  Holo = 'holo',
  GoldFoil = 'goldFoil',
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