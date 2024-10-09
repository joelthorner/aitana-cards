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
      className="h-full flex flex-col bg-white border shadow-sm rounded-xl p-2 hover:shadow-lg focus:outline-none focus:shadow-lg transition"
    >
      <div className="w-full aspect-square relative">
        <img src={collection.image} alt={collection.name} className="absolute inset-0 size-full object-contain" />
      </div>

      <h3 className="mt-2 text-[12px] font-bold leading-tight text-center text-gray-800" title={collection.name}>
        {collection.name}
      </h3>
    </Link>
  );
}
