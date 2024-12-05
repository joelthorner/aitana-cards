import { Card, CardBrilli, CardFlag, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaChampionsLeague_2024_2025 } from "../collections";

import Ucl_24_25t_22_0 from "../img/cards/Ucl_24_25t_22_0.jpg";
import Ucl_24_25t_22_1 from "../img/cards/Ucl_24_25t_22_1.webp";
import Ucl_24_25t_22_2 from "../img/cards/Ucl_24_25t_22_2.webp";

const TOPPS_UEFA_CHAMPIONS_LEAGUE_2024_2025_22: Card = {
  id: 'topps-uefa-champions-league-2024-2025-22',
  number: 22,
  images: [
    Ucl_24_25t_22_0,
    Ucl_24_25t_22_1,
    Ucl_24_25t_22_2,
  ],
  name: 'Aitana Bonmatí (FC Barcelona) - #22',
  rarity: 1,
  status: CardStatus.Falti,
  brilli: CardBrilli.Stars,
  collection: ToppsUefaChampionsLeague_2024_2025,
  year: 2024,
  links: [
    'https://www.laststicker.com/cards/topps_uefa_champions_league_2024-2025/22/',
  ],
  cardSection: '2023/24 UCL Team of the Season',
  cardType: [
    CardType.Holographic,
  ],
  productType: CardProductType.Sticker,
  orientation: CardOrientation.Vertical,
  cardTextFront: `MIDFIELDER
  
TEAM OF THE SEASON 2023/24

**BONMATÍ**`,
  cardTextBack: `*UEFA CHAMPIONS LEAGUE*
  
**22**

OFFICIAL STICKER COLLECTION

**SEASON 2024/25**

TOPPS.com`,
  language: CardLanguage.EN,
  flags: [
    CardFlag.MissingBackImage,
  ],
};

export default TOPPS_UEFA_CHAMPIONS_LEAGUE_2024_2025_22;