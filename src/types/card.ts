import { Collection } from "./collection";

export enum CardStatus {
  Falti = 'falti',
  Tengui = 'tengui',
  Pending = 'pending',
};

export enum CardBrilli {
  ShinyHolo = 'shinyHolo',
  Holo = 'holo',
  RedFoil = 'redFoil',
  GoldFoil = 'goldFoil',
  GoldMetal = 'goldMetal',
  PurpleFoil = 'purpleFoil',
  GreenFoil = 'greenFoil',
  OrangeFoil = 'orangeFoil',
  Rainbow = 'rainbow',
  BlueTopps = 'blue',
  BlackTopps = 'black',
  PinkRefractorTopps = 'pinkRefractor',
  PinkFoil = 'pinkFoil',
  Refractor = 'refractor',
  GreenRefractorTopps = 'greenRefractor',
  InfernoRefractorTopps = 'infernoRefractor',
  RedRefractorTopps = 'redRefractor',
  SlimVerticalRefractor = 'slimVerticalRefractor',
  BlueCristall = 'blueCristall',
  RoseGoldMojo = 'roseGoldMojo',
  AquaPrism = 'aquaPrism',
};

/**
 * Add new CarTypes todo:
 * - Add value to src\data\card-type-groups.ts
 * - Add css filter btn effect (?)
 */
export enum CardType {
  // Generic / no type
  Base = 'Base',
  Holographic = 'Holographic',
  TeamCard = 'Team Card',
  Collage = 'Collage', // Carta composta

  // Panini
  GoldFoil = 'Gold Foil',
  GoldMetalic = 'Gold Metalic',

  // Topps
  RookieCard = 'Rookie Card',
  BaseCard = 'Base card',
  BaseInAction = 'Base in action',
  FutureStars = 'Future Stars',
  CurrentStars = 'Current Stars',
  Dynamic = 'Dynamic',
  Sapphire = 'Sapphire',
  AltImage = 'Alternative Image',
  Fierce = 'Fierce',
  Filmstrip = 'Filmstrip',
  CrowningMoments = 'Crowning Moments',
  ShutterSpeed = 'Shutter Speed',

  Refractor = 'Refractor',
  XFractor = 'X-Fractor',
  PulsarRefractor = 'Pulsar Refractor',

  BlackAndWhiteWave = 'Black & White Wave',
  Barça = 'Barça',

  Blue = 'Blue',
  Gold = 'Gold',
  Black = 'Black',
  Green = 'Green',
  Rainbow = 'Rainbow',
  Purple = 'Purple',
  Red = 'Red',
  Pink = 'Pink',
  Orange = 'Orange',
  Yellow = 'Yellow',

  RedXFractor = 'Red X-Fractor',
  OrangeXFractor = 'Orange X-Fractor',
  SuperFractor = 'SuperFractor',
  YellowXFractor = 'Yellow X-Fractor',
  PinkPrism = 'Pink Prism',
  NeonGreen = 'Neon Green',
  Inferno = 'Inferno',
  OrangeWave = 'Orange Wave',
  RoseGoldMojo = 'Rose Gold Mojo',
  BlueMojo = 'Blue Mojo',
  AquaPrismRefactor = 'Aqua Prism Refractor',

  Autographs = 'Autographs',
  ActionAutographs = 'Action Autographs',
  DualAutographs = 'Dual Autographs',
  QuadAutograph = 'Quad Autograph',

  // Topps stickers
  Shiny = 'Shiny',

  // Topps Match Attax
  UWCL_Limelight = 'UWCL Limelight',
  BlueCrystall = 'Blue Crystall',
  T_100Club = '100 Club',
};

export enum CardProductType {
  Sticker = 'Sticker',
  Card = 'Card',
  GameCard = 'Game Card',
  BookCard = 'Book Card',
};

export enum CardOrientation {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
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
  brilli?: CardBrilli,
  links?: string[];
  numbered?: number;
  cardSection?: string;
  orientation?: CardOrientation,
};