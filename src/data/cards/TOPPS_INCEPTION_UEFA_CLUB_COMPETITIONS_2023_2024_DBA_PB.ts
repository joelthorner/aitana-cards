import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsInceptionUefaClubCompetitions_2023_2024 } from "../collections";
import { Pedri } from "../teammates";

import cDBA_PBr_0 from "../img/cards/cDBA_PBr_0.jpg";
import cDBA_PBr_1 from "../img/cards/cDBA_PBr_1.jpg";
import cDBA_PBr_2 from "../img/cards/cDBA_PBr_2.jpg";
import cDBA_PBr_3 from "../img/cards/cDBA_PBr_3.jpg";
import cDBA_PBr_4 from "../img/cards/cDBA_PBr_4.jpg";
import cDBA_PBr_5 from "../img/cards/cDBA_PBr_5.jpg";
import cDBA_PBo_0 from "../img/cards/cDBA_PBo_0.jpg";
import cDBA_PBo_1 from "../img/cards/cDBA_PBo_1.jpg";
import cDBA_PBo_2 from "../img/cards/cDBA_PBo_2.jpg";
import cDBA_PBo_3 from "../img/cards/cDBA_PBo_3.jpg";
import cDBA_PBo_4 from "../img/cards/cDBA_PBo_4.jpg";
import cDBA_PBo_5 from "../img/cards/cDBA_PBo_5.jpg";

const cardTextBack = `**DBA-PB**

# Dual Autograph Book Card  
from Topps Inception
UEFA Club Competitions 2023/24

### PEDRI  
*FC BARCELONA / MIDFIELDER*

### AITANA BONMATÍ  
*FC BARCELONA / MIDFIELDER*

The signing of all autograph cards is witnessed by a Topps representative to guarantee authenticity.

© & © 2024 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED. TOPPS AND TOPPS INCEPTION ARE TRADEMARKS OF THE TOPPS COMPANY, INC. ALL UEFA Champions League and UEFA Women’s Champions League names, logos and trophies are the property, registered trade marks, designs and/or copyright of UEFA. All rights reserved.

**© FC BARCELONA**  
www.topps.com 
CODE: CMP079810

---

**INCEPTION AUTOGRAPHED BOOK CARD**

---

Topps

**INCEPTION**

**UEFA CLUB COMPTETITIONS 2023/24**`;

export const TOPPS_INCEPTION_UEFA_CLUB_COMPETITIONS_2023_2024_DBA_PBr: Card = {
  id: 'topps-inception-uefa-club-competitions-2023-2024-DBA-PBr',
  number: 'DBA-PBr',
  images: [
    cDBA_PBr_0,
    cDBA_PBr_1,
    cDBA_PBr_2,
    cDBA_PBr_3,
    cDBA_PBr_4,
    cDBA_PBr_5,
  ],
  name: 'Pedri / Aitana Bonmatí Dual Book Autographs / Red',
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsInceptionUefaClubCompetitions_2023_2024,
  year: 2024,
  cardSection: "FC Barcelona",
  cardType: [
    CardType.DualAutographs,
    CardType.Red,
  ],
  productType: CardProductType.BookCard,
  brilli: CardBrilli.RedFoil,
  orientation: CardOrientation.Horizontal,
  teammates: [
    Pedri,
  ],
  language: CardLanguage.EN,
  cardTextFront: `INCEPTION

10/10
  
TOPPS CERTIFIED AUTOGRAPH ISSUE

**PEDRI**

FC BARCELONA

---

INCEPTION
  
TOPPS CERTIFIED AUTOGRAPH ISSUE

**AITANA BONMATÍ**

FC BARCELONA`,
  cardTextBack,
};

export const TOPPS_INCEPTION_UEFA_CLUB_COMPETITIONS_2023_2024_DBA_PBo: Card = {
  id: 'topps-inception-uefa-club-competitions-2023-2024-DBA-PBo',
  number: 'DBA-PBo',
  images: [
    cDBA_PBo_0,
    cDBA_PBo_1,
    cDBA_PBo_2,
    cDBA_PBo_3,
    cDBA_PBo_4,
    cDBA_PBo_5,
  ],
  name: 'Pedri / Aitana Bonmatí Dual Book Autographs / Orange',
  rarity: 5,
  numbered: 5,
  status: CardStatus.Falti,
  collection: ToppsInceptionUefaClubCompetitions_2023_2024,
  year: 2024,
  cardSection: "FC Barcelona",
  cardType: [
    CardType.DualAutographs,
    CardType.Orange,
  ],
  productType: CardProductType.BookCard,
  brilli: CardBrilli.OrangeFoil,
  orientation: CardOrientation.Horizontal,
  teammates: [
    Pedri,
  ],
  language: CardLanguage.EN,
  cardTextFront: `INCEPTION

2/5
  
TOPPS CERTIFIED AUTOGRAPH ISSUE

**PEDRI**

FC BARCELONA

---

INCEPTION
  
TOPPS CERTIFIED AUTOGRAPH ISSUE

**AITANA BONMATÍ**

FC BARCELONA`,
  cardTextBack,
};