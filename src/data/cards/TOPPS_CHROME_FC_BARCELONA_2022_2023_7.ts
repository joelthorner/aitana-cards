/**
 * COMPLETED data
 * @todo missing some image cards
 */
import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card"
import { ToppsChromeFcBarcelona_2022_2023 } from "../collections";

import aitanaBonmati_7ChromeFcb_22_23 from "../img/cards/aitana-bonmati-7-chrome-fcb-22-23.jpg";
import aitanaBonmati_7ChromeFcb_22_23_refractor from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_refractor.png";
import aitanaBonmati_7ChromeFcb_22_23_refractor_back from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_refractor_back.webp";
import aitanaBonmati_7ChromeFcb_22_23_bnw_refractor from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_bnw_refractor.png";
import aitanaBonmati_7ChromeFcb_22_23_x_fractor from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_x_fractor.png";
import aitanaBonmati_7ChromeFcb_22_23_x_fractor_back from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_x_fractor_back.webp";
import aitanaBonmati_7ChromeFcb_22_23_barsa_refactor from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_barsa_refactor.png";
import aitanaBonmati_7ChromeFcb_22_23_barsa_refactor_back from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_barsa_refactor_back.webp";
import aitanaBonmati_7ChromeFcb_22_23_blue from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_blue.png";
import aitanaBonmati_7ChromeFcb_22_23_blue_detail_1 from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_blue_detail_1.png";
import aitanaBonmati_7ChromeFcb_22_23_blue_detail_2 from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_blue_detail_2.png";
import aitanaBonmati_7ChromeFcb_22_23_blue_back from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_blue_back.png";
import aitanaBonmati_7ChromeFcb_22_23_gold_refractor from "../img/cards/aitanaBonmati_7ChromeFcb_22_23_gold_refractor.png";

export const TOPPS_CHROME_FC_BARCELONA_2022_2023_7: Card = {
  id: 'topps-chrome-fc-barcelona-2022-2023-7',
  number: 7,
  images: [aitanaBonmati_7ChromeFcb_22_23],
  name: 'Aitana Bonmatí Base card #7',
  rarity: 1,
  status: CardStatus.Tengui,
  collection: ToppsChromeFcBarcelona_2022_2023,
  year: 2023,
  cardType: [
    CardType.BaseCard,
  ],
  cardSection: 'FC Barcelona',
  productType: CardProductType.Card,
};

export const TOPPS_CHROME_FC_BARCELONA_2022_2023_REFRACTOR_7rf: Card = {
  id: 'topps-chrome-fc-barcelona-2022-2023-7rf',
  number: '7rf',
  images: [
    aitanaBonmati_7ChromeFcb_22_23_refractor,
    aitanaBonmati_7ChromeFcb_22_23_refractor_back,
  ],
  name: 'Aitana Bonmatí Base card / Refractor',
  rarity: 2,
  status: CardStatus.Falti,
  brilli: CardBrilli.Refractor,
  collection: ToppsChromeFcBarcelona_2022_2023,
  year: 2023,
  cardType: [
    CardType.BaseCard,
    CardType.Refractor,
  ],
  cardSection: 'FC Barcelona',
  productType: CardProductType.Card,
};

export const TOPPS_CHROME_FC_BARCELONA_2022_2023_7x: Card = {
  id: 'topps-chrome-fc-barcelona-2022-2023-7x',
  number: '7x',
  images: [
    aitanaBonmati_7ChromeFcb_22_23_x_fractor,
    aitanaBonmati_7ChromeFcb_22_23_x_fractor_back,
  ],
  name: 'Aitana Bonmatí Base card / X-Fractor',
  rarity: 2,
  status: CardStatus.Falti,
  brilli: CardBrilli.Holo,
  collection: ToppsChromeFcBarcelona_2022_2023,
  year: 2023,
  cardType: [
    CardType.BaseCard,
    CardType.XFractor,
  ],
  cardSection: 'FC Barcelona',
  productType: CardProductType.Card,
};

export const TOPPS_CHROME_FC_BARCELONA_2022_2023_7b: Card = {
  id: 'topps-chrome-fc-barcelona-2022-2023-7b',
  number: '7b',
  images: [
    aitanaBonmati_7ChromeFcb_22_23_bnw_refractor,
  ],
  name: 'Aitana Bonmatí Base card / Black & White Wave',
  rarity: 3,
  status: CardStatus.Falti,
  brilli: CardBrilli.SlimVerticalRefractor,
  collection: ToppsChromeFcBarcelona_2022_2023,
  year: 2023,
  cardType: [
    CardType.BaseCard,
    CardType.BlackAndWhiteWave,
  ],
  cardSection: 'FC Barcelona',
  productType: CardProductType.Card,
};

export const TOPPS_CHROME_FC_BARCELONA_2022_2023_7ba: Card = {
  id: 'topps-chrome-fc-barcelona-2022-2023-7ba',
  number: '7ba',
  images: [
    aitanaBonmati_7ChromeFcb_22_23_barsa_refactor,
    aitanaBonmati_7ChromeFcb_22_23_barsa_refactor_back,
  ],
  name: 'Aitana Bonmatí Base card / Barça',
  rarity: 2,
  status: CardStatus.Falti,
  brilli: CardBrilli.Refractor,
  collection: ToppsChromeFcBarcelona_2022_2023,
  year: 2023,
  numbered: 99,
  cardType: [
    CardType.BaseCard,
    CardType.Barça,
  ],
  cardSection: 'FC Barcelona',
  productType: CardProductType.Card,
};

export const TOPPS_CHROME_FC_BARCELONA_2022_2023_7bu: Card = {
  id: 'topps-chrome-fc-barcelona-2022-2023-7bu',
  number: '7bu',
  images: [
    aitanaBonmati_7ChromeFcb_22_23_blue,
    aitanaBonmati_7ChromeFcb_22_23_blue_detail_1,
    aitanaBonmati_7ChromeFcb_22_23_blue_detail_2,
    aitanaBonmati_7ChromeFcb_22_23_blue_back,
  ],
  name: 'Aitana Bonmatí Base card / Blue',
  rarity: 4,
  status: CardStatus.Falti,
  brilli: CardBrilli.BlueTopps,
  collection: ToppsChromeFcBarcelona_2022_2023,
  year: 2023,
  numbered: 75,
  cardType: [
    CardType.BaseCard,
    CardType.Blue,
  ],
  cardSection: 'FC Barcelona',
  productType: CardProductType.Card,
};

export const TOPPS_CHROME_FC_BARCELONA_2022_2023_7g: Card = {
  id: 'topps-chrome-fc-barcelona-2022-2023-7g',
  number: '7g',
  images: [
    aitanaBonmati_7ChromeFcb_22_23_gold_refractor,
  ],
  name: 'Aitana Bonmatí Base card / Gold',
  rarity: 5,
  status: CardStatus.Falti,
  brilli: CardBrilli.GoldFoil,
  collection: ToppsChromeFcBarcelona_2022_2023,
  year: 2023,
  numbered: 50,
  cardType: [
    CardType.BaseCard,
    CardType.Gold,
  ],
  cardSection: 'FC Barcelona',
  productType: CardProductType.Card,
};

// export const TOPPS_CHROME_FC_BARCELONA_2022_2023_7o: Card = {
//   id: 'topps-chrome-fc-barcelona-2022-2023-7o',
//   number: '7o',
//   images: [],
//   missingImage: aitanaBonmati_7ChromeFcb_22_23_refractor,
//   name: 'Aitana Bonmatí Base card / Orange X-Fractor',
//   rarity: 5,
//   status: CardStatus.Falti,
//   collection: ToppsChromeFcBarcelona_2022_2023,
//   year: 2023,
//   numbered: 25,
//   cardType: [
//     CardType.BaseCard,
//     CardType.OrangeXFractor,
//   ],
//   cardSection: 'FC Barcelona',
//   productType: CardProductType.Card,
// };

// export const TOPPS_CHROME_FC_BARCELONA_2022_2023_7pu: Card = {
//   id: 'topps-chrome-fc-barcelona-2022-2023-7pu',
//   number: '7pu',
//   images: [],
//   missingImage: aitanaBonmati_7ChromeFcb_22_23_refractor,
//   name: 'Aitana Bonmatí Base card / Purple',
//   rarity: 5,
//   status: CardStatus.Falti,
//   collection: ToppsChromeFcBarcelona_2022_2023,
//   year: 2023,
//   numbered: 15,
//   cardType: [
//     CardType.BaseCard,
//     CardType.Purple,
//   ],
//   cardSection: 'FC Barcelona',
//   productType: CardProductType.Card,
// };

// export const TOPPS_CHROME_FC_BARCELONA_2022_2023_7r: Card = {
//   id: 'topps-chrome-fc-barcelona-2022-2023-7r',
//   number: '7r',
//   images: [],
//   missingImage: aitanaBonmati_7ChromeFcb_22_23_refractor,
//   name: 'Aitana Bonmatí Base card / Red X-Fractor',
//   rarity: 5,
//   status: CardStatus.Falti,
//   collection: ToppsChromeFcBarcelona_2022_2023,
//   year: 2023,
//   numbered: 5,
//   cardType: [
//     CardType.BaseCard,
//     CardType.RedXFractor,
//   ],
//   cardSection: 'FC Barcelona',
//   productType: CardProductType.Card,
// };

// export const TOPPS_CHROME_FC_BARCELONA_2022_2023_7sf: Card = {
//   id: 'topps-chrome-fc-barcelona-2022-2023-7sf',
//   number: '7sf',
//   images: [],
//   missingImage: aitanaBonmati_7ChromeFcb_22_23_refractor,
//   name: 'Aitana Bonmatí Base card / SuperFractor',
//   rarity: 5,
//   status: CardStatus.Falti,
//   collection: ToppsChromeFcBarcelona_2022_2023,
//   year: 2023,
//   numbered: 1,
//   cardType: [
//     CardType.BaseCard,
//     CardType.SuperFractor,
//   ],
//   cardSection: 'FC Barcelona',
//   productType: CardProductType.Card,
// };