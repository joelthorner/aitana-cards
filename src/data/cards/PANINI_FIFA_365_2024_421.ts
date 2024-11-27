import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniFifa_365_2024 } from "../collections";
import pf365_24_0 from "../img/cards/pf365_24_0.jpg";
import pf365_24_1 from "../img/cards/pf365_24_1.webp";
import pf365_24_2 from "../img/cards/pf365_24_2.webp";

const PANINI_FIFA_365_2024_421: Card = {
  id: 'panini-fifa-365-2024-421',
  number: 421,
  images: [
    pf365_24_0,
    pf365_24_1,
    pf365_24_2,
  ],
  name: `Spain FIFA Women's World Cup AU/NZ 2023 Winner`,
  rarity: 2,
  status: CardStatus.Falti,
  collection: PaniniFifa_365_2024,
  year: 2023,
  cardSection: "FiFa Women's World Cup Australia & New Zealand 2023",
  cardType: [
    CardType.BaseSet,
    CardType.TeamCard,
    CardType.Gold,
  ],
  links: [
    'https://www.laststicker.com/cards/panini_fifa_365_2023-2024/421/',
  ],
  productType: CardProductType.Sticker,
  orientation: CardOrientation.Horizontal,
  language: CardLanguage.EN,
  brilli: CardBrilli.GoldMetal,
  teammates: [],
};

export default PANINI_FIFA_365_2024_421;