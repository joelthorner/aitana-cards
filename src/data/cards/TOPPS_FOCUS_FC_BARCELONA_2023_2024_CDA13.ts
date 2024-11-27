import { Card, CardBrilli, CardFlag, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsFocusFcBarcelona_2023_2024 } from "../collections";

import tffb2324_CDA13_0 from "../img/cards/tffb2324_CDA13_0.jpg";
import tffb2324_CDA13_1 from "../img/cards/tffb2324_CDA13_1.jpg";

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_CDA13: Card = {
  customRelatedsRegexp: /CDA13[a-z]*$/,
  id: 'topps-focus-fc-barcelona-2023-2024-CDA13',
  number: 'CDA13',
  images: [
    tffb2324_CDA13_0,
    tffb2324_CDA13_1,
  ],
  name: 'Aitana Bonmatí Chromatic Distortions Autograph SuperFractor',
  rarity: 5,
  numbered: 1,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Chromatic Distortions Autographs",
  cardType: [
    CardType.SuperFractor,
    CardType.Autographs,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
  links: [
    'https://www.instagram.com/p/C-56luZOjA_/?igsh=c2JvbDV3N21ncXJ0',
  ],
  flags: [
    CardFlag.MissingBackImage,
  ],
  brilli: CardBrilli.SuperFractor,
};
