import { Card, CardBrilli, CardType, CardStatus, CardProductType, CardOrientation, CardLanguage } from "../../types/card";
import { ToppsChromeFcBarcelona_2022_2023 } from "../collections";

import QAB1 from "../img/cards/toppsChromeFcBarcelonaMésQueUnClub_2022_23AutoBook.jpg";
import QAB1_2 from "../img/cards/toppsChromeFcBarcelonaMésQueUnClub_2022_23AutoBook_2.jpg";
import QAB1_3 from "../img/cards/toppsChromeFcBarcelonaMésQueUnClub_2022_23AutoBook_3.jpg";
import QAB1ng_0 from "../img/cards/QAB1ng_0.jpg";
import QAB1ng_1 from "../img/cards/QAB1ng_1.webp";
import QAB1ng_2 from "../img/cards/QAB1ng_2.webp";
import QAB1ng_3 from "../img/cards/QAB1ng_3.webp";
import QAB1ng_4 from "../img/cards/QAB1ng_4.webp";
import { AlexiaPutellas, AsisatOshoala, CarolineGrahamHansen } from "../teammates";

export const TOPPS_CHROME_FC_BARCELONA_2022_2023_QAB1: Card = {
  id: 'topps-chrome-fc-barcelona-2022-2023-QAB-1',
  number: 'QAB-1',
  images: [
    QAB1ng_0,
    QAB1ng_1,
    QAB1ng_2,
    QAB1ng_3,
    QAB1ng_4,
  ],
  name: 'Aitana, Alexia, Caroline, Asisat - Quad Autograph Book',
  description: 'Aitana Bonmati / Alexia Putellas / Caroline Graham Hansen / Asisat Oshoala',
  rarity: 5,
  status: CardStatus.Falti,
  brilli: CardBrilli.BlackTopps,
  collection: ToppsChromeFcBarcelona_2022_2023,
  year: 2023,
  cardType: [
    CardType.QuadAutograph,
  ],
  cardSection: 'FC Barcelona',
  numbered: 10,
  productType: CardProductType.BookCard,
  orientation: CardOrientation.Horizontal,
};

export const TOPPS_CHROME_FC_BARCELONA_2022_2023_QAB1g: Card = {
  id: 'topps-chrome-fc-barcelona-2022-2023-QAB-1g',
  number: 'QAB-1g',
  images: [
    QAB1,
    QAB1_2,
    QAB1_3,
  ],
  name: 'Aitana, Alexia, Caroline, Asisat - Quad Autograph Book / Gold',
  description: 'Aitana Bonmati / Alexia Putellas / Caroline Graham Hansen / Asisat Oshoala',
  rarity: 5,
  status: CardStatus.Falti,
  brilli: CardBrilli.GoldFoil,
  collection: ToppsChromeFcBarcelona_2022_2023,
  year: 2023,
  cardType: [
    CardType.QuadAutograph,
    CardType.Gold,
  ],
  cardSection: 'FC Barcelona',
  numbered: 1,
  productType: CardProductType.BookCard,
  orientation: CardOrientation.Horizontal,
  language: CardLanguage.EN,
  teammates: [
    CarolineGrahamHansen,
    AlexiaPutellas,
    AsisatOshoala,
  ],
  cardTextFront: `**TOPPS CERTIFIED AUTOGRAPH ISSUE**

**AITANA BONMATÍ**
- MIDFIELDER
- FC BARCELONA FEMENÍ

**ALEXIA PUTELLAS**
- MIDFIELDER
- FC BARCELONA FEMENÍ

---

**CAROLINE GRAHAM HANSEN**
- FORWARD
- FC BARCELONA FEMENÍ

**ASISAT OSHOALA**
- FORWARD
- FC BARCELONA FEMENÍ`,
  cardTextBack: `**AITANA BONMATÍ**

MIDFIELDER

**ALEXIA PUTELLAS**

MIDFIELDER

**CAROLINE GRAHAM HANSEN**

FORWARD

**ASISAT OSHOALA**

FORWARD

**Congratulations!**
You have just received a Quad Autograph Book Card from Topps Chrome Barcelona 2022/23.

**THE SIGNING OF ALL TOPPS AUTOGRAPH CARDS IS WITNESSED BY A TOPPS REPRESENTATIVE TO GUARANTEE AUTHENTICITY.**

@ FC BARCELONA
Published Under License by The Topps Company, Inc.
® & © 2023. All Rights Reserved.

**1/1**
**QU-1**

---

**QUAD AUTOGRAPH BOOK CARD**`,
};