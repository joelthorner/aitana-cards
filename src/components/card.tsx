import { Link } from "react-router-dom";
import { Card as CardType } from "../data/cards";

interface CardProps {
  card: CardType;
}

export default function Card({ card }: CardProps) {
  let starClassName = "size-3";

  if (card.rarity >= 0 && card.rarity < 2) {
    starClassName += " fill-slate-400";
  } else if (card.rarity === 2) {
    starClassName += " fill-green-400";
  } else if (card.rarity === 3) {
    starClassName += " fill-sky-500";
  } else if (card.rarity === 4) {
    starClassName += " fill-purple-600";
  } else if (card.rarity === 5) {
    starClassName += " fill-orange-500";
  }

  let statusIcon = (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-4 fill-emerald-500" viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
        />
      </svg>
    </>
  );

  if (card.status === "pending") {
    statusIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-4 fill-orange-500" viewBox="0 0 16 16">
        <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2z" />
      </svg>
    );
  } else if (card.status === "falti") {
    statusIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-4 fill-rose-600 " viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
        <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4" />
      </svg>
    );
  }

  return (
    <Link to={"/cards/" + card.id} className="flex flex-col bg-white border shadow-sm rounded-xl p-2 hover:shadow-lg focus:outline-none focus:shadow-lg transition">
      <div className="w-full aspect-[6/8]">
        <img src={card.image} alt={card.name} />
      </div>

      <h3 className="mt-2 text-[12px] font-bold leading-tight text-gray-800">{card.name}</h3>
      <p className="mt-1 text-[10px] leading-tight font-medium uppercase text-gray-400 mb-2">{card.collection.name}</p>

      <div className="p-2 border-t -ml-2 -mr-2 -mb-2 mt-auto flex items-center gap-2 justify-between">
        <div className="flex items-center gap-1">
          {statusIcon}
          <p className="text-[10px] text-gray-500 capitalize">{card.status}</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-[10px] text-gray-500 capitalize">{card.rarity}/5</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={starClassName} viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
