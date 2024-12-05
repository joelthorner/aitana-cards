import { Card, CardBrilli, CardLanguage, CardOrientation, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsFocusFcBarcelona_2023_2024 } from "../collections";

import tffb2324_12_0 from "../img/cards/tffb2324_12_0.jpg";
import tffb2324_12_1 from "../img/cards/tffb2324_12_1.webp";
import tffb2324_12_2 from "../img/cards/tffb2324_12_2.webp";
import tffb2324_SAABr_0 from "../img/cards/tffb2324_SAABr_0.jpg";
import tffb2324_SAABr_1 from "../img/cards/tffb2324_SAABr_1.webp";
import tffb2324_SAABg_0 from "../img/cards/tffb2324_SAABg_0.jpg";
import tffb2324_SAABg_1 from "../img/cards/tffb2324_SAABg_1.webp";
import tffb2324_SAABgr_0 from "../img/cards/tffb2324_SAABgr_0.jpg";
import tffb2324_SAABgr_1 from "../img/cards/tffb2324_SAABgr_1.webp";
import tffb2324_SAABgr_2 from "../img/cards/tffb2324_SAABgr_2.webp";
import tffb2324_SAABgr_3 from "../img/cards/tffb2324_SAABgr_3.webp";
import tffb2324_SAABy_0 from "../img/cards/tffb2324_SAABy_0.jpg";
import tffb2324_SAABy_1 from "../img/cards/tffb2324_SAABy_1.webp";
import tffb2324_SAABy_2 from "../img/cards/tffb2324_SAABy_2.webp";
import tffb2324_SAABy_3 from "../img/cards/tffb2324_SAABy_3.webp";
import tffb2324_12gr_0 from "../img/cards/tffb2324_12gr_0.jpg";
import tffb2324_12gr_1 from "../img/cards/tffb2324_12gr_1.webp";
import tffb2324_12gr_2 from "../img/cards/tffb2324_12gr_2.webp";
import tffb2324_12gr_3 from "../img/cards/tffb2324_12gr_3.webp";
import tffb2324_12g_0 from "../img/cards/tffb2324_12g_0.jpg";
import tffb2324_12g_1 from "../img/cards/tffb2324_12g_1.webp";
import tffb2324_12g_2 from "../img/cards/tffb2324_12g_2.webp";
import tffb2324_12g_3 from "../img/cards/tffb2324_12g_3.webp";
import tffb2324_SAABo_0 from "../img/cards/tffb2324_SAABo_0.jpg";
import tffb2324_SAABo_1 from "../img/cards/tffb2324_SAABo_1.webp";
import tffb2324_SAABo_2 from "../img/cards/tffb2324_SAABo_2.webp";
import tffb2324_12bu_0 from "../img/cards/tffb2324_12bu_0.jpg";
import tffb2324_12bu_1 from "../img/cards/tffb2324_12bu_1.jpg";
import tffb2324_12bu_2 from "../img/cards/tffb2324_12bu_2.jpg";
import tffb2324_12bu_3 from "../img/cards/tffb2324_12bu_3.webp";
import tffb2324_12ss_0 from "../img/cards/tffb2324_12ss_0.jpg";
import tffb2324_12ss_1 from "../img/cards/tffb2324_12ss_1.webp";
import tffb2324_12ss_2 from "../img/cards/tffb2324_12ss_2.webp";
import tffb2324_12o_0 from "../img/cards/tffb2324_12o_0.jpg";
import tffb2324_12o_1 from "../img/cards/tffb2324_12o_1.jpg";
import tffb2324_12o_2 from "../img/cards/tffb2324_12o_2.jpg";
import tffb2324_12o_3 from "../img/cards/tffb2324_12o_3.webp";
import tffb2324_12r_0 from "../img/cards/tffb2324_12r_0.jpg";
import tffb2324_12r_1 from "../img/cards/tffb2324_12r_1.jpg";
import tffb2324_12r_2 from "../img/cards/tffb2324_12r_2.jpg";
import tffb2324_SAABr_2 from "../img/cards/tffb2324_SAABr_2.webp";
import tffb2324_SAABr_3 from "../img/cards/tffb2324_SAABr_3.webp";
import tffb2324_SAABg_2 from "../img/cards/tffb2324_SAABg_2.webp";
import tffb2324_SAABg_3 from "../img/cards/tffb2324_SAABg_3.webp";

const cardTextFrontAuto = `# AITANA  

**Topps Focus Collection 2023/2024**

**Autograph Issue** 

**{{numbered}}**  

*Topps Certified Autograph Issue*  

### FC Barcelona`;

const cardTextBackAuto = `# TOPPS FOCUS COLLECTION 2023/2024  

## AITANA  

- **Place of Birth:** Sant Pere de Ribes  
- **Date of Birth:** 18th January 1991  
- **Position:** Midfielder  
- **Country of Origin:** Spain  

---

### Snapshot Autograph Card  

From Topps Barcelona Focus 2023/24.  

The signing of all autograph cards is witnessed by a Topps representative to guarantee authenticity.  

---

Published under license by The Topps Company Inc.  
© & ® 2024 The Topps Company, Inc. All rights reserved.  
Topps is a registered trademark of The Topps Company, Inc.`;

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_12: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-12',
  number: 12,
  images: [
    tffb2324_12_0,
    tffb2324_12_1,
    tffb2324_12_2,
  ],
  name: 'Aitana Bonmatí',
  rarity: 1,
  status: CardStatus.Tengui,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots",
  cardType: [
    CardType.BaseSet,
  ],
  productType: CardProductType.Card,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_12ss: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-12ss',
  number: '12ss',
  images: [
    tffb2324_12ss_0,
    tffb2324_12ss_1,
    tffb2324_12ss_2,
  ],
  name: 'Aitana Bonmatí Shutter Speed',
  rarity: 2,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots",
  cardType: [
    CardType.BaseSet,
    CardType.ShutterSpeed,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.ShinyHolo,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_12gr: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-12gr',
  number: '12gr',
  images: [
    tffb2324_12gr_0,
    tffb2324_12gr_1,
    tffb2324_12gr_2,
    tffb2324_12gr_3,
  ],
  name: 'Aitana Bonmatí Green Rainbow',
  rarity: 3,
  numbered: 99,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots",
  cardType: [
    CardType.BaseSet,
    CardType.Green,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.ShinyHolo,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_12bu: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-12bu',
  number: '12bu',
  images: [
    tffb2324_12bu_0,
    tffb2324_12bu_1,
    tffb2324_12bu_2,
    tffb2324_12bu_3,
  ],
  name: 'Aitana Bonmatí Blue Rainbow',
  rarity: 4,
  numbered: 75,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots",
  cardType: [
    CardType.BaseSet,
    CardType.Blue,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.ShinyHolo,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_12g: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-12g',
  number: '12g',
  images: [
    tffb2324_12g_0,
    tffb2324_12g_1,
    tffb2324_12g_2,
    tffb2324_12g_3,
  ],
  name: 'Aitana Bonmatí Gold Rainbow',
  rarity: 4,
  numbered: 50,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots",
  cardType: [
    CardType.BaseSet,
    CardType.Gold,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.ShinyHolo,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_12o: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-12o',
  number: '12o',
  images: [
    tffb2324_12o_0,
    tffb2324_12o_1,
    tffb2324_12o_2,
    tffb2324_12o_3,
  ],
  name: 'Aitana Bonmatí Orange Rainbow',
  rarity: 5,
  numbered: 25,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots",
  cardType: [
    CardType.BaseSet,
    CardType.Orange,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.ShinyHolo,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_12r: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-12r',
  number: '12r',
  images: [
    tffb2324_12r_0,
    tffb2324_12r_1,
    tffb2324_12r_2,
  ],
  name: 'Aitana Bonmatí Red Rainbow',
  rarity: 5,
  numbered: 5,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots",
  cardType: [
    CardType.BaseSet,
    CardType.Red,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.ShinyHolo,
  orientation: CardOrientation.Vertical,
};

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_SAABy: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-SA-ABy',
  number: 'SA-ABy',
  images: [
    tffb2324_SAABy_0,
    tffb2324_SAABy_1,
    tffb2324_SAABy_2,
    tffb2324_SAABy_3,
  ],
  name: 'Aitana Bonmatí Autograph / Yellow Rainbow',
  rarity: 3,
  numbered: 150,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots Autographs",
  cardType: [
    CardType.BaseSet,
    CardType.Yellow,
    CardType.Autographs,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.ShinyHolo,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
  cardTextFront: cardTextFrontAuto.replace('{{numbered}}', '009/150'),
  cardTextBack: cardTextBackAuto,
};

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_SAABgr: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-SA-ABgr',
  number: 'SA-ABgr',
  images: [
    tffb2324_SAABgr_0,
    tffb2324_SAABgr_1,
    tffb2324_SAABgr_2,
    tffb2324_SAABgr_3,
  ],
  name: 'Aitana Bonmatí Autograph / Green Rainbow',
  rarity: 4,
  numbered: 99,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots Autographs",
  cardType: [
    CardType.BaseSet,
    CardType.Green,
    CardType.Autographs,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.ShinyHolo,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
  cardTextFront: cardTextFrontAuto.replace('{{numbered}}', '77/99'),
  cardTextBack: cardTextBackAuto,
};

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_SAABg: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-SA-ABg',
  number: 'SA-ABg',
  images: [
    tffb2324_SAABg_0,
    tffb2324_SAABg_1,
    tffb2324_SAABg_2,
    tffb2324_SAABg_3,
  ],
  name: 'Aitana Bonmatí Autograph / Gold Rainbow',
  rarity: 4,
  numbered: 50,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots Autographs",
  cardType: [
    CardType.BaseSet,
    CardType.Gold,
    CardType.Autographs,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.ShinyHolo,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
  cardTextFront: cardTextFrontAuto.replace('{{numbered}}', '39/50'),
  cardTextBack: cardTextBackAuto,
};

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_SAABo: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-SA-ABo',
  number: 'SA-ABo',
  images: [
    tffb2324_SAABo_0,
    tffb2324_SAABo_1,
    tffb2324_SAABo_2,
  ],
  name: 'Aitana Bonmatí Autograph / Orange Rainbow',
  rarity: 5,
  numbered: 25,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots Autographs",
  cardType: [
    CardType.BaseSet,
    CardType.Orange,
    CardType.Autographs,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.ShinyHolo,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
  cardTextFront: cardTextFrontAuto.replace('{{numbered}}', '08/25'),
  cardTextBack: cardTextBackAuto,
};

export const TOPPS_FOCUS_FC_BARCELONA_2023_2024_SAABr: Card = {
  customRelatedsRegexp: /(SA-AB[a-z]*|12[a-z]*)$/,
  id: 'topps-focus-fc-barcelona-2023-2024-SA-ABr',
  number: 'SA-ABr',
  images: [
    tffb2324_SAABr_0,
    tffb2324_SAABr_1,
    tffb2324_SAABr_2,
    tffb2324_SAABr_3,
  ],
  name: 'Aitana Bonmatí Autograph / Red Rainbow',
  rarity: 5,
  numbered: 5,
  status: CardStatus.Falti,
  collection: ToppsFocusFcBarcelona_2023_2024,
  year: 2024,
  cardSection: "Snapshots Autographs",
  cardType: [
    CardType.BaseSet,
    CardType.Red,
    CardType.Autographs,
  ],
  productType: CardProductType.Card,
  brilli: CardBrilli.ShinyHolo,
  orientation: CardOrientation.Vertical,
  language: CardLanguage.EN,
  cardTextFront: cardTextFrontAuto.replace('{{numbered}}', '3/5'),
  cardTextBack: cardTextBackAuto,
};
