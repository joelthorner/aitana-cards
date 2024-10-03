/**
 * COMPLETED data
 */
import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsNowWomenSChampionsLeague_2023_24 } from "../collections";

import toppsNowBrilliantBraceInOpeningGame from "../img/cards/topps-now-brilliant-brace-in-opening-game.png";
import toppsNowBrilliantBraceInOpeningGame2 from "../img/cards/topps-now-brilliant-brace-in-opening-game-2.webp";
import toppsNowBrilliantBraceInOpeningGame_back from "../img/cards/topps-now-brilliant-brace-in-opening-game-back.webp";

const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2023_2024_3: Card = {
  id: 'topps-now-women-s-champions-league-2023-2024-3',
  number: 3,
  images: [
    toppsNowBrilliantBraceInOpeningGame,
    toppsNowBrilliantBraceInOpeningGame2,
    toppsNowBrilliantBraceInOpeningGame_back,
  ],
  name: 'Aitana Bonmatí - Brilliant brace in opening game',
  description: "",
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsNowWomenSChampionsLeague_2023_24,
  year: 2023,
  links: [
    'https://cartophilic-info-exch.blogspot.com/2023/11/topps-topps-now-uefa-womens-champions.html',
    "https://es.topps.com/products/topps-es-aitana-bonmati-brilliant-brace-in-opening-game-uwcl-topps-now-reg-carta-3",
  ],
  cardSection: "FC Barcelona",
  cardType: [CardType.BaseCard],
  productType: CardProductType.Card,
};

export default TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2023_2024_3;