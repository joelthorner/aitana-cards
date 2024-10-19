import { Link } from "react-router-dom";
import { Card } from "../../types/card";
import { Archive, BookText, BookType, Calendar, ChevronRight, Clipboard, Fingerprint, Folder, Hash, Info, Medal, Package2, SwatchBook } from "lucide-react";

export default function DataTable({ card }: { card: Card }) {
  return (
    <>
      <ul className="mt-6">
        <li className="py-3 [&:not(:last-child)]:border-b border-zinc-100">
          <div className="flex gap-x-3">
            <span className="flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1">
              <Fingerprint size={16} strokeWidth={1.5} className="shrink-0" />
            </span>
            <span className="flex-grow">
              <span className="font-medium text-zinc-800 block">Card ID</span>
              <span className="text-xs text-zinc-500 block">{card.id}</span>
            </span>
            <div className="hs-tooltip [--placement:left]">
              <button
                type="button"
                className="hs-tooltip-toggle flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1 text-zinc-500 hover:bg-zinc-50"
              >
                <Clipboard size={16} strokeWidth={1.5} />
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible text-xs opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-md"
                  role="tooltip"
                >
                  Copy value
                </span>
              </button>
            </div>
          </div>
        </li>
        <li className="py-3 [&:not(:last-child)]:border-b border-zinc-100">
          <div className="flex gap-x-3">
            <span className="flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1">
              <Hash size={16} strokeWidth={1.5} className="shrink-0" />
            </span>
            <span className="flex-grow">
              <span className="font-medium text-zinc-800 block">Card Number</span>
              <span className="text-xs text-zinc-500 block">{card.number}</span>
            </span>
            <div className="hs-tooltip [--placement:left]">
              <button
                type="button"
                className="hs-tooltip-toggle flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1 text-zinc-500 hover:bg-zinc-50"
              >
                <Clipboard size={16} strokeWidth={1.5} />
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible text-xs opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-md"
                  role="tooltip"
                >
                  Copy value
                </span>
              </button>
            </div>
          </div>
        </li>
        {card.numbered && (
          <li className="py-3 [&:not(:last-child)]:border-b border-zinc-100">
            <div className="flex gap-x-3">
              <span className="flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1">
                <Medal size={16} strokeWidth={1.5} className="shrink-0" />
              </span>
              <span className="flex-grow">
                <span className="font-medium text-zinc-800 block">Numbered</span>
                <span className="text-xs text-zinc-500 block">
                  {card.numbered === 1 ? "" : "/"}
                  {card.numbered}
                </span>
              </span>
              <div className="hs-tooltip [--placement:left]">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="hs-card-detail-numbered-modal"
                  data-hs-overlay="#hs-card-detail-numbered-modal"
                  className="hs-tooltip-toggle flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1 text-zinc-500 hover:bg-zinc-50"
                >
                  <Info size={16} strokeWidth={1.5} />
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible text-xs opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-md"
                    role="tooltip"
                  >
                    Numbered info
                  </span>
                </button>
              </div>
            </div>
          </li>
        )}
        <li className="py-3 [&:not(:last-child)]:border-b border-zinc-100">
          <div className="flex gap-x-3">
            <span className="flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1">
              <Calendar size={16} strokeWidth={1.5} className="shrink-0" />
            </span>
            <span className="flex-grow">
              <span className="font-medium text-zinc-800 block">Fabrication Year</span>
              <span className="text-xs text-zinc-500 block">{card.year}</span>
            </span>
          </div>
        </li>
        <li className="py-3 [&:not(:last-child)]:border-b border-zinc-100">
          <div className="flex gap-x-3">
            <span className="flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1">
              <Folder size={16} strokeWidth={1.5} className="shrink-0" />
            </span>
            <span className="flex-grow">
              <span className="font-medium text-zinc-800 block">Card Section</span>
              <span className="text-xs text-zinc-500 block">{card.cardSection}</span>
            </span>
          </div>
        </li>
        <li className="py-3 [&:not(:last-child)]:border-b border-zinc-100">
          <div className="flex gap-x-3">
            <span className="flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1">
              <SwatchBook size={16} strokeWidth={1.5} className="shrink-0" />
            </span>
            <span className="flex-grow">
              <span className="font-medium text-zinc-800 block">Card type{card.cardType.length > 1 && "s"}</span>
              <span className="text-xs text-zinc-500 block">{card.cardType.join(", ")}</span>
            </span>
          </div>
        </li>
        <li className="py-3 [&:not(:last-child)]:border-b border-zinc-100">
          <div className="flex gap-x-3">
            <span className="flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1">
              <Package2 size={16} strokeWidth={1.5} className="shrink-0" />
            </span>
            <span className="flex-grow">
              <span className="font-medium text-zinc-800 block">Product type</span>
              <span className="text-xs text-zinc-500 block">{card.productType}</span>
            </span>
            <div className="hs-tooltip [--placement:left]">
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="hs-card-detail-product-type-modal"
                data-hs-overlay="#hs-card-detail-product-type-modal"
                className="hs-tooltip-toggle flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1 text-zinc-500 hover:bg-zinc-50"
              >
                <Info size={16} strokeWidth={1.5} />
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible text-xs opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-md"
                  role="tooltip"
                >
                  Product types info
                </span>
              </button>
            </div>
          </div>
        </li>
        <li className="py-3 [&:not(:last-child)]:border-b border-zinc-100">
          <div className="flex gap-x-3">
            <span className="flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1">
              <BookText size={16} strokeWidth={1.5} className="shrink-0" />
            </span>
            <span className="flex-grow">
              <span className="font-medium text-zinc-800 block">Collection</span>
              <span className="text-xs text-zinc-500 block">{card.collection.name}</span>
            </span>
            <Link
              to={`/collections/${card.collection.id}`}
              className="hs-tooltip-toggle flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1 text-zinc-500 hover:bg-zinc-50"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </li>
        <li className="py-3 [&:not(:last-child)]:border-b border-zinc-100">
          <div className="flex gap-x-3">
            <span className="flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1">
              <BookType size={16} strokeWidth={1.5} className="shrink-0" />
            </span>
            <span className="flex-grow">
              <span className="font-medium text-zinc-800 block">Collection serie</span>
              <span className="text-xs text-zinc-500 block">{card.collection.serie}</span>
            </span>
          </div>
        </li>
        <li className="py-3 [&:not(:last-child)]:border-b border-zinc-100">
          <div className="flex gap-x-3">
            <span className="flex border border-zinc-100 rounded-lg shrink-0 size-[38px] items-center justify-center mt-1">
              <Archive size={16} strokeWidth={1.5} className="shrink-0" />
            </span>
            <span className="flex-grow">
              <span className="font-medium text-zinc-800 block">Brand</span>
              <span className="text-xs text-zinc-500 block">{card.collection.brand}</span>
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}
