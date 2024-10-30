/**
 * COMPLETED data
 */
import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniLigaF_2022_2023 } from "../collections";
import paniniteam2 from "../img/cards/paniniteam2.jpg";

const PANINI_LIGA_F_2022_2023_16: Card = {
  id: 'panini-liga-f-2022-2023-16',
  number: 16,
  images: [paniniteam2],
  name: 'FC Barcelona 2/2',
  rarity: 1,
  status: CardStatus.Falti,
  collection: PaniniLigaF_2022_2023,
  year: 2023,
  cardSection: 'FC Barcelona',
  cardType: [
    CardType.BaseSet,
    CardType.Collage,
    CardType.TeamCard,
  ],
  productType: CardProductType.Sticker,
};

export default PANINI_LIGA_F_2022_2023_16;