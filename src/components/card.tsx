import { memo, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { getStarClassName } from "../utils/getStarClassName";
import Holo from "./holo";
import { Card as CardType, CardType as CardCardType } from "../types/card";
import { useClassName } from "../hooks/useClassName";
import { useIsVisible } from "../hooks/useIsVisible";
import { Shirt, TriangleAlert } from "lucide-react";
import { UnlicensedCards } from "../data/collections";

interface CardProps {
  card: CardType;
  emptyCard?: boolean;
}

const Card = memo(({ card, emptyCard = false }: CardProps) => {
  const starClassName = useMemo(() => "size-3 " + getStarClassName(card.rarity), [card.rarity]);

  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useIsVisible(ref);

  const defaultImage = useMemo(
    () => (card.images.length > 0 ? <img src={card.images[0]} alt={card.name} className="absolute inset-0 size-full rounded-md" loading="lazy" /> : null),
    [card.images, card.name]
  );
  const holoElement = isVisible && card.brilli && defaultImage && <Holo type={card.brilli} cardId={card.id} />;

  const cardClassName = useClassName([
    "border border-zinc-900 h-full flex flex-col bg-zinc-900 text-white shadow-sm rounded-xl p-2 hover:shadow-lg focus:outline-none focus:shadow-lg transition overflow-hidden",
    emptyCard ? "invisible opacity-0" : "",
    "md:hover:bg-zinc-950 md:hover:border-zinc-800",
  ]);

  return (
    <Link id={card.id} to={`/cards/${card.id}`} className={cardClassName}>
      <div className="w-full aspect-[5/7] relative" ref={ref}>
        {defaultImage}
        {holoElement}
      </div>

      <h3 className="mt-2 text-[12px] font-bold leading-tight text-white line-clamp-2" title={card.name}>
        {card.name}
      </h3>
      <p className="mt-1 text-[10px] leading-tight font-medium uppercase text-zinc-500 mb-2 line-clamp-2">{card.collection.name}</p>

      <div className="p-2 -ml-2 -mr-2 -mb-2 mt-auto flex items-center gap-2 justify-between">
        <div className="flex items-center gap-1 justify-center" title="Card number">
          <p className="text-[10px] text-zinc-400">{card.number}</p>
        </div>
        {card.cardType.includes(CardCardType.Relic) && (
          <div className="flex items-center gap-1 justify-center text-zinc-500 hover:text-rose-500" title="Relic">
            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
            </svg>
          </div>
        )}
        {card.numbered && card.numbered === 1 && (
          <div className="flex items-center gap-1 justify-center text-amber-500" title="1/1">
            <svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            </svg>
          </div>
        )}
        {card.collection.id === UnlicensedCards.id && (
          <div className="flex items-center gap-1 justify-center mr-auto text-red-500" title="Unlicensed card">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-3" viewBox="0 0 16 16">
              <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </div>
        )}
        <div className="mr-auto"></div>
        <div className="flex items-center gap-1 justify-center ml-auto" title="Year">
          <p className="text-[10px] text-zinc-600 capitalize text-center">{card.year}</p>
        </div>
        {/* <div className="flex items-center gap-1 justify-end" title="Rarity">
          <p className="text-[10px] text-zinc-400 capitalize">{card.rarity}/5</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={starClassName} viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </div> */}
      </div>
    </Link>
  );
});

export default Card;
