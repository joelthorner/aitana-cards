import { Link, useParams } from "react-router-dom";
import { cards } from "../data/cards";
import ErrorPage from "../error-page";
import { getCardStatusIcon } from "../utils/getCardStatusIcon";
import { getStarClassName } from "../utils/getStarClassName";
import { Archive, BookText, BookType, Bug, Calendar, Folder, Hash, Medal, Package2, SquareArrowOutUpRight, SwatchBook } from "lucide-react";
import { getUrlDomain } from "../utils/getUrlDomain";
import CardsGrid from "../components/cards-grid";
import Holo from "../components/holo";
import "photoswipe/style.css";
import { useRef } from "react";
import PhotoSwipe from "photoswipe";
import { CardType } from "../types/card";
import RCImage from "../assets/img/rookie.png";

interface GalleryItem {
  src: string;
  width: number;
  height: number;
}

export default function CardDetail() {
  const { cardId } = useParams<{ cardId: string }>();

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

  const [card] = cards.filter((card) => card.id === cardId);

  if (!card) {
    return <ErrorPage />;
  }

  const statusIcon = getCardStatusIcon(card.status);
  const starClassName = "size-3 " + getStarClassName(card.rarity);

  const cardRelatedsIdSearch = card.id.replace(/[a-zA-Z]+$/, "");
  const relatedCards = cards.filter((card) => card.id.includes(cardRelatedsIdSearch) && card.id !== cardId);

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-4 relative">
        <div className="flex flex-col gap-4" id={"gallery-" + cardId} ref={galleryRef}>
          <a
            href={card.images[0]}
            target="_blank"
            rel="noreferrer"
            className="h-full flex flex-col bg-white border shadow-sm rounded-xl p-2 transition cursor-pointer"
            onClick={(event) => initPhotoSwipe(event, 0)}
          >
            <div className="relative">
              <img src={card.images[0]} alt={card.name} className="size-full" />
              {card.brilli && card.images.length > 0 && <Holo type={card.brilli} cardId={card.id} />}
            </div>
          </a>

          <div className="grid grid-cols-3 gap-1">
            {card.images.slice(1, card.images.length).map((image, index) => (
              <a
                key={image}
                href={image}
                target="_blank"
                rel="noreferrer"
                className="h-full flex flex-col bg-white border shadow-sm rounded-lg p-[2px] transition cursor-pointer aspect-square"
                onClick={(event) => initPhotoSwipe(event, index + 1)}
              >
                <img src={image} alt={`${card.name} - ${index + 1}`} className="size-full rounded-md object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-auto">
          <h1 className="text-lg font-medium leading-normal">{card.name}</h1>
          <Link to={`/collections/${card.collection.id}`} className="text-[12px] leading-normal tracking-wide uppercase text-gray-400 hover:text-blue-500 hover:underline">
            {card.collection.name}
          </Link>

          {card.description && <p className="text-sm text-slate-500">{card.description}</p>}

          <div className="flex w-full gap-4">
            <div className="flex items-center gap-1">
              {statusIcon}
              <p className="text-[10px] text-gray-500 capitalize">{card.status}</p>
            </div>

            <div className="flex items-center gap-1 justify-end">
              <p className="text-[10px] text-gray-500 capitalize">{card.rarity}/5</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={starClassName} viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
          </div>

          {card.cardType.includes(CardType.RookieCard) && (
            <div className="flex gap-2 mt-1">
              <img src={RCImage} alt="Rookie Card" className="w-6" title="Rookie Card" />
            </div>
          )}
        </div>
      </div>

      <ul className="flex flex-col">
        <li className="inline-flex justify-between items-center gap-x-3 py-3 px-4 text-xs bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
          <Hash size={16} className="shrink-0" />
          <span className="font-medium">Card number</span>
          <span className="text-slate-700 text-right ml-auto">{card.number}</span>
        </li>
        {card.numbered && (
          <li className="inline-flex justify-between items-center gap-x-3 py-3 px-4 text-xs bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            <Medal size={16} className="shrink-0" />
            <span className="font-medium">Numbered</span>
            <span className="text-slate-700 text-right ml-auto">
              {card.numbered === 1 ? "" : "/"}
              {card.numbered}
            </span>
          </li>
        )}
        <li className="inline-flex justify-between items-center gap-x-3 py-3 px-4 text-xs bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
          <Calendar size={16} className="shrink-0" />
          <span className="font-medium">Year</span>
          <span className="text-slate-700 text-right ml-auto">{card.year}</span>
        </li>
        {card.cardSection && (
          <li className="inline-flex justify-between items-center gap-x-3 py-3 px-4 text-xs bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            <Folder size={16} className="shrink-0" />
            <span className="font-medium">Card section</span>
            <span className="text-slate-700 text-right ml-auto">{card.cardSection}</span>
          </li>
        )}
        <li className="inline-flex justify-between items-center gap-x-3 py-3 px-4 text-xs bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
          <SwatchBook size={16} className="shrink-0" />
          <span className="font-medium">Card type</span>
          <span className="text-slate-700 text-right ml-auto">{card.cardType.join(", ")}</span>
        </li>
        <li className="inline-flex justify-between items-center gap-x-3 py-3 px-4 text-xs bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
          <Package2 size={16} className="shrink-0" />
          <span className="font-medium">Product type</span>
          <span className="text-slate-700 text-right ml-auto">{card.productType}</span>
        </li>
        <li className="inline-flex justify-between items-center gap-x-3 py-3 px-4 text-xs bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
          <BookText size={16} className="shrink-0" />
          <span className="font-medium">Collection</span>
          <Link to={`/collections/${card.collection.id}`} className="text-slate-700 text-right ml-auto hover:text-blue-500 hover:underline">
            {card.collection.name}
          </Link>
        </li>
        {card.collection.serie && (
          <li className="inline-flex justify-between items-center gap-x-3 py-3 px-4 text-xs bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            <BookType size={16} className="shrink-0" />
            <span className="font-medium">Collection serie</span>
            <span className="text-slate-700 text-right ml-auto">{card.collection.serie}</span>
          </li>
        )}
        <li className="inline-flex justify-between items-center gap-x-3 py-3 px-4 text-xs bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
          <Archive size={16} className="shrink-0" />
          <span className="font-medium">Brand</span>
          <span className="text-slate-700 text-right ml-auto">{card.collection.brand}</span>
        </li>
      </ul>

      {card.links && (
        <div className="flex flex-col">
          {card.links?.map((link) => (
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

      {relatedCards.length > 0 && (
        <div>
          <div className="mb-2 pl-[2px] text-sm font-medium">Related cards</div>
          <CardsGrid cards={relatedCards} />
        </div>
      )}

      <a
        href={`https://github.com/joelthorner/aitana-cards/issues/new?assignees=joelthorner&labels=Card+data+error&projects=&template=card-data-error.md&title=Card+data+error+-+${encodeURIComponent(
          card.name
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-2xl border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 focus:outline-none focus:border-red-400 focus:text-red-400 disabled:opacity-50 disabled:pointer-events-none"
      >
        <Bug size={24} strokeWidth={1.5} />
        Report a card error
      </a>

      <div>
        <div className="mb-2 pl-[2px] text-sm font-medium">Debug info</div>
        <pre className="text-xs overflow-auto">{JSON.stringify(card, null, 2)}</pre>
      </div>
    </div>
  );
}
