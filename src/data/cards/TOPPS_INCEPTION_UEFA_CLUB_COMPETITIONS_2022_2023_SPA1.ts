import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsInceptionUefaClubCompetitions_2022_2023 } from "../collections";

import cSPA1r_0 from "../img/cards/cSPA1r_0.jpg";
import cSPA1r_1 from "../img/cards/cSPA1r_1.jpg";
import cSPA1r_2 from "../img/cards/cSPA1r_2.jpg";
import cSPA1o_0 from "../img/cards/cSPA1o_0.jpg";
import cSPA1o_1 from "../img/cards/cSPA1o_1.jpg";
import cSPA1o_2 from "../img/cards/cSPA1o_2.jpg";
import cSPA1g_0 from "../img/cards/cSPA1g_0.jpg";
import cSPA1g_1 from "../img/cards/cSPA1g_1.jpg";
import cSPA1g_2 from "../img/cards/cSPA1g_2.jpg";

const cardTextBack = `**CONGRATULATIONS!**  

You have just received a  
**SHORT PRINT AUTOGRAPHED CARD**  

**AITANA BONMATÍ**  

FC BARCELONA / MIDFIELDER  

from 2023 UEFA Club Competitions Inception.  

The signing of all autograph cards is witnessed by a Topps representative to guarantee authenticity.

---

© 2023 The Topps Company, Inc. All rights reserved. Topps is a registered trademark of The Topps Company, Inc.  
The UEFA word, UEFA Champions League, and the UEFA Champions League Trophy are trademarks of UEFA.  
All UEFA Champions League names, logos, and trophies are the property of UEFA and are used with permission.`;

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
    CardType.Autographs,
  ],
  brilli: CardBrilli.RedFoil,
  productType: CardProductType.Card,
  language: CardLanguage.EN,
  orientation: CardOrientation.Vertical,
  cardTextFront: `**TOPPS INCEPTION**  

  **CERTIFIED**  
  
  **07/10**  
  
  *TOPPS CERTIFIED AUTOGRAPH ISSUE*  
  
  **AITANA BONMATÍ**  
  **FC BARCELONA**`,
  cardTextBack,
};

export const TOPPS_INCEPTION_UEFA_CLUB_COMPETITIONS_2022_2023_SPA1o: Card = {
  id: 'topps-inception-uefa-club-competitions-2022-2023-SPA1o',
  number: 'SPA1o',
  images: [
    cSPA1o_0,
    cSPA1o_1,
    cSPA1o_2,
  ],
  name: 'Aitana Bonmatí Short Print Autographs / Orange',
  rarity: 5,
  numbered: 5,
  status: CardStatus.Falti,
  collection: ToppsInceptionUefaClubCompetitions_2022_2023,
  year: 2023,
  cardSection: "FC Barcelona",
  cardType: [
    CardType.ShortPrint,
    CardType.Orange,
    CardType.Autographs,
  ],
  brilli: CardBrilli.OrangeFoil,
  productType: CardProductType.Card,
  language: CardLanguage.EN,
  orientation: CardOrientation.Vertical,
  cardTextFront: `**TOPPS INCEPTION**  

**CERTIFIED**  

**5/5**  

*TOPPS CERTIFIED AUTOGRAPH ISSUE*  

**AITANA BONMATÍ**  
**FC BARCELONA**`,
  cardTextBack,
};

export const TOPPS_INCEPTION_UEFA_CLUB_COMPETITIONS_2022_2023_SPA1g: Card = {
  id: 'topps-inception-uefa-club-competitions-2022-2023-SPA1g',
  number: 'SPA1g',
  images: [
    cSPA1g_0,
    cSPA1g_1,
    cSPA1g_2,
  ],
  name: 'Aitana Bonmatí Short Print Autographs / Gold',
  rarity: 5,
  numbered: 1,
  status: CardStatus.Falti,
  collection: ToppsInceptionUefaClubCompetitions_2022_2023,
  year: 2023,
  cardSection: "FC Barcelona",
  cardType: [
    CardType.ShortPrint,
    CardType.Gold,
    CardType.Autographs,
  ],
  brilli: CardBrilli.GoldFoil,
  productType: CardProductType.Card,
  language: CardLanguage.EN,
  orientation: CardOrientation.Vertical,
  cardTextFront: `**TOPPS INCEPTION**  

**CERTIFIED**  

**1/1**  

*TOPPS CERTIFIED AUTOGRAPH ISSUE*  

**AITANA BONMATÍ**  
**FC BARCELONA**`,
  cardTextBack,
};