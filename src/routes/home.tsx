import CardsGrid from "../components/cards-grid";
import { useFilteredCards } from "../hooks/useFilteredCards";

export default function Home() {
  const filteredCards = useFilteredCards();

  return <CardsGrid cards={filteredCards} />;
}
