/**
 * COMPLETED data
 */
import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniUefaWomenSEuroEngland_2022 } from "../collections";

import img1 from '../img/cards/PaniniUefaWomenSEuroEngland_2022_167.jpg';
import img2 from '../img/cards/490349457_618233237_tcimg_936307A1.webp';
import img3 from '../img/cards/490349457_618233242_tcimg_2307051A.webp';

const PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_167: Card = {
  id: 'panini-uefa-women-s-euro-england-2022-167',
  number: 167,
  images: [
    img1,
    img2,
    img3,
  ],
  name: 'Aitana Bonmatí #167',
  rarity: 1,
  status: CardStatus.Tengui,
  collection: PaniniUefaWomenSEuroEngland_2022,
  year: 2022,
  cardType: [CardType.BaseSet],
  cardSection: 'Spain',
  productType: CardProductType.Sticker,
};

export default PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_167;