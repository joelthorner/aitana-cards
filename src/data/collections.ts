
import uclw_fgc4624h_box_21_22 from "./img/collections/22uclw_fgc4624h_box.png";
import panini_004743spe3w_0 from "./img/collections/004743spe3w_0.webp";
import paniniFifaWomenSWorldCupFrance_2019 from "./img/collections/4442.jpg";
import Topps_Now_Logo_Black from "./img/collections/Topps_Now_Logo_Black.png";
import sL1200_480x from "./img/collections/s-l1200_480x.webp";

export interface Collection {
  id: string;
  image: string;
  name: string;
  description: string;
  brand: string;
  links: string[];
};

export const FinetworkLigaF_22_23Panini: Collection = {
  id: 'finetwork-liga-f-22-23-panini',
  image: panini_004743spe3w_0,
  name: 'Finetwork Liga F 22/23 Panini',
  description: `No hi ha millor manera de començar la col·lecció de cromos de la LLIGA FEMENINA 2022/23 (LLIGA F) que amb aquest fantàstic *Pack Inicial que et permet aconseguir l'Àlbum Oficial de la Col·lecció i una Capseta de 50 sobres amb 400 cromos.
Ja és aquí la primera col·lecció oficial de cromos de la Lliga Femenina! 
Cerca els cromos dels 16 equips de la Lliga *Finetwork Femenina en aquest àlbum històric que es converteix en el primer d'una lliga femenina de la història. Els cromos de *Alexia, Aitana, *Athenea, *Ludmila, Nerea Eizaguirre, Lola Gallardo, Missa… són presents en aquesta històrica col·lecció. 
Cerca també els 35 cromos *STARS, amb les jugadores més determinants de la competició i també els 8 cromos *ROOKIES, amb les jugadores joves i talentoses que a penes arriben als 20 anys.
Aquesta col·lecció consta de 365 cromos en total… no la deixis escapar!`,
  brand: 'Panini',
  links: [
    'https://www.panini.es/shp_esp_es/cromos-coleccionables/deporte/la-liga/liga-femenina.html?srsltid=AfmBOopjDFr00cWCN7FS1MQY3x5RmxL04TbsmzvLgfkTu_90hheNB1rY',
  ],
};

export const Topps_21_22UefaWomenSChampionsLeagueChrome: Collection = {
  id: '2021-2022-toppsr-chrome-uefa-women-s-champions-league-topps',
  image: uclw_fgc4624h_box_21_22,
  name: "2021-22 Topps UEFA Women’s Champions League Chrome",
  description: `2021-2022 Topps® Chrome UEFA Women's Champions League
¡1 Carta con Autógrafo Chrome en Cada Caja!
¡Presentando, por la primera vez en historia la colección Topps Chrome 2021/2022 de la UEFA Women’s Champions League!
Celebrando lo mejor del fútbol femenino, este producto premium Chrome incluye los mejores jugadores y los equipos más grandes de la competición.
Colecciona tus favoritos en un Base Set de 100 cartas con insert sets como Future Stars y Goal Machines. Busca las raras FIERCE inserts que exhiben  los jugadores más “on-fire” de la competición.`,
  brand: 'Topps',
  links: [
    'https://www.topps.com/media/pdf/CheckList_22WUCC_FINAL.pdf',
    'https://www.cardboardconnection.com/2021-22-topps-chrome-uefa-womens-champions-league-cards',
  ],
};

export const PaniniFifaWomenSWorldCupFrance_2019: Collection = {
  id: 'paniniFifaWomenSWorldCupFrance_2019',
  image: paniniFifaWomenSWorldCupFrance_2019,
  name: "Panini FIFA Women's World Cup France 2019",
  description: ``,
  brand: 'Panini',
  links: [
    'https://www.laststicker.com/cards/panini_fifa_womens_world_cup_2019/154/',
  ],
};

export const ToppsNow: Collection = {
  id: 'toppsNow',
  image: Topps_Now_Logo_Black,
  name: "Topps Now",
  description: ``,
  brand: 'Topps',
  links: [
    'https://es.topps.com/collections/topps-now-es',
    'https://www.topps.com/pages/toppsnow',
  ],
};

export const ToppsChromeFcBarcelonaMésQueUnClub_2022_23: Collection = {
  id: 'topps-chrome-fc-barcelona-més-que-un-club-2022-23',
  image: sL1200_480x,
  name: "Topps Chrome FC Barcelona 2022/23: ¡Més Que Un Club!",
  description: ``,
  brand: 'Topps',
  links: [
    'https://es.topps.com/products/fc-barcelona-chrome-22-23-topps-es',
  ],
};

export const collections: Collection[] = [
  FinetworkLigaF_22_23Panini,
  Topps_21_22UefaWomenSChampionsLeagueChrome,
  PaniniFifaWomenSWorldCupFrance_2019,
  ToppsNow,
  ToppsChromeFcBarcelonaMésQueUnClub_2022_23,
];