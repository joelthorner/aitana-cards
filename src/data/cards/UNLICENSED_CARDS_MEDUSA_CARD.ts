import { Card, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { UnlicensedCards } from "../collections";

import won_1_0 from "../img/cards/won_1_0.jpg";
import won_1_1 from "../img/cards/won_1_1.webp";
import won_1_2 from "../img/cards/won_1_2.webp";

export const UNLICENSED_CARDS_MEDUSA_CARD_WO_NUMBER_1: Card = {
  id: 'unlicensed-cards-medusa-card-wo-number-1',
  number: 'w/o',
  images: [
    won_1_0,
    won_1_1,
    won_1_2,
  ],
  name: "Aitana Bonmatí Balon de Oro 2023",
  description: "Medusa card unlicensed collection",
  rarity: 2,
  status: CardStatus.Falti,
  collection: UnlicensedCards,
  year: 2023,
  cardType: [
    CardType.UnlicensedCard,
  ],
  productType: CardProductType.Card,
  language: CardLanguage.ES,
  cardTextFront: `Aitana Bonmatí Balon de Oro 2023
  
BALLON D'OR`,
  cardTextBack: `LIMITED EDITION
  
BALLON D'OR

AITANA BONMATÍ 2023

MEDUSA CARD`,
  orientation: CardOrientation.Horizontal,
};