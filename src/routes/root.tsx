import React, { useEffect } from "react";
import "../App.css";

import { Link, Outlet, useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { cards } from "../data/cards";
import Menu from "../components/menu";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function Root() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <div className="flex px-4 py-2 fixed top-0 left-0 right-0 z-50 bg-white h-14 items-center justify-between border-b border-b-slate-300">
        <Link to={`/`} className="font-black text-lg">
          Aitana Cards
        </Link>

        <div className="mr-auto ml-3 text-sm text-slate-500">
          {cards.filter((card) => card.status === "tengui").length}/{cards.length}
        </div>

        <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-right" data-hs-overlay="#hs-offcanvas-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-8" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
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
