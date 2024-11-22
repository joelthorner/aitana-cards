import { Card, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsNowWomenSChampionsLeague_2022_2023 } from "../collections";

import cardnow23 from "../img/cards/cardnow23.jpg";
import cardnow23_1 from "../img/cards/cardnow23_1.webp";
import cardnow23_2 from "../img/cards/cardnow23_2.webp";
import { AlexiaPutellas, AnaMariaCrnogorcevic, AsisatOshoala, BrunaVilamala, CarolineGrahamHansen, ClaudiaPina, EmmaRamirez, FridolinaRolfo, GemmaFont, GeyseFerreira, IngridEngen, IreneParedes, JanaFernandez, KeiraWalsh, LucyBronze, MariaPerez, MarionaCaldentey, MartaTorrejon, NuriaRabano, PatriGuijarro, SalmaParalluelo, SandraPanos, VickyLopez } from "../teammates";

export const TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2022_2023_23: Card = {
  id: 'topps-now-women-s-champions-league-2022-2023-23',
  number: 23,
  images: [
    cardnow23,
    cardnow23_1,
    cardnow23_2,
  ],
  name: "UEFA Women's Champions League winners 2023",
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsNowWomenSChampionsLeague_2022_2023,
  year: 2023,
  cardSection: "FC Barcelona",
  cardType: [CardType.BaseSet, CardType.TeamCard],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
  teammates: [
    GemmaFont,
    GeyseFerreira,
    AsisatOshoala,
    VickyLopez,
    JanaFernandez,
    MartaTorrejon,
    KeiraWalsh,
    SalmaParalluelo,
    AlexiaPutellas,
    AnaMariaCrnogorcevic,
    MarionaCaldentey,
    ClaudiaPina,
    EmmaRamirez,
    SandraPanos,
    PatriGuijarro,
    CarolineGrahamHansen,
    IngridEngen,
    FridolinaRolfo,
    NuriaRabano,
    MariaPerez,
    LucyBronze,
    IreneParedes,
    BrunaVilamala,
  ],
  language: CardLanguage.EN,
  cardTextFront: `**FC BARCELONA**
  
UEFA WOMEN'S CHAMPIONS LEAGUE WINNERS 2023

03.06.23`,
  cardTextBack: `**FC BARCELONA**  

**UEFA WOMEN’S CHAMPIONS LEAGUE WINNERS 2023**  

FC Barcelona pulled off a remarkable comeback to defeat VfL Wolfsburg 3-2 to win the UEFA Women’s Champions League in Eindhoven.  

The Spanish team claimed their second UEFA Women’s Champions League trophy, coming back from 2-0 down at the break to eventually win the game 3-2. Goals from Ewa Pajor and Alexandra Popp gave the Germans the advantage, but Patri Guijarro’s quickfire double in the second half levelled the game. With FC Barcelona on the attack, the winning goal seemed inevitable, and it came in the 70th minute when Fridolina Rolfö finished from close range. Jubilant scenes followed the final whistle as Alexia Putellas lifted the trophy in front of an ecstatic crowd of 33,147.  

© FC BARCELONA  

© & © 2023 The Topps Company, Inc. All rights reserved.`,
};