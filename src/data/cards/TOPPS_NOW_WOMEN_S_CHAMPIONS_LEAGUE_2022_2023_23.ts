import { Card, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsNowWomenSChampionsLeague_2022_2023 } from "../collections";

import cardnow23 from "../img/cards/cardnow23.jpg";
import cardnow23_1 from "../img/cards/cardnow23_1.webp";
import cardnow23_2 from "../img/cards/cardnow23_2.webp";

export const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2022_2023_23: Card = {
  id: 'topps-now-women-s-champions-league-2022-2023-23',
  number: 23,
  images: [
    cardnow23,
    cardnow23_1,
    cardnow23_2,
  ],
  name: "UEFA Women's Champions League winners 2023",
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsNowWomenSChampionsLeague_2022_2023,
  year: 2023,
  cardSection: "FC Barcelona",
  cardType: [CardType.BaseSet, CardType.TeamCard],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};