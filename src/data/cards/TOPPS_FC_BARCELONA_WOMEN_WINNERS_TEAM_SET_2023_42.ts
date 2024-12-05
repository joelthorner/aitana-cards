import { Card, CardBrilli, CardFlag, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsFcBarcelonaWomenWinnersTeamSet_2023 } from "../collections";
import { CarolineGrahamHansen, FridolinaRolfo, IreneParedes, KeiraWalsh, LucyBronze, MapiLeon, MarionaCaldentey, PatriGuijarro, SalmaParalluelo, SandraPanos } from "../teammates";

import aitanaBonmatiBaseFcbWomenWinners_23TeamCard from "../img/cards/aitanaBonmatiBaseFcbWomenWinners_23TeamCard.jpg";
import tcbwwts42gr_0 from "../img/cards/tcbwwts42gr_0.jpg";
import tcbwwts42gr_1 from "../img/cards/tcbwwts42gr_1.webp";
import tcbwwts42gr_2 from "../img/cards/tcbwwts42gr_2.webp";
import tcbwwts42r_0 from "../img/cards/tcbwwts42r_0.jpg";
import tcbwwts42r_1 from "../img/cards/tcbwwts42r_1.webp";

const teammates = [
  PatriGuijarro,
  IreneParedes,
  SalmaParalluelo,
  FridolinaRolfo,
  MapiLeon,
  SandraPanos,
  CarolineGrahamHansen,
  KeiraWalsh,
  MarionaCaldentey,
  LucyBronze,
];

const cardTextBack = `**CHAMPIONS 2023**

FC BARCELONA

© FC BARCELONA

® & © 2023 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED. TOPPS IS A REGISTERED TRADEMARK OF
THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED`;

export const TOPPS_FC_BARCELONA_WOMEN_WINNERS_TEAM_SET_2023_42: Card = {
  id: 'topps-fc-barcelona-women-winners-team-set-2023-42',
  number: 42,
  images: [
    aitanaBonmatiBaseFcbWomenWinners_23TeamCard,
  ],
  name: 'FC Barcelona Champions 2023',
  rarity: 1,
  status: CardStatus.Falti,
  collection: ToppsFcBarcelonaWomenWinnersTeamSet_2023,
  year: 2023,
  cardSection: "Champions Team Card",
  cardType: [
    CardType.BaseSet,
    CardType.TeamCard,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
  teammates,
  flags: [
    CardFlag.MissingBackImage,
  ],
  language: CardLanguage.EN,
  cardTextFront: `**FC BARCELONA CHAMPIONS 2023**`,
  cardTextBack,
};

export const TOPPS_FC_BARCELONA_WOMEN_WINNERS_TEAM_SET_2023_42gr: Card = {
  id: 'topps-fc-barcelona-women-winners-team-set-2023-42gr',
  number: '42gr',
  images: [
    tcbwwts42gr_0,
    tcbwwts42gr_1,
    tcbwwts42gr_2,
  ],
  name: 'FC Barcelona Champions 2023 Green',
  rarity: 3,
  numbered: 99,
  status: CardStatus.Falti,
  collection: ToppsFcBarcelonaWomenWinnersTeamSet_2023,
  year: 2023,
  cardSection: "Champions Team Card",
  brilli: CardBrilli.GreenFoil,
  cardType: [
    CardType.BaseSet,
    CardType.TeamCard,
    CardType.Green,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
  teammates,
  language: CardLanguage.EN,
  cardTextFront: `74/99
  
  **FC BARCELONA CHAMPIONS 2023**`,
  cardTextBack,
};

export const TOPPS_FC_BARCELONA_WOMEN_WINNERS_TEAM_SET_2023_42r: Card = {
  id: 'topps-fc-barcelona-women-winners-team-set-2023-42r',
  number: '42r',
  images: [
    tcbwwts42r_0,
    tcbwwts42r_1,
  ],
  name: 'FC Barcelona Champions 2023 Red',
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsFcBarcelonaWomenWinnersTeamSet_2023,
  year: 2023,
  cardSection: "Champions Team Card",
  brilli: CardBrilli.RedFoil,
  cardType: [
    CardType.BaseSet,
    CardType.TeamCard,
    CardType.Red,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
  teammates,
  language: CardLanguage.EN,
  cardTextFront: `09/10
  
  **FC BARCELONA CHAMPIONS 2023**`,
  cardTextBack,
};
