import { Link, useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../error-page";
import { collections } from "../data/collections";
import { cards } from "../data/cards";
import { getCardStatusIcon } from "../utils/getCardStatusIcon";
import PhotoSwipe from "photoswipe";
import { useRef } from "react";
import { MoveLeft, SquareArrowOutUpRight } from "lucide-react";
import { getUrlDomain } from "../utils/getUrlDomain";

interface GalleryItem {
  src: string;
  width: number;
  height: number;
}

export default function CollectionDetail() {
  const navigate = useNavigate();

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

  const collectionCards = cards.filter((card) => card.collection.id === collection.id).reverse();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 aspect-[768/530] z-10" id={"gallery-" + collectionId} ref={galleryRef}>
        <button className="absolute top-0 left-0 z-40 text-white py-4 px-4 drop-shadow-md" onClick={() => navigate(-1)}>
          <MoveLeft />
        </button>
        <a href={collection.image} target="_blank" rel="noreferrer" className="transition cursor-pointer" onClick={(event) => initPhotoSwipe(event, 0)}>
          <div className="relative">
            <img src={collection.image} alt={collection.name} className="size-full" />
          </div>
        </a>
      </div>
      <div className="aspect-[768/530]"></div>

      <div className="bg-white px-5 pt-6 pb-20 rounded-t-3xl -mt-5 flex flex-col gap-4 relative z-20">
        <h1 className="text-xl font-medium leading-normal">{collection.name}</h1>
        <div className="flex gap-2 flex-wrap items-center">
          <div className="hs-tooltip">
            <span className="hs-tooltip-toggle inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {collectionCards.length} cards
            </span>
            <span
              className="hs-tooltip-content font-normal text-xs hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-md"
              role="tooltip"
            >
              Total cards found
            </span>
          </div>
          <div className="hs-tooltip">
            <span className="hs-tooltip-toggle inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{collection.serie}</span>
            <span
              className="hs-tooltip-content font-normal text-xs hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-md"
              role="tooltip"
            >
              Collection serie
            </span>
          </div>
        </div>

        {collection.description && <p className="text-sm mt-4 text-zinc-500">{collection.description}</p>}

        {collection.links && (
          <div className="flex flex-col mt-4">
            {collection.links?.map((link) => (
              <a
                key={link}
                className="flex items-center gap-x-3.5 py-3 px-4 text-xs font-medium border border-gray-200 text-rose-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:pl-6 transition-all"
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
      </div>

      <div className="bg-zinc-950 rounded-t-3xl px-4 pt-6 pb-20 relative z-20 flex flex-col gap-16 -mt-6">
        <div>
          <div className="mb-4 pl-[2px] font-medium text-white text-center">Collection cards</div>
          {collectionCards.length > 0 && (
            <div className="bg-zinc-900 border border-zinc-950 rounded-xl shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-zinc-950 text-xs">
                <thead className="bg-zinc-900">
                  <tr>
                    <th scope="col" className="ps-3 py-2 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-zinc-200">#</span>
                      </div>
                    </th>

                    <th scope="col" className="px-3 py-2 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-zinc-200">Image</span>
                      </div>
                    </th>

                    <th scope="col" className="w-1/2 py-2 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-zinc-200">Name</span>
                      </div>
                    </th>

                    <th scope="col" className="pe-3 py-2 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-zinc-200">Status</span>
                      </div>
                    </th>

                    <th scope="col" className="px-3 py-2 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-zinc-200">Rarity</span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-zinc-950 text-[10px] text-zinc-300">
                  {collectionCards.map((collectionCard) => (
                    <tr key={collectionCard.id}>
                      <td className="size-px whitespace-nowrap p-0">
                        <div className="ps-3 py-2">
                          <code className="text-yellow-500">{collectionCard.number}</code>
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
        </div>
      </div>
    </>
  );
}
