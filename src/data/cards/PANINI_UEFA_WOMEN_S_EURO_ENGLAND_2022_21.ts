/**
 * COMPLETED data
 */
import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniUefaWomenSEuroEngland_2022 } from "../collections";

import img1 from '../img/cards/2022 Panini - Womens Euro 2022 -21.jpg';
import img2 from '../img/cards/2022 Panini - Womens Euro 2022 -21_2.jpg';

const PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21: Card = {
  id: 'panini-uefa-women-s-euro-england-2022-21',
  number: 21,
  images: [
    img1,
    img2,
  ],
  name: 'Spain Team #21',
  rarity: 1,
  status: CardStatus.Falti,
  collection: PaniniUefaWomenSEuroEngland_2022,
  year: 2022,
  cardType: [CardType.Base, CardType.TeamCard],
  cardSection: 'Spain',
  productType: CardProductType.Sticker,
};

export default PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21;