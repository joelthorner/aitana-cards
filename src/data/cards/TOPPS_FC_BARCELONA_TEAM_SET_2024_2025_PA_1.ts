import { Card, CardBrilli, CardFlag, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsFcBarcelonaTeamSet_2024_2025 } from "../collections";

import tfcbts2425_PA1_0 from "../img/cards/tfcbts2425_PA1_0.jpg";
import tfcbts2425_PA1_1 from "../img/cards/tfcbts2425_PA1_1.webp";

export const TOPPS_FC_BARCELONA_TEAM_SET_2024_2025_PA1: Card = {
  customRelatedsRegexp: /PA-1[a-z]*$/,
  id: 'topps-fc-barcelona-team-set-2024-2025-PA-1',
  number: 'PA-1',
  images: [
    tfcbts2425_PA1_0,
    tfcbts2425_PA1_1,
  ],
  name: 'Aitana Pathway',
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsFcBarcelonaTeamSet_2024_2025,
  year: 2024,
  cardSection: 'Pathway',
  cardType: [
    CardType.Pathway,
  ],
  brilli: CardBrilli.Holo,
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
  flags: [
    CardFlag.MissingBackImage,
  ],
};