/**
 * COMPLETED data
 */
import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaChampionsLeague_2023_2024 } from "../collections";

import Ucl_23_24UwclTotsStickerAitanaBonmati_8_027 from "../img/cards/ucl-23-24-uwcl-tots-sticker-aitana-bonmati-8-027.png";

const TOPPS_UEFA_CHAMPIONS_LEAGUE_2023_2024_27: Card = {
  id: 'topps-uefa-champions-league-2023-2024-27',
  number: 27,
  images: [Ucl_23_24UwclTotsStickerAitanaBonmati_8_027],
  name: 'Aitana Bonmatí (FC Barcelona) - #27',
  description: 'Section 2022/23 UWCL Player of the Season',
  rarity: 1,
  status: CardStatus.Tengui,
  brilli: CardBrilli.ShinyHolo,
  collection: ToppsUefaChampionsLeague_2023_2024,
  year: 2023,
  links: [
    'https://www.laststicker.com/cards/topps_uefa_champions_league_2023-2024/27/',
  ],
  cardSection: '2022/23 UWCL Team of the Season',
  cardType: [
    CardType.Shiny,
  ],
  productType: CardProductType.Sticker,
};

export default TOPPS_UEFA_CHAMPIONS_LEAGUE_2023_2024_27;