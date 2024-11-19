import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChrome_2023_2024 } from "../collections";

import fr1_0 from "../img/cards/fr1_0.jpg";
import fr1_1 from "../img/cards/fr1_1.webp";
import fr1_2 from "../img/cards/fr1_2.webp";
import fr1o_0 from "../img/cards/fr1o_0.jpg";
import fr1o_1 from "../img/cards/fr1o_1.webp";
import fr1o_2 from "../img/cards/fr1o_2.webp";

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2023_2024_FR1: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2023-2024-FR-1',
  number: 'FR-1',
  images: [
    fr1_0,
    fr1_1,
    fr1_2,
  ],
  name: "Aitana Bonmatí Fierece",
  rarity: 1,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2023_2024,
  year: 2024,
  cardSection: "Insert Cards",
  cardType: [
    CardType.Fierce,
  ],
  brilli: CardBrilli.Holo,
  productType: CardProductType.Card,
  customRelatedsRegexp: /FR-1[a-z]{1,6}?$/,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2023_2024_FR1o: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2023-2024-FR-1o',
  number: 'FR-1o',
  images: [
    fr1o_0,
    fr1o_1,
    fr1o_2,
  ],
  name: "Aitana Bonmatí Fierece / Orange Refractor",
  rarity: 4,
  numbered: 25,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2023_2024,
  year: 2024,
  cardSection: "Insert Cards",
  cardType: [
    CardType.Fierce,
    CardType.Orange,
  ],
  brilli: CardBrilli.OrangeFoil,
  productType: CardProductType.Card,
  customRelatedsRegexp: /FR-1[a-z]{1,6}?$/,
  orientation: CardOrientation.Vertical,
};
