import { Link, useNavigate, useParams } from "react-router-dom";
import { cards } from "../data/cards";
import ErrorPage from "../error-page";
import { getStarClassName } from "../utils/getStarClassName";
import { Bug, MoveLeft, SquareArrowOutUpRight } from "lucide-react";
import { getUrlDomain } from "../utils/getUrlDomain";
import Holo from "../components/holo";
import "photoswipe/style.css";
import { useEffect, useRef } from "react";
import PhotoSwipe from "photoswipe";
import { CardOrientation, CardType } from "../types/card";
import RCImage from "../assets/img/rookie.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import DataTable from "../components/card-detail/data-table";
import { isRelatedCard } from "../utils/isRelatedCard";
import CardsGridStatic from "../components/cards-grid-static";
import Teammates from "../components/card-detail/teammates";
import CardTexts from "../components/card-detail/card-texts";
import CardLinks from "../components/card-detail/card-links";

interface GalleryItem {
  src: string;
  width: number;
  height: number;
}

export default function CardDetail() {
  const { cardId } = useParams<{ cardId: string }>();

  let pswp: PhotoSwipe | null = null;

  const galleryRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const initPhotoSwipe = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    event.preventDefault();

    if (galleryRef.current) {
      const images = Array.from(galleryRef.current.querySelectorAll(".swiper-slide img")).sort((a, b) => {
        const indexA = parseInt(a.closest(".swiper-slide")?.getAttribute("data-swiper-slide-index") || "0", 10);
        const indexB = parseInt(b.closest(".swiper-slide")?.getAttribute("data-swiper-slide-index") || "0", 10);
        return indexA - indexB;
      });

      const imagesData: GalleryItem[] = images.map((img) => {
        const imageElement = img as HTMLImageElement;
        return {
          src: imageElement.src,
          width: imageElement.naturalWidth,
          height: imageElement.naturalHeight,
        };
      });

      pswp = new PhotoSwipe({ dataSource: imagesData, index: index });
      pswp.init();
    }
  };

  const [card] = cards.filter((card) => card.id === cardId);

  useEffect(() => {
    return () => {
      if (pswp !== null) {
        pswp.destroy();
      }
    };
  }, [pswp]);

  if (!cardId) {
    return <ErrorPage />;
  }

  // const statusIcon = getCardStatusIcon(card.status);
  const starClassName = "size-3 " + getStarClassName(card.rarity);

  const relatedCards = cards.filter((filterCard) => isRelatedCard(card, filterCard));

  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:p-4 lg:items-start">
        <div id={"gallery-" + cardId} ref={galleryRef} className="aspect-square-2 fixed top-0 left-0 right-0 z-[5] md:relative lg:sticky lg:top-20 lg:h-auto">
          <button className="absolute top-0 left-0 z-40 text-white py-4 px-4" onClick={() => navigate(-1)}>
            <MoveLeft />
          </button>

          <Swiper
            pagination={{
              dynamicBullets: false,
            }}
            modules={[Pagination]}
            loop={card.images.length > 1}
            className="!absolute inset-0 swiper-card-detail lg:rounded-3xl"
          >
            <SwiperSlide className="relative overflow-hidden">
              <a
                href={card.images[0]}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer aspect-square xs:aspect-[100/70] sm:aspect-[100/60] lg:aspect-square flex relative items-center justify-center overflow-hidden"
                onClick={(event) => initPhotoSwipe(event, 0)}
              >
                <div className={`aspect-[5/7] w-1/2 xs:w-1/3 lg:w-1/2 relative rounded-lg overflow-hidden ${card?.orientation === CardOrientation.Horizontal && "rotate-90"}`}>
                  <img src={card.images[0]} alt={card.name} className="size-full" />
                  {card.brilli && card.images.length > 0 && <Holo type={card.brilli} cardId={card.id} />}
                </div>
              </a>
              <div
                style={{ backgroundImage: `url('${card.images[0]}')` }}
                className={`bg-center size-[120%] absolute left-[-10%] top-[-10%] -z-10 background-cover blur-md opacity-30 bg-s bg-fixed ${
                  card?.orientation === CardOrientation.Horizontal && "rotate-90"
                }`}
              />
            </SwiperSlide>
            {card.images.slice(1, card.images.length).map((image, index) => (
              <SwiperSlide key={image} className="relative overflow-hidden">
                <a
                  key={image}
                  href={image}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer aspect-square xs:aspect-[100/70] sm:aspect-[100/60] lg:aspect-square flex items-center justify-center overflow-hidden"
                  onClick={(event) => initPhotoSwipe(event, index + 1)}
                >
                  <div className="size-[calc(100%-6rem)] lg:size-[calc(100%-10rem)] flex items-center justify-center">
                    <img src={image} alt={`${card.name} - ${index + 1}`} className="object-contain max-h-full rounded-md overflow-hidden" />
                  </div>
                </a>
                <div
                  style={{ backgroundImage: `url('${image}')` }}
                  className="bg-center size-[120%] absolute left-[-10%] top-[-10%] -z-10 background-cover blur-md opacity-30 bg-s"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="aspect-square-2 md:hidden"></div>

        <div
          className={`bg-white rounded-t-3xl px-5 pt-6 pb-20 relative z-20 flex flex-col gap-4 ${
            card.images.length > 1 ? "-mt-12" : "-mt-16"
          } lg:mt-0 lg:rounded-3xl lg:py-6 lg:h-full`}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-medium leading-normal">{card.name}</h1>

            <Link to={`/collections/${card.collection.id}`} className="text-[12px] leading-normal tracking-wide uppercase text-gray-400 hover:text-rose-600 hover:underline">
              {card.collection.name}
            </Link>
          </div>

          {card.description && <p className="text-sm text-slate-500">{card.description}</p>}

          <div className="flex gap-2 flex-wrap items-center">
            <div className="hs-tooltip">
              <span className="hs-tooltip-toggle inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={starClassName} viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                {card.rarity}/5
                <span
                  className="hs-tooltip-content font-normal hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-md"
                  role="tooltip"
                >
                  Card rarity {card.rarity}
                </span>
              </span>
            </div>
            {card.cardType
              .filter((type) => type !== CardType.Rookie)
              .map((type) => (
                <div key={type} className="hs-tooltip">
                  <span className="hs-tooltip-toggle inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {type}
                    <span
                      className="hs-tooltip-content font-normal hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-md"
                      role="tooltip"
                    >
                      {type}
                      {!type.includes("card") ? " card" : ""}
                    </span>
                  </span>
                </div>
              ))}
            {card.cardType.includes(CardType.Rookie) && (
              <div className="hs-tooltip text-xs font-medium">
                <img src={RCImage} alt="Rookie Card" className="hs-tooltip-toggle h-6" title="Rookie Card" />
                <span
                  className="hs-tooltip-content font-normal hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-md"
                  role="tooltip"
                >
                  Rookie Card
                </span>
              </div>
            )}
          </div>

          <DataTable card={card} />

          {(card.cardTextFront || card.cardTextBack) && <CardTexts className="lg:hidden" front={card.cardTextFront} back={card.cardTextBack} language={card.language} />}

          {card.teammates && <Teammates className="lg:hidden" teammates={card.teammates} />}

          <CardLinks className="lg:hidden" links={card.links} />
        </div>
      </div>
      <div className="lg:grid">
        <div className="bg-zinc-950 rounded-t-3xl px-4 pt-6 pb-20 relative z-20 flex flex-col gap-16 -mt-12 lg:mt-0">
          {relatedCards.length > 0 && (
            <div>
              <div className="mb-4 font-medium text-white text-center">Related cards</div>
              <CardsGridStatic cards={relatedCards} />
            </div>
          )}
          <div>
            <a
              href={`https://github.com/joelthorner/aitana-cards/issues/new?assignees=joelthorner&labels=Card+data+error&projects=&template=card-data-error.md&title=Card+data+error+-+${encodeURIComponent(
                card.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 flex items-center justify-center gap-x-2 text-sm font-normal rounded-xl border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
            >
              <Bug size={24} strokeWidth={1.5} />
              Report a card error
            </a>
            <div className="text-zinc-500 mt-2 text-xs text-center">If you find an error in the data, please let me know! 😄</div>
          </div>
        </div>
      </div>
    </>
  );
}
