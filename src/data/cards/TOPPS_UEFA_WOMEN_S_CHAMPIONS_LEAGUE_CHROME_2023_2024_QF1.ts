import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChrome_2023_2024 } from "../collections";

import c_qf1_0 from "../img/cards/c_qf1_0.png";
import c_qf1_1 from "../img/cards/c_qf1_1.webp";
import c_qf1_2 from "../img/cards/c_qf1_2.webp";
import c_QAAB_0 from "../img/cards/c_QAAB_0.png";
import c_QAAB_1 from "../img/cards/c_QAAB_1.webp";
import c_QAAB_2 from "../img/cards/c_QAAB_2.webp";

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2023_2024_QF1: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2023-2024-QF-1',
  number: 'QF-1',
  images: [
    c_qf1_0,
    c_qf1_1,
    c_qf1_2,
  ],
  name: "Aitana Bonmatí Queens of Football",
  rarity: 1,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2023_2024,
  year: 2024,
  cardSection: "Insert Cards",
  cardType: [
    CardType.QueensOfFootball,
  ],
  brilli: CardBrilli.Holo,
  productType: CardProductType.Card,
};

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2023_2024_QAAB: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2023-2024-QA-AB',
  number: 'QA-AB',
  images: [
    c_QAAB_0,
    c_QAAB_1,
    c_QAAB_2,
  ],
  name: "Aitana Bonmatí Queens of Football Autograph",
  rarity: 4,
  numbered: 99,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2023_2024,
  year: 2024,
  cardSection: "Queens of Football Autographs",
  cardType: [
    CardType.QueensOfFootball,
    CardType.Autographs,
  ],
  brilli: CardBrilli.Holo,
  productType: CardProductType.Card,
};

