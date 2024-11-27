import { Collection } from "./collection";
import { Teammate } from "../data/teammates";

export enum CardStatus {
  Falti = 'falti',
  Tengui = 'tengui',
  Pending = 'pending',
};

export enum CardBrilli {
  Stars = 'stars',
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
  FractedGoldEffect = 'fractedGoldEffect',
  TurquoiseFoil = 'turquoiseFoil',
  Papradascha = 'papradascha',
  SuperFractor = 'superFractor',
};

/**
 * Add new CarTypes todo:
 * - Add value to src\data\card-type-groups.ts
 * - Add css filter btn effect (?)
 */
export enum CardType {
  // Generic / no type
  BaseSet = 'Base set',
  TeamCard = 'Team Card',
  Collage = 'Collage', // Carta composta
  UnlicensedCard = 'Unlicensed Card',

  Holographic = 'Holographic', // penjat

  // Panini 365 or Adrenalyn XL no se com va encara
  Icons = 'Icons',
  TheBest = 'The Best',

  // Topps
  Rookie = 'Rookie',
  Relic = 'Relic',

  FutureStars = 'Future Stars',
  CurrentStars = 'Current Stars',
  Dynamic = 'Dynamic',
  InAction = 'In action',
  Sapphire = 'Sapphire',
  AltImage = 'Alternative Image',
  Fierce = 'Fierce',
  Filmstrip = 'Filmstrip',
  CrowningMoments = 'Crowning Moments',
  ShutterSpeed = 'Shutter Speed',
  QueensOfFootball = 'Queens of football',
  HiddenGems = 'Hidden Gems',
  StarQuality = 'Star Quality',
  ChineseZodiac = 'Chinese Zodiac',
  EtchedInStone = 'Etched in Stone',
  DiamondEyesDragon = 'Diamond Eyes Dragon',
  ShortPrint = 'Short Print',
  Infinite = 'Infinite',
  Selections = 'Selections',

  Refractor = 'Refractor',
  XFractor = 'X-Fractor',
  Pulsar = 'Pulsar',
  SuperFractor = 'SuperFractor',
  Wave = 'Wave',
  Prism = 'Prism',
  Mojo = 'Mojo',

  Barça = 'Barça',
  Wooden = 'Wooden',
  Inferno = 'Inferno',
  XI = 'XI',
  ColorMatch = 'Color Match Variation',

  White = 'White',
  Yellow = 'Yellow',
  Gold = 'Gold',
  Orange = 'Orange',
  RoseGold = 'Rose Gold',
  Red = 'Red',
  Pink = 'Pink',
  Papradascha = 'Papradascha',
  Purple = 'Purple',
  Blue = 'Blue',
  Aqua = 'Aqua',
  Turquoise = 'Turquoise',
  Green = 'Green',
  NeonGreen = 'Neon Green',
  Gray = 'Gray',
  BlackAndWhite = 'Black & White',
  Black = 'Black',
  Rainbow = 'Rainbow',

  Autographs = 'Autographs',
  DualAutographs = 'Dual Autographs',
  QuadAutograph = 'Quad Autograph',

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
  PatchBookCard = 'Patch Book Card',
};

export enum CardOrientation {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
};

export enum CardLanguage {
  CA = 'Català',
  ES = 'Spanish',
  EN = 'English',
};

export enum CardFlag {
  PoorImage = 'PoorImage',
  DuplicatedImage = 'DuplicatedImage',
  MissingBackImage = 'MissingBackImage',
};

export type Card = {
  id: string;
  images: string[];
  name: string;
  number: number | string;
  cardType: CardType[];
  rarity: 1 | 2 | 3 | 4 | 5;
  status: CardStatus;
  collection: Collection;
  year: number;
  productType: CardProductType;
  orientation: CardOrientation;
  description?: string;
  brilli?: CardBrilli;
  links?: string[];
  numbered?: number;
  cardSection?: string;
  customRelatedsRegexp?: RegExp;
  // TODO implement
  language?: CardLanguage;
  cardTextFront?: string;
  cardTextBack?: string;
  teammates?: Teammate[];
  flags?: CardFlag[];
};

export type CardSearch = {
  id: string;
  name: string;
  image: string;
  collection: string;
  number: string | number;
  cardType: CardType[];
}