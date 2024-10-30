/**
 * @todo Missing data of [85gr] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85o] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85r] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85g] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85a] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85a-p] Excel data 4 more detail [search & add data]
 * @todo Missing data of [85a-g] Excel data 4 more detail [search & add data]
 */
import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card"
import { ToppsMerlinHeritage_98UccSeason_2022_2023 } from "../collections";

import toppsMerlinHeritage_98UccSeason_2022_2023_85 from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85.jpg";
import toppsMerlinHeritage_98UccSeason_2022_2023_85_back from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85_back.jpg";
import toppsMerlinHeritage_98UccSeason_2022_2023_85_rainbow_5of5 from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85_rainbow_5of5.jpg";
import toppsMerlinHeritage_98UccSeason_2022_2023_85_blue_xof49 from "../img/cards/topps-merlin-heritage-98-ucc-season-2022-2023_85_blue_xof49.jpg";
import tmh85ar_3 from "../img/cards/tmh85ar_3.webp";
import tmh85ar_4 from "../img/cards/tmh85ar_4.webp";
import tmh85ar_5 from "../img/cards/tmh85ar_5.webp";
import tmh98us85 from "../img/cards/tmh98us85.jpg";
import tmh98us85b_0 from "../img/cards/tmh98us85b_0.jpg";
import tmh98us85b_1 from "../img/cards/tmh98us85b_1.webp";
import tmh98us85b_2 from "../img/cards/tmh98us85b_2.webp";
import tmh98us85b_3 from "../img/cards/tmh98us85b_3.webp";
import tmh98usgr_0 from "../img/cards/tmh98usgr_0.jpg";
import tmh98usgr_1 from "../img/cards/tmh98usgr_1.webp";
import tmh98usgr_2 from "../img/cards/tmh98usgr_2.webp";
import tmh98usgr_3 from "../img/cards/tmh98usgr_3.webp";
import tmh98us85r1 from "../img/cards/tmh98us85r1.jpg";
import tmh98us85r2 from "../img/cards/tmh98us85r2.webp";
import tmh85ao_1 from "../img/cards/tmh85ao_1.jpg";
import tmh85ao_2 from "../img/cards/tmh85ao_2.jpg";

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

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85gr: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023-85gr',
  number: '85gr',
  numbered: 99,
  images: [
    tmh98usgr_0,
    tmh98usgr_1,
    tmh98usgr_2,
    tmh98usgr_3,
  ],
  name: 'Aitana Bonmatí Green',
  rarity: 3,
  status: CardStatus.Falti,
  collection: ToppsMerlinHeritage_98UccSeason_2022_2023,
  year: 2022,
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona / Women',
  brilli: CardBrilli.GreenFoil,
  cardType: [
    CardType.BaseCard,
    CardType.Green,
  ],
};

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85b: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023-85b',
  number: '85b',
  numbered: 49,
  images: [
    tmh98us85b_0,
    tmh98us85b_1,
    tmh98us85b_2,
    tmh98us85b_3,
  ],
  name: 'Aitana Bonmatí Blue',
  rarity: 4,
  status: CardStatus.Falti,
  collection: ToppsMerlinHeritage_98UccSeason_2022_2023,
  year: 2022,
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona / Women',
  brilli: CardBrilli.BlueTopps,
  cardType: [
    CardType.BaseCard,
    CardType.Blue,
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

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85r: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023-85r',
  number: '85r',
  numbered: 5,
  images: [
    tmh98us85r1,
    tmh98us85r2,
  ],
  name: 'Aitana Bonmatí Rainbow',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsMerlinHeritage_98UccSeason_2022_2023,
  year: 2022,
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona / Women',
  brilli: CardBrilli.Holo,
  cardType: [
    CardType.BaseCard,
    CardType.Rainbow,
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

export const TOPPS_MERLIN_HERITAGE_98_UCC_SEASON_2022_2023_85ao: Card = {
  id: 'topps-merlin-heritage-98-ucc-season-2022-2023-85a-o',
  number: '85a-o',
  images: [
    tmh85ao_1,
    tmh85ao_2,
  ],
  name: 'Aitana Bonmati Base card / Autograph / Orange',
  rarity: 5,
  status: CardStatus.Falti,
  collection: ToppsMerlinHeritage_98UccSeason_2022_2023,
  year: 2022,
  brilli: CardBrilli.OrangeFoil,
  productType: CardProductType.Card,
  cardSection: 'FC Barcelona / Women',
  cardType: [
    CardType.BaseCard,
    CardType.Autographs,
    CardType.Orange,
  ],
  numbered: 10,
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