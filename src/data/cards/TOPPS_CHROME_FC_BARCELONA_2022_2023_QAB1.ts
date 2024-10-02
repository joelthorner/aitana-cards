/**
 * COMPLETED data
 * @todo missing some image cards
 */
import { Card, CardBrilli, CardType, CardStatus, CardProductType } from "../../types/card";
import { ToppsChromeFcBarcelona_2022_2023 } from "../collections";

import QAB1 from "../img/cards/toppsChromeFcBarcelonaMésQueUnClub_2022_23AutoBook.jpg";
import QAB1_2 from "../img/cards/toppsChromeFcBarcelonaMésQueUnClub_2022_23AutoBook_2.jpg";
import QAB1_3 from "../img/cards/toppsChromeFcBarcelonaMésQueUnClub_2022_23AutoBook_3.jpg";

export const TOPPS_CHROME_FC_BARCELONA_2022_2023_QAB1: Card = {
  id: 'topps-chrome-fc-barcelona-2022-2023-QAB-1',
  number: 'QAB-1',
  images: [],
  missingImage: QAB1,
  name: 'Aitana, Alexia, Caroline, Asisat - Quad Autograph Book',
  description: 'Aitana Bonmati / Alexia Putellas / Caroline Graham Hansen / Asisat Oshoala',
  rarity: 5,
  status: CardStatus.Falti,
  brilli: CardBrilli.GoldFoil,
  collection: ToppsChromeFcBarcelona_2022_2023,
  year: 2023,
  cardType: [
    CardType.QuadAutographBook,
    CardType.Gold,
  ],
  cardSection: 'FC Barcelona',
  numbered: 10,
  productType: CardProductType.BookCard,
};

export const TOPPS_CHROME_FC_BARCELONA_2022_2023_QAB1g: Card = {
  id: 'topps-chrome-fc-barcelona-2022-2023-QAB-1g',
  number: 'QAB-1g',
  images: [
    QAB1,
    QAB1_2,
    QAB1_3,
  ],
  name: 'Aitana, Alexia, Caroline, Asisat - Quad Autograph Book / Gold',
  description: 'Aitana Bonmati / Alexia Putellas / Caroline Graham Hansen / Asisat Oshoala',
  rarity: 5,
  status: CardStatus.Falti,
  brilli: CardBrilli.GoldFoil,
  collection: ToppsChromeFcBarcelona_2022_2023,
  year: 2023,
  cardType: [
    CardType.QuadAutographBook,
    CardType.Gold,
  ],
  cardSection: 'FC Barcelona',
  numbered: 1,
  productType: CardProductType.BookCard,
};