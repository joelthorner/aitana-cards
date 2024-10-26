import { memo, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { getStarClassName } from "../utils/getStarClassName";
import Holo from "./holo";
import { Card as CardType, CardType as CardCardType } from "../types/card";
import { useClassName } from "../hooks/useClassName";
import { useIsVisible } from "../hooks/useIsVisible";
import { Shirt } from "lucide-react";

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
  const holoElement = useMemo(() => isVisible && card.brilli && defaultImage && <Holo type={card.brilli} cardId={card.id} />, [isVisible, card.brilli, card.id, defaultImage]);

  const cardClassName = useClassName([
    "h-full flex flex-col bg-zinc-900 text-white shadow-sm rounded-xl p-2 hover:shadow-lg focus:outline-none focus:shadow-lg transition",
    emptyCard ? "invisible opacity-0" : "",
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
          <p className="text-[10px] text-zinc-400 capitalize">{card.number}</p>
        </div>
        {card.cardType.includes(CardCardType.Relic) && (
          <div className="flex items-center gap-1 justify-center mr-auto text-lime-500" title="Relic">
            <Shirt size={12} strokeWidth={1} />
          </div>
        )}
        <div className="flex items-center gap-1 justify-center ml-auto" title="Year">
          <p className="text-[10px] text-zinc-600 capitalize text-center">{card.year}</p>
        </div>
        <div className="flex items-center gap-1 justify-end" title="Rarity">
          <p className="text-[10px] text-zinc-400 capitalize">{card.rarity}/5</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={starClassName} viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </div>
      </div>
    </Link>
  );
});

export default Card;
