import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsAitanaBonmatiPlatinumCuratedSet_2024 } from "../collections";
import tabpcs_65bu_0 from "../img/cards/tabpcs_65bu_0.png";
import tabpcs_65bu_1 from "../img/cards/tabpcs_65bu_1.webp";
import tabpcs_65bu_2 from "../img/cards/tabpcs_65bu_2.webp";

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_65bu: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-65bu',
  number: '65bu',
  images: [
    tabpcs_65bu_0,
    tabpcs_65bu_1,
    tabpcs_65bu_2,
  ],
  name: 'Su gol en la final de la UEFA Women´s Champions League Blue',
  rarity: 4,
  numbered: 49,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Mejores Momentos',
  brilli: CardBrilli.BlueTopps,
  cardType: [
    CardType.BaseCard,
    CardType.Blue,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};
