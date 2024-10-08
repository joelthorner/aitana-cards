import { useEffect } from "react";
import "../App.css";

import { Link, Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { cards } from "../data/cards";
import FiltersOffcanvas from "../components/filters-offcanvas";
import { MenuIcon, Search, SlidersHorizontal } from "lucide-react";
import { useFiltersContext } from "../providers/filters";
import MenuOffcanvas from "../components/menu-offcanvas";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function Root() {
  const location = useLocation();

  const { filtering } = useFiltersContext();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-sm h-14 border-b border-b-slate-300">
        <div className="px-4 py-2 2xl:container mx-auto flex items-center justify-between">
          <Link to={`/`} className="font-black text-lg">
            Aitana Cards
          </Link>

          <div className="mr-auto ml-3 text-sm text-slate-500">
            {cards.filter((card) => card.status === "tengui").length}/{cards.length}
          </div>

          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="offcanvas-menu"
            data-hs-overlay="#offcanvas-menu"
            className="relative hover:bg-gray-50 size-10 flex items-center justify-center rounded-full text-gray-900 transition-colors"
          >
            <Search strokeWidth={1.5} size={20} />
          </button>
          {location.pathname === "/" && (
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="offcanvas-filters"
              data-hs-overlay="#offcanvas-filters"
              className="relative hover:bg-gray-50 size-10 flex items-center justify-center rounded-full text-gray-900 transition-colors"
            >
              <SlidersHorizontal strokeWidth={1.5} size={20} />
              {filtering && (
                <span className="absolute top-3 end-2 inline-flex items-center size-3.5 rounded-full border-2 border-white text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white"></span>
              )}
            </button>
          )}
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="offcanvas-menu"
            data-hs-overlay="#offcanvas-menu"
            className="relative hover:bg-gray-50 size-10 flex items-center justify-center rounded-full text-gray-900 transition-colors"
          >
            <MenuIcon strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <div className="h-14"></div>

      <div className="p-4 2xl:container mx-auto">
        <Outlet />
        <ScrollRestoration />
      </div>

      <FiltersOffcanvas />
      <MenuOffcanvas />
    </>
  );
}

export default Root;
