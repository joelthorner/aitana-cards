import { Card, CardBrilli, CardStatus } from "../../types/card"
import { ToppsMerlinHeritage_98UccSeason_2022_2023 } from "../collections";

import toppsMerlinHeritage_98UccSeason_2022_2023_85 from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85.png";
import toppsMerlinHeritage_98UccSeason_2022_2023_85_back from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85_back.png";
import toppsMerlinHeritage_98UccSeason_2022_2023_85_rainbow_5of5 from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85_rainbow_5of5.png";
import toppsMerlinHeritage_98UccSeason_2022_2023_85_blue_xof49 from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85_blue_xof49.png";

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_N85: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023_n85',
  images: [
    toppsMerlinHeritage_98UccSeason_2022_2023_85,
    toppsMerlinHeritage_98UccSeason_2022_2023_85_back,
  ],
  name: 'Aitana Bonmatí - #85',
  rarity: 2,
  status: CardStatus.Tengui,
  collection: ToppsMerlinHeritage_98UccSeason_2022_2023,
  year: 2022,
};

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_N85_RAINBOW: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023-n85-rainbow',
  images: [
    toppsMerlinHeritage_98UccSeason_2022_2023_85_rainbow_5of5,
    toppsMerlinHeritage_98UccSeason_2022_2023_85_back,
  ],
  name: 'Autograph rainbow n/5 - #85',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsMerlinHeritage_98UccSeason_2022_2023,
  year: 2022,
  brilli: CardBrilli.Rainbow,
};

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_N85_BLUE: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023-n85-blue',
  images: [
    toppsMerlinHeritage_98UccSeason_2022_2023_85_blue_xof49,
    toppsMerlinHeritage_98UccSeason_2022_2023_85_back,
  ],
  name: 'Autograph blue n/49 - #85',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsMerlinHeritage_98UccSeason_2022_2023,
  year: 2022,
  brilli: CardBrilli.BlueTopps,
};
