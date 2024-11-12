/**
 * COMPLETED data
 */
import { Card, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniUefaWomenSEuroEngland_2022 } from "../collections";
import { AndreaPereira, LeilaOuahabi, MarionaCaldentey, OnaBatlle } from "../teammates";

import img1 from '../img/cards/2022 Panini - Womens Euro 2022 -21.jpg';
import img2 from '../img/cards/2022PWE2022_21_2.webp';
import img3 from '../img/cards/2022PWE2022_21_3.webp';

const PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21: Card = {
  id: 'panini-uefa-women-s-euro-england-2022-21',
  number: 21,
  images: [
    img1,
    img2,
    img3,
  ],
  name: 'Spain Team #21',
  rarity: 1,
  status: CardStatus.Falti,
  collection: PaniniUefaWomenSEuroEngland_2022,
  year: 2022,
  cardType: [CardType.BaseSet, CardType.TeamCard],
  cardSection: 'Spain',
  productType: CardProductType.Sticker,
  orientation: CardOrientation.Horizontal,
  language: CardLanguage.EN,
  cardTextFront: `**SPAIN**`,
  cardTextBack: `Manufactured under licence by

**PANINI**

www.paninigroup.com
Printed in Italy by Panini S.p.A.  
Modena

UEFA  
Women's  
**EURO**  
ENGLAND 2022

The UEFA word, WOMEN'S EURO word, UEFA Women's EURO logo and the UEFA Women's EURO Trophy are each protected as trademarks and/or copyright works. All rights reserved.

**21**`,
  teammates: [
    AndreaPereira,
    OnaBatlle,
    MarionaCaldentey,
    LeilaOuahabi,
  ],
  links: [
    'https://www.laststicker.com/cards/panini_womens_euro_2022/21/',
  ],
};

export default PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21;