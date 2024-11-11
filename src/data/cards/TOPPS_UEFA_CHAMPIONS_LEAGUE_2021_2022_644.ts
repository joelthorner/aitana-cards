import { Card, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsUefaChampionsLeague_2021_2022 } from "../collections";

import tucl2122_644_0 from "../img/cards/tucl2122_644_0.jpg";
import tucl2122_644_1 from "../img/cards/tucl2122_644_1.webp";
import tucl2122_644_2 from "../img/cards/tucl2122_644_2.webp";
import { AlexiaPutellas, AnaMariaCrnogorcevic, AndreaPereira, BrunaVilamala, CarolineGrahamHansen, CataColl, JenniHermoso, KheiraHamraoui, LaiaCodina, LeilaOuahabi, LiekeMartens, LluisCortesCava, MapiLeon, MarionaCaldentey, MartaTorrejon, VickyLosada } from "../teammates";

const TOPPS_UEFA_CHAMPIONS_LEAGUE_2021_2022_644: Card = {
  id: 'topps-uefa-champions-league-2021-2022-644',
  number: 644,
  images: [
    tucl2122_644_0,
    tucl2122_644_1,
    tucl2122_644_2,
  ],
  name: 'FC Barcelona – 2020/21 Winners',
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsUefaChampionsLeague_2021_2022,
  year: 2021,
  links: [
    'https://www.laststicker.com/cards/topps_uefa_champions_league_2021-2022/644/',
  ],
  cardSection: 'UEFA Women’s Champions League',
  cardType: [
    CardType.BaseSet,
    CardType.TeamCard,
  ],
  productType: CardProductType.Sticker,
  orientation: CardOrientation.Horizontal,
  language: CardLanguage.EN,
  cardTextFront: `FC BARCELONA

2020/21 WINNERS`,
  cardTextBack: `UEFA CHAMPIONS LEAGUE

SEASON 2021/2022

**644**`,
  teammates: [
    CataColl,
    MartaTorrejon,
    BrunaVilamala,
    CarolineGrahamHansen,
    LaiaCodina,
    AndreaPereira,
    LluisCortesCava,
    LeilaOuahabi,
    LiekeMartens,
    MarionaCaldentey,
    KheiraHamraoui,
    AlexiaPutellas,
    AnaMariaCrnogorcevic,
    JenniHermoso,
    MapiLeon,
    VickyLosada,
  ],
};

export default TOPPS_UEFA_CHAMPIONS_LEAGUE_2021_2022_644;