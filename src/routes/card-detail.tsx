import { useParams } from "react-router-dom";
import { cards } from "../data/cards";
import ErrorPage from "../error-page";

export default function CardDetail() {
  const { cardId } = useParams<{ cardId: string }>();

  const cardFind = cards.filter((card) => card.id === cardId);

  if (!cardFind.length) {
    return <ErrorPage />;
  }

  return (
    <div>
      <pre className="text-xs overflow-auto">{JSON.stringify(cardFind, null, 2)}</pre>
    </div>
  );
}
