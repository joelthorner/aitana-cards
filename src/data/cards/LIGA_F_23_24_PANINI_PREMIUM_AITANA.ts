import { Card, CardBrilli, CardStatus } from "../../types/card";
import { LigaF_22_23Panini } from "../collections";

import ligaFPremium from '../img/cards/ligaFPremium.png';

const LIGA_F_23_24_PANINI_PREMIUM_AITANA: Card = {
  id: 'liga-f-23-24-panini-premium-aitana',
  images: [
    ligaFPremium,
  ],
  name: 'Aitana Bonmatí	Premium',
  rarity: 2,
  status: CardStatus.Tengui,
  collection: LigaF_22_23Panini,
  year: 2023,
  brilli: CardBrilli.GoldFoil,
};

export default LIGA_F_23_24_PANINI_PREMIUM_AITANA;