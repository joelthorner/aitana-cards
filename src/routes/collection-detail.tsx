import { Link, useParams } from "react-router-dom";
import ErrorPage from "../error-page";
import { collections } from "../data/collections";
import { cards } from "../data/cards";
import { getCardStatusIcon } from "../utils/getCardStatusIcon";
import PhotoSwipe from "photoswipe";
import { useRef } from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { getUrlDomain } from "../utils/getUrlDomain";

interface GalleryItem {
  src: string;
  width: number;
  height: number;
}

export default function CollectionDetail() {
  const { collectionId } = useParams<{ collectionId: string }>();

  const [collection] = collections.filter((collection) => collection.id === collectionId);

  const galleryRef = useRef<HTMLDivElement>(null);

  const initPhotoSwipe = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    event.preventDefault();

    if (galleryRef.current) {
      const imgTags = galleryRef.current.getElementsByTagName("img");
      const imagesData: GalleryItem[] = Array.from(imgTags).map((img) => ({
        src: img.src,
        width: img.naturalWidth,
        height: img.naturalHeight,
      }));

      const pswp = new PhotoSwipe({ dataSource: imagesData, index: index });
      pswp.init();
    }
  };

  if (!collection) {
    return <ErrorPage />;
  }

  const collectionCards = cards.filter((card) => card.collection.id === collection.id && !card.missingImage).reverse();

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-collection gap-4 relative">
        <div className="flex flex-col gap-4" id={"gallery-" + collectionId} ref={galleryRef}>
          <a
            href={collection.image}
            target="_blank"
            rel="noreferrer"
            className="h-auto flex flex-col bg-white border shadow-sm rounded-xl p-2 transition cursor-pointer"
            onClick={(event) => initPhotoSwipe(event, 0)}
          >
            <div className="relative">
              <img src={collection.image} alt={collection.name} className="size-full" />
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-3 mb-auto items-start">
          <h1 className="text-lg font-medium leading-normal">{collection.name}</h1>
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm">
            {collectionCards.length} cards
          </span>
        </div>
      </div>

      {collection.description && <p className="text-[13px] leading-normal text-slate-500">{collection.description}</p>}

      {collection.links && (
        <div className="flex flex-col">
          {collection.links?.map((link) => (
            <a
              key={link}
              className="inline-flex items-center gap-x-3.5 py-3 px-4 text-xs font-medium border border-gray-200 text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SquareArrowOutUpRight size={16} className="shrink-0" />
              {getUrlDomain(link)}
            </a>
          ))}
        </div>
      )}

      {collectionCards.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 text-xs">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="ps-3 py-2 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold tracking-wide text-gray-800">#</span>
                  </div>
                </th>

                <th scope="col" className="px-3 py-2 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold tracking-wide text-gray-800">Image</span>
                  </div>
                </th>

                <th scope="col" className="w-1/2 py-2 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold tracking-wide text-gray-800">Name</span>
                  </div>
                </th>

                <th scope="col" className="pe-3 py-2 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold tracking-wide text-gray-800">Status</span>
                  </div>
                </th>

                <th scope="col" className="px-3 py-2 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold tracking-wide text-gray-800">Rarity</span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-[10px]">
              {collectionCards.map((collectionCard) => (
                <tr>
                  <td className="size-px whitespace-nowrap p-0">
                    <div className="ps-3 py-2">
                      <code className="text-pink-600">{collectionCard.number}</code>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap p-0">
                    <div className="px-3 py-2">
                      {collectionCard.images.length > 0 && (
                        <Link to={"/cards/" + collectionCard.id}>
                          <div className="aspect-[5/7] relative w-9">
                            <img className="absolute inset-0 object-cover rounded-lg" src={collectionCard.images[0]} alt={collectionCard.name} />
                          </div>
                        </Link>
                      )}
                    </div>
                  </td>
                  <td className="size-px w-1/2 p-0">
                    <div className="py-2">
                      <Link to={"/cards/" + collectionCard.id}>{collectionCard.name}</Link>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap p-0">
                    <div className="pe-3 py-2 flex justify-center">{getCardStatusIcon(collectionCard.status)}</div>
                  </td>
                  <td className="size-px whitespace-nowrap p-0">
                    <div className="px-3 py-2 flex justify-center">{collectionCard.rarity}/5</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div>
        <div className="mb-2 pl-[2px] text-sm font-medium">Debug info</div>
        <pre className="text-xs overflow-auto">{JSON.stringify(collection, null, 2)}</pre>
      </div>
    </div>
  );
}
