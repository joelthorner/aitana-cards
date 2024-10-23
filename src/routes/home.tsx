import CardsGrid from "../components/cards-grid";
import { useFilteredCards } from "../hooks/useFilteredCards";
// import { Card } from "../types/card";

export default function Home() {
  const filteredCards = useFilteredCards();

  // const initialCards: Card[] = filteredCards.slice(0, 50);

  return (
    <div className="p-2 2xl:container mx-auto">
      <CardsGrid cards={filteredCards} />
    </div>
  );
}
