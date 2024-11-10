import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaWomenSChampionsLeagueChromeSapphireEdition_2023_2024 } from "../collections";

import sappIS2_0 from "../img/cards/sappIS2_0.jpg";
import sappIS2_1 from "../img/cards/sappIS2_1.webp";
import sappIS2_2 from "../img/cards/sappIS2_2.webp";

const baseTextBack = `IS-2

AITANA BONMATÍ

FC BARCELONA • MIDFIELDER

Double UEFA Women’s Champions League winner Aitana Bonmatí was one of her team’s greatest talismans across the 2022/23 season. As well as her spellbinding attacking performances and her steadfast defensive actions, the Spain international netted five goals and registered a mammoth eight assists to help to earn FC Barcelona their second European victory.

© & ™ 2024 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED. TOPPS AND TOPPS CHROME ARE REGISTERED TRADEMARKS OF THE TOPPS COMPANY, INC. THE WORD(S) UEFA, WOMEN’S CHAMPIONS LEAGUE, AND ALL OTHER UEFA WOMEN’S CHAMPIONS LEAGUE MARKS, NAMES, LOGOS, MASCOTS AND TROPHIES ARE THE PROPERTY, REGISTERED TRADEMARKS, DESIGNS AND/OR COPYRIGHT OF UEFA. ALL RIGHTS RESERVED.  

WWW.TOPPS.COM CODE#CMP082740.

© FC BARCELONA
`;

export const TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_SAPPHIRE_EDITION_2023_2024_IS2: Card = {
  id: 'topps-uefa-women-s-champions-league-chrome-sapphire-edition-2023-2024-IS-2',
  number: 'IS-2',
  images: [
    sappIS2_0,
    sappIS2_1,
    sappIS2_2,
  ],
  name: "Aitana Bonmatí Infinite Sapphire",
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsUefaWomenSChampionsLeagueChromeSapphireEdition_2023_2024,
  year: 2024,
  cardSection: "FC Barcelona",
  language: CardLanguage.EN,
  cardType: [
    CardType.BaseSet,
    CardType.Infinite,
    CardType.Sapphire,
  ],
  brilli: CardBrilli.BlueTopps,
  productType: CardProductType.Card,
  cardTextFront: `*Infinite*
  
SAPPHIRE

AITANA BONMATÍ`,
  cardTextBack: baseTextBack,
  orientation: CardOrientation.Horizontal,
};