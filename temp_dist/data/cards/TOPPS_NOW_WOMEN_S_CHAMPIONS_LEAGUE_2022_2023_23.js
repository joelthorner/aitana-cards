"use strict";
exports.__esModule = true;
exports.TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2022_2023_23 = void 0;
var card_1 = require("../../types/card");
var collections_1 = require("../collections");
var cardnow23_jpg_1 = require("../img/cards/cardnow23.jpg");
var cardnow23_1_webp_1 = require("../img/cards/cardnow23_1.webp");
var cardnow23_2_webp_1 = require("../img/cards/cardnow23_2.webp");
exports.TOPPS_NOW_WOMEN_S_CHAMPIONS_LEAGUE_2022_2023_23 = {
    id: 'topps-now-women-s-champions-league-2022-2023-23',
    number: 23,
    images: [
        cardnow23_jpg_1["default"],
        cardnow23_1_webp_1["default"],
        cardnow23_2_webp_1["default"],
    ],
    name: "UEFA Women's Champions League winners 2023",
    rarity: 2,
    status: card_1.CardStatus.Falti,
    collection: collections_1.ToppsNowWomenSChampionsLeague_2022_2023,
    year: 2023,
    cardSection: "FC Barcelona",
    cardType: [card_1.CardType.BaseSet, card_1.CardType.TeamCard],
    productType: card_1.CardProductType.Card,
    orientation: card_1.CardOrientation.Horizontal
};
