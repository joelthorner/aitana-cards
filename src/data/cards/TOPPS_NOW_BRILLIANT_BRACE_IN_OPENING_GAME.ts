
import { Card, CardStatus } from "../../types/card";
import { ToppsNow } from "../collections";

import toppsNowBrilliantBraceInOpeningGame from "../img/cards/topps-now-brilliant-brace-in-opening-game.png";
import toppsNowBrilliantBraceInOpeningGame2 from "../img/cards/topps-now-brilliant-brace-in-opening-game-2.webp";
import toppsNowBrilliantBraceInOpeningGame_back from "../img/cards/topps-now-brilliant-brace-in-opening-game-back.webp";

const TOPPS_NOW_BRILLIANT_BRACE_IN_OPENING_GAME: Card = {
  id: 'topps-now-brilliant-brace-in-opening-game',
  images: [
    toppsNowBrilliantBraceInOpeningGame,
    toppsNowBrilliantBraceInOpeningGame2,
    toppsNowBrilliantBraceInOpeningGame_back,
  ],
  name: 'Brace in opening game',
  description: "",
  rarity: 3,
  status: CardStatus.Falti,
  collection: ToppsNow,
  year: 2023,
  links: [
    'https://cartophilic-info-exch.blogspot.com/2023/11/topps-topps-now-uefa-womens-champions.html',
  ]
};

export default TOPPS_NOW_BRILLIANT_BRACE_IN_OPENING_GAME;