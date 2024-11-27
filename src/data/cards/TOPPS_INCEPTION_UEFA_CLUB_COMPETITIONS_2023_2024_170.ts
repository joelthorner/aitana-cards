import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsInceptionUefaClubCompetitions_2023_2024 } from "../collections";
import { AlexiaPutellas } from "../teammates";

import cDA170r_0 from "../img/cards/cDA170r_0.jpg";
import cDA170r_1 from "../img/cards/cDA170r_1.webp";
import cDA170r_2 from "../img/cards/cDA170r_2.webp";
import cDA170r_3 from "../img/cards/cDA170r_3.webp";
import cDA170r_4 from "../img/cards/cDA170r_4.jpg";
import cDA170r_5 from "../img/cards/cDA170r_5.jpg";
import cDA170r_6 from "../img/cards/cDA170r_6.jpg";
import cDA170r_7 from "../img/cards/cDA170r_7.jpg";
import cDA170o_0 from "../img/cards/cDA170o_0.jpg";
import cDA170o_1 from "../img/cards/cDA170o_1.jpg";
import cDA170o_2 from "../img/cards/cDA170o_2.jpg";

const cardTextBack = `DAP-PB

DUAL AUTOGRAPH RELIC BOOK CARD 

from Topps Inception UEFA Club Competitions 2023/24.

ALEXIA PUTELLAS FC BARCELONA/MIDFIELDER

AITANA BONMATÍ FC BARCELONA/MIDFIELDER

The signing of all autograph cards is witnessed by a Topps representative to guarantee authenticity. 

The relics contained in this card were worn by the featured players. The execution of all player-worn memorabilia is witnessed by a Topps representative to guarantee authenticity.


® & © 2024 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED. TOPPS AND TOPPS INCEPTION ARE TRADEMARKS OF THE TOPPS COMPANY, INC.. The word(s) UEFA, WOMEN'S CHAMPIONS LEAGUE, and all other UEFA Women's Champions League marks, names, logos, mascots and trophies are the property, registered trade marks, designs and/or copyright of UEFA. All rights reserved.

WWW.TOPPS.COM.CODE#CMP079818.

© FC BARCELONA`;

export const TOPPS_INCEPTION_UEFA_CLUB_COMPETITIONS_2023_2024_DA170r: Card = {
  id: 'topps-inception-uefa-club-competitions-2023-2024-DA-170r',
  number: 'DA-170r',
  images: [
    cDA170r_0,
    cDA170r_1,
    cDA170r_2,
    cDA170r_3,
    cDA170r_4,
    cDA170r_5,
    cDA170r_6,
    cDA170r_7,
  ],
  name: 'Alexia Putellas / Aitana Bonmati Dual Autograph Patch Books / Red',
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsInceptionUefaClubCompetitions_2023_2024,
  year: 2024,
  cardSection: "FC Barcelona",
  cardType: [
    CardType.DualAutographs,
    CardType.Relic,
    CardType.Red,
  ],
  productType: CardProductType.PatchBookCard,
  brilli: CardBrilli.RedFoil,
  orientation: CardOrientation.Horizontal,
  teammates: [
    AlexiaPutellas,
  ],
  language: CardLanguage.EN,
  cardTextFront: `INCEPTION

ALEXIA PUTELLAS

---

AITANA BONMATÍ

07/10 TOPPS CERTIFIED AUTOGRAPH ISSUE`,
  cardTextBack,
};

export const TOPPS_INCEPTION_UEFA_CLUB_COMPETITIONS_2023_2024_DA170o: Card = {
  id: 'topps-inception-uefa-club-competitions-2023-2024-DA-170o',
  number: 'DA-170o',
  images: [
    cDA170o_0,
    cDA170o_1,
    cDA170o_2,
  ],
  name: 'Alexia Putellas / Aitana Bonmati Dual Autograph Patch Books / Orange',
  rarity: 5,
  numbered: 5,
  status: CardStatus.Falti,
  collection: ToppsInceptionUefaClubCompetitions_2023_2024,
  year: 2024,
  cardSection: "FC Barcelona",
  cardType: [
    CardType.DualAutographs,
    CardType.Relic,
    CardType.Orange,
  ],
  productType: CardProductType.PatchBookCard,
  brilli: CardBrilli.OrangeFoil,
  orientation: CardOrientation.Horizontal,
  teammates: [
    AlexiaPutellas,
  ],
  language: CardLanguage.EN,
  cardTextFront: `INCEPTION

ALEXIA PUTELLAS

---

AITANA BONMATÍ

4/5 TOPPS CERTIFIED AUTOGRAPH ISSUE`,
  cardTextBack,
};