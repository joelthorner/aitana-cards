/**
 * COMPLETED data
 */
import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsAitanaBonmatiPlatinumCuratedSet_2024 } from "../collections";
import tabpcs_117_0 from "../img/cards/tabpcs_117_0.png";
import tabpcs_117_1 from "../img/cards/tabpcs_117_1.png";

const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_117: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-117',
  number: 117,
  images: [
    tabpcs_117_0,
    tabpcs_117_1,
  ],
  name: 'Aitana Bonmatí & Andrés Iniesta',
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

export default TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_117;