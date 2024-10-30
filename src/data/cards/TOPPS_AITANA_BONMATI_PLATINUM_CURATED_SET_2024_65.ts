import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsAitanaBonmatiPlatinumCuratedSet_2024 } from "../collections";
import tabpcs_65bu_0 from "../img/cards/tabpcs_65bu_0.jpg";
import tabpcs_65bu_1 from "../img/cards/tabpcs_65bu_1.webp";
import tabpcs_65bu_2 from "../img/cards/tabpcs_65bu_2.webp";
import tabpcs_65_0 from "../img/cards/tabpcs_65_0.jpg";
import tabpcs_65_1 from "../img/cards/tabpcs_65_1.webp";
import tabpcs_65r_0 from "../img/cards/tabpcs_65r_0.jpg";
import tabpcs_65r_1 from "../img/cards/tabpcs_65r_1.jpg";

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_65: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-65',
  number: 65,
  images: [
    tabpcs_65_0,
    tabpcs_65_1,
  ],
  name: 'Su gol en la final de la UEFA Women´s Champions League',
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
};

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
    CardType.BaseSet,
    CardType.Blue,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};

export const TOPPS_AITANA_BONMATI_PLATINUM_CURATED_SET_2024_65r: Card = {
  id: 'topps-aitana-bonmati-platinum-curated-set-2024-65r',
  number: '65r',
  images: [
    tabpcs_65r_0,
    tabpcs_65r_1,
  ],
  name: 'Su gol en la final de la UEFA Women´s Champions League Red',
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsAitanaBonmatiPlatinumCuratedSet_2024,
  year: 2024,
  cardSection: 'Mejores Momentos',
  brilli: CardBrilli.RedFoil,
  cardType: [
    CardType.BaseSet,
    CardType.Red,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
};
