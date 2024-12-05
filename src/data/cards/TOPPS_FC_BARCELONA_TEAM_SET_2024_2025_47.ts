import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsFcBarcelonaTeamSet_2024_2025 } from "../collections";

import tfcbts2425_47_0 from "../img/cards/tfcbts2425_47_0.jpg";
import tfcbts2425_47_1 from "../img/cards/tfcbts2425_47_1.webp";
import tfcbts2425_47_2 from "../img/cards/tfcbts2425_47_2.webp";
import tfcbts2425_47_3 from "../img/cards/tfcbts2425_47_3.jpg";
import tfcbts2425_47bu_0 from "../img/cards/tfcbts2425_47bu_0.jpg";
import tfcbts2425_47bu_1 from "../img/cards/tfcbts2425_47bu_1.webp";
import tfcbts2425_47bu_2 from "../img/cards/tfcbts2425_47bu_2.webp";
import tfcbts2425_47fs_0 from "../img/cards/tfcbts2425_47fs_0.jpg";
import tfcbts2425_47fs_1 from "../img/cards/tfcbts2425_47fs_1.webp";
import tfcbts2425_47fs_2 from "../img/cards/tfcbts2425_47fs_2.webp";

export const TOPPS_FC_BARCELONA_TEAM_SET_2024_2025_47: Card = {
  id: 'topps-fc-barcelona-team-set-2024-2025-47',
  number: 47,
  images: [
    tfcbts2425_47_0,
    tfcbts2425_47_1,
    tfcbts2425_47_2,
    tfcbts2425_47_3,
  ],
  name: 'Aitana Barça Bonafide Baller',
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsFcBarcelonaTeamSet_2024_2025,
  year: 2024,
  cardType: [
    CardType.BonafideBaller,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
};

export const TOPPS_FC_BARCELONA_TEAM_SET_2024_2025_47fs: Card = {
  id: 'topps-fc-barcelona-team-set-2024-2025-47fs',
  number: '47fs',
  images: [
    tfcbts2425_47fs_0,
    tfcbts2425_47fs_1,
    tfcbts2425_47fs_2,
  ],
  name: 'Aitana Barça Bonafide Baller Static Foil',
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsFcBarcelonaTeamSet_2024_2025,
  year: 2024,
  brilli: CardBrilli.Stars,
  cardType: [
    CardType.StaticFoil,
    CardType.BonafideBaller,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
};

export const TOPPS_FC_BARCELONA_TEAM_SET_2024_2025_47bu: Card = {
  id: 'topps-fc-barcelona-team-set-2024-2025-47bu',
  number: '47bu',
  images: [
    tfcbts2425_47bu_0,
    tfcbts2425_47bu_1,
    tfcbts2425_47bu_2,
  ],
  name: 'Aitana Barça Bonafide Baller Blue',
  rarity: 3,
  numbered: 250,
  status: CardStatus.Falti,
  collection: ToppsFcBarcelonaTeamSet_2024_2025,
  year: 2024,
  cardType: [
    CardType.Blue,
    CardType.BonafideBaller,
  ],
  brilli: CardBrilli.BlueTopps,
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
};
