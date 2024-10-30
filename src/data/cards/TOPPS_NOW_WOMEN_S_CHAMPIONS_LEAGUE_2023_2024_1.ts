/**
 * COMPLETED data
 */
import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsNowWomenSChampionsLeague_2023_2024 } from "../collections";

import ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023 from "../img/cards/2023-24-topps-womens-champions-league-now--001-1.jpg";
import ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023_back from "../img/cards/2023-24-topps-womens-champions-league-now-back.webp";
import ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023_purple from "../img/cards/2023-24 Topps - Womens Champions League NOW -001_2.jpg";
import ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023_black from "../img/cards/2023-24 Topps - Womens Champions League NOW -001_3.jpg";
import ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023_gold from "../img/cards/2023-24 Topps - Womens Champions League NOW -001_4.jpg";

export const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2023_2024_1: Card = {
  id: 'topps-now-women-s-champions-league-2023-2024-1',
  number: 1,
  images: [
    ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023,
    ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023_back,
  ],
  name: "Aitana Bonmatí - UEFA Women's Player of the Year",
  rarity: 1,
  status: CardStatus.Tengui,
  collection: ToppsNowWomenSChampionsLeague_2023_2024,
  year: 2023,
  links: [
    'https://cartophilic-info-exch.blogspot.com/2023/09/topps-topps-now-uefa-womens-champions.html',
    'https://www.topps.com/products/aitana-bonmati-uefa-women-s-player-of-the-year-uwcl-topps-now-reg-card-1',
    'https://es.topps.com/products/topps-es-aitana-bonmati-uefa-women-s-player-of-the-year-uwcl-topps-now-reg-carta-1',
  ],
  cardType: [CardType.BaseSet],
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona',
};

export const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2023_2024_1pu: Card = {
  id: 'topps-now-women-s-champions-league-2023-2024-1pu',
  number: '1pu',
  images: [
    ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023_purple,
    ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023_back,
  ],
  name: "Aitana Bonmatí - UEFA Women's Player of the Year Purple",
  rarity: 3,
  status: CardStatus.Falti,
  brilli: CardBrilli.PurpleFoil,
  collection: ToppsNowWomenSChampionsLeague_2023_2024,
  year: 2023,
  numbered: 99,
  links: [
    'https://cartophilic-info-exch.blogspot.com/2023/09/topps-topps-now-uefa-womens-champions.html'
  ],
  cardType: [CardType.Purple],
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona',
};

export const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2023_2024_1bl: Card = {
  id: 'topps-now-women-s-champions-league-2023-2024-1bl',
  number: "1bl",
  images: [
    ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023_black,
    ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023_back,
  ],
  name: "Aitana Bonmatí - UEFA Women's Player of the Year Black",
  rarity: 4,
  status: CardStatus.Falti,
  brilli: CardBrilli.BlackTopps,
  collection: ToppsNowWomenSChampionsLeague_2023_2024,
  year: 2023,
  links: [
    'https://cartophilic-info-exch.blogspot.com/2023/09/topps-topps-now-uefa-womens-champions.html'
  ],
  numbered: 10,
  cardType: [CardType.Black],
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona',
};

export const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2023_2024_1g: Card = {
  id: 'topps-now-women-s-champions-league-2023-2024-1g',
  number: "1g",
  images: [
    ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023_gold,
    ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023_back,
  ],
  name: "Aitana Bonmatí - UEFA Women's Player of the Year Gold",
  rarity: 5,
  status: CardStatus.Falti,
  brilli: CardBrilli.GoldFoil,
  collection: ToppsNowWomenSChampionsLeague_2023_2024,
  year: 2023,
  links: [
    'https://cartophilic-info-exch.blogspot.com/2023/09/topps-topps-now-uefa-womens-champions.html'
  ],
  numbered: 1,
  cardType: [CardType.Gold],
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona',
};
