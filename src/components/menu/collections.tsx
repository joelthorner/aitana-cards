import { useEffect, useState } from "react";
import { collections as collectionsData } from "../../data/collections";
import { useFiltersContext } from "../../providers/filters";

export default function CollectionsList() {
  const { collections, setCollections } = useFiltersContext();

  const [selectedCollections, setSelectedCollections] = useState<string[]>(collections);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    const updatedCollections = checked ? [...selectedCollections, value] : selectedCollections.filter((id) => id !== value);

    setSelectedCollections(updatedCollections);
    setCollections(updatedCollections);
  };

  useEffect(() => {
    setSelectedCollections(collections);
  }, [collections]);

  return (
    <ul className="text-sm text-gray-600">
      {/* TODO: sort collections by a-z */}
      {collectionsData.map((collection) => (
        <li key={collection.id}>
          <div className="flex items-center gap-x-3.5 py-2 px-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
            <input
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              id={`hs-${collection.id}-checkbox`}
              value={collection.id}
              checked={selectedCollections.includes(collection.id)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={`hs-${collection.id}-checkbox`} className="text-sm">
              {collection.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
}
