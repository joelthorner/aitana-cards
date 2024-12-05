import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaChampionsLeague_2024_2025 } from "../collections";

import Ucl_24_25t_27_0 from "../img/cards/Ucl_24_25t_27_0.jpg";
import Ucl_24_25t_27_1 from "../img/cards/Ucl_24_25t_27_1.webp";
import Ucl_24_25t_27_2 from "../img/cards/Ucl_24_25t_27_2.webp";

const TOPPS_UEFA_CHAMPIONS_LEAGUE_2024_2025_27: Card = {
  id: 'topps-uefa-champions-league-2024-2025-27',
  number: 27,
  images: [
    Ucl_24_25t_27_0,
    Ucl_24_25t_27_1,
    Ucl_24_25t_27_2,
  ],
  name: 'Aitana Bonmatí (FC Barcelona) - #27',
  rarity: 1,
  status: CardStatus.Falti,
  brilli: CardBrilli.Stars,
  collection: ToppsUefaChampionsLeague_2024_2025,
  year: 2024,
  links: [
    'https://www.laststicker.com/cards/topps_uefa_champions_league_2024-2025/27/',
  ],
  cardSection: '2023/24 UCL Player of the Season',
  cardType: [
    CardType.Holographic,
  ],
  productType: CardProductType.Sticker,
  orientation: CardOrientation.Horizontal,
  cardTextFront: `**PLAYER OF THE SEASON**

MIDFIELDER

**BONMATÍ**

FC BARCELONA`,
  cardTextBack: `*UEFA CHAMPIONS LEAGUE*
  
**27**

OFFICIAL STICKER COLLECTION

TOPPS.com

**SEASON 2024/25**`,
  language: CardLanguage.EN,

};

export default TOPPS_UEFA_CHAMPIONS_LEAGUE_2024_2025_27;