/**
 * COMPLETED data
 */
import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniLigaF_2023_2024 } from "../collections";

import ligaF2324_55 from '../img/cards/ligaF2324.png';

const PANINI_LIGA_F_2023_2024_55: Card = {
  id: 'panini-liga-f-2023-2024-55',
  number: 55,
  images: [
    ligaF2324_55,
  ],
  name: 'Aitana Bonmatí	#55',
  rarity: 1,
  status: CardStatus.Tengui,
  collection: PaniniLigaF_2023_2024,
  year: 2023,
  productType: CardProductType.Sticker,
  cardSection: 'FC Barcelona',
  cardType: [CardType.Base],
};

export default PANINI_LIGA_F_2023_2024_55;