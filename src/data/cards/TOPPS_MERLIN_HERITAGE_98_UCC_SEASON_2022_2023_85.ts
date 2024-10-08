/**
 * @todo Missing data of [85gr] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85b] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85o] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85r] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85g] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85a] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85a-p] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85a-o] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85a-g] Excel data 4 more detail [search & add data]
 */
import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card"
import { ToppsMerlinHeritage_98UccSeason_2022_2023 } from "../collections";

import toppsMerlinHeritage_98UccSeason_2022_2023_85 from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85.png";
import toppsMerlinHeritage_98UccSeason_2022_2023_85_back from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85_back.png";
import toppsMerlinHeritage_98UccSeason_2022_2023_85_rainbow_5of5 from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85_rainbow_5of5.png";
import toppsMerlinHeritage_98UccSeason_2022_2023_85_blue_xof49 from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85_blue_xof49.png";
import tmh85ar_3 from "../img/cards/tmh85ar_3.webp";
import tmh85ar_4 from "../img/cards/tmh85ar_4.webp";
import tmh85ar_5 from "../img/cards/tmh85ar_5.webp";
import tmh98us85 from "../img/cards/tmh98us85.png";

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023-85',
  number: 85,
  images: [
    toppsMerlinHeritage_98UccSeason_2022_2023_85,
    toppsMerlinHeritage_98UccSeason_2022_2023_85_back,
  ],
  name: 'Aitana Bonmatí - #85',
  rarity: 2,
  status: CardStatus.Tengui,
  collection: ToppsMerlinHeritage_98UccSeason_2022_2023,
  year: 2022,
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona / Women',
  cardType: [
    CardType.BaseCard,
  ],
};

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85p: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023-85p',
  number: '85p',
  numbered: 25,
  images: [
    tmh98us85,
  ],
  name: 'Aitana Bonmatí Purple',
  rarity: 4,
  status: CardStatus.Falti,
  collection: ToppsMerlinHeritage_98UccSeason_2022_2023,
  year: 2022,
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona / Women',
  brilli: CardBrilli.PurpleFoil,
  cardType: [
    CardType.BaseCard,
    CardType.Purple,
  ],
};

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ab: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023-85a-b',
  number: '85a-b',
  images: [
    toppsMerlinHeritage_98UccSeason_2022_2023_85_blue_xof49,
    toppsMerlinHeritage_98UccSeason_2022_2023_85_back,
  ],
  name: 'Aitana Bonmati	Base card / Autograph / Blue',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsMerlinHeritage_98UccSeason_2022_2023,
  year: 2022,
  brilli: CardBrilli.BlueTopps,
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona / Women',
  cardType: [
    CardType.BaseCard,
    CardType.Autographs,
    CardType.Blue,
  ],
  numbered: 49,
};

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ar: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023-85a-r',
  number: '85a-r',
  images: [
    toppsMerlinHeritage_98UccSeason_2022_2023_85_rainbow_5of5,
    toppsMerlinHeritage_98UccSeason_2022_2023_85_back,
    tmh85ar_3,
    tmh85ar_4,
    tmh85ar_5,
  ],
  name: 'Aitana Bonmati Base card / Autograph / Rainbow',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsMerlinHeritage_98UccSeason_2022_2023,
  year: 2022,
  brilli: CardBrilli.Rainbow,
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona / Women',
  cardType: [
    CardType.BaseCard,
    CardType.Autographs,
    CardType.Rainbow,
  ],
  numbered: 5,
};