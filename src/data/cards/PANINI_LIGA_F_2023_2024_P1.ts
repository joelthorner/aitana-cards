/**
 * COMPLETED data
 */
import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniLigaF_2023_2024 } from "../collections";

import ligaFPremium from '../img/cards/ligaFPremium.jpg';

const PANINI_LIGA_F_2023_2024_P1: Card = {
  id: 'panini-liga-f-2023-2024-p1',
  images: [
    ligaFPremium,
  ],
  name: 'Aitana Bonmatí	Premium',
  rarity: 2,
  status: CardStatus.Tengui,
  collection: PaniniLigaF_2023_2024,
  year: 2023,
  brilli: CardBrilli.GoldFoil,
  cardType: [CardType.GoldFoil],
  cardSection: 'Premium',
  number: 'P1',
  productType: CardProductType.Sticker,
};

export default PANINI_LIGA_F_2023_2024_P1;