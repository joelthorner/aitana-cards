import React, { useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";

import { Link, Outlet, useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { collections } from "../data/collections";
import { cards } from "../data/cards";
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
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </div>
      <div className="h-14"></div>

      <div className="p-4">
        <Outlet />
      </div>

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
        {/* <div className="p-4">
          <p className="text-gray-800">Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
        </div> */}
        <div className="">
          <button
            type="button"
            className="hs-collapse-toggle h-12 px-4 border-b border-b-slate-200 w-full justify-between items-center text-start flex"
            id="hs-unstyled-collapse"
            aria-expanded="false"
            aria-controls="#hs-unstyled-collapse-heading"
            data-hs-collapse="#hs-unstyled-collapse-heading"
          >
            Collections ({collections.length})
            <div className="size-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
          </button>
          <div id="hs-unstyled-collapse-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-unstyled-collapse">
            <div className="flex flex-col py-2">
              {collections.map((collection) => (
                <Link className="px-4 py-2 text-sm" to={`/collections/` + collection.id}>
                  {collection.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Root;
