import { OrderByEnum } from "../providers/filters";

export const getOrderByLabel = (orderBy: OrderByEnum): string => {
  switch (orderBy) {
    case OrderByEnum.RECENTLY_ADDED:
      return "New cards added first";
    case OrderByEnum.OLDLY_ADDED:
      return "Old cards added first";
    case OrderByEnum.RARITY:
      return "Highest to lowest rarity";
    case OrderByEnum.YEAR:
      return "Card year " + (new Date().getFullYear()) + '-2019';
    case OrderByEnum.COLLECTION:
      return "Collection A-Z";
    default:
      return "???";
  }
};
export const getOrderByShortLabel = (orderBy: OrderByEnum): string => {
  switch (orderBy) {
    case OrderByEnum.RECENTLY_ADDED:
      return "new";
    case OrderByEnum.OLDLY_ADDED:
      return "old";
    case OrderByEnum.RARITY:
      return "rarity";
    case OrderByEnum.YEAR:
      return "year";
    case OrderByEnum.COLLECTION:
      return "collection";
    default:
      return "???";
  }
};