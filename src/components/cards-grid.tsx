import { X } from "lucide-react";
import { Card as CardType } from "../types/card";
import Card from "./card";
import NotFoundImg from "../assets/img/adidas.jpeg";
import { useFiltersContext } from "../providers/filters";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface CardsGridProps {
  cards: CardType[];
  infiniteScroll?: boolean;
}

export default function CardsGrid({ cards, infiniteScroll = true }: CardsGridProps) {
  const { filtering, resetFilters } = useFiltersContext();

  const [hasMore, setHasMore] = useState(true);

  const [items, setItems] = useState(cards.slice(0, 50));

  const [page, setPage] = useState(1);

  useEffect(() => {
    setItems(cards.slice(0, 50));
    setPage(1);
    setHasMore(cards.length > 50);
  }, [cards]);

  const fetchMoreData = () => {
    if (items.length >= cards.length) {
      setHasMore(false);
      return;
    }

    setItems(items.concat(cards.slice(page * 50, page * 50 + 50)));
    setPage(page + 1);
  };

  return items.length ? (
    <div className="relative">
      {infiniteScroll ? (
        <InfiniteScroll
          className="grid grid-default-cards gap-x-2 gap-y-4 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={"TODO carregant spinner"}
        >
          {items.map((card) => (
            <div className="grid-item" key={card.id}>
              <Card card={card} />
            </div>
          ))}
        </InfiniteScroll>
      ) : (
        <div className="grid grid-default-cards gap-x-2 gap-y-4 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {cards.map((card) => (
            <div className="grid-item" key={card.id}>
              <Card card={card} />
            </div>
          ))}
        </div>
      )}
    </div>
  ) : (
    <div className="max-w-sm w-full min-h-[400px] flex flex-col justify-center mx-auto px-6 py-4">
      <div className="flex justify-center items-center rounded-lg overflow-hidden">
        <img src={NotFoundImg} alt="Aitana in a Addidas promo" />
      </div>

      <h2 className="mt-5 font-semibold text-gray-800">No cards found</h2>
      <p className="mt-2 text-sm mb-1 text-gray-600">{filtering ? `Canvia o elimina els filtres per trobar resultats. L'Aitana ens mira!` : `No hi han cartes :(`}</p>
      <div>
        <button
          className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-1 hover:underline focus:outline-none focus:underline font-medium"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="offcanvas-menu"
          data-hs-overlay="#offcanvas-menu"
        >
          Change filters
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-2">
        <button
          type="button"
          className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700"
          onClick={resetFilters}
        >
          <X size={16} strokeWidth={1.5} absoluteStrokeWidth />
          Reset filters
        </button>
      </div>
    </div>
  );
}
