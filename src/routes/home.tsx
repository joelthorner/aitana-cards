import { Card as CardType, cards } from "../data/cards";
import Card from "../components/card";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const location = useLocation();
  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    const getSearchParams = () => {
      const searchParams = new URLSearchParams(location.search);
      return {
        tengui: searchParams.get("tengui") || "true",
        falti: searchParams.get("falti") || "true",
        pending: searchParams.get("pending") || "true",
      };
    };

    const { tengui, falti, pending } = getSearchParams();

    const newFilteredCards = cards.filter((card: CardType) => {
      let matchesTengui = false;
      let matchesFalti = false;
      let matchesPending = false;

      if (tengui === "true") matchesTengui = card.status === "tengui";
      if (falti === "true") matchesFalti = card.status === "falti";
      if (pending === "true") matchesPending = card.status === "pending";

      return matchesTengui || matchesFalti || matchesPending;
    });

    setFilteredCards(newFilteredCards);
  }, [location.search]);

  return (
    <div className="grid grid-default-cards gap-x-2 gap-y-4">
      {filteredCards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}
