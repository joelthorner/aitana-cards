import { Card, CardBrilli, CardLanguage, CardProductType, CardStatus, CardType } from "../../types/card";
import { ToppsProject22Uefa_2022_2023 } from "../collections";

import tp22_79_0 from "../img/cards/tp22_79_0.jpg";
import tp22_79_1 from "../img/cards/tp22_79_1.webp";
import tp22_79_2 from "../img/cards/tp22_79_2.webp";

const cardTextBack = `PROJECT22

Aitana Bonmatí

FC Barcelona

by Stanley Chow

© FC BARCELONA

* © 2022 THE TOPPS COMPANY, INC. ALL RIGHTS RESERVED. TOPPS IS A REGISTERED TRADEMARK OF THE TOPPS COMPANY, INC. THE WORD(S) UEFA, WOMEN'S CHAMPIONS LEAGUE, AND ALL OTHER UEFA WOMEN'S CHAMPIONS LEAGUE MARKS, NAMES, LOGOS, MASCOTS AND TROPHIES ARE THE PROPERTY, REGISTERED TRADEMARKS, DESIGNS AND/OR COPYRIGHT OF UEFA. ALL RIGHTS RESERVED.`;

export const TOPPS_PROJECT22_UEFA_2022_2023_79: Card = {
  id: 'topps-project22-uefa-2022-2023-79',
  number: 79,
  images: [
    tp22_79_0,
    tp22_79_1,
    tp22_79_2,
  ],
  name: 'Aitana Bonmatí by Stan Chow',
  rarity: 2,
  status: CardStatus.Tengui,
  collection: ToppsProject22Uefa_2022_2023,
  year: 2022,
  cardType: [
    CardType.BaseSet,
  ],
  productType: CardProductType.Card,
  language: CardLanguage.EN,
  links: [
    'https://uk.topps.com/products/project22-aitana-bonmati-by-stanley-chow-topps-uk',
    'https://es.topps.com/products/project22-aitana-bonmati-dise-ado-por-stanley-chow-topps-es',
  ],
  description: `Aitana Bonmatí diseñado por Stanley Chow

Topps se ha juntado con 22 artistas para crear nuestra colección de cartas de fútbol más excitante de la historia.

Project 22 presenta a los mejores jugadores actuales, rookies , a los grandes de todos los tiempos y mujeres de las competiciones de clubes élite de la UEFA.`,
  cardTextFront: `TOPPS`,
  cardTextBack: cardTextBack,
};