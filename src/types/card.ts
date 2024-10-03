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
  GoldMetal = 'goldMetal',
  PurpleFoil = 'purpleFoil',
  GreenFoil = 'greenFoil',
  OrangeFoil = 'orangeFoil',
  Rainbow = 'rainbow',
  BlueTopps = 'blue',
  BlackTopps = 'black',
  PinkRefractorTopps = 'pinkRefractor',
  Refractor = 'refractor',
  GreenRefractorTopps = 'greenRefractor',
  InfernoRefractorTopps = 'infernoRefractor',
  RedRefractorTopps = 'redRefractor',
  SlimVerticalRefractor = 'slimVerticalRefractor',
};

export enum CardType {
  // General / no type
  Base = 'Base',
  Holographic = 'Holographic',

  // Panini
  GoldFoil = 'GoldFoil',

  // Topps
  RookieCard = 'Rookie Card',
  BaseCard = 'Base card',
  BaseInAction = 'Base in action',
  FutureStars = 'Future Stars',

  Refractor = 'Refractor',
  XFractor = 'X-Fractor',
  BlackAndWhiteWave = 'Black & White Wave',
  Barça = 'Barça',
  Blue = 'Blue',
  Gold = 'Gold',
  OrangeXFractor = 'Orange X-Fractor',
  Purple = 'Purple',
  Red = 'Red',
  RedXFractor = 'Red X-Fractor',
  SuperFractor = 'SuperFractor',
  Autographs = 'Autographs',
  ActionAutographs = 'Action Autographs',
  YellowXFractor = 'Yellow X-Fractor',
  QuadAutographBook = 'Quad Autograph Book',
  PinkPrism = 'Pink Prism',
  NeonGreen = 'Neon Green',
  Inferno = 'Inferno',
  OrangeWave = 'Orange Wave',

  // Topps stickers
  Shiny = 'Shiny',
};

export enum CardProductType {
  Sticker = 'Sticker',
  Card = 'Card',
  BookCard = 'Book Card',
};

export type Card = {
  id: string,
  images: string[],
  name: string,
  number: number | string;
  cardType: CardType[];
  rarity: 1 | 2 | 3 | 4 | 5,
  status: CardStatus,
  collection: Collection,
  year: number,
  productType: CardProductType;

  description?: string,
  missingImage?: string;
  brilli?: CardBrilli,
  links?: string[];
  numbered?: number; // Limited number series
  cardSection?: string;

};