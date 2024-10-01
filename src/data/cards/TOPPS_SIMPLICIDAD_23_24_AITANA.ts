import { Card, CardBrilli, CardStatus } from "../../types/card"
import { ToppsUefaClubCompetitionsSimplicidad_2023_24 } from "../collections"

import toppsSimplicidad_23_24Aitana from "../img/cards/toppsSimplicidad_23_24AitanaFront.png";
import toppsSimplicidad_23_24Aitana_back from "../img/cards/toppsSimplicidad_23_24Aitana.png";
import toppsSimplicidad_23_24Aitana_autograpth from "../img/cards/toppsSimplicidad_23_24Aitana_autograpth.png";

export const TOPPS_SIMPLICIDAD_23_24_AITANA: Card = {
  id: 'topps-simplicidad-23-24-aitana',
  images: [
    toppsSimplicidad_23_24Aitana,
    toppsSimplicidad_23_24Aitana_back,
  ],
  name: 'Aitana Bonmatí Base',
  rarity: 2,
  status: CardStatus.Tengui,
  collection: ToppsUefaClubCompetitionsSimplicidad_2023_24,
  year: 2024,
};

export const TOPPS_SIMPLICIDAD_23_24_AITANA_AUTOGRAPH: Card = {
  id: 'topps-simplicidad-23-24-aitana-autograph',
  images: [
    toppsSimplicidad_23_24Aitana_autograpth,
  ],
  name: 'Aitana Bonmatí - autograph',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsUefaClubCompetitionsSimplicidad_2023_24,
  year: 2024,
  brilli: CardBrilli.GoldFoil,
};

// TODO: falten variacions de topps i de topps de la autograph, fer cerca