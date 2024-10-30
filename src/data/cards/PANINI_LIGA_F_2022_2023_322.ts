/**
 * COMPLETED data
 */
import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniLigaF_2022_2023 } from "../collections";
import img1 from "../img/cards/aitana-bonmati-f-stars-barcelona-322-liga-f-22-23.jpg";

const PANINI_LIGA_F_2022_2023_322: Card = {
  id: 'panini-liga-f-2022-2023-322',
  number: 322,
  images: [img1],
  name: 'Aitana Bonmati F Stars #322',
  description: "Cromo de la secció F stars. Finetwork lliga F temporada 2022-2023",
  rarity: 1,
  status: CardStatus.Tengui,
  brilli: CardBrilli.GoldMetal,
  collection: PaniniLigaF_2022_2023,
  year: 2023,
  cardSection: 'F STARS',
  cardType: [
    CardType.BaseSet,
    CardType.Gold,
  ],
  productType: CardProductType.Sticker,
};

export default PANINI_LIGA_F_2022_2023_322;