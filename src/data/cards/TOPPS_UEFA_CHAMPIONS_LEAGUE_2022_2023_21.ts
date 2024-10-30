/**
 * COMPLETED data
 */
import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaChampionsLeague_2022_2023 } from "../collections";

import aitanaBonmati_2022_23TopMidfieler_2021_22_543 from "../img/cards/aitana-bonmati-2022-23-top-midfieler-2021-22-543.jpg";

const TOPPS_UEFA_CHAMPIONS_LEAGUE_2022_2023_21: Card = {
  id: 'topps-uefa-champions-league-2022-2023-21',
  number: 21,
  images: [
    aitanaBonmati_2022_23TopMidfieler_2021_22_543,
  ],
  name: 'Aitana Bonmatí (FC Barcelona) #21',
  rarity: 1,
  status: CardStatus.Tengui,
  collection: ToppsUefaChampionsLeague_2022_2023,
  year: 2022,
  links: [
    'https://www.laststicker.com/cards/topps_uefa_champions_league_2022-2023/',
  ],
  cardSection: '2021/22 UWCL Standout Performers',
  cardType: [
    CardType.Base,
  ],
  productType: CardProductType.Sticker,
};

export default TOPPS_UEFA_CHAMPIONS_LEAGUE_2022_2023_21;