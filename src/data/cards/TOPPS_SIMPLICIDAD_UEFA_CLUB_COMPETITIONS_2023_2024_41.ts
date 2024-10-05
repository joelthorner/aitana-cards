import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card"
import { ToppsSimplicidadUefaClubCompetitions_2023_2024 } from "../collections"

import toppsSimplicidad_23_24Aitana from "../img/cards/toppsSimplicidad_23_24AitanaFront.png";
import toppsSimplicidad_23_24Aitana_back from "../img/cards/toppsSimplicidad_23_24Aitana.png";
import toppsSimplicidad_23_24Aitana_autograpth from "../img/cards/toppsSimplicidad_23_24Aitana_autograpth.png";

export const TOPPS_SIMPLICIDAD_UEFA_CLUB_COMPETITIONS_2023_2024_41: Card = {
  id: 'topps-simplicidad-uefa-club-competitions-2023-2024-41',
  number: 41,
  images: [
    toppsSimplicidad_23_24Aitana,
    toppsSimplicidad_23_24Aitana_back,
  ],
  name: 'Aitana Bonmatí Dynamic',
  rarity: 2,
  status: CardStatus.Tengui,
  collection: ToppsSimplicidadUefaClubCompetitions_2023_2024,
  year: 2024,
  cardSection: 'FC Barcelona',
  productType: CardProductType.Card,
  cardType: [
    CardType.Dynamic,
  ],
};

export const TOPPS_SIMPLICIDAD_UEFA_CLUB_COMPETITIONS_2023_2024_A41g: Card = {
  id: 'topps-simplicidad-uefa-club-competitions-2023-2024-A-41g',
  number: 'A-41g',
  images: [
    toppsSimplicidad_23_24Aitana_autograpth,
  ],
  name: 'Aitana Bonmatí Dynamic / Autograph / Gold',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsSimplicidadUefaClubCompetitions_2023_2024,
  year: 2024,
  brilli: CardBrilli.GoldFoil,
  numbered: 1,
  cardSection: 'FC Barcelona',
  productType: CardProductType.Card,
  cardType: [
    CardType.Dynamic,
    CardType.Autographs,
    CardType.Gold,
  ],
};

// TODO: falten variacions de topps i de topps de la autograph, fer cerca