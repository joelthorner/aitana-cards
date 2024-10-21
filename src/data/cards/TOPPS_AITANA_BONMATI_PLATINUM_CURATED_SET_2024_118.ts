/**
 * COMPLETED data
 */
import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsAitanaBonmatiPlatinumCuratedSet_2024 } from "../collections";
import tabpcs_118_0 from "../img/cards/tabpcs_118_0.png";
import tabpcs_118_1 from "../img/cards/tabpcs_118_1.webp";
import tabpcs_118_2 from "../img/cards/tabpcs_118_2.webp";

const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_118: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-118',
  number: 118,
  images: [
    tabpcs_118_0,
    tabpcs_118_1,
    tabpcs_118_2,
  ],
  name: 'Aitana Bonmatí & Alexia Putellas',
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

export default TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_118;