import { Link } from "react-router-dom";
import { Collection as CollectionType } from "../types/collection";

interface CollectionProps {
  collection: CollectionType;
}

export default function Collection({ collection }: CollectionProps) {
  return (
    <Link
      id={collection.id}
      to={"/collections/" + collection.id}
      className="h-full flex flex-col bg-zinc-900 text-white shadow-sm rounded-xl p-2 hover:shadow-lg focus:outline-none focus:shadow-lg transition"
    >
      <div className="w-full relative aspect-[768/530]">
        <img src={collection.image} alt={collection.name} className="w-full rounded-md" loading="lazy" />
      </div>

      <h3 className="mt-2 text-[12px] font-bold leading-tight text-white" title={collection.name}>
        {collection.name}
      </h3>
      {collection.serie && <p className="mt-1 text-[10px] leading-tight font-medium uppercase text-gray-400 mb-2">{collection.serie}</p>}
    </Link>
  );
}
