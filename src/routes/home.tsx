import CardsGrid from "../components/cards-grid";
import { useFilteredCards } from "../hooks/useFilteredCards";

export default function Home() {
  const filteredCards = useFilteredCards();

  return (
    <div className="p-2 2xl:container mx-auto">
      <CardsGrid cards={filteredCards} />
    </div>
  );
}
