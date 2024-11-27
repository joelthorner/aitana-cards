import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsFugenzUefaClubCompetitions_2023_2024 } from "../collections";

import tfgucc2324_43_0 from "../img/cards/tfgucc2324_43_0.jpg";
import tfgucc2324_43_1 from "../img/cards/tfgucc2324_43_1.webp";
import tfgucc2324_43_2 from "../img/cards/tfgucc2324_43_2.webp";
import tfgucc2324_43rb_0 from "../img/cards/tfgucc2324_43rb_0.jpg";
import tfgucc2324_43rb_1 from "../img/cards/tfgucc2324_43rb_1.webp";
import tfgucc2324_43rb_2 from "../img/cards/tfgucc2324_43rb_2.webp";

const cardTextBack = `**Topps FugenZ**

**043**  

**AITANA BONMATÍ**

**© FC BARCELONA**

© 2024 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED. TOPPS IS A REGISTERED TRADEMARK OF THE TOPPS COMPANY, INC.  

The word(s) UEFA WOMEN’S CHAMPIONS LEAGUE, and all other UEFA Women’s Champions League marks, names, logos, mascots and trophies are the property, registered trademarks, designs and/or copyright of UEFA. ALL RIGHTS RESERVED.`;

export const TOPPS_FUGENZ_UEFA_CLUB_COMPETITIONS_2023_2024_43: Card = {
  id: 'topps-fugenz-uefa-club-competitions-2023-2024-43',
  number: 43,
  images: [
    tfgucc2324_43_0,
    tfgucc2324_43_1,
    tfgucc2324_43_2,
  ],
  name: 'Aitana Bonmatí',
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsFugenzUefaClubCompetitions_2023_2024,
  year: 2024,
  cardSection: "FC Barcelona",
  cardType: [
    CardType.BaseSet,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
  cardTextFront: `TOPPS FUGENZ
  
**Aitana Bonmatí**`,
  cardTextBack,
};

export const TOPPS_FUGENZ_UEFA_CLUB_COMPETITIONS_2023_2024_43rb: Card = {
  id: 'topps-fugenz-uefa-club-competitions-2023-2024-43rb',
  number: '43rb',
  images: [
    tfgucc2324_43rb_0,
    tfgucc2324_43rb_1,
    tfgucc2324_43rb_2,
  ],
  name: 'Aitana Bonmatí Rainbow',
  rarity: 3,
  numbered: 25,
  status: CardStatus.Falti,
  collection: ToppsFugenzUefaClubCompetitions_2023_2024,
  year: 2024,
  cardSection: "FC Barcelona",
  cardType: [
    CardType.BaseSet,
    CardType.Rainbow,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
  brilli: CardBrilli.Rainbow,
  cardTextFront: `TOPPS FUGENZ

05/25

**Aitana Bonmatí**`,
  cardTextBack,
};