import CardsGrid from "../components/cards-grid";
import { useFilteredCards } from "../hooks/useFilteredCards";
import { useFiltersContext } from "../providers/filters";

export default function Home() {
  useFilteredCards();
  const { filteredCards } = useFiltersContext();

  return (
    <div className="p-2 2xl:container mx-auto pt-1 md:p-4">
      <CardsGrid cards={filteredCards} />
    </div>
  );
}
