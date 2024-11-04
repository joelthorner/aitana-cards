"use strict";
exports.__esModule = true;
exports.CardLanguage = exports.CardOrientation = exports.CardProductType = exports.CardType = exports.CardBrilli = exports.CardStatus = void 0;
var CardStatus;
(function (CardStatus) {
    CardStatus["Falti"] = "falti";
    CardStatus["Tengui"] = "tengui";
    CardStatus["Pending"] = "pending";
})(CardStatus = exports.CardStatus || (exports.CardStatus = {}));
;
var CardBrilli;
(function (CardBrilli) {
    CardBrilli["Stars"] = "stars";
    CardBrilli["ShinyHolo"] = "shinyHolo";
    CardBrilli["Holo"] = "holo";
    CardBrilli["RedFoil"] = "redFoil";
    CardBrilli["GoldFoil"] = "goldFoil";
    CardBrilli["GoldMetal"] = "goldMetal";
    CardBrilli["PurpleFoil"] = "purpleFoil";
    CardBrilli["GreenFoil"] = "greenFoil";
    CardBrilli["OrangeFoil"] = "orangeFoil";
    CardBrilli["Rainbow"] = "rainbow";
    CardBrilli["BlueTopps"] = "blue";
    CardBrilli["BlackTopps"] = "black";
    CardBrilli["PinkRefractorTopps"] = "pinkRefractor";
    CardBrilli["PinkFoil"] = "pinkFoil";
    CardBrilli["Refractor"] = "refractor";
    CardBrilli["GreenRefractorTopps"] = "greenRefractor";
    CardBrilli["InfernoRefractorTopps"] = "infernoRefractor";
    CardBrilli["RedRefractorTopps"] = "redRefractor";
    CardBrilli["SlimVerticalRefractor"] = "slimVerticalRefractor";
    CardBrilli["BlueCristall"] = "blueCristall";
    CardBrilli["RoseGoldMojo"] = "roseGoldMojo";
    CardBrilli["AquaPrism"] = "aquaPrism";
    CardBrilli["FractedGoldEffect"] = "fractedGoldEffect";
    CardBrilli["TurquoiseFoil"] = "turquoiseFoil";
})(CardBrilli = exports.CardBrilli || (exports.CardBrilli = {}));
;
/**
 * Add new CarTypes todo:
 * - Add value to src\data\card-type-groups.ts
 * - Add css filter btn effect (?)
 */
var CardType;
(function (CardType) {
    // Generic / no type
    CardType["BaseSet"] = "Base set";
    CardType["TeamCard"] = "Team Card";
    CardType["Collage"] = "Collage";
    CardType["UnlicensedCard"] = "Unlicensed Card";
    CardType["Holographic"] = "Holographic";
    // Panini 365 or Adrenalyn XL no se com va encara
    CardType["Icons"] = "Icons";
    CardType["TheBest"] = "The Best";
    // Topps
    CardType["Rookie"] = "Rookie";
    CardType["Relic"] = "Relic";
    CardType["FutureStars"] = "Future Stars";
    CardType["CurrentStars"] = "Current Stars";
    CardType["Dynamic"] = "Dynamic";
    CardType["InAction"] = "In action";
    CardType["Sapphire"] = "Sapphire";
    CardType["AltImage"] = "Alternative Image";
    CardType["Fierce"] = "Fierce";
    CardType["Filmstrip"] = "Filmstrip";
    CardType["CrowningMoments"] = "Crowning Moments";
    CardType["ShutterSpeed"] = "Shutter Speed";
    CardType["QueensOfFootball"] = "Queens of football";
    CardType["HiddenGems"] = "Hidden Gems";
    CardType["StarQuality"] = "Star Quality";
    CardType["ChineseZodiac"] = "Chinese Zodiac";
    CardType["EtchedInStone"] = "Etched in Stone";
    CardType["DiamondEyesDragon"] = "Diamond Eyes Dragon";
    CardType["ShortPrint"] = "Short Print";
    CardType["Refractor"] = "Refractor";
    CardType["XFractor"] = "X-Fractor";
    CardType["Pulsar"] = "Pulsar";
    CardType["SuperFractor"] = "SuperFractor";
    CardType["Wave"] = "Wave";
    CardType["Prism"] = "Prism";
    CardType["Mojo"] = "Mojo";
    CardType["Bar\u00E7a"] = "Bar\u00E7a";
    CardType["Wooden"] = "Wooden";
    CardType["Inferno"] = "Inferno";
    CardType["XI"] = "XI";
    CardType["ColorMatch"] = "Color Match Variation";
    CardType["White"] = "White";
    CardType["Yellow"] = "Yellow";
    CardType["Gold"] = "Gold";
    CardType["Orange"] = "Orange";
    CardType["RoseGold"] = "Rose Gold";
    CardType["Red"] = "Red";
    CardType["Pink"] = "Pink";
    CardType["Purple"] = "Purple";
    CardType["Blue"] = "Blue";
    CardType["Aqua"] = "Aqua";
    CardType["Turquoise"] = "Turquoise";
    CardType["Green"] = "Green";
    CardType["NeonGreen"] = "Neon Green";
    CardType["Gray"] = "Gray";
    CardType["BlackAndWhite"] = "Black & White";
    CardType["Black"] = "Black";
    CardType["Rainbow"] = "Rainbow";
    CardType["Autographs"] = "Autographs";
    CardType["DualAutographs"] = "Dual Autographs";
    CardType["QuadAutograph"] = "Quad Autograph";
    // Topps Match Attax
    CardType["UWCL_Limelight"] = "UWCL Limelight";
    CardType["BlueCrystall"] = "Blue Crystall";
    CardType["T_100Club"] = "100 Club";
})(CardType = exports.CardType || (exports.CardType = {}));
;
var CardProductType;
(function (CardProductType) {
    CardProductType["Sticker"] = "Sticker";
    CardProductType["Card"] = "Card";
    CardProductType["GameCard"] = "Game Card";
    CardProductType["BookCard"] = "Book Card";
    CardProductType["PatchBookCard"] = "Patch Book Card";
})(CardProductType = exports.CardProductType || (exports.CardProductType = {}));
;
var CardOrientation;
(function (CardOrientation) {
    CardOrientation["Vertical"] = "vertical";
    CardOrientation["Horizontal"] = "horizontal";
})(CardOrientation = exports.CardOrientation || (exports.CardOrientation = {}));
;
var CardLanguage;
(function (CardLanguage) {
    CardLanguage["CA"] = "Catal\u00E0";
    CardLanguage["ES"] = "Spanish";
    CardLanguage["EN"] = "English";
})(CardLanguage = exports.CardLanguage || (exports.CardLanguage = {}));
;
