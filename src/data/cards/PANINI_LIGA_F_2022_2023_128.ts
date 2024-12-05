/**
 * COMPLETED data
 */
import { Card, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { PaniniLigaF_2022_2023 } from "../collections";
import img1 from "../img/cards/finetwork-liga-f-22-23-panini.jpg";
import img2 from "../img/cards/finetwork-liga-f-22-23-panini_1.jpg";

const PANINI_LIGA_F_2022_2023_128: Card = {
  customRelatedsRegexp: /\d+/,
  id: 'panini-liga-f-2022-2023-128',
  number: 128,
  images: [
    img1,
    img2,
  ],
  name: 'Aitana Bonmatí #128',
  description: "This Panini sticker from the Finetwork Liga F 2022-2023 collection features Aitana Bonmatí, a key FC Barcelona midfielder, highlighting her profile and achievements in women's football.",
  rarity: 1,
  status: CardStatus.Tengui,
  collection: PaniniLigaF_2022_2023,
  year: 2023,
  cardSection: 'FC Barcelona',
  cardType: [
    CardType.BaseSet,
  ],
  productType: CardProductType.Sticker,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.ES,
  cardTextFront: `finetwork Liga F
  
PANINI

**AITANA BONMATÍ**

**Aitana Bonmatí Conca**

Sant Pere de Ribes (Barcelona) / 18.01.1998`,
  cardTextBack: `finetwork Liga F

*La primera colección oficial de cromos de la Liga Femenina*

**2022-23**

# LIGA F

## 128

*Producto bajo licencia oficial de la Finetwork Liga F 2022-23*

PANINI

© PANINI ESPAÑA, S.A.

Vallespí, 20 - 17257 TORROELLA DE MONTGRÍ (Girona)

Made in Italy by PANINI S. p. A. - Modena`,
};

export default PANINI_LIGA_F_2022_2023_128;