import { Changelog, LineType } from "../types/changelog";
import PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_167 from "./cards/PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_167";
import PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21 from "./cards/PANINI_UEFA_WOMEN_S_EURO_ENGLAND_2022_21";
import { TOPPS_CHROME_FC_BARCELONA_2022_2023_57rf } from "./cards/TOPPS_CHROME_FC_BARCELONA_2022_2023_57";
import { TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ab, TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ar, TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85p } from "./cards/TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85";
import { TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162, TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162bc } from "./cards/TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_162";
import { TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_343 } from "./cards/TOPPS_UEFA_CHAMPIONS_LEAGUE_EUROPA_LEAGUE_2023_2024_MATCH_ATTAX_EXTRA_343";
import TOPPS_UEFA_LIVING_SET_2023_512 from "./cards/TOPPS_UEFA_LIVING_SET_2023_512";
import { TOPPS_UEFA_SIMPLICIDAD_2023_5, TOPPS_UEFA_SIMPLICIDAD_2023_5gr, TOPPS_UEFA_SIMPLICIDAD_2023_5p, TOPPS_UEFA_SIMPLICIDAD_2023_5pu, TOPPS_UEFA_SIMPLICIDAD_2023_5r, TOPPS_UEFA_SIMPLICIDAD_2023_5rb, TOPPS_UEFA_SIMPLICIDAD_2023_A5gr, TOPPS_UEFA_SIMPLICIDAD_2023_A5pu, TOPPS_UEFA_SIMPLICIDAD_2023_A5r } from "./cards/TOPPS_UEFA_SIMPLICIDAD_2023_5";
import { TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14, TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14ap, TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14bm, TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14g, TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14pp, TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14r, TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14rgm, TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AAB, TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AABg, TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AABi, TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AABpp } from "./cards/TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14";
import { TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_DARBo } from "./cards/TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_A_AB";
import { PaniniUefaWomenSEuroEngland_2022, ToppsUefaChampionsLeagueEuropaLeague_2023_2024MatchAttaxExtra, ToppsUefaLivingSet_2023, ToppsUefaSimplicidad_2023, ToppsUefaWomenSChampionsLeagueChrome_2022_2023 } from "./collections";

export const changelog: Changelog[] = [
  {
    date: new Date('2024-10-11'),
    items: [
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14r,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14r.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14g,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14g.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AAB,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AAB.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AABpp,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AABpp.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AABg,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AABg.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AABi,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_AABi.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.CHANGED,
        collection: ToppsUefaSimplicidad_2023,
        text: 'Changed name `Topps uefa simplicidad 2023` to `Topps Simplicidad UEFA 2022-2023`',
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14ap,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14ap.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14bm,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14bm.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14pp,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14pp.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14rgm,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_14rgm.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        card: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_DARBo,
        text: TOPPS_UEFA_WOMEN_S_CHAMPIONS_LEAGUE_CHROME_2022_2023_DARBo.collection.name,
        user: 'joelthorner',
      },
      {
        type: LineType.ADDED,
        collection: ToppsUefaWomenSChampionsLeagueChrome_2022_2023,
        user: 'joelthorner',
      },
      {
        type: LineType.CHANGED,
        card: TOPPS_CHROME_FC_BARCELONA_2022_2023_57rf,
        text: 'Added `2` additional images',
        user: 'joelthorner',
      },
    ],
  },
  {
    date: new Date('2024-10-10'),
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
    date: new Date('2024-10-08'),
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