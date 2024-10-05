/**
 * @todo Missing data of [85gr] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85b] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85p] Excel data 4 more detail [search & add data]
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
};

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ar: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023-85a-r',
  number: '85a-r',
  images: [
    toppsMerlinHeritage_98UccSeason_2022_2023_85_rainbow_5of5,
    toppsMerlinHeritage_98UccSeason_2022_2023_85_back,
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
};