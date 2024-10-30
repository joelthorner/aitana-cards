/**
 * COMPLETED data
 */
import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaChampionsLeague_2022_2023 } from "../collections";

import aitanaBonmati_2022_23UwclStandoutPerformersOf_2021_22_21 from "../img/cards/aitanaBonmati_2022_23UwclStandoutPerformersOf_2021_22_21.jpg";
import aitanaBonmati_2022_23UwclStandoutPerformersOf_2021_22_21_back from "../img/cards/aitanaBonmati_2022_23UwclStandoutPerformersOf_2021_22_21_back.jpg";

const TOPPS_UEFA_CHAMPIONS_LEAGUE_2022_2023_543: Card = {
  id: 'topps-uefa-champions-league-2022-2023-543',
  number: 543,
  images: [
    aitanaBonmati_2022_23UwclStandoutPerformersOf_2021_22_21,
    aitanaBonmati_2022_23UwclStandoutPerformersOf_2021_22_21_back,
  ],
  name: 'Aitana Bonmatí (Top midfielder 2021/22) #543',
  description: 'Section 2021/22 UWCL Standout Performers',
  rarity: 2,
  status: CardStatus.Tengui,
  collection: ToppsUefaChampionsLeague_2022_2023,
  year: 2022,
  brilli: CardBrilli.ShinyHolo,
  links: [
    'https://www.laststicker.com/cards/topps_uefa_champions_league_2022-2023/21/',
  ],
  cardSection: 'UEFA Women\'s Champions League',
  cardType: [
    CardType.Base,
  ],
  productType: CardProductType.Sticker,
};

export default TOPPS_UEFA_CHAMPIONS_LEAGUE_2022_2023_543;