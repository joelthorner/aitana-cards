import { Link } from "react-router-dom";
import { Card as CardType } from "../data/cards";
import { collections } from "../data/collections";
import FilterCheck from "./filter-check";

interface MenuProps {
  // card: CardType;
}

export default function Menu({}: MenuProps) {
  return (
    <div
      id="hs-offcanvas-right"
      className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-s"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="hs-offcanvas-right-label"
    >
      <div className="flex justify-between items-center py-3 px-4 border-b border-b-slate-200">
        {/* <h3 id="hs-offcanvas-right-label" className="font-bold text-gray-800">
        Offcanvas title
      </h3> */}
        <button
          type="button"
          className="ml-auto size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Close"
          data-hs-overlay="#hs-offcanvas-right"
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
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>

      <div className="">
        <button
          type="button"
          className="hs-collapse-toggle h-12 px-4 border-b border-b-slate-200 w-full justify-between items-center text-start flex"
          id="collapse-collections"
          aria-expanded="false"
          aria-controls="#collapse-collections-heading"
          data-hs-collapse="#collapse-collections-heading"
        >
          Collections ({collections.length})
          <div className="size-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        </button>
        <div id="collapse-collections-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="collapse-collections">
          <div className="flex flex-col py-2">
            {collections.map((collection) => (
              <Link key={collection.id} className="px-4 py-2 text-sm" to={`/collections/` + collection.id}>
                {collection.name}
              </Link>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hs-collapse-toggle h-12 px-4 border-b border-b-slate-200 w-full justify-between items-center text-start flex"
          id="collapse-filter"
          aria-expanded="false"
          aria-controls="#collapse-filter-heading"
          data-hs-collapse="#collapse-filter-heading"
        >
          Filter
          <div className="size-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        </button>
        <div id="collapse-filter-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="collapse-filter">
          <div className="flex flex-col py-4 px-4">
            <FilterCheck id="tengui" label="Show tenguis" />
            <FilterCheck id="falti" label="Show faltis" />
            <FilterCheck id="pending" label="Show pendings" />
          </div>
        </div>
      </div>
    </div>
  );
}
