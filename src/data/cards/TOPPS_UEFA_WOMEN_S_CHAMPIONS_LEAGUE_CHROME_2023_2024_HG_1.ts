import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChrome_2023_2024 } from "../collections";

import cHG1_0 from "../img/cards/cHG1_0.png";
import cHG1_1 from "../img/cards/cHG1_1.jpg";
import cHG1_2 from "../img/cards/cHG1_2.webp";
import cHG1_3 from "../img/cards/cHG1_3.webp";

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2023_2024_HG1: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2023-2024-HG-1',
  number: 'HG-1',
  images: [
    cHG1_0,
    cHG1_1,
    cHG1_2,
    cHG1_3,
  ],
  name: "Aitana Bonmatí Hidden Gems",
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2023_2024,
  year: 2024,
  cardSection: "Insert Cards",
  cardType: [
    CardType.HiddenGems,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.Stars,
};
