import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaChampionsLeague_2023_2024 } from "../collections";

import Ucl2324UTAB_8_021_0 from "../img/cards/021_ucl_23-24_uwcl_tots_sticker_-_aitana_bonmati__8.jpg";
import Ucl2324UTAB_8_021_1 from "../img/cards/Ucl2324UTAB_8_021_1.webp";
import Ucl2324UTAB_8_021_2 from "../img/cards/Ucl2324UTAB_8_021_2.webp";

const TOPPS_UEFA_CHAMPIONS_LEAGUE_2023_2024_21: Card = {
  id: 'topps-uefa-champions-league-2023-2024-21',
  number: 21,
  images: [
    Ucl2324UTAB_8_021_0,
    Ucl2324UTAB_8_021_1,
    Ucl2324UTAB_8_021_2,
  ],
  name: 'Aitana Bonmatí (FC Barcelona) - #21',
  rarity: 1,
  status: CardStatus.Tengui,
  brilli: CardBrilli.ShinyHolo,
  collection: ToppsUefaChampionsLeague_2023_2024,
  year: 2023,
  links: [
    'https://www.laststicker.com/cards/topps_uefa_champions_league_2023-2024/21/',
  ],
  cardSection: '2022/23 UWCL Team of the Season',
  cardType: [
    CardType.Holographic,
  ],
  productType: CardProductType.Sticker,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
  cardTextFront: `**BONMATÍ**
  
TEAM OF THE SEASON 2022/23`,
  cardTextBack: `OFFICIAL STICKER COLLECTION

**21**

**SEASON**

2023/24

TOPPS.COM`,
};

export default TOPPS_UEFA_CHAMPIONS_LEAGUE_2023_2024_21;