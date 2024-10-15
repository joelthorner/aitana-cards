import CollectionsList from "./filters-offcanvas/collections";
import RarityFilter from "./filters-offcanvas/rarity-filter";
import StatusFilter from "./filters-offcanvas/status-filter";
import { useFiltersContext } from "../providers/filters";
import OrderBy from "./filters-offcanvas/order-by";
import { getOrderByShortLabel } from "../utils/getOrderByLabel";
import { ArrowDownUp, BookmarkCheck, CalendarSearch, LibraryBig, Sparkles, Star } from "lucide-react";
import CardTypeFilter from "./filters-offcanvas/card-type-filter";
import YearsFilter from "./filters-offcanvas/years-filter";

export default function FiltersOffcanvas() {
  const { orderBy, collections, status, rarity, resetFilters, filtering, cardTypes, years } = useFiltersContext();

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
      id="offcanvas-filters"
      className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-s"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="offcanvas-filters-label"
    >
      <div className="flex justify-between items-center py-3 px-4 border-b h-14 border-b-slate-200">
        <h3 id="offcanvas-filters-label" className="font-bold text-lg text-gray-800">
          Filters
        </h3>
        <button
          type="button"
          className="ml-auto size-8 inline-flex justify-center items-center gap-x-2 transition-colors rounded-full border border-transparent bg-gray-50 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Close"
          data-hs-overlay="#offcanvas-filters"
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

      <div className="h-[calc(100%-7rem)] overflow-y-auto flex flex-col">
        <div className="border-b border-b-slate-200">
          <button
            type="button"
            className={collapseBtnClasses}
            id="collapse-order-by"
            aria-expanded="false"
            aria-controls="#collapse-order-by-heading"
            data-hs-collapse="#collapse-order-by-heading"
          >
            <ArrowDownUp strokeWidth={1.5} size={20} className="mr-2 text-slate-400" /> Order by&nbsp;
            <span className="text-slate-500 mr-auto">{getOrderByShortLabel(orderBy)}</span>
            {collapseBtnIcon}
          </button>
          <div id="collapse-order-by-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="collapse-filter">
            <div className="flex flex-col pt-1 pb-6 px-4">
              <OrderBy />
            </div>
          </div>
        </div>
        <div className="border-b border-b-slate-200">
          <button
            type="button"
            className={collapseBtnClasses}
            id="collapse-collections"
            aria-expanded="false"
            aria-controls="#collapse-collections-heading"
            data-hs-collapse="#collapse-collections-heading"
          >
            <LibraryBig strokeWidth={1.5} size={20} className="mr-2 text-slate-400" />{" "}
            <span className="mr-auto">
              Collection{" "}
              {collections.length > 0 && (
                <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">{collections.length}</span>
              )}
            </span>
            {collapseBtnIcon}
          </button>
          <div id="collapse-collections-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="collapse-collections">
            <div className="flex flex-col pt-1 pb-6">
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
            <BookmarkCheck strokeWidth={1.5} size={20} className="mr-2 text-slate-400" />{" "}
            <span className="mr-auto">
              Status{" "}
              {Object.values(status).length !== Object.values(status).filter((s) => s).length && (
                <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
                  {Object.values(status).filter((s) => s).length}
                </span>
              )}
            </span>
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
            id="collapse-cardType"
            aria-expanded="false"
            aria-controls="#collapse-cardType-heading"
            data-hs-collapse="#collapse-cardType-heading"
          >
            <Sparkles strokeWidth={1.5} size={20} className="mr-2 text-slate-400" />{" "}
            <span className="mr-auto">
              Type{" "}
              {cardTypes.length > 0 && <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">{cardTypes.length}</span>}
            </span>
            {collapseBtnIcon}
          </button>
          <div id="collapse-cardType-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="collapse-filter">
            <div className="flex pt-2 pb-7 px-4 gap-2 flex-wrap justify-between">
              <CardTypeFilter />
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
            <Star strokeWidth={1.5} size={20} className="mr-2 text-slate-400" />{" "}
            <span className="mr-auto">
              Rarity {rarity.length > 0 && <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">{rarity.length}</span>}
            </span>
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
            id="collapse-year"
            aria-expanded="false"
            aria-controls="#collapse-year-heading"
            data-hs-collapse="#collapse-year-heading"
          >
            <CalendarSearch strokeWidth={1.5} size={20} className="mr-2 text-slate-400" />{" "}
            <span className="mr-auto">
              Card year {years.length > 0 && <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">{years.length}</span>}
            </span>
            {collapseBtnIcon}
          </button>
          <div id="collapse-year-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="collapse-filter">
            <div className="flex pt-2 pb-7 px-4 gap-2 flex-wrap justify-between">
              <YearsFilter />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-3 px-4 border-t h-14 border-t-slate-200 gap-3">
        <button
          type="button"
          data-hs-overlay="#offcanvas-filters"
          className="py-2 flex-1 justify-center px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Apply filters
        </button>
        {filtering && (
          <button
            data-hs-overlay="#offcanvas-filters"
            type="button"
            onClick={resetFilters}
            className="py-2 flex-1 justify-center px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
          >
            Clean filters
          </button>
        )}
      </div>
      {/* <ul className="text-sm mt-auto flex items-center justify-center px-4 py-3 bg-slate-50 h-11">
        <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
          <Link className="text-gray-600 hover:text-blue-600" to="/changelog" data-hs-overlay="#offcanvas-filters">
            Changelog
          </Link>
        </li>
        <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
          <a className="text-gray-600 hover:text-blue-600" href="https://github.com/joelthorner" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
      </ul> */}
    </div>
  );
}
