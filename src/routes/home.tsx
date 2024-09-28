import { cards } from "../data/cards";
import Card from "../components/card";
import { useEffect, useState } from "react";
import { OrderByEnum, useFiltersContext } from "../providers/filters";
import { CardStatus, Card as CardType } from "../types/card";

export default function Home() {
  const [filteredCards, setFilteredCards] = useState(cards);

  const { status, rarity, orderBy } = useFiltersContext();

  useEffect(() => {
    const newFilteredCards = cards.filter((card: CardType) => {
      let matchesTengui = false,
        matchesFalti = false,
        matchesPending = false;

      if (status[CardStatus.Tengui]) matchesTengui = card.status === CardStatus.Tengui;
      if (status[CardStatus.Falti]) matchesFalti = card.status === CardStatus.Falti;
      if (status[CardStatus.Pending]) matchesPending = card.status === CardStatus.Pending;

      let matchesRarity1 = false,
        matchesRarity2 = false,
        matchesRarity3 = false,
        matchesRarity4 = false,
        matchesRarity5 = false;

      if (rarity["rarity_1"]) matchesRarity1 = card.rarity === 1;
      if (rarity["rarity_2"]) matchesRarity2 = card.rarity === 2;
      if (rarity["rarity_3"]) matchesRarity3 = card.rarity === 3;
      if (rarity["rarity_4"]) matchesRarity4 = card.rarity === 4;
      if (rarity["rarity_5"]) matchesRarity5 = card.rarity === 5;

      return (matchesTengui || matchesFalti || matchesPending) && (matchesRarity1 || matchesRarity2 || matchesRarity3 || matchesRarity4 || matchesRarity5);
    });

    let newOrderedCards = newFilteredCards;
    if (orderBy === OrderByEnum.YEAR) {
      newOrderedCards.sort((a, b) => b.year - a.year);
    } else if (orderBy === OrderByEnum.RARITY) {
      newOrderedCards.sort((a, b) => b.rarity - a.rarity);
    }

    setFilteredCards(newOrderedCards);
  }, [status, rarity, orderBy]);

  return (
    <div className="grid grid-default-cards gap-x-2 gap-y-4">
      {filteredCards.map((card) => (
        <div className="grid-item" key={card.id}>
          <Card card={card} />
        </div>
      ))}
    </div>
  );
}
