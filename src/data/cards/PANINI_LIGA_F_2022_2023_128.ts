/**
 * COMPLETED data
 */
import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniLigaF_2022_2023 } from "../collections";
import img1 from "../img/cards/finetwork-liga-f-22-23-panini.jpg";

const PANINI_LIGA_F_2022_2023_128: Card = {
  id: 'panini-liga-f-2022-2023-128',
  number: 128,
  images: [img1],
  name: 'Aitana Bonmatí #128',
  description: "Cromo base del equip. Finetwork lliga F temporada 2022-2023",
  rarity: 1,
  status: CardStatus.Tengui,
  collection: PaniniLigaF_2022_2023,
  year: 2023,
  cardSection: 'FC Barcelona',
  cardType: [CardType.BaseSet],
  productType: CardProductType.Sticker,
};

export default PANINI_LIGA_F_2022_2023_128;