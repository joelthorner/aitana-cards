import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsAitanaBonmatiPlatinumCuratedSet_2024 } from "../collections";
import tabpcs_64p_0 from "../img/cards/tabpcs_64p_0.jpg";
import tabpcs_64p_1 from "../img/cards/tabpcs_64p_1.webp";
import tabpcs_64p_2 from "../img/cards/tabpcs_64p_2.webp";
import tabpcs_64_0 from "../img/cards/tabpcs_64_0.jpg";
import tabpcs_64_1 from "../img/cards/tabpcs_64_1.webp";
import tabpcs_64_2 from "../img/cards/tabpcs_64_2.webp";

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
    CardType.BaseCard,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
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
    CardType.BaseCard,
    CardType.Pink,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};
