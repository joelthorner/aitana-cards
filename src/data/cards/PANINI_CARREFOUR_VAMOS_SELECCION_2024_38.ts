import { Card, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniCarrefourVamosSeleccion_2024 } from "../collections";

import pcvs_38_0 from "../img/cards/pcvs_38_0.png";
import pcvs_38_1 from "../img/cards/pcvs_38_1.webp";
import pcvs_38_2 from "../img/cards/pcvs_38_2.webp";
import pcvs_38_3 from "../img/cards/pcvs_38_3.png";

const PANINI_CARREFOUR_VAMOS_SELECCION_2024_38: Card = {
  id: 'panini-carrefour-vamos-seleccion-2024-38',
  images: [
    pcvs_38_0,
    pcvs_38_1,
    pcvs_38_2,
    pcvs_38_3,
  ],
  number: 38,
  collection: PaniniCarrefourVamosSeleccion_2024,
  cardSection: '¡Allá vamos!',
  productType: CardProductType.Sticker,
  cardType: [
    CardType.Base,
    CardType.TeamCard,
  ],
  year: 2024,
  links: [
    'https://www.laststicker.com/cards/carrefour_vamos_seleccion-2024/38/',
  ],
  name: 'Once Inicial Femenino contra Países Bajos 2024',
  status: CardStatus.Falti,
  rarity: 1,
};

export default PANINI_CARREFOUR_VAMOS_SELECCION_2024_38;