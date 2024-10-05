import { useEffect, useState } from "react";
import { OrderByEnum, useFiltersContext } from "../providers/filters";
import { cards } from "../data/cards";
import { Card, CardStatus } from "../types/card";

export function useFilteredCards() {
  const [filteredCards, setFilteredCards] = useState(cards);
  const { status, rarity, orderBy, collections } = useFiltersContext();

  useEffect(() => {
    const newFilteredCards = cards.filter((card: Card) => {
      const matchesStatus =
        (status[CardStatus.Tengui] && card.status === CardStatus.Tengui) ||
        (status[CardStatus.Falti] && card.status === CardStatus.Falti) ||
        (status[CardStatus.Pending] && card.status === CardStatus.Pending);

      const matchesRarity = rarity.length === 0 || rarity.includes(card.rarity);
      const matchesCollection = collections.length === 0 || collections.includes(card.collection.id);

      return matchesStatus && matchesRarity && matchesCollection;
    });

    let newOrderedCards = newFilteredCards;
    if (orderBy === OrderByEnum.YEAR) {
      newOrderedCards.sort((a, b) => b.year - a.year);
    } else if (orderBy === OrderByEnum.RARITY) {
      newOrderedCards.sort((a, b) => b.rarity - a.rarity);
    } else if (orderBy === OrderByEnum.COLLECTION) {
      newOrderedCards.sort((a, b) => a.collection.id.localeCompare(b.collection.id));
    }

    setFilteredCards(newOrderedCards);
  }, [status, rarity, orderBy, collections]);

  return filteredCards;
}
