import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsAitanaBonmatiPlatinumCuratedSet_2024 } from "../collections";
import tabpcs_70pu_0 from "../img/cards/tabpcs_70pu_0.png";
import tabpcs_70pu_1 from "../img/cards/tabpcs_70pu_1.webp";
import tabpcs_70pu_2 from "../img/cards/tabpcs_70pu_2.webp";

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_70pu: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-70pu',
  number: '70pu',
  images: [
    tabpcs_70pu_0,
    tabpcs_70pu_1,
    tabpcs_70pu_2,
  ],
  name: 'Abre el marcador en una semifinal con una asistencia que batió todos los récord - Purple',
  rarity: 4,
  numbered: 25,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Mejores Momentos',
  brilli: CardBrilli.PurpleFoil,
  cardType: [
    CardType.BaseCard,
    CardType.Purple,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};
