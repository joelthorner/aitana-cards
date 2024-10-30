import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChrome_2023_2024 } from "../collections";

import DA_PBb_0 from "../img/cards/DA_PBb_0.jpg";
import DA_PBb_1 from "../img/cards/DA_PBb_1.jpg";
import DA_PBb_2 from "../img/cards/DA_PBb_2.webp";
import DA_PBb_3 from "../img/cards/DA_PBb_3.webp";

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2023_2024_DAPBb: Card = {
  customRelatedsRegexp: /DA-PB[a-z]{1,6}?$/,
  id: 'topps-uefa-women-s-champions-league-chrome-2023-2024-DA-PBb',
  number: 'DA-PBb',
  images: [
    DA_PBb_0,
    DA_PBb_1,
    DA_PBb_2,
    DA_PBb_3,
  ],
  name: "Alexia Putellas / Aitana Bonmatí Dual Autographs / Black Refractor",
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2023_2024,
  year: 2024,
  cardSection: "Dual Autographs",
  cardType: [
    CardType.DualAutographs,
    CardType.Black
  ],
  brilli: CardBrilli.BlackTopps,
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};
