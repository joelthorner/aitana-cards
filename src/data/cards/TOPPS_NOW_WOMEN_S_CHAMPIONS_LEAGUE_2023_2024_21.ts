/**
 * COMPLETED data
 */
import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsNowWomenSChampionsLeague_2023_2024 } from "../collections";

import cardnow21 from "../img/cards/cardnow21.png";
import cardnow21_2 from "../img/cards/artwcl-16c2s-24tn-021_5.png";
import cardnow21_back from "../img/cards/artwcl-16c2s-24tn-021-back_5.png";
import cardnow21pu from "../img/cards/cardnow21pu.png";
import cardnow21pu_2 from "../img/cards/artwcl-16c2s-24tn-021-p99_5.png";
import cardnow21bl from "../img/cards/cardnow21bl.png";
import cardnow21bl_2 from "../img/cards/artwcl-16c2s-24tn-021-p10_5.png";
import cardnow21g from "../img/cards/cardnow21g.png";
import cardnow21g_2 from "../img/cards/artwcl-16c2s-24tn-021-p1_5.png";

export const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2023_2024_21: Card = {
  id: 'topps-now-women-s-champions-league-2023-2024-21',
  number: 21,
  images: [
    cardnow21,
    cardnow21_2,
    cardnow21_back,
  ],
  name: "Aitana Bonmatí - UEFA Women's Champions League winners 2023-24",
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsNowWomenSChampionsLeague_2023_2024,
  year: 2024,
  links: [
    "https://es.topps.com/products/uefa-women-s-champions-league-winners-2023-24-23-24-uwcl-topps-now-reg-card-21-2",
  ],
  cardSection: "FC Barcelona",
  cardType: [CardType.BaseCard],
  productType: CardProductType.Card,
};

export const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2023_2024_21pu: Card = {
  id: 'topps-now-women-s-champions-league-2023-2024-21pu',
  number: '21pu',
  images: [
    cardnow21pu,
    cardnow21pu_2,
    cardnow21_back,
  ],
  name: "Aitana Bonmatí - UEFA Women's Champions League winners 2023-24 Purple",
  rarity: 4,
  status: CardStatus.Falti,
  brilli: CardBrilli.PurpleFoil,
  collection: ToppsNowWomenSChampionsLeague_2023_2024,
  year: 2024,
  links: [
    "https://es.topps.com/products/uefa-women-s-champions-league-winners-2023-24-23-24-uwcl-topps-now-reg-card-21-2",
  ],
  cardSection: "FC Barcelona",
  cardType: [CardType.Purple],
  productType: CardProductType.Card,
  numbered: 99,
};

export const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2023_2024_21bl: Card = {
  id: 'topps-now-women-s-champions-league-2023-2024-21bl',
  number: '21bl',
  images: [
    cardnow21bl,
    cardnow21bl_2,
    cardnow21_back,
  ],
  name: "Aitana Bonmatí - UEFA Women's Champions League winners 2023-24 Black",
  rarity: 5,
  status: CardStatus.Falti,
  brilli: CardBrilli.BlackTopps,
  collection: ToppsNowWomenSChampionsLeague_2023_2024,
  year: 2024,
  links: [
    "https://es.topps.com/products/uefa-women-s-champions-league-winners-2023-24-23-24-uwcl-topps-now-reg-card-21-2",
  ],
  cardSection: "FC Barcelona",
  cardType: [CardType.Black],
  productType: CardProductType.Card,
  numbered: 10,
};

export const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2023_2024_21g: Card = {
  id: 'topps-now-women-s-champions-league-2023-2024-21g',
  number: '21g',
  images: [
    cardnow21g,
    cardnow21g_2,
    cardnow21_back,
  ],
  name: "Aitana Bonmatí - UEFA Women's Champions League winners 2023-24 Gold",
  rarity: 5,
  status: CardStatus.Falti,
  brilli: CardBrilli.GoldFoil,
  collection: ToppsNowWomenSChampionsLeague_2023_2024,
  year: 2024,
  links: [
    "https://es.topps.com/products/uefa-women-s-champions-league-winners-2023-24-23-24-uwcl-topps-now-reg-card-21-2",
  ],
  cardSection: "FC Barcelona",
  cardType: [CardType.Gold],
  productType: CardProductType.Card,
  numbered: 1,
};
