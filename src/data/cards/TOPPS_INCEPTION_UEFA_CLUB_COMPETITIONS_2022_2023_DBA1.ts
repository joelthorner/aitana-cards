import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsInceptionUefaClubCompetitions_2022_2023 } from "../collections";

import cDBA1r_0 from "../img/cards/cDBA1r_0.jpg";
import cDBA1r_1 from "../img/cards/cDBA1r_1.webp";
import cDBA1r_2 from "../img/cards/cDBA1r_2.webp";
import { AlexiaPutellas } from "../teammates";


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
  teammates: [
    AlexiaPutellas,
  ],
  cardTextFront: `INCEPTION
  
TOPPS CERTIFIED AUTOGRAPH ISSUE

ALEXIA PUTELLAS

FC BARCELONA

---

INCEPTION
  
TOPPS CERTIFIED AUTOGRAPH ISSUE

AITANA BONMATÍ

FC BARCELONA
`,
  cardTextBack: `
CONGRATULATIONS!

You have just received a

DUAL AUTOGRAPH BOOK CARD 

ALEXIA PUTELLAS FC BARCELONA / FORWARD

AITANA BONMATÍ FC BARCELONA / MIDFIELDER

from 2023 UEFA Club Competitions Inception.

The signing of all autograph cards is witnessed by a Topps representative to guarantee authenticity.

INCEPTION AUTOGRAPHED BOOK CARD

© FC BARCELONA

® & © 2023 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED. TOPPS IS A REGISTERED TRADEMARK OF THE TOPPS COMPANY, INC. The word(s) UEFA, WOMEN'S CHAMPIONS LEAGUE, and all other UEFA Women's Champions League marks, names, logos, mascots and trophies are the property, registered trade marks, designs and/or copyright of UEFA. All rights reserved.

---

Topps

INCEPTION

UEFA CLUB COMPETITIONS`,
};