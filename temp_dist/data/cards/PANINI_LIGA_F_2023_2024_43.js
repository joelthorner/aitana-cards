"use strict";
exports.__esModule = true;
/**
 * COMPLETED data
 */
var card_1 = require("../../types/card");
var collections_1 = require("../collections");
var lifaFTeam_jpg_1 = require("../img/cards/lifaFTeam.jpg");
var lifaFTeam_1_webp_1 = require("../img/cards/lifaFTeam_1.webp");
var lifaFTeam_2_webp_1 = require("../img/cards/lifaFTeam_2.webp");
var PANINI_LIGA_F_2023_2024_43 = {
    id: 'panini-liga-f-2023-2024-43',
    images: [
        lifaFTeam_jpg_1["default"],
        lifaFTeam_1_webp_1["default"],
        lifaFTeam_2_webp_1["default"],
    ],
    name: 'FC Barcelona',
    rarity: 1,
    status: card_1.CardStatus.Falti,
    collection: collections_1.PaniniLigaF_2023_2024,
    year: 2023,
    cardType: [card_1.CardType.TeamCard],
    cardSection: 'FC Barcelona',
    number: 43,
    productType: card_1.CardProductType.Sticker,
    orientation: card_1.CardOrientation.Horizontal
};
exports["default"] = PANINI_LIGA_F_2023_2024_43;
