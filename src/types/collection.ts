export enum CollectionSerie {
  _NONE = '_none',
  PaniniFamily = 'Panini Family',
  PaniniFIFA365 = 'Panini FIFA 365',
  PaniniFIFAWorldCup = 'Panini FIFA World Cup',
  PaniniLigaF = 'Panini Liga F',
  PaniniUEFAEuro = 'Panini UEFA Euro',
  ToppsChrome = 'Topps Chrome',
  ToppsDECO = 'Topps DECO',
  ToppsFCBarcelona = 'Topps FC Barcelona',
  ToppsFOCUS = 'Topps FOCUS',
  ToppsInception = 'Topps Inception',
  ToppsKnockout = 'Topps Knockout',
  ToppsLiving = 'Topps Living',
  ToppsMatchAttax = 'Topps Match Attax',
  ToppsMerlinHeritage = 'Topps Merlin Heritage',
  ToppsNow = 'Topps Now',
  ToppsSimplicidad = 'Topps Simplicidad',
  ToppsUEFAStickers = 'Topps UEFA Stickers',
};

export interface Collection {
  id: string;
  image?: string;
  name: string;
  description?: string;
  brand: string;
  links: string[];
  serie?: CollectionSerie;
};