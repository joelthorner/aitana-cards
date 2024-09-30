import React, { useEffect } from "react";
import "../App.css";

import { Link, Outlet, useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { cards } from "../data/cards";
import Menu from "../components/menu";
import { MenuIcon, Search } from "lucide-react";
import { useFiltersContext } from "../providers/filters";

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
      <div className="flex px-4 py-2 fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-sm h-14 items-center justify-between border-b border-b-slate-300">
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
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="offcanvas-menu"
          data-hs-overlay="#offcanvas-menu"
          className="relative hover:bg-gray-50 size-10 flex items-center justify-center rounded-full text-gray-900 transition-colors"
        >
          <MenuIcon strokeWidth={1.5} />
          {filtering && (
            <span className="absolute top-0 end-0 inline-flex items-center size-3.5 rounded-full border-2 border-white text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white"></span>
          )}
        </button>
      </div>
      <div className="h-14"></div>

      <div className="p-4">
        <Outlet />
      </div>

      <Menu />
    </>
  );
}

export default Root;
