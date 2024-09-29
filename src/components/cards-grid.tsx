import { Card as CardType } from "../types/card";
import Card from "./card";

interface CardsGridProps {
  cards: CardType[];
}

export default function CardsGrid({ cards }: CardsGridProps) {
  return cards.length ? (
    <div className="grid grid-default-cards gap-x-2 gap-y-4">
      {cards.map((card) => (
        <div className="grid-item" key={card.id}>
          <Card card={card} />
        </div>
      ))}
    </div>
  ) : (
    <>"no"</>
  );
}
