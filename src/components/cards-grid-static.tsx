import { useMemo } from "react";
import { Card as CardType } from "../types/card";
import Card from "./card";

interface CardsGridProps {
  cards: CardType[];
}

export default function CardsGridStatic({ cards }: CardsGridProps) {
  const renderedItems = useMemo(
    () =>
      cards.map((card) => (
        <div className="grid-item" key={card.id}>
          <Card card={card} />
        </div>
      )),
    [cards]
  );

  return (
    <div className="relative">
      <div className="grid grid-default-cards gap-x-2 gap-y-4 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">{renderedItems}</div>
    </div>
  );
}
