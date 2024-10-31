import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsInceptionUefaClubCompetitions_2022_2023 } from "../collections";

import cDBA1r_0 from "../img/cards/cDBA1r_0.jpg";
import cDBA1r_1 from "../img/cards/cDBA1r_1.webp";
import cDBA1r_2 from "../img/cards/cDBA1r_2.webp";


export const TOPPS_INCEPTION_UEFA_CLUB_COMPETITIONS_2022_2023_DBA1r: Card = {
  id: 'topps-inception-uefa-club-competitions-2022-2023-DBA1r',
  number: 'DBA1r',
  images: [
    cDBA1r_0,
    cDBA1r_1,
    cDBA1r_2,
  ],
  name: 'Aitana Bonmatí & Alexia Putellas Dual Book Autographs / Red',
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsInceptionUefaClubCompetitions_2022_2023,
  year: 2023,
  cardSection: "FC Barcelona",
  cardType: [
    CardType.DualAutographs,
    CardType.Red,
  ],
  brilli: CardBrilli.RedFoil,
  productType: CardProductType.BookCard,
  orientation: CardOrientation.Horizontal,
  language: CardLanguage.EN,
};