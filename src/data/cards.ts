import { Collection, FinetworkLigaF_22_23Panini, PaniniFifaWomenSWorldCupFrance_2019, Topps_21_22UefaWomenSChampionsLeagueChrome, ToppsChromeFcBarcelonaMésQueUnClub_2022_23, ToppsNow } from "./collections";

import finetworkLigaF_22_23Panini_128 from "./img/cards/finetwork-liga-f-22-23-panini.png";
import finetworkLigaF_22_23Panini_322 from "./img/cards/aitana-bonmati-f-stars-barcelona-322-liga-f-22-23.jpg";
import uwcl_21_22ToppsChromeBaseRcRookie_15 from "./img/cards/UWCL-21-22-Topps-Chrome-Base-RC-Rookie-15.png";
import franceWomanWC154 from "./img/cards/154franceWomanWC.png";
import ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023 from "./img/cards/2023-24-topps-womens-champions-league-now--001-1.jpg";
import aitanaBonmati_7ChromeFcb_22_23 from "./img/cards/aitana-bonmati-7-chrome-fcb-22-23.jpg";
import aitanaBonmati_57ChromeFcb_22_23 from "./img/cards/aitana-bonmati-57-chrome-fcb-22-23.png";

export type Card = {
  id: string,
  image: string,
  name: string,
  description: string,
  rarity: 1 | 2 | 3 | 4 | 5,
  status: 'falti' | 'tengui' | 'pending',
  collection: Collection,
  searchKey?: string,
  year: number,
  brilli?: 'stars' | 'nose',
};

export const cards: Card[] = [
  {
    id: 'finetwork-liga-f-22-23-panini-#128',
    image: finetworkLigaF_22_23Panini_128,
    name: 'Aitana Bonmatí - #128',
    description: "Cromo base del equip. Finetwork lliga F temporada 2022-2023",
    rarity: 1,
    status: 'tengui',
    collection: FinetworkLigaF_22_23Panini,
    year: 2023,
  },
  {
    id: 'UWCL-21-22-Topps-Chrome-Base-RC-Rookie-#15',
    image: uwcl_21_22ToppsChromeBaseRcRookie_15,
    name: 'Topps Chrome UWCL #15 RC Rookie Base',
    description: `#2021-22 Topps Chrome UEFA Women's Base Refractor Parallels Breakdown

- Refractor - 1:3 packs
- Pink Prism Refractor - #/150
- Neon Green Refractor - #/99
- Inferno Refractor - #/75
- Gold Refractor - #/50
- Orange Wave Refractor - #/25
- Red Refractor - #/5
- SuperFractor - 1/1`,
    rarity: 2,
    status: 'pending',
    collection: Topps_21_22UefaWomenSChampionsLeagueChrome,
    year: 2022,
  },
  {
    id: 'paniniFifaWomenSWorldCupFrance_2019Sticker_154',
    image: franceWomanWC154,
    name: 'Sticker 154: Aitana Bonmatí',
    description: ``,
    rarity: 1,
    status: 'tengui',
    collection: PaniniFifaWomenSWorldCupFrance_2019,
    searchKey: '',
    year: 2019,
  },
  {
    id: '2023ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear',
    image: ToppsNowAitanaBonmatiUefaWomenSPlayerOfTheYear2023,
    name: '2023 Topps Now Aitana Bonmati UEFA Women\'s Player of the Year',
    description: ``,
    rarity: 2,
    status: 'tengui',
    collection: ToppsNow,
    year: 2023,
  },
  {
    id: 'finetwork-liga-f-22-23-panini-#322',
    image: finetworkLigaF_22_23Panini_322,
    name: 'F stars Aitana Bonmatí - #322',
    description: "Cromo de la secció F stars. Finetwork lliga F temporada 2022-2023",
    rarity: 1,
    status: 'tengui',
    collection: FinetworkLigaF_22_23Panini,
    year: 2023,
  },
  {
    id: 'topps-chrome-fc-barcelona-més-que-un-club-2022-23-#7',
    image: aitanaBonmati_7ChromeFcb_22_23,
    name: 'Aitana Bonmatí - #7',
    description: "",
    rarity: 1,
    status: 'tengui',
    collection: ToppsChromeFcBarcelonaMésQueUnClub_2022_23,
    year: 2023,
  },
  {
    id: 'topps-chrome-fc-barcelona-més-que-un-club-2022-23-#57',
    image: aitanaBonmati_57ChromeFcb_22_23,
    name: 'Aitana Bonmatí - #57',
    description: "",
    rarity: 1,
    status: 'tengui',
    collection: ToppsChromeFcBarcelonaMésQueUnClub_2022_23,
    year: 2023,
  },
];

// Refractor - 1:3 packs
// Pink Prism Refractor - #/150
// Neon Green Refractor - #/99
// Inferno Refractor - #/75
// Gold Refractor - #/50
// Orange Wave Refractor - #/25
// Red Refractor - #/5
// SuperFractor - 1/1