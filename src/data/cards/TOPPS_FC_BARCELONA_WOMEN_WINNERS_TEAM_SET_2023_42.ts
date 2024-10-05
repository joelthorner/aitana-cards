/**
 * @todo Missing data of [42gr] Excel data 4 more detail [no evidence]
 * @todo Missing data of [42bu] Excel data 4 more detail [no evidence]
 * @todo Missing data of [42pu] Excel data 4 more detail [no evidence]
 * @todo Missing data of [42r] Excel data 4 more detail [no evidence]
 * @todo Missing data of [42rb] Excel data 4 more detail [no evidence]
 * @todo Missing data of [42g] Excel data 4 more detail [no evidence]
 */
import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsFcBarcelonaWomenWinnersTeamSet_2023 } from "../collections";

import aitanaBonmatiBaseFcbWomenWinners_23TeamCard from "../img/cards/aitanaBonmatiBaseFcbWomenWinners_23TeamCard.png";

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
    CardType.BaseCard,
    CardType.TeamCard,
  ],
  productType: CardProductType.Card,
};
