import { Card, CardBrilli, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniCarrefourVamosSeleccion_2024 } from "../collections";

import pcvs_53_0 from "../img/cards/pcvs_53_0.jpg";
import pcvs_53_1 from "../img/cards/pcvs_53_1.webp";
import pcvs_53_2 from "../img/cards/pcvs_53_2.webp";

const PANINI_CARREFOUR_VAMOS_SELECCION_2024_53: Card = {
  id: 'panini-carrefour-vamos-seleccion-2024-53',
  images: [
    pcvs_53_0,
    pcvs_53_1,
    pcvs_53_2,
  ],
  number: 53,
  collection: PaniniCarrefourVamosSeleccion_2024,
  cardSection: 'Selección Femenina',
  productType: CardProductType.Sticker,
  cardType: [
    CardType.Base,
    CardType.GoldMetalic,
  ],
  year: 2024,
  links: [
    'https://www.laststicker.com/cards/carrefour_vamos_seleccion-2024/53/',
  ],
  name: 'Aitana Bonmatí',
  status: CardStatus.Tengui,
  rarity: 1,
  brilli: CardBrilli.GoldMetal,
};

export default PANINI_CARREFOUR_VAMOS_SELECCION_2024_53;