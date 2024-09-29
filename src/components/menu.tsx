import { Link } from "react-router-dom";
import CollectionsList from "./menu/collections";
import RarityFilter from "./menu/rarity-filter";
import StatusFilter from "./menu/status-filter";
import { useFiltersContext } from "../providers/filters";
import OrderBy from "./menu/order-by";
import { getOrderByShortLabel } from "../utils/getOrderByLabel";

export default function Menu() {
  const { orderBy, collections, status, rarity } = useFiltersContext();

  const collapseBtnClasses = "hs-collapse-toggle h-14 px-4 w-full justify-between items-center text-start flex font-medium";
  const collapseBtnIcon = (
    <div className="size-8 flex items-center justify-center hs-collapse-open:rotate-180 transition-transform">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
      </svg>
    </div>
  );

  return (
    <div
      id="offcanvas-menu"
      className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-s"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="offcanvas-menu-label"
    >
      <div className="flex justify-between items-center py-3 px-4 border-b h-14 border-b-slate-200">
        <h3 id="offcanvas-menu-label" className="font-bold text-gray-800 hidden">
          Menu
        </h3>
        <button
          type="button"
          className="ml-auto size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Close"
          data-hs-overlay="#offcanvas-menu"
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

      <div className="h-[calc(100%-6.25rem)] overflow-y-auto flex flex-col">
        <div className="border-b border-b-slate-200">
          <button
            type="button"
            className={collapseBtnClasses}
            id="collapse-collections"
            aria-expanded="false"
            aria-controls="#collapse-collections-heading"
            data-hs-collapse="#collapse-collections-heading"
          >
            Collection {collections.length > 0 && `(${collections.length})`}
            {collapseBtnIcon}
          </button>
          <div id="collapse-collections-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="collapse-collections">
            <div className="flex flex-col pt-1 pb-6 px-4">
              <CollectionsList />
            </div>
          </div>
        </div>
        <div className="border-b border-b-slate-200">
          <button
            type="button"
            className={collapseBtnClasses}
            id="collapse-filter"
            aria-expanded="false"
            aria-controls="#collapse-filter-heading"
            data-hs-collapse="#collapse-filter-heading"
          >
            Status {Object.values(status).length !== Object.values(status).filter((s) => s).length && `(${Object.values(status).filter((s) => s).length})`}
            {collapseBtnIcon}
          </button>
          <div id="collapse-filter-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="collapse-filter">
            <div className="flex flex-col pt-3 pb-7 px-4 gap-4">
              <StatusFilter />
            </div>
          </div>
        </div>
        <div className="border-b border-b-slate-200">
          <button
            type="button"
            className={collapseBtnClasses}
            id="collapse-rarity"
            aria-expanded="false"
            aria-controls="#collapse-rarity-heading"
            data-hs-collapse="#collapse-rarity-heading"
          >
            Rarity {rarity.length > 0 && `(${rarity.length})`}
            {collapseBtnIcon}
          </button>
          <div id="collapse-rarity-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="collapse-filter">
            <div className="flex pt-2 pb-7 px-4 gap-2 flex-wrap justify-between">
              <RarityFilter />
            </div>
          </div>
        </div>
        <div className="border-b border-b-slate-200">
          <button
            type="button"
            className={collapseBtnClasses}
            id="collapse-order-by"
            aria-expanded="false"
            aria-controls="#collapse-order-by-heading"
            data-hs-collapse="#collapse-order-by-heading"
          >
            Order by&nbsp;<span className="text-slate-500 mr-auto">{getOrderByShortLabel(orderBy)}</span>
            {collapseBtnIcon}
          </button>
          <div id="collapse-order-by-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="collapse-filter">
            <div className="flex flex-col pt-1 pb-6 px-4">
              <OrderBy />
            </div>
          </div>
        </div>
      </div>
      <ul className="text-sm mt-auto flex items-center justify-center px-4 py-3 bg-slate-50 h-11">
        <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
          <span className="text-gray-600">By joelthorner</span>
        </li>
        <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
          <Link className="text-gray-600 hover:text-blue-600" to="/changelog" data-hs-overlay="#offcanvas-menu">
            Changelog
          </Link>
        </li>
        <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
          <a className="text-gray-600 hover:text-blue-600" href="https://github.com/joelthorner" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
