import { X } from "lucide-react";
import { Card as CardType } from "../types/card";
import Card from "./card";
import NotFoundImg from "../assets/img/adidas.jpeg";
import { useEffect } from "react";
import { useFiltersContext } from "../providers/filters";

interface CardsGridProps {
  cards: CardType[];
}

export default function CardsGrid({ cards }: CardsGridProps) {
  const { filtering, resetFilters } = useFiltersContext();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  });

  return cards.length ? (
    <div className="grid grid-default-cards gap-x-2 gap-y-4">
      {cards.map((card) => (
        <div className="grid-item" key={card.id}>
          <Card card={card} />
        </div>
      ))}
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
