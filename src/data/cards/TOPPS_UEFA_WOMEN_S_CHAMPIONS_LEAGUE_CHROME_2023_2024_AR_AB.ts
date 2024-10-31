import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChrome_2023_2024 } from "../collections";

import carab_0 from "../img/cards/carab_0.jpg";
import carab_1 from "../img/cards/carab_1.webp";
import carab_3 from "../img/cards/carab_3.webp";

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2023_2024_ARAB: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2023-2024-AR-AB',
  number: 'AR-AB',
  images: [
    carab_0,
    carab_1,
    carab_3,
  ],
  name: "Aitana Bonmatí Premium Autograph Relic Match Worn",
  rarity: 5,
  numbered: 5,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2023_2024,
  year: 2024,
  cardSection: "Chrome Premium Autograph Relics",
  cardType: [
    CardType.Autographs,
    CardType.Relic,
  ],
  brilli: CardBrilli.Holo,
  productType: CardProductType.Card,
};
