import { Card, CardBrilli, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaChampionsLeagueEuropaLeague_2023_2024MatchAttaxExtra } from "../collections";

import i_162 from "../img/cards/aitana-bonmati-barcelona-162-match-attax-extra-23-24.jpg";
import i_162bc from "../img/cards/aitana-bonmati-barcelona-crystal-parallel-162-match-attax-extra-23-24.jpg";
import i_162_b from "../img/cards/i_162_b.jpg";

export const TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162: Card = {
  id: 'topps-uefa-champions-league-europa-league-2023-2024-match-attax-extra-162',
  number: 162,
  images: [
    i_162,
    i_162_b,
  ],
  name: 'Aitana Bonmatí #162',
  rarity: 1,
  status: CardStatus.Tengui,
  collection: ToppsUefaChampionsLeagueEuropaLeague_2023_2024MatchAttaxExtra,
  year: 2024,
  cardSection: 'FC Barcelona',
  cardType: [
    CardType.UWCL_Limelight,
  ],
  productType: CardProductType.GameCard,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162bc: Card = {
  id: 'topps-uefa-champions-league-europa-league-2023-2024-match-attax-extra-162bc',
  number: '162bc',
  images: [
    i_162bc,
    i_162_b,
  ],
  name: 'Aitana Bonmatí #162 Blue Crystall',
  rarity: 2,
  status: CardStatus.Tengui,
  brilli: CardBrilli.BlueCristall,
  collection: ToppsUefaChampionsLeagueEuropaLeague_2023_2024MatchAttaxExtra,
  year: 2024,
  cardSection: 'FC Barcelona',
  cardType: [
    CardType.UWCL_Limelight,
    CardType.BlueCrystall,
  ],
  productType: CardProductType.GameCard,
  orientation: CardOrientation.Vertical,
};