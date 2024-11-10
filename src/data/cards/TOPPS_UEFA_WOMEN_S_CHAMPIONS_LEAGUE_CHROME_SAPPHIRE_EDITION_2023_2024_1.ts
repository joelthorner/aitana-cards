import { Card, CardBrilli, CardLanguage, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChromeSapphireEdition_2023_2024 } from "../collections";

import sapp1_0 from "../img/cards/sapp1_0.jpg";
import sapp1_1 from "../img/cards/sapp1_1.jpg";
import sapp1_2 from "../img/cards/sapp1_2.jpg";
import sapp1b_0 from "../img/cards/sapp1b_0.jpg";
import sapp1b_1 from "../img/cards/sapp1b_1.jpg";
import sapp1b_2 from "../img/cards/sapp1b_2.jpg";

const baseTextBack = `AITANA BONMATÍ  
FC BARCELONA

HT: 1.63m  DOB: 18-1-98  SQUAD NO.: 14

NATION: SPAIN  POSITION: MIDFIELDER

Long and short passing range, position and placement, fluidity and flair, FC Barcelona midfielder Aitana Bonmatí has it all. Setting the middle third ablaze with palpable energy and moments of creative brilliance, Bonmatí’s artistry is a sight to behold. The Spain international is twice a UEFA Women’s Champions League winner and a four-time finalist.

Published Under License by The Topps Company, Inc.

© & ™ 2024 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED.

TOPPS AND TOPPS CHROME ARE REGISTERED TRADEMARKS OF THE TOPPS COMPANY, INC. THE WORDS UEFA, WOMEN'S CHAMPIONS LEAGUE, AND ALL OTHER UEFA WOMEN'S CHAMPIONS LEAGUE MARKS, NAMES, LOGOS, MASCOTS AND TROPHIES ARE THE PROPERTY, REGISTERED TRADEMARKS, DESIGNS AND/OR COPYRIGHT OF UEFA.  

ALL RIGHTS RESERVED.  

FC BARCELONA`;

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_SAPPHIRE_EDITION_2023_2024_1: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-sapphire-edition-2023-2024-1',
  number: 1,
  images: [
    sapp1_0,
    sapp1_1,
    sapp1_2,
  ],
  name: "Aitana Bonmatí Sapphire",
  rarity: 1,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChromeSapphireEdition_2023_2024,
  year: 2024,
  cardSection: "FC Barcelona",
  language: CardLanguage.EN,
  cardType: [
    CardType.BaseSet,
    CardType.Sapphire,
  ],
  brilli: CardBrilli.BlueTopps,
  productType: CardProductType.Card,
  cardTextFront: `AITANA **BONMATÍ**
  
MIDFIELER`,
  cardTextBack: baseTextBack,
};

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_SAPPHIRE_EDITION_2023_2024_1b: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-sapphire-edition-2023-2024-1b',
  number: '1b',
  images: [
    sapp1b_0,
    sapp1b_1,
    sapp1b_2,
  ],
  name: "Aitana Bonmatí Black / Sapphire",
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChromeSapphireEdition_2023_2024,
  year: 2024,
  cardSection: "FC Barcelona",
  language: CardLanguage.EN,
  cardType: [
    CardType.BaseSet,
    CardType.Sapphire,
    CardType.Black,
  ],
  brilli: CardBrilli.BlackTopps,
  productType: CardProductType.Card,
  cardTextFront: `01/10

AITANA **BONMATÍ**
  
MIDFIELER`,
  cardTextBack: baseTextBack,
};
