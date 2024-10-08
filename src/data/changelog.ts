import { Changelog, LineType } from "../types/changelog";
import PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_167 from "./cards/PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_167";
import PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21 from "./cards/PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21";
import { TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ab, TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ar, TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85p } from "./cards/TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85";
import { TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162, TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162bc } from "./cards/TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162";
import { TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_343 } from "./cards/TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_343";
import TOPPS_UEFA_LIVING_SET_2023_512 from "./cards/TOPPS_UEFA_LIVING_SET_2023_512";
import { TOPPS_UEFA_SIMPLICIDAD_2023_5, TOPPS_UEFA_SIMPLICIDAD_2023_5gr, TOPPS_UEFA_SIMPLICIDAD_2023_5p, TOPPS_UEFA_SIMPLICIDAD_2023_5pu, TOPPS_UEFA_SIMPLICIDAD_2023_5r, TOPPS_UEFA_SIMPLICIDAD_2023_5rb, TOPPS_UEFA_SIMPLICIDAD_2023_A5gr, TOPPS_UEFA_SIMPLICIDAD_2023_A5pu, TOPPS_UEFA_SIMPLICIDAD_2023_A5r } from "./cards/TOPPS_UEFA_SIMPLICIDAD_2023_5";
import { PaniniUefaWomenSEuroEngland_2022, ToppsUefaChampionsLeagueEuropaLeague_2023_2024MatchAttaxExtra, ToppsUefaLivingSet_2023, ToppsUefaSimplicidad_2023 } from "./collections";

export const changelog: Changelog[] = [
  {
    date: new Date('10/09/2024'),
    items: [
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_SIMPLICIDAD_2023_5rb,
        text: TOPPS_UEFA_SIMPLICIDAD_2023_5rb.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85p,
        text: TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85p.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_SIMPLICIDAD_2023_A5r,
        text: TOPPS_UEFA_SIMPLICIDAD_2023_A5r.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_SIMPLICIDAD_2023_A5gr,
        text: TOPPS_UEFA_SIMPLICIDAD_2023_A5gr.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_SIMPLICIDAD_2023_A5pu,
        text: TOPPS_UEFA_SIMPLICIDAD_2023_A5pu.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_SIMPLICIDAD_2023_5pu,
        text: TOPPS_UEFA_SIMPLICIDAD_2023_5pu.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_SIMPLICIDAD_2023_5r,
        text: TOPPS_UEFA_SIMPLICIDAD_2023_5r.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_SIMPLICIDAD_2023_5gr,
        text: TOPPS_UEFA_SIMPLICIDAD_2023_5gr.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_SIMPLICIDAD_2023_5p,
        text: TOPPS_UEFA_SIMPLICIDAD_2023_5p.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_SIMPLICIDAD_2023_5,
        text: TOPPS_UEFA_SIMPLICIDAD_2023_5.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        collection: ToppsUefaSimplicidad_2023,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_LIVING_SET_2023_512,
        text: TOPPS_UEFA_LIVING_SET_2023_512.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        collection: ToppsUefaLivingSet_2023,
        user: 'joelthorner',
      },
      {
        type: LineType.CHANGED,
        card: TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ar,
        text: 'Added `3` additional images',
        user: 'joelthorner',
      },
    ],
  },
  {
    date: new Date('10/08/2024'),
    items: [
      {
        type: LineType.ADDED,
        card: PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21,
        text: PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21.collection.name,
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
        collection: PaniniUefaWomenSEuroEngland_2022,
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
        type: LineType.ADDED,
        collection: ToppsUefaChampionsLeagueEuropaLeague_2023_2024MatchAttaxExtra,
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