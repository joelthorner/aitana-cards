import { Card, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniFifa_365_2024 } from "../collections";
import pf365_24_425_0 from "../img/cards/pf365_24_425_0.jpg";
import pf365_24_425_1 from "../img/cards/pf365_24_425_1.webp";
import pf365_24_425_2 from "../img/cards/pf365_24_425_2.webp";

const PANINI_FIFA_365_2024_425: Card = {
  id: 'panini-fifa-365-2024-425',
  number: 425,
  images: [
    pf365_24_425_0,
    pf365_24_425_1,
    pf365_24_425_2,
  ],
  name: `Irene Paredes / Ona Batlle / Aitana Bonmati`,
  rarity: 1,
  status: CardStatus.Falti,
  collection: PaniniFifa_365_2024,
  year: 2023,
  cardSection: "FiFa Women's World Cup 2023",
  cardType: [
    CardType.BaseCard,
  ],
  links: [
    'https://www.laststicker.com/cards/panini_fifa_365_2023-2024/425/',
  ],
  productType: CardProductType.Sticker,
  orientation: CardOrientation.Horizontal,
  language: CardLanguage.EN,
};

export default PANINI_FIFA_365_2024_425;