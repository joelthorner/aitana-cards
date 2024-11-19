import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsInceptionUefaClubCompetitions_2022_2023 } from "../collections";

import cSPA1r_0 from "../img/cards/cSPA1r_0.jpg";
import cSPA1r_1 from "../img/cards/cSPA1r_1.jpg";
import cSPA1r_2 from "../img/cards/cSPA1r_2.jpg";


export const TOPPS_INCEPTION_UEFA_CLUB_COMPETITIONS_2022_2023_SPA1r: Card = {
  id: 'topps-inception-uefa-club-competitions-2022-2023-SPA1r',
  number: 'SPA1r',
  images: [
    cSPA1r_0,
    cSPA1r_1,
    cSPA1r_2,
  ],
  name: 'Aitana Bonmatí Short Print Autographs / Red',
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsInceptionUefaClubCompetitions_2022_2023,
  year: 2023,
  cardSection: "FC Barcelona",
  cardType: [
    CardType.ShortPrint,
    CardType.Red,
  ],
  brilli: CardBrilli.RedFoil,
  productType: CardProductType.Card,
  language: CardLanguage.EN,
  orientation: CardOrientation.Vertical,
};