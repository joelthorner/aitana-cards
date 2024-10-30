/**
 * COMPLETED data
 */
import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsAitanaBonmatiPlatinumCuratedSet_2024 } from "../collections";
import tabpcs_117_0 from "../img/cards/tabpcs_117_0.jpg";
import tabpcs_117_1 from "../img/cards/tabpcs_117_1.jpg";
import tabpcs_117r_0 from "../img/cards/tabpcs_117r_0.jpg";
import tabpcs_117r_1 from "../img/cards/tabpcs_117r_1.webp";
import tabpcs_117r_2 from "../img/cards/tabpcs_117r_2.webp";

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_117r: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-117r',
  number: '117r',
  images: [
    tabpcs_117r_0,
    tabpcs_117r_1,
    tabpcs_117r_2,
  ],
  name: 'Aitana Bonmatí & Andrés Iniesta Dual Autographs / Red',
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Dual Autographs',
  brilli: CardBrilli.RedFoil,
  cardType: [
    CardType.DualAutographs,
    CardType.Red,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_117g: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-117g',
  number: '117g',
  images: [
    tabpcs_117_0,
    tabpcs_117_1,
  ],
  name: 'Aitana Bonmatí & Andrés Iniesta Dual Autographs / Gold',
  rarity: 5,
  numbered: 1,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Dual Autographs',
  brilli: CardBrilli.GoldFoil,
  cardType: [
    CardType.DualAutographs,
    CardType.Gold,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};