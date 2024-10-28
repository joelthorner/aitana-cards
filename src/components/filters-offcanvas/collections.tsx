import { Minus, Plus } from "lucide-react";
import { collections as collectionsData } from "../../data/collections";
import { useFiltersContext } from "../../providers/filters";
import { Collection, CollectionSerie } from "../../types/collection";
import { useEffect, useState } from "react";

interface CollectionItemProps {
  collection: Collection;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

interface CollectionGroupProps {
  index: number;
  serieName: string;
  groupCollections: Collection[];
}

function CollectionItem({ collection, onChange, checked }: CollectionItemProps) {
  return (
    <div key={collection.id} className="flex items-center gap-x-3.5 py-2 px-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
      <input
        type="checkbox"
        className="shrink-0 m-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        id={`hs-${collection.id}-checkbox`}
        value={collection.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={`hs-${collection.id}-checkbox`} className="text-xs">
        {collection.name}
      </label>
    </div>
  );
}

function CollectionGroup({ index, serieName, groupCollections }: CollectionGroupProps) {
  const { collections, setCollections } = useFiltersContext();

  const groupSelectedItems = groupCollections.filter((collectionItem) => collections.includes(collectionItem.id));

  const [checked, setChecked] = useState<boolean>(collections.length > 0 && groupCollections.every((obj) => collections.includes(obj.id)));

  const handleGroupCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    const valuesToAddOrRemove = groupCollections.map((c) => c.id);

    if (event.target.checked) {
      const newValues: string[] = [...collections, ...valuesToAddOrRemove];
      const uniqueValues: string[] = Array.from(new Set(newValues));

      setCollections(uniqueValues);
    } else {
      const updatedValues: string[] = collections.filter((value) => !valuesToAddOrRemove.includes(value));
      setCollections(updatedValues);
    }
  };

  const handleItemCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (collections.includes(event.target.value)) {
      setCollections(collections.filter((r) => r !== event.target.value));
    } else {
      setCollections([...collections, event.target.value]);
    }
  };

  useEffect(() => {
    if (!collections.length) {
      setChecked(false);
    } else if (collections.length > 0) {
      setChecked(groupCollections.every((obj) => collections.includes(obj.id)));
    }
  }, [collections, groupCollections]);

  if (serieName === CollectionSerie._NONE) {
    return (
      <div className="px-2">
        {groupCollections
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((collection) => (
            <CollectionItem key={collection.id} collection={collection} onChange={handleItemCheckbox} checked={collections.includes(collection.id)} />
          ))}
      </div>
    );
  }

  return (
    <div className="hs-accordion" id={`hs-basic-heading-collection-${index}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 absolute top-1/2 -translate-y-1/2 left-4"
          checked={checked}
          onChange={handleGroupCheckbox}
          id={`input-heading-collection-${index}`}
        />
        <button
          className="hs-accordion-toggle hs-accordion-active:text-blue-600 px-4 py-2 pl-11 inline-flex items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg"
          aria-expanded="true"
          aria-controls={`hs-basic-collapse-collection-${index}`}
        >
          {groupSelectedItems.length > 0 ? (
            <>
              {serieName}
              <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">{groupSelectedItems.length}</span>
            </>
          ) : (
            <span>
              {serieName} <span className="text-zinc-500 font-normal">({groupCollections.length})</span>
            </span>
          )}

          <div className="size-8 flex items-center justify-center transition-transform hs-accordion-active:rotate-180 ml-auto">
            <Plus size={16} className="hs-accordion-active:hidden block" />
            <Minus size={16} className="hs-accordion-active:block hidden" />
          </div>
        </button>
      </div>
      <div
        id={`hs-basic-collapse-collection-${index}`}
        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
        role="region"
        aria-labelledby={`hs-basic-heading-collection-${index}`}
      >
        <div className="px-2 pb-3">
          {groupCollections
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((collection) => (
              <CollectionItem key={collection.id} collection={collection} onChange={handleItemCheckbox} checked={collections.includes(collection.id)} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default function CollectionsList() {
  // Agrupar per collection section
  const collectionsDataGrouped = collectionsData.reduce<Record<string, Collection[]>>((acc, collection) => {
    const serieKey = collection.serie ?? CollectionSerie._NONE;
    if (!acc[serieKey]) {
      acc[serieKey] = [];
    }
    acc[serieKey].push(collection);
    return acc;
  }, {});

  return (
    <>
      <div className="w-full">
        <div className="hs-accordion-group">
          {Object.entries(collectionsDataGrouped)
            .sort(([serieNameA], [serieNameB]) => serieNameA.localeCompare(serieNameB))
            .map(([serieName, groupCollections], index) => (
              <CollectionGroup key={serieName} index={index} serieName={serieName} groupCollections={groupCollections} />
            ))}
        </div>
      </div>
    </>
  );
}
