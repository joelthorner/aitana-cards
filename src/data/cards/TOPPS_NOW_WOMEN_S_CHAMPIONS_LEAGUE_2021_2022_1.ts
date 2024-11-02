import { Card, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { AlexiaPutellas, CarolineGrahamHansen, ClaudiaPina, FridolinaRolfo, IreneParedes, JenniHermoso, MapiLeon, MartaTorrejon, PatriGuijarro, SandraPanos } from "../teammates";
import { ToppsNowWomenSChampionsLeague_2021_2022 } from "../collections";

import cardnow1_0 from "../img/cards/cardnow1_0.jpg";
import cardnow1_1 from "../img/cards/cardnow1_1.webp";
import cardnow1_2 from "../img/cards/cardnow1_2.webp";

export const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2021_2022_1: Card = {
  id: 'topps-now-women-s-champions-league-2021-2022-1',
  number: 1,
  images: [
    cardnow1_0,
    cardnow1_1,
    cardnow1_2,
  ],
  name: "FC Barcelona vs Real Madrid C.F.",
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsNowWomenSChampionsLeague_2021_2022,
  year: 2022,
  cardType: [CardType.BaseSet, CardType.TeamCard],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
  language: CardLanguage.EN,
  cardTextFront: `FC BARCELONA vs REAL MADRID C.F.
BIGGEST ATTENDANCE IN THE HISTORY OF WOMEN'S FOOTBALL
  
30.03.22`,
  cardTextBack: `FC BARCELONA vs REAL MADRID C.F.
BIGGEST ATTENDANCE IN THE HISTORY OF WOMEN'S FOOTBALL

001

A record crowd of 91,553 packed out the Camp Nou to watch FC Barcelona's 5-2 win over Real Madrid C.F. in their UEFA Women's Champions League quarter-final second leg.

This was the biggest attendance in the history of women's football as the two rivals clashed in an enthralling encounter in Barcelona. Leading 3-1 on aggregate from the first leg, the teams were level at half-time. However FC Barcelona ran riot in the second half with goals from Bonmati, Pina, Putellas and Hansen sealing an 8-3 aggregate victory and a place in the UEFA Women's Champions League semi-finals.

© FC BARCELONA
© 2022 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED. TOPPS IS A REGISTERED TRADEMARK OF THE TOPPS COMPANY, INC. The roundel, UEFA, WOMEN'S CHAMPIONS LEAGUE, and all other UEFA Women's Champions League marks, names, logos, mascots and trophies are the property, registered trade marks, designs and/or copyright of UEFA. All rights reserved.`,
  teammates: [
    SandraPanos,
    IreneParedes,
    MapiLeon,
    ClaudiaPina,
    CarolineGrahamHansen,
    MartaTorrejon,
    JenniHermoso,
    AlexiaPutellas,
    PatriGuijarro,
    FridolinaRolfo,
  ],
};