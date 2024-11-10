import { Link } from "react-router-dom";
import { Collection as CollectionType } from "../types/collection";
import { cards } from "../data/cards";

interface CollectionProps {
  collection: CollectionType;
}

export default function Collection({ collection }: CollectionProps) {
  const collectionCards = cards.filter((card) => card.collection.id === collection.id).reverse();

  return (
    <Link
      id={collection.id}
      to={"/collections/" + collection.id}
      className="h-full flex flex-col bg-zinc-900 text-white shadow-sm rounded-xl p-2 hover:shadow-lg focus:outline-none focus:shadow-lg transition"
    >
      <div className="w-full relative aspect-[768/530]">
        <img src={collection.image} alt={collection.name} className="w-full rounded-md" loading="lazy" />
      </div>

      <h3 className="mt-2 text-[12px] font-medium leading-tight text-white" title={collection.name}>
        {collection.name}
      </h3>

      {collection.serie && <p className="mt-1 text-[10px] leading-tight font-medium text-zinc-400">{collection.serie}</p>}

      <div className="p-2 -ml-2 -mr-2 -mb-2 mt-auto flex items-center gap-2 justify-between">
        <div className="flex items-center gap-1 justify-center" title="Card number">
          <p className="text-[10px] text-zinc-500 capitalize">
            {collectionCards.length} cards
            {/* TODO: missing cards data /50 */}
          </p>
        </div>
      </div>
    </Link>
  );
}
