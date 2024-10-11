import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChrome_2022_2023 } from "../collections";

import cCM_5g_0 from "../img/cards/cCM_5g_0.png";
import cCM_5g_1 from "../img/cards/cCM_5g_1.webp";
import cCM_5g_2 from "../img/cards/cCM_5g_2.webp";

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_CM5g: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2022-2023-CM-5g',
  number: 'CM-5g',
  images: [
    cCM_5g_0,
    cCM_5g_1,
    cCM_5g_2,
  ],
  name: 'Aitana Bonmatí Crowning Moments / Gold',
  rarity: 4,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2022_2023,
  year: 2023,
  cardSection: 'FC Barcelona',
  cardType: [
    CardType.CrowningMoments,
    CardType.Gold,
  ],
  brilli: CardBrilli.GoldFoil,
  numbered: 50,
  productType: CardProductType.Card,
};
