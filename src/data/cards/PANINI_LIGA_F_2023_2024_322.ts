/**
 * COMPLETED data
 */
import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniLigaF_2023_2024 } from "../collections";

import ligaf2324onfire from '../img/cards/ligaf2324onfire.jpg';

const PANINI_LIGA_F_2023_2024_322: Card = {
  id: 'panini-liga-f-2023-2024-322',
  images: [
    ligaf2324onfire,
  ],
  name: 'Aitana Bonmatí On Fire	#322',
  rarity: 1,
  brilli: CardBrilli.Holo,
  status: CardStatus.Tengui,
  collection: PaniniLigaF_2023_2024,
  year: 2023,
  number: 322,
  cardType: [CardType.Holographic],
  productType: CardProductType.Sticker,
  cardSection: 'On Fire',
  orientation: CardOrientation.Vertical,
};

export default PANINI_LIGA_F_2023_2024_322;