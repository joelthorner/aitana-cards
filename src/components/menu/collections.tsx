import { Link } from "react-router-dom";
import { collections } from "../../data/collections";

export default function CollectionsList() {
  return (
    <ul className="marker:text-blue-600 list-disc ps-5 space-y-2 text-sm text-gray-600">
      {collections.map((collection) => (
        <li key={collection.id}>
          <Link className="text-sm text-slate-600 hover:text-blue-600" to={`/collections/` + collection.id}>
            {collection.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
