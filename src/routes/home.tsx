import { cards } from "../data/cards";
import Card from "../components/card";

export default function Home() {
  return (
    <div className="grid grid-default-cards gap-x-2 gap-y-4">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}
