import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChrome_2023_2024 } from "../collections";

import cHG1_0 from "../img/cards/cHG1_0.jpg";
import cHG1_1 from "../img/cards/cHG1_1.jpg";
import cHG1_2 from "../img/cards/cHG1_2.webp";
import cHG1_3 from "../img/cards/cHG1_3.webp";

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2023_2024_HG1: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-2023-2024-HG-1',
  number: 'HG-1',
  images: [
    cHG1_0,
    cHG1_1,
    cHG1_2,
    cHG1_3,
  ],
  name: "Aitana Bonmatí Hidden Gems",
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChrome_2023_2024,
  year: 2024,
  cardSection: "Insert Cards",
  cardType: [
    CardType.HiddenGems,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.Stars,
  customRelatedsRegexp: /HG-1[a-z]{1,6}?$/,
  language: CardLanguage.EN,
  cardTextFront: `HIDDEN GEMS
  
AITANA BONMATÍ`,
  cardTextBack: `**AITANA BONMATÍ**

**FC BARCELONA**

**HG-1**

**UEFA WOMEN'S CHAMPIONS LEAGUE RECORD**  
| Season  | APPS | GOALS | ASSISTS | MINUTES |
|---------|------|-------|---------|---------|
| 2022/23 |  11  |   5   |    8    |   922   |

Aitana Bonmatí is a player you simply cannot take your eyes off. Harbouring a supreme gift, the Spaniard's movement in the middle third is astonishing; each run, each pass, each play is a passage of beauty. A world-class talent, the midfielder electrifies every single time she steps on the pitch.

---

Published Under License by The Topps Company, Inc.  
© 2024 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED.  
TOPPS AND TOPPS CHROME ARE REGISTERED TRADEMARKS OF THE TOPPS COMPANY, INC.  
THE WORD(S) UEFA, WOMEN'S CHAMPIONS LEAGUE, AND ALL OTHER UEFA WOMEN'S CHAMPIONS LEAGUE MARKS, NAMES, LOGOS, MASCOTS AND TROPHIES ARE THE PROPERTY, REGISTERED TRADEMARKS, DESIGNS AND/OR COPYRIGHT OF UEFA.  
ALL RIGHTS RESERVED. WWW.TOPPS.COM CODE #CMP072969.  

© FC BARCELONA  
`,
  orientation: CardOrientation.Vertical,
};
