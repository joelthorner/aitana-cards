import { Link } from "react-router-dom";
import { getStarClassName } from "../utils/getStarClassName";
import { getCardStatusIcon } from "../utils/getCardStatusIcon";
import Holo from "./holo";
import { Card as CardType } from "../types/card";
import { CameraOff } from "lucide-react";

interface CardProps {
  card: CardType;
}

export default function Card({ card }: CardProps) {
  const starClassName = "size-3 " + getStarClassName(card.rarity);

  const statusIcon = getCardStatusIcon(card.status);

  const defaultImage = card.images.length ? (
    <img src={card.images[0]} alt={card.name} className="absolute inset-0 size-full" />
  ) : (
    <div className="bg-gray-100 h-full w-full">
      <CameraOff className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10" />
      <img src={card.missingImage} alt={card.name} className="opacity-20 saturate-0 contrast-200" />
    </div>
  );

  return (
    <Link to={"/cards/" + card.id} className="h-full flex flex-col bg-white border shadow-sm rounded-xl p-2 hover:shadow-lg focus:outline-none focus:shadow-lg transition">
      <div className="w-full aspect-[5/7] relative">
        {defaultImage}
        {card.brilli && card.images.length > 0 && <Holo type={card.brilli} cardId={card.id} />}
      </div>

      <h3 className="mt-2 text-[12px] font-bold leading-tight text-gray-800 line-clamp-2" title={card.name}>
        {card.name}
      </h3>
      <p className="mt-1 text-[10px] leading-tight font-medium uppercase text-gray-400 mb-2 line-clamp-2">{card.collection.name}</p>

      <div className="p-2 border-t -ml-2 -mr-2 -mb-2 mt-auto flex items-center gap-2 justify-between">
        <div className="flex items-center gap-1">
          {statusIcon}
          <p className="text-[10px] text-gray-500 capitalize">{card.status}</p>
        </div>
        <div className="flex items-center gap-1 justify-center ml-auto">
          <p className="text-[10px] text-pink-600 capitalize text-center">{card.year}</p>
        </div>
        <div className="flex items-center gap-1 justify-end">
          <p className="text-[10px] text-gray-500 capitalize">{card.rarity}/5</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={starClassName} viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
