import { Card } from "../types/card";
import { TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ab, TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ar } from "./cards/TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85";

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