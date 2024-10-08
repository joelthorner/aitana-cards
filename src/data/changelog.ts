import { Card } from "../types/card";
import { TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ab, TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ar } from "./cards/TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85";
import { TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162, TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162bc } from "./cards/TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162";
import { TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_343 } from "./cards/TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_343";

export enum LineType {
  ADDED = "Added",
  CHANGED = "Changed",
  REMOVED = "Removed",
};

export type ChangelogLine = {
  type: LineType;
  card: Card;
  text?: string;
  user: string;
};

export type Changelog = {
  date: Date,
  items: ChangelogLine[],
};

export const changelog: Changelog[] = [
  {
    date: new Date('08/10/2024'),
    items: [
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_343,
        text: TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_343.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162bc,
        text: TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162bc.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162,
        text: TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.CHANGED,
        card: TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ar,
        text: 'Set `numbered` to `5`',
        user: 'joelthorner',
      },
      {
        type: LineType.CHANGED,
        card: TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ab,
        text: 'Set `numbered` to `49`',
        user: 'joelthorner',
      },
    ],
  },
];