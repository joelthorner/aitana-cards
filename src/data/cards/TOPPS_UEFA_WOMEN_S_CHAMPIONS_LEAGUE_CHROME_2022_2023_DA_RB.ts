import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChrome_2022_2023 } from "../collections";

import DA_RBo_0 from "../img/cards/DA_RBo_0.jpg";
import DA_RBo_1 from "../img/cards/DA_RBo_1.webp";
import DA_RBo_2 from "../img/cards/DA_RBo_2.webp";
import DA_RBo_3 from "../img/cards/DA_RBo_3.webp";
import DA_RBo_4 from "../img/cards/DA_RBo_4.webp";
import DA_RBo_5 from "../img/cards/DA_RBo_5.webp";
import DA_RBo_6 from "../img/cards/DA_RBo_6.webp";
import DA_RBbl_0 from "../img/cards/DA_RBbl_0.jpg";
import DA_RBbl_1 from "../img/cards/DA_RBbl_1.webp";
import DA_RBbl_2 from "../img/cards/DA_RBbl_2.webp";
import DA_RB_0 from "../img/cards/DA_RB_0.jpg";
import DA_RB_1 from "../img/cards/DA_RB_1.webp";
import DA_RB_2 from "../img/cards/DA_RB_2.webp";

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_DARB: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2022-2023-DA-RB',
  number: 'DA-RB',
  images: [
    DA_RB_0,
    DA_RB_1,
    DA_RB_2,
  ],
  name: 'Aitana Bonmatí / Fridolina Rolfö - Dual Autograph',
  numbered: 99,
  rarity: 4,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2022_2023,
  year: 2023,
  cardSection: 'FC Barcelona',
  cardType: [
    CardType.DualAutographs,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_DARBo: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2022-2023-DA-RBo',
  number: 'DA-RBo',
  images: [
    DA_RBo_0,
    DA_RBo_1,
    DA_RBo_2,
    DA_RBo_3,
    DA_RBo_4,
    DA_RBo_5,
    DA_RBo_6,
  ],
  name: 'Aitana Bonmatí / Fridolina Rolfö - Dual Autograph / Orange',
  numbered: 25,
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2022_2023,
  year: 2023,
  cardSection: 'FC Barcelona',
  brilli: CardBrilli.OrangeFoil,
  cardType: [
    CardType.DualAutographs,
    CardType.Orange,
    CardType.Wave,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_DARBbl: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2022-2023-DA-RBbl',
  number: 'DA-RBbl',
  images: [
    DA_RBbl_0,
    DA_RBbl_1,
    DA_RBbl_2,
  ],
  name: 'Aitana Bonmatí / Fridolina Rolfö - Dual Autograph / Black',
  numbered: 10,
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2022_2023,
  year: 2023,
  cardSection: 'FC Barcelona',
  brilli: CardBrilli.BlackTopps,
  cardType: [
    CardType.DualAutographs,
    CardType.Black,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};