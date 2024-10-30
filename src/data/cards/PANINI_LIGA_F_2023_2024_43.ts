/**
 * COMPLETED data
 */
import { Card, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniLigaF_2023_2024 } from "../collections";

import lifaFTeam from '../img/cards/lifaFTeam.jpg';
import lifaFTeam_1 from '../img/cards/lifaFTeam_1.webp';
import lifaFTeam_2 from '../img/cards/lifaFTeam_2.webp';

const PANINI_LIGA_F_2023_2024_43: Card = {
  id: 'panini-liga-f-2023-2024-43',
  images: [
    lifaFTeam,
    lifaFTeam_1,
    lifaFTeam_2,
  ],
  name: 'FC Barcelona',
  rarity: 1,
  status: CardStatus.Falti,
  collection: PaniniLigaF_2023_2024,
  year: 2023,
  cardType: [CardType.TeamCard],
  cardSection: 'FC Barcelona',
  number: 43,
  productType: CardProductType.Sticker,
  orientation: CardOrientation.Horizontal,
};

export default PANINI_LIGA_F_2023_2024_43;