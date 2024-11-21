import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsAitanaBonmatiPlatinumCuratedSet_2024 } from "../collections";
import tabpcs_64p_0 from "../img/cards/tabpcs_64p_0.jpg";
import tabpcs_64p_1 from "../img/cards/tabpcs_64p_1.webp";
import tabpcs_64p_2 from "../img/cards/tabpcs_64p_2.webp";
import tabpcs_64_0 from "../img/cards/tabpcs_64_0.jpg";
import tabpcs_64_1 from "../img/cards/tabpcs_64_1.webp";
import tabpcs_64_2 from "../img/cards/tabpcs_64_2.webp";
import tabpcs_64bu_0 from "../img/cards/tabpcs_64bu_0.jpg";
import tabpcs_64bu_1 from "../img/cards/tabpcs_64bu_1.jpg";
import tabpcs_64bu_2 from "../img/cards/tabpcs_64bu_2.jpg";
import tabpcs_64bu_3 from "../img/cards/tabpcs_64bu_3.jpg";
import tabpcs_64pu_0 from "../img/cards/tabpcs_64pu_0.jpg";
import tabpcs_64pu_1 from "../img/cards/tabpcs_64pu_1.jpg";
import tabpcs_64pu_2 from "../img/cards/tabpcs_64pu_2.jpg";

const cardTextBack = `**MEJORES MOMENTOS**  

**GANA LA**
**UEFA WOMEN'S CHAMPIONS LEAGUE**  
**POR PRIMERA VEZ**

*16.05.2021*  

---

© 2024 The Topps Company, Inc. All rights reserved. Topps is a registered trademark of The Topps Company, Inc.  
The word(s) UEFA, WOMEN'S CHAMPIONS LEAGUE, and all other UEFA Women's Champions League marks, names, logos, mascots, and trophies are the property of UEFA and are used with permission.`;

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_64: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-64',
  number: 64,
  images: [
    tabpcs_64_0,
    tabpcs_64_1,
    tabpcs_64_2,
  ],
  name: 'Gana la UEFA Women’s Champions League por primera vez',
  rarity: 1,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Mejores Momentos',
  cardType: [
    CardType.BaseSet,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
  language: CardLanguage.ES,
  cardTextFront: `Mejores momentos
  
  **AITANA BONMATÍ**

  **FC BARCELONA**`,
  cardTextBack,
};

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_64bu: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-64bu',
  number: '64bu',
  images: [
    tabpcs_64bu_0,
    tabpcs_64bu_1,
    tabpcs_64bu_2,
    tabpcs_64bu_3,
  ],
  name: 'Gana la UEFA Women’s Champions League por primera vez Blue',
  rarity: 3,
  numbered: 49,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Mejores Momentos',
  brilli: CardBrilli.BlueTopps,
  cardType: [
    CardType.BaseSet,
    CardType.Blue,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
  language: CardLanguage.ES,
  cardTextFront: `39/49

Mejores momentos

**AITANA BONMATÍ**

**FC BARCELONA**`,
  cardTextBack,
};

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_64pu: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-64pu',
  number: '64pu',
  images: [
    tabpcs_64pu_0,
    tabpcs_64pu_1,
    tabpcs_64pu_2,
  ],
  name: 'Gana la UEFA Women’s Champions League por primera vez Purple',
  rarity: 4,
  numbered: 25,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Mejores Momentos',
  brilli: CardBrilli.PurpleFoil,
  cardType: [
    CardType.BaseSet,
    CardType.Purple,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
  language: CardLanguage.ES,
  cardTextFront: `20/25

Mejores momentos

**AITANA BONMATÍ**

**FC BARCELONA**`,
  cardTextBack,
};

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_64p: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-64p',
  number: '64p',
  images: [
    tabpcs_64p_0,
    tabpcs_64p_1,
    tabpcs_64p_2,
  ],
  name: 'Gana la UEFA Women’s Champions League por primera vez Pink',
  rarity: 5,
  numbered: 5,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Mejores Momentos',
  brilli: CardBrilli.PinkFoil,
  cardType: [
    CardType.BaseSet,
    CardType.Pink,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
  language: CardLanguage.ES,
  cardTextFront: `4/5

  Mejores momentos
  
  **AITANA BONMATÍ**
  
  **FC BARCELONA**`,
  cardTextBack,
};
