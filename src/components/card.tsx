import { Link } from "react-router-dom";
import { Card as CardType } from "../data/cards";
import { getStarClassName } from "../utils/getStarClassName";
import { useRef, useState } from "react";
import { getCardStatusIcon } from "../utils/getCardStatusIcon";

interface CardProps {
  card: CardType;
}

export default function Card({ card }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [animationInterval, setAnimationInterval] = useState<NodeJS.Timeout | null>(null);

  const initialStyles: any = {
    "--pointer-x": "50%",
    "--pointer-y": "50%",
    "--pointer-from-center": "0",
    "--pointer-from-top": "0.5",
    "--pointer-from-left": "0.5",
    "--card-opacity": "0",
    "--rotate-x": "0deg",
    "--rotate-y": "0deg",
    "--background-x": "50%",
    "--background-y": "50%",
    "--card-scale": "1",
    "--translate-x": "0px",
    "--translate-y": "0px",
  };

  const finalStyles: any = {
    "--pointer-x": "14.164%",
    "--pointer-y": "8.499%",
    "--pointer-from-center": "1",
    "--pointer-from-top": "0.08499000000000001",
    "--pointer-from-left": "0.14164",
    "--card-opacity": "1",
    "--rotate-x": "10.239deg",
    "--rotate-y": "-20.75deg",
    "--background-x": "40.683%",
    "--background-y": "35.89%",
    "--card-scale": "1",
    "--translate-x": "0px",
    "--translate-y": "0px",
  };

  const animateCSSVariables = (duration: number = 3000) => {
    const startTime = performance.now();

    function updateVariables(timestamp: number) {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      for (const key in initialStyles) {
        const initialValue = parseFloat(initialStyles[key]) || 0;
        const finalValue = parseFloat(finalStyles[key]) || 0;
        const unit = finalStyles[key].match(/[a-z%]+$/) || "";
        const interpolatedValue = initialValue + (finalValue - initialValue) * progress;

        if (cardRef.current) {
          cardRef.current.style.setProperty(key, interpolatedValue + unit);
        }
      }

      if (progress < 1) {
        requestAnimationFrame(updateVariables);
      }
    }

    requestAnimationFrame(updateVariables);
  };

  const startAnimation = () => {
    if (!animationInterval) {
      const interval = setInterval(() => animateCSSVariables(500), 500);
      setAnimationInterval(interval);
    }
  };

  const stopAnimation = () => {
    if (animationInterval) {
      clearInterval(animationInterval);
      setAnimationInterval(null);
      // Reset styles to initial
      Object.keys(initialStyles).forEach((key) => {
        if (cardRef.current) {
          cardRef.current.style.setProperty(key, initialStyles[key]);
        }
      });
    }
  };

  const starClassName = "size-3 " + getStarClassName("rarity_" + card.rarity);
  const statusIcon = getCardStatusIcon(card.status);

  return (
    <Link
      to={"/cards/" + card.id}
      className="h-full flex flex-col bg-white border shadow-sm rounded-xl p-2 hover:shadow-lg focus:outline-none focus:shadow-lg transition"
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
    >
      <div className="w-full aspect-[6/8] relative">
        <div className="card-brilli-default absolute inset-0 z-20" ref={cardRef}></div>
        <img src={card.images[0]} alt={card.name} />
      </div>

      <h3 className="mt-2 text-[12px] font-bold leading-tight text-gray-800 line-clamp-2">{card.name}</h3>
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
