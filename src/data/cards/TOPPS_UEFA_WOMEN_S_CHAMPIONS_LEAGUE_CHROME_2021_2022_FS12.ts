/**
 * COMPLETED data
 */
import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChrome_2021_2022 } from "../collections";

import img_FC12_1 from "../img/cards/topps-uefa-women-s-champions-league-chrome-2021-2022-FS-12.png";
import img_FC12_2 from "../img/cards/topps-uefa-women-s-champions-league-chrome-2021-2022-FS-12_2.webp";
import img_FC12r_1 from "../img/cards/img_FC12r_1.png";
import img_FC12ow_1 from "../img/cards/img_FC12ow_1.png";
import img_FC12ow_2 from "../img/cards/img_FC12ow_2.webp";

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2021_2022_FC12: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2021-2022-FS-12',
  number: 'FS-12',
  images: [
    img_FC12_1,
    img_FC12_2,
  ],
  name: 'Aitana Bonmatí RC Future Stars',
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2021_2022,
  year: 2022,
  cardSection: 'FC Barcelona',
  brilli: CardBrilli.Holo,
  cardType: [
    CardType.FutureStars,
    CardType.RookieCard,
  ],
  productType: CardProductType.Card,
};

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2021_2022_FC12ow: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2021-2022-FS-12-ow',
  number: 'FS-12-ow',
  images: [
    img_FC12ow_1,
    img_FC12ow_2,
  ],
  name: 'Aitana Bonmatí RC Future Stars / Orange Wave',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2021_2022,
  year: 2022,
  cardSection: 'FC Barcelona',
  brilli: CardBrilli.OrangeFoil,
  cardType: [
    CardType.FutureStars,
    CardType.OrangeWave,
    CardType.RookieCard,
  ],
  numbered: 25,
  productType: CardProductType.Card,
};

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2021_2022_FC12r: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2021-2022-FS-12-r',
  number: 'FS-12-r',
  images: [
    img_FC12r_1
  ],
  name: 'Aitana Bonmatí RC Future Stars / Red',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2021_2022,
  year: 2022,
  cardSection: 'FC Barcelona',
  brilli: CardBrilli.RedFoil,
  cardType: [
    CardType.FutureStars,
    CardType.Red,
    CardType.RookieCard,
  ],
  numbered: 5,
  productType: CardProductType.Card,
};

// export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2021_2022_FS12sf: Card = {
//   id: 'topps-uefa-women-s-champions-league-chrome-2021-2022-FS-12-sf',
//   number: 'FS-12-sf',
//   images: [],
//   missingImage: img_FC12_1,
//   name: 'Aitana Bonmatí RC Future Stars / SuperFractor',
//   rarity: 5,
//   status: CardStatus.Falti,
//   collection: ToppsUefaWomenSChampionsLeagueChrome_2021_2022,
//   year: 2022,
//   cardSection: 'FC Barcelona',
//   brilli: CardBrilli.Holo,
//   cardType: [
//     CardType.FutureStars,
//     CardType.SuperFractor,
//     CardType.RookieCard,
//   ],
//   numbered: 1,
//   productType: CardProductType.Card,
// };