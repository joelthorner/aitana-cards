import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniFifa_365_2024 } from "../collections";
import pf365_24_423_0 from "../img/cards/pf365_24_423_0.jpg";
import pf365_24_423_1 from "../img/cards/pf365_24_423_1.webp";
import pf365_24_423_2 from "../img/cards/pf365_24_423_2.webp";

const PANINI_FIFA_365_2024_423: Card = {
  id: 'panini-fifa-365-2024-423',
  number: 423,
  images: [
    pf365_24_423_0,
    pf365_24_423_1,
    pf365_24_423_2,
  ],
  name: `FIFA Women's World Cup AU/NZ 2023 awards`,
  rarity: 2,
  status: CardStatus.Falti,
  collection: PaniniFifa_365_2024,
  year: 2023,
  cardSection: "FiFa Women's World Cup 2023",
  cardType: [
    CardType.BaseSet,
    CardType.Gold,
  ],
  links: [
    'https://www.laststicker.com/cards/panini_fifa_365_2023-2024/423/',
  ],
  productType: CardProductType.Sticker,
  orientation: CardOrientation.Horizontal,
  brilli: CardBrilli.GoldMetal,
  language: CardLanguage.EN,
};

export default PANINI_FIFA_365_2024_423;