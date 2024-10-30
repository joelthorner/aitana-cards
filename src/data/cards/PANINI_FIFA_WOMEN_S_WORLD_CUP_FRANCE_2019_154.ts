/**
 * COMPLETED data
 */
import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniFifaWomenSWorldCupFrance_2019 } from "../collections";
import franceWomanWC154 from "../img/cards/154franceWomanWC.jpg";
import franceWomanWC154_back from "../img/cards/203645-12952030Bk.jpg";

const PANINI_FIFA_WOMEN_S_WORLD_CUP_FRANCE_2019_154: Card = {
  id: 'panini-fifa-women-s-world-cup-france-2019-154',
  number: 154,
  images: [
    franceWomanWC154,
    franceWomanWC154_back,
  ],
  name: 'Aitana Bonmatí #154',
  rarity: 1,
  status: CardStatus.Tengui,
  collection: PaniniFifaWomenSWorldCupFrance_2019,
  year: 2019,
  cardSection: "Spain",
  cardType: [CardType.BaseSet],
  productType: CardProductType.Sticker,
};

export default PANINI_FIFA_WOMEN_S_WORLD_CUP_FRANCE_2019_154;