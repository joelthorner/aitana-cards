/**
 * COMPLETED data
 */
import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniLigaF_2022_2023 } from "../collections";
import paniniteam1 from "../img/cards/paniniteam1.png";

const PANINI_LIGA_F_2022_2023_15: Card = {
  id: 'panini-liga-f-2022-2023-15',
  number: 15,
  images: [paniniteam1],
  name: 'FC Barcelona 1/2',
  rarity: 1,
  status: CardStatus.Falti,
  collection: PaniniLigaF_2022_2023,
  year: 2023,
  cardSection: 'FC Barcelona',
  cardType: [
    CardType.Base,
    CardType.Collage,
    CardType.TeamCard,
  ],
  productType: CardProductType.Sticker,
};

export default PANINI_LIGA_F_2022_2023_15;