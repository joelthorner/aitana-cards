/**
 * COMPLETED data
 */
import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaLivingSet_2023 } from "../collections";
import img1 from "../img/cards/topps-uefa-livig-set-512-aitana-bonmati.webp";
import img2 from "../img/cards/topps-uefa-livig-set-512-aitana-bonmati_2.webp";
import img3 from "../img/cards/topps-uefa-livig-set-512-aitana-bonmati_3.webp";
import img4 from "../img/cards/topps-uefa-livig-set-512-aitana-bonmati_4.webp";
import img5 from "../img/cards/topps-uefa-livig-set-512-aitana-bonmati_5.webp";

const TOPPS_UEFA_LIVING_SET_2023_512: Card = {
  id: 'topps-uefa-living-set-2023-512',
  number: 512,
  images: [
    img1,
    img2,
    img3,
    img4,
    img5,
  ],
  name: 'Aitana Bonmatí #512 Living Set',
  rarity: 3,
  status: CardStatus.Falti,
  collection: ToppsUefaLivingSet_2023,
  year: 2023,
  cardSection: "FC Barcelona",
  cardType: [CardType.BaseSet],
  productType: CardProductType.Card,
};

export default TOPPS_UEFA_LIVING_SET_2023_512;