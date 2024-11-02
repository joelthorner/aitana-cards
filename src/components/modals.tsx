import { useParams } from "react-router-dom";
import { cards } from "../data/cards";
import { Book, BookHeart, Gamepad2, Medal, Package2, Square, SquareCheck, Sticker, StickyNote, X } from "lucide-react";
import { CardProductType } from "../types/card";
import disclaimer from "../assets/img/disclaimer.webp";

export function ModalCardDetailProductType() {
  const { cardId } = useParams<{ cardId: string }>();
  const [card] = cards.filter((card) => card.id === cardId);

  if (!card) {
    return <></>;
  }

  return (
    <>
      <div
        id="hs-card-detail-product-type-modal"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        aria-labelledby="hs-card-detail-product-type-modal-label"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3 id="hs-card-detail-product-type-modal-label" className="font-bold text-gray-800 flex gap-2 items-center">
                <Package2 size={20} strokeWidth={2} /> Product types
              </h3>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Close"
                data-hs-overlay="#hs-card-detail-product-type-modal"
              >
                <span className="sr-only">Close</span>
                <X size={16} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <div className="text-gray-800">
                <ul className="max-w-xs flex flex-col divide-y divide-gray-200">
                  {Object.values(CardProductType).map((type) => (
                    <li className="inline-flex items-center gap-x-2 py-3 px-2 text-sm font-medium text-gray-800" key={type}>
                      {type === CardProductType.Sticker && <Sticker size={20} strokeWidth={1.5} />}
                      {type === CardProductType.Card && <StickyNote size={20} strokeWidth={1.5} />}
                      {type === CardProductType.BookCard && <Book size={20} strokeWidth={1.5} />}
                      {type === CardProductType.GameCard && <Gamepad2 size={20} strokeWidth={1.5} />}
                      {type === CardProductType.PatchBookCard && <BookHeart size={20} strokeWidth={1.5} />}
                      {type}
                      <div className="ml-auto">
                        {type === card.productType ? <SquareCheck size={20} strokeWidth={1.5} /> : <Square size={20} strokeWidth={1.5} className="text-zinc-400" />}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ModalCardDetailNumbered() {
  return (
    <>
      <div
        id="hs-card-detail-numbered-modal"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        aria-labelledby="hs-card-detail-numbered-modal-label"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3 id="hs-card-detail-numbered-modal-label" className="font-bold text-gray-800 flex gap-2 items-center">
                <Medal size={20} strokeWidth={2} /> Numbered
              </h3>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Close"
                data-hs-overlay="#hs-card-detail-numbered-modal"
              >
                <span className="sr-only">Close</span>
                <X size={16} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <p className="text-gray-800 text-sm">
                Numbered cards are short-printed (e.g. limited edition), and the print run is specified on either the front or back of the card.
                <br />
                <br />
                For example, a card may be sequentially numbered 10/100 to indicate that it is the 10th card out of a print run of 100.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ModalInfoHeader() {
  return (
    <>
      <div
        id="hs-subscription-with-image"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
        role="dialog"
        aria-labelledby="hs-subscription-with-image-label"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg rounded-3xl">
            <div className="absolute top-2 z-[10] end-2">
              <button
                type="button"
                className="transition-colors inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Close"
                data-hs-overlay="#hs-subscription-with-image"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="aspect-[10/5] relative">
              <img className="size-full object-cover rounded-t-xl absolute inset-0" src={disclaimer} alt="Modal Hero" />
            </div>

            <div className="p-4 sm:p-10 text-center overflow-y-auto">
              <h3 id="hs-subscription-with-image-label" className="mb-4 text-2xl font-bold text-gray-800">
                Disclaimer
              </h3>
              <p className="text-zinc-600 text-sm mb-4">
                <strong>Aitana Cards</strong> és un projecte sense ànim de lucre dedicat a la recopilació exhaustiva de totes les cartes i cromos col·leccionables que representen
                la futbolista <strong>Aitana Bonmatí</strong>. L’objectiu d’aquest projecte és crear un arxiu complet d’aquests articles commemoratius, preservant el llegat i la
                visibilitat d’aquesta destacada esportista en el món del col·leccionisme.
              </p>

              <p className="text-zinc-600 text-sm mb-2">
                Aquest projecte no té cap vinculació oficial amb Aitana Bonmatí, ni amb cap empresa, entitat o club esportiu que ostenti els drets sobre les imatges o materials
                representats en les cartes i cromos recollits. Aitana Cards no busca obtenir cap benefici econòmic i respecta els drets d’autor i marques comercials dels
                propietaris legals. Tots els materials exposats són únicament amb finalitats informatives i culturals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
