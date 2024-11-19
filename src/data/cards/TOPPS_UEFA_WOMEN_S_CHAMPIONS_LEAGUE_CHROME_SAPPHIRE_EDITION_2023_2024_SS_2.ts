import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChromeSapphireEdition_2023_2024 } from "../collections";

import sappSS2b_0 from "../img/cards/sappSS2b_0.jpg";
import sappSS2b_1 from "../img/cards/sappSS2b_1.webp";
import sappSS2b_2 from "../img/cards/sappSS2b_2.webp";

const baseTextBack = `**SS-2**

*Aitana Bonmatí*

*FC BARCELONA - MIDFIELDER*

# Sapphire Selections

The UEFA Women’s Champions League is greatly strengthened with the addition of Spanish marvel Aitana Bonmatí. The FC Barcelona midfielder graces the pitch, darting into optimal areas and oozing skill with every touch of the ball. Bonmatí’s 2022/23 UWCL campaign was one for the history books as she earned 13 goal contributions, helping the Spanish side clinch the silverware.

---

**UEFA Women’s Champions League**

© & © 2024 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED. TOPPS AND TOPPS CHROME ARE REGISTERED TRADEMARKS OF THE TOPPS COMPANY, INC. THE WORD(S) UEFA WOMEN’S CHAMPIONS LEAGUE, AND ALL OTHER UEFA WOMEN’S CHAMPIONS LEAGUE MARKS, NAMES, LOGOS, MASCOTS AND TROPHIES ARE THE PROPERTY, REGISTERED TRADEMARKS, DESIGNS AND/OR COPYRIGHT OF UEFA. ALL RIGHTS RESERVED. [www.topps.com](https://www.topps.com)  

**© FC BARCELONA**`;

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_SAPPHIRE_EDITION_2023_2024_SS_2b: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-sapphire-edition-2023-2024-SS-2b',
  number: 'SS-2b',
  images: [
    sappSS2b_0,
    sappSS2b_1,
    sappSS2b_2,
  ],
  name: "Aitana Bonmatí Sapphire Selections / Black",
  rarity: 4,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChromeSapphireEdition_2023_2024,
  year: 2024,
  cardSection: "FC Barcelona",
  language: CardLanguage.EN,
  cardType: [
    CardType.Sapphire,
    CardType.Selections,
    CardType.Black,
  ],
  brilli: CardBrilli.BlackTopps,
  productType: CardProductType.Card,
  cardTextFront: `**TOPPS CHROME**
  
05/10

**Sapphire Selections**

*Aitana Bonmatí*`,
  cardTextBack: baseTextBack,
  orientation: CardOrientation.Vertical,
};