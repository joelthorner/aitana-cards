import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsFcBarcelonaTeamSet_2024_2025 } from "../collections";

import tfcbts2425_RRABbu_0 from "../img/cards/tfcbts2425_RRABbu_0.jpg";
import tfcbts2425_RRABbu_1 from "../img/cards/tfcbts2425_RRABbu_1.webp";
import tfcbts2425_RRABbu_2 from "../img/cards/tfcbts2425_RRABbu_2.webp";
import tfcbts2425_RRABp_0 from "../img/cards/tfcbts2425_RRABp_0.jpg";
import tfcbts2425_RRABp_1 from "../img/cards/tfcbts2425_RRABp_1.webp";
import tfcbts2425_RRABp_2 from "../img/cards/tfcbts2425_RRABp_2.webp";
import tfcbts2425_RRABg_0 from "../img/cards/tfcbts2425_RRABg_0.jpg";
import tfcbts2425_RRABg_1 from "../img/cards/tfcbts2425_RRABg_1.webp";
import tfcbts2425_RRABg_2 from "../img/cards/tfcbts2425_RRABg_2.webp";

export const TOPPS_FC_BARCELONA_TEAM_SET_2024_2025_RR_ABbu: Card = {
  customRelatedsRegexp: /RR-AB[a-z]*$/,
  id: 'topps-fc-barcelona-team-set-2024-2025-RR-ABbu',
  number: 'RR-ABbu',
  images: [
    tfcbts2425_RRABbu_0,
    tfcbts2425_RRABbu_1,
    tfcbts2425_RRABbu_2,
  ],
  name: 'Aitana Barça Rumba Relics Blue',
  rarity: 3,
  numbered: 250,
  status: CardStatus.Falti,
  collection: ToppsFcBarcelonaTeamSet_2024_2025,
  year: 2024,
  cardSection: 'Barça Rumba Relics',
  cardType: [
    CardType.Relic,
    CardType.Blue,
  ],
  brilli: CardBrilli.BlueTopps,
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
};

export const TOPPS_FC_BARCELONA_TEAM_SET_2024_2025_RR_ABp: Card = {
  customRelatedsRegexp: /RR-AB[a-z]*$/,
  id: 'topps-fc-barcelona-team-set-2024-2025-RR-ABp',
  number: 'RR-ABp',
  images: [
    tfcbts2425_RRABp_0,
    tfcbts2425_RRABp_1,
    tfcbts2425_RRABp_2,
  ],
  name: 'Aitana Barça Rumba Relics Pink',
  rarity: 3,
  numbered: 99,
  status: CardStatus.Falti,
  collection: ToppsFcBarcelonaTeamSet_2024_2025,
  year: 2024,
  cardSection: 'Barça Rumba Relics',
  cardType: [
    CardType.Relic,
    CardType.Pink,
  ],
  brilli: CardBrilli.PinkFoil,
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
};

export const TOPPS_FC_BARCELONA_TEAM_SET_2024_2025_RR_ABg: Card = {
  customRelatedsRegexp: /RR-AB[a-z]*$/,
  id: 'topps-fc-barcelona-team-set-2024-2025-RR-ABg',
  number: 'RR-ABg',
  images: [
    tfcbts2425_RRABg_0,
    tfcbts2425_RRABg_1,
    tfcbts2425_RRABg_2,
  ],
  name: 'Aitana Barça Rumba Relics Gold',
  rarity: 5,
  numbered: 1,
  status: CardStatus.Falti,
  collection: ToppsFcBarcelonaTeamSet_2024_2025,
  year: 2024,
  cardSection: 'Barça Rumba Relics',
  cardType: [
    CardType.Relic,
    CardType.Gold,
  ],
  brilli: CardBrilli.GoldFoil,
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
};