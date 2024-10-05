import { useParams } from "react-router-dom";
import { cards } from "../data/cards";
import ErrorPage from "../error-page";

export default function CardDetail() {
  const { cardId } = useParams<{ cardId: string }>();

  const cardFind = cards.filter((card) => card.id === cardId);
  console.log(cardId);

  if (!cardFind.length) {
    return <ErrorPage />;
  }

  return <div>{cardFind[0].name}</div>;
}
