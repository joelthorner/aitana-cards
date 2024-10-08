import { Changelog, LineType } from "../types/changelog";
import PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_167 from "./cards/PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_167";
import PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21 from "./cards/PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21";
import { TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ab, TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ar } from "./cards/TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85";
import { TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162, TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162bc } from "./cards/TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162";
import { TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_343 } from "./cards/TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_343";
import { PaniniUefaWomenSEuroEngland_2022, ToppsUefaChampionsLeagueEuropaLeague_2023_2024MatchAttaxExtra } from "./collections";

export const changelog: Changelog[] = [
  {
    date: new Date('09/10/2024'),
    items: [
      {
        type: LineType.ADDED,
        card: PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21,
        text: PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        collection: PaniniUefaWomenSEuroEngland_2022,
        user: 'joelthorner',
      },
    ],
  },
  {
    date: new Date('08/10/2024'),
    items: [
      {
        type: LineType.ADDED,
        collection: ToppsUefaChampionsLeagueEuropaLeague_2023_2024MatchAttaxExtra,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_167,
        text: PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_167.collection.name,
        user: 'joelthorner',
      },
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