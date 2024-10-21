import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsAitanaBonmatiPlatinumCuratedSet_2024 } from "../collections";
import tabpcs_45g_0 from "../img/cards/tabpcs_45g_0.png";
import tabpcs_45g_1 from "../img/cards/tabpcs_45g_1.png";
import tabpcs_45r_0 from "../img/cards/tabpcs_45r_0.png";
import tabpcs_45r_1 from "../img/cards/tabpcs_45r_1.webp";
import tabpcs_45r_2 from "../img/cards/tabpcs_45r_2.webp";
import tabpcs_45_0 from "../img/cards/tabpcs_45_0.png";
import tabpcs_45_1 from "../img/cards/tabpcs_45_1.webp";
import tabpcs_45_2 from "../img/cards/tabpcs_45_2.webp";

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_45: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-45',
  number: 45,
  images: [
    tabpcs_45_0,
    tabpcs_45_1,
    tabpcs_45_2,
  ],
  name: 'Aitana Bonmatí Playmakers',
  rarity: 1,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Playmakers',
  cardType: [
    CardType.BaseCard,
  ],
  productType: CardProductType.Card,
};

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_45r: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-45r',
  number: '45r',
  images: [
    tabpcs_45r_0,
    tabpcs_45r_1,
    tabpcs_45r_2,
  ],
  name: 'Aitana Bonmatí Playmakers / Red',
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Playmakers',
  brilli: CardBrilli.RedFoil,
  cardType: [
    CardType.BaseCard,
    CardType.Red,
  ],
  productType: CardProductType.Card,
};

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_45g: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-45g',
  number: '45g',
  images: [
    tabpcs_45g_0,
    tabpcs_45g_1,
  ],
  name: 'Aitana Bonmatí Playmakers / Gold',
  rarity: 5,
  numbered: 1,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Playmakers',
  brilli: CardBrilli.GoldFoil,
  cardType: [
    CardType.BaseCard,
    CardType.Gold,
  ],
  productType: CardProductType.Card,
};