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

        rarity1: searchParams.get("rarity-1") || "true",
        rarity2: searchParams.get("rarity-2") || "true",
        rarity3: searchParams.get("rarity-3") || "true",
        rarity4: searchParams.get("rarity-4") || "true",
        rarity5: searchParams.get("rarity-5") || "true",
      };
    };

    const { tengui, falti, pending, rarity1, rarity2, rarity3, rarity4, rarity5 } = getSearchParams();

    const newFilteredCards = cards.filter((card: CardType) => {
      let matchesTengui = false;
      let matchesFalti = false;
      let matchesPending = false;

      if (tengui === "true") matchesTengui = card.status === "tengui";
      if (falti === "true") matchesFalti = card.status === "falti";
      if (pending === "true") matchesPending = card.status === "pending";

      let matchesRarity1 = false;
      let matchesRarity2 = false;
      let matchesRarity3 = false;
      let matchesRarity4 = false;
      let matchesRarity5 = false;

      if (rarity1 === "true") matchesRarity1 = card.rarity === 1;
      if (rarity2 === "true") matchesRarity2 = card.rarity === 2;
      if (rarity3 === "true") matchesRarity3 = card.rarity === 3;
      if (rarity4 === "true") matchesRarity4 = card.rarity === 4;
      if (rarity5 === "true") matchesRarity5 = card.rarity === 5;

      return (matchesTengui || matchesFalti || matchesPending) && (matchesRarity1 || matchesRarity2 || matchesRarity3 || matchesRarity4 || matchesRarity5);
    });

    setFilteredCards(newFilteredCards);
  }, [location.search]);

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
