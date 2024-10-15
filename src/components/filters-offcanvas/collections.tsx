import { Minus, Plus } from "lucide-react";
import { collections as collectionsData } from "../../data/collections";
import { useFiltersContext } from "../../providers/filters";
import { Collection } from "../../types/collection";

function CollectionItem({ collection }: { collection: Collection }) {
  const { collections, setCollections } = useFiltersContext();

  const handleCheckboxChange = () => {
    if (collections.includes(collection.id)) {
      setCollections(collections.filter((r) => r !== collection.id));
    } else {
      setCollections([...collections, collection.id]);
    }
  };

  return (
    <div key={collection.id} className="flex items-center gap-x-3.5 py-2 px-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
      <input
        type="checkbox"
        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        id={`hs-${collection.id}-checkbox`}
        value={collection.id}
        checked={collections.includes(collection.id)}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={`hs-${collection.id}-checkbox`} className="text-xs">
        {collection.name}
      </label>
    </div>
  );
}

function CollectionGroup({ index, serieName, groupCollections }: { index: number; serieName: string; groupCollections: Collection[] }) {
  const { collections } = useFiltersContext();

  const groupSelectedItems = groupCollections.filter((collectionItem) => collections.includes(collectionItem.id));

  return (
    <div className="hs-accordion" id={`hs-basic-heading-collection-${index}`}>
      <button
        className="hs-accordion-toggle hs-accordion-active:text-blue-600 px-4 py-2 inline-flex items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
        aria-expanded="true"
        aria-controls={`hs-basic-collapse-collection-${index}`}
      >
        {serieName}
        {groupSelectedItems.length > 0 && (
          <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">{groupSelectedItems.length}</span>
        )}

        <div className="size-8 flex items-center justify-center transition-transform hs-accordion-active:rotate-180 ml-auto">
          <Plus size={16} className="hs-accordion-active:hidden block" />
          <Minus size={16} className="hs-accordion-active:block hidden" />
        </div>
      </button>
      <div
        id={`hs-basic-collapse-collection-${index}`}
        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
        role="region"
        aria-labelledby={`hs-basic-heading-collection-${index}`}
      >
        <div className="px-4 pb-3">
          {groupCollections
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((collection) => (
              <CollectionItem key={collection.id} collection={collection} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default function CollectionsList() {
  // Agrupar per collection section
  const collectionsDataGrouped = collectionsData.reduce<Record<string, Collection[]>>((acc, collection) => {
    if (!acc[collection.serie]) {
      acc[collection.serie] = [];
    }
    acc[collection.serie].push(collection);
    return acc;
  }, {});

  return (
    <>
      <div className="w-full">
        <div className="hs-accordion-group">
          {Object.entries(collectionsDataGrouped).map(([serieName, groupCollections], index) => (
            <CollectionGroup key={serieName} index={index} serieName={serieName} groupCollections={groupCollections} />
          ))}
        </div>
      </div>
    </>
  );
}
