import { OrderByEnum } from "../providers/filters";

export const getOrderByLabel = (orderBy: OrderByEnum): string => {
  switch (orderBy) {
    case OrderByEnum.DEFAULT:
      return "Default";
    case OrderByEnum.RARITY:
      return "Highest to lowest rarity";
    case OrderByEnum.YEAR:
      return "Newest to oldest";
    default:
      return "Ordre desconegut";
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
    default:
      return "Ordre desconegut";
  }
};