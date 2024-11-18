import { useEffect } from "react";
import { OrderByEnum, useFiltersContext } from "../providers/filters";
import { cards } from "../data/cards";
import { Card, CardStatus, CardType } from "../types/card";

export function useFilteredCards() {
  const { status, rarity, orderBy, collections, cardTypes, years, filteredCards, setFilteredCards } = useFiltersContext();

  useEffect(() => {
    const newFilteredCards = cards.filter((card: Card) => {
      const matchesCollection = collections.length === 0 || collections.includes(card.collection.id);
      const matchesCardTypes = cardTypes.length === 0 || cardTypes.every(value => card.cardType.includes(value as CardType));
      const matchesRarity = rarity.length === 0 || rarity.includes(card.rarity);
      const matchesYears = years.length === 0 || years.includes(card.year);

      const matchesStatus =
        (status[CardStatus.Tengui] && card.status === CardStatus.Tengui) ||
        (status[CardStatus.Falti] && card.status === CardStatus.Falti) ||
        (status[CardStatus.Pending] && card.status === CardStatus.Pending);

      return matchesYears && matchesStatus && matchesRarity && matchesCollection && matchesCardTypes;
    });

    let newOrderedCards = newFilteredCards;
    if (orderBy === OrderByEnum.YEAR) {
      newOrderedCards.sort((a, b) => b.year - a.year);
    } else if (orderBy === OrderByEnum.RARITY) {
      newOrderedCards.sort((a, b) => b.rarity - a.rarity);
    } else if (orderBy === OrderByEnum.COLLECTION) {
      newOrderedCards.sort((a, b) => a.collection.id.localeCompare(b.collection.id));
    } else if (orderBy === OrderByEnum.OLDLY_ADDED) {
      newOrderedCards.reverse();
    }

    setFilteredCards(newOrderedCards);
  }, [status, rarity, orderBy, collections, cardTypes, years, setFilteredCards]);

  return filteredCards;
}

export function getCardsByIdList(idList: string[]) {
  return cards.filter(card => idList.includes(card.id));
}