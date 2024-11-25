import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChromeSapphireEdition_2023_2024 } from "../collections";

import c_qf1r_0 from "../img/cards/c_qf1r_0.jpg";
import c_qf1r_1 from "../img/cards/c_qf1r_1.webp";
import c_qf_1_0 from "../img/cards/c_qf_1_0.jpg";
import c_qf_1_1 from "../img/cards/c_qf_1_1.webp";
import c_qf_1_2 from "../img/cards/c_qf_1_2.webp";
import c_qf1b_0 from "../img/cards/c_qf1b_0.jpg";
import c_qf1b_1 from "../img/cards/c_qf1b_1.jpg";
import c_qf1b_2 from "../img/cards/c_qf1b_2.jpg";

const cardTextBack = `**QF-1**

**QUEENS OF FOOTBALL**

AITANA BONMATÍ

FC Barcelona - Midfielder

---

FC Barcelona have a plethora of special talent in their ranks and this is only enhanced by Aitana Bonmatí. The midfielder is a creative force who navigates the forward lines with flair and originality. Bonmatí was named as the 2022/23 UEFA Women's Champions League player of the season after registering a campaign high 13 goal contributions.

*© & © 2024 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED. TOPPS AND TOPPS CHROME ARE REGISTERED TRADEMARKS OF THE TOPPS COMPANY, INC. THE WORD(S) UEFA, WOMEN'S CHAMPIONS LEAGUE, AND ALL OTHER UEFA WOMEN'S CHAMPIONS LEAGUE MARKS, NAMES, LOGOS, MASCOTS AND TROPHIES ARE THE PROPERTY, REGISTERED TRADEMARKS, DESIGNS AND/OR COPYRIGHT OF UEFA. ALL RIGHTS RESERVED.* 

*WWW.TOPPS.COM CODE#CCFMP427594*

*© FC BARCELONA*`;

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_SAPPHIRE_EDITION_2023_2024_QF1: Card = {
  customRelatedsRegexp: /QF-1[a-z]?/,
  id: 'topps-uefa-women-s-champions-league-chrome-sapphire-edition-2023-2024-QF-1',
  number: 'QF-1',
  images: [
    c_qf_1_0,
    c_qf_1_1,
    c_qf_1_2,
  ],
  name: "Aitana Bonmatí Queens of Football / Sapphire",
  rarity: 1,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChromeSapphireEdition_2023_2024,
  year: 2024,
  cardSection: "Insert Cards",
  cardType: [
    CardType.QueensOfFootball,
    CardType.Sapphire,
  ],
  brilli: CardBrilli.BlueTopps,
  productType: CardProductType.Card,
  language: CardLanguage.EN,
  cardTextBack,
  cardTextFront: `**QUEENS OF FOOTBALL**

AITANA BONMATÍ`,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_SAPPHIRE_EDITION_2023_2024_QF1b: Card = {
  customRelatedsRegexp: /QF-1[a-z]?/,
  id: 'topps-uefa-women-s-champions-league-chrome-sapphire-edition-2023-2024-QF-1b',
  number: 'QF-1b',
  images: [
    c_qf1b_0,
    c_qf1b_1,
    c_qf1b_2,
  ],
  name: "Aitana Bonmatí Queens of Football / Black / Sapphire",
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChromeSapphireEdition_2023_2024,
  year: 2024,
  cardSection: "Insert Cards",
  cardType: [
    CardType.QueensOfFootball,
    CardType.Black,
    CardType.Sapphire,
  ],
  brilli: CardBrilli.BlackTopps,
  productType: CardProductType.Card,
  language: CardLanguage.EN,
  cardTextBack,
  cardTextFront: `09/10

**QUEENS OF FOOTBALL**

AITANA BONMATÍ`,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_SAPPHIRE_EDITION_2023_2024_QF1r: Card = {
  customRelatedsRegexp: /QF-1[a-z]?/,
  id: 'topps-uefa-women-s-champions-league-chrome-sapphire-edition-2023-2024-QF-1r',
  number: 'QF-1r',
  images: [
    c_qf1r_0,
    c_qf1r_1,
  ],
  name: "Aitana Bonmatí Queens of Football / Red / Sapphire",
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChromeSapphireEdition_2023_2024,
  year: 2024,
  cardSection: "Insert Cards",
  cardType: [
    CardType.QueensOfFootball,
    CardType.Red,
    CardType.Sapphire,
  ],
  brilli: CardBrilli.RedFoil,
  productType: CardProductType.Card,
  numbered: 5,
  language: CardLanguage.EN,
  cardTextBack,
  cardTextFront: `3/5

**QUEENS OF FOOTBALL**

AITANA BONMATÍ`,
  orientation: CardOrientation.Vertical,
};