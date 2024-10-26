import { useParams } from "react-router-dom";
import { cards } from "../data/cards";
import { Book, BookHeart, Gamepad2, Medal, Package2, Square, SquareCheck, Sticker, StickyNote, X } from "lucide-react";
import { CardProductType } from "../types/card";

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
