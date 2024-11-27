import { Card, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsFocusFcBarcelona_2023_2024 } from "../collections";
import { AlexiaPutellas } from "../teammates";

import tffb2324_SD_AA_0 from "../img/cards/tffb2324_SD_AA_0.jpg";
import tffb2324_SD_AA_1 from "../img/cards/tffb2324_SD_AA_1.jpg";
import tffb2324_SD_AA_2 from "../img/cards/tffb2324_SD_AA_2.jpg";
import tffb2324_SD_AA_3 from "../img/cards/tffb2324_SD_AA_3.jpg";

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_SD_AA: Card = {
  customRelatedsRegexp: /SD-AA[a-z]*$/,
  id: 'topps-focus-fc-barcelona-2023-2024-SD-AA',
  number: 'SD-AA',
  images: [
    tffb2324_SD_AA_0,
    tffb2324_SD_AA_1,
    tffb2324_SD_AA_2,
    tffb2324_SD_AA_3,
  ],
  name: 'Aitana Bonmatí / Alexia Putellas Synergy Dual Autograph',
  rarity: 5,
  numbered: 10,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Synergy Dual Autographs",
  cardType: [
    CardType.DualAutographs,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Horizontal,
  teammates: [
    AlexiaPutellas,
  ],
  language: CardLanguage.EN,
  links: [
    'https://www.instagram.com/p/C7v8GLjogrf/?img_index=3&igsh=bDRudDFjMGw0azlz',
  ],
};
