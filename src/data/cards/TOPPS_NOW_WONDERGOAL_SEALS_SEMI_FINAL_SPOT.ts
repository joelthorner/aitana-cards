import { Card, CardBrilli, CardStatus } from "../../types/card";
import { ToppsNow } from "../collections";

import toppsNowWondergoalSealsSemiFinalSpot from "../img/cards/topps-now-wondergoal-seals-semi-final-spot.png";
import toppsNowWondergoalSealsSemiFinalSpot2 from "../img/cards/topps-now-wondergoal-seals-semi-final-spot-2.webp";
import toppsNowWondergoalSealsSemiFinalSpot_back from "../img/cards/topps-now-wondergoal-seals-semi-final-spot-back.webp";
import toppsNowWondergoalSealsSemiFinalSpot_purple from "../img/cards/2023-24 Topps - UWCL NOW -016b.jpg";
import toppsNowWondergoalSealsSemiFinalSpot_black from "../img/cards/2023-24 Topps - UWCL NOW -016c.jpg";
import toppsNowWondergoalSealsSemiFinalSpot_gold from "../img/cards/2023-24 Topps - UWCL NOW -016d.jpg";

export const TOPPS_NOW_WONDERGOAL_SEALS_SEMI_FINAL_SPOT: Card = {
  id: 'topps-now-wondergoal-seals-semi-final-spot',
  images: [
    toppsNowWondergoalSealsSemiFinalSpot,
    toppsNowWondergoalSealsSemiFinalSpot2,
    toppsNowWondergoalSealsSemiFinalSpot_back,
  ],
  name: "Wondergoal seal semi-final spot",
  rarity: 2,
  status: CardStatus.Tengui,
  collection: ToppsNow,
  year: 2024,
  links: [
    'https://cartophilic-info-exch.blogspot.com/2024/03/topps-topps-now-uefa-womens-champions.html',
  ],
};

export const TOPPS_NOW_WONDERGOAL_SEALS_SEMI_FINAL_SPOT_PURPLE: Card = {
  id: 'topps-now-wondergoal-seals-semi-final-spot-purple',
  images: [
    toppsNowWondergoalSealsSemiFinalSpot_purple,
    toppsNowWondergoalSealsSemiFinalSpot2,
    toppsNowWondergoalSealsSemiFinalSpot_back,
  ],
  name: "Wondergoal seal semi-final spot purple /99",
  rarity: 4,
  status: CardStatus.Falti,
  brilli: CardBrilli.PurpleFoil,
  collection: ToppsNow,
  year: 2024,
  links: [
    'https://cartophilic-info-exch.blogspot.com/2024/03/topps-topps-now-uefa-womens-champions.html',
  ],
};

export const TOPPS_NOW_WONDERGOAL_SEALS_SEMI_FINAL_SPOT_BLACK: Card = {
  id: 'topps-now-wondergoal-seals-semi-final-spot-black',
  images: [
    toppsNowWondergoalSealsSemiFinalSpot_black,
    toppsNowWondergoalSealsSemiFinalSpot2,
    toppsNowWondergoalSealsSemiFinalSpot_back,
  ],
  name: "Wondergoal seal semi-final spot black /10",
  rarity: 5,
  status: CardStatus.Falti,
  brilli: CardBrilli.BlackTopps,
  collection: ToppsNow,
  year: 2024,
  links: [
    'https://cartophilic-info-exch.blogspot.com/2024/03/topps-topps-now-uefa-womens-champions.html',
  ],
};

export const TOPPS_NOW_WONDERGOAL_SEALS_SEMI_FINAL_SPOT_GOLD: Card = {
  id: 'topps-now-wondergoal-seals-semi-final-spot-gold',
  images: [
    toppsNowWondergoalSealsSemiFinalSpot_gold,
    toppsNowWondergoalSealsSemiFinalSpot2,
    toppsNowWondergoalSealsSemiFinalSpot_back,
  ],
  name: "Wondergoal seal semi-final spot gold 1/1",
  rarity: 5,
  status: CardStatus.Falti,
  brilli: CardBrilli.GoldFoil,
  collection: ToppsNow,
  year: 2024,
  links: [
    'https://cartophilic-info-exch.blogspot.com/2024/03/topps-topps-now-uefa-womens-champions.html',
  ],
};
