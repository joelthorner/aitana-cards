import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsInceptionUefaClubCompetitions_2023_2024 } from "../collections";

import cDA170r_0 from "../img/cards/cDA170r_0.jpg";
import cDA170r_1 from "../img/cards/cDA170r_1.webp";
import cDA170r_2 from "../img/cards/cDA170r_2.webp";
import cDA170r_3 from "../img/cards/cDA170r_3.webp";
import cDA170r_4 from "../img/cards/cDA170r_4.jpg";
import cDA170r_5 from "../img/cards/cDA170r_5.jpg";
import cDA170r_6 from "../img/cards/cDA170r_6.jpg";
import cDA170r_7 from "../img/cards/cDA170r_7.jpg";

export const TOPPS_INCEPTION_UEFA_CLUB_COMPETITIONS_2023_2024_DA170r: Card = {
  id: 'topps-inception-uefa-club-competitions-2023-2024-DA-170r',
  number: 'DA-170r',
  images: [
    cDA170r_0,
    cDA170r_1,
    cDA170r_2,
    cDA170r_3,
    cDA170r_4,
    cDA170r_5,
    cDA170r_6,
    cDA170r_7,
  ],
  name: 'Alexia Putellas / Aitana Bonmati Dual Autograph Patch Books / Red',
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsInceptionUefaClubCompetitions_2023_2024,
  year: 2024,
  cardSection: "FC Barcelona",
  cardType: [
    CardType.DualAutographs,
    CardType.Relic,
    CardType.Red,
  ],
  productType: CardProductType.PatchBookCard,
  brilli: CardBrilli.RedFoil,
  orientation: CardOrientation.Horizontal,
};