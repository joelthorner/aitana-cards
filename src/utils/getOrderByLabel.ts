import { OrderByEnum } from "../providers/filters";

export const getOrderByLabel = (orderBy: OrderByEnum): string => {
  switch (orderBy) {
    case OrderByEnum.DEFAULT:
      return "Default";
    case OrderByEnum.RARITY:
      return "Highest to lowest rarity";
    case OrderByEnum.YEAR:
      return "Newest to oldest";
    case OrderByEnum.COLLECTION:
      return "Collection A-Z";
    case OrderByEnum.RECENTLY_ADDED:
      return "Recently Added";
    default:
      return "???";
  }
};
export const getOrderByShortLabel = (orderBy: OrderByEnum): string => {
  switch (orderBy) {
    case OrderByEnum.DEFAULT:
      return "default";
    case OrderByEnum.RARITY:
      return "rarity";
    case OrderByEnum.YEAR:
      return "year";
    case OrderByEnum.COLLECTION:
      return "collection";
    case OrderByEnum.RECENTLY_ADDED:
      return "Recently Added";
    default:
      return "???";
  }
};