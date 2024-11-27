import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChrome_2022_2023 } from "../collections";

import cCM_5g_0 from "../img/cards/cCM_5g_0.jpg";
import cCM_5g_1 from "../img/cards/cCM_5g_1.webp";
import cCM_5g_2 from "../img/cards/cCM_5g_2.webp";
import cCM_5_0 from "../img/cards/cCM_5_0.jpg";
import cCM_5_1 from "../img/cards/cCM_5_1.webp";
import cCM_5_2 from "../img/cards/cCM_5_2.webp";
import cCM_5_3 from "../img/cards/cCM_5_3.webp";
import cCM_5_4 from "../img/cards/cCM_5_4.webp";
import cCM_5o_0 from "../img/cards/cCM_5o_0.jpg";
import cCM_5o_1 from "../img/cards/cCM_5o_1.webp";
import cCM_5o_2 from "../img/cards/cCM_5o_2.webp";
import cCM_55r_0 from "../img/cards/cCM_55r_0.jpg";

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_CM5: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2022-2023-CM-5',
  number: 'CM-5',
  images: [
    cCM_5_0,
    cCM_5_1,
    cCM_5_2,
    cCM_5_3,
    cCM_5_4,
  ],
  name: 'Aitana Bonmatí Crowning Moments',
  rarity: 1,
  status: CardStatus.Tengui,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2022_2023,
  year: 2023,
  cardSection: 'FC Barcelona',
  cardType: [
    CardType.CrowningMoments,
  ],
  brilli: CardBrilli.Holo,
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
};

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
  orientation: CardOrientation.Vertical,
};

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_CM5o: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2022-2023-CM-5o',
  number: 'CM-5o',
  images: [
    cCM_5o_0,
    cCM_5o_1,
    cCM_5o_2,
  ],
  name: 'Aitana Bonmatí Crowning Moments / Orange',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2022_2023,
  year: 2023,
  cardSection: 'FC Barcelona',
  cardType: [
    CardType.CrowningMoments,
    CardType.Orange,
  ],
  brilli: CardBrilli.OrangeFoil,
  numbered: 25,
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_CM55r: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2022-2023-CM-55r',
  number: 'CM-55r',
  images: [
    cCM_55r_0,
  ],
  name: 'Aitana Bonmatí Crowning Moments / Red',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2022_2023,
  year: 2023,
  cardSection: 'FC Barcelona',
  cardType: [
    CardType.CrowningMoments,
    CardType.Red,
  ],
  brilli: CardBrilli.RedFoil,
  numbered: 5,
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
};
