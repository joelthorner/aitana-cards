import { Link } from "react-router-dom";
import { Album, Bell, Github, LayoutGrid, SquareArrowOutUpRight } from "lucide-react";
import { cards } from "../data/cards";

export default function MenuOffcanvas() {
  const LinkItemClasses = "h-14 px-4 w-full justify-between items-center text-start flex font-medium hover:bg-gray-50 transition-colors";
  const linkItemIcon = (
    <div className="size-8 flex items-center justify-center -rotate-90 transition-transform">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
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
        <h3 id="offcanvas-menu-label" className="font-bold text-lg text-gray-800">
          Menu
        </h3>
        <button
          type="button"
          className="ml-auto size-8 inline-flex justify-center items-center gap-x-2 transition-colors rounded-full border border-transparent bg-gray-50 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
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

      <div className="h-[calc(100%-3.5rem)] overflow-y-auto flex flex-col">
        <div className="border-b border-b-zinc-200">
          <Link to="/" className={LinkItemClasses} data-hs-overlay="#offcanvas-menu">
            <LayoutGrid strokeWidth={1.5} size={20} className="mr-2 text-zinc-400" />
            <span className="mr-auto">Cards</span>
            {linkItemIcon}
          </Link>
        </div>
        <div className="border-b border-b-zinc-200">
          <Link to="/collections" className={LinkItemClasses} data-hs-overlay="#offcanvas-menu">
            <Album strokeWidth={1.5} size={20} className="mr-2 text-zinc-400" />
            <span className="mr-auto">Collections</span>
            {linkItemIcon}
          </Link>
        </div>
        <div className="border-b border-b-zinc-200">
          <Link to="/changelog" className={LinkItemClasses} data-hs-overlay="#offcanvas-menu">
            <Bell strokeWidth={1.5} size={20} className="mr-2 text-zinc-400" />
            <span className="mr-auto">Changelog</span>
            {linkItemIcon}
          </Link>
        </div>
        <div className="border-b border-b-zinc-200">
          <a className={LinkItemClasses} href="https://github.com/joelthorner/aitana-cards" target="_blank" rel="noopener noreferrer">
            <Github strokeWidth={1.5} size={20} className="mr-2 text-zinc-400" />
            <span className="mr-auto">Github</span>
            {linkItemIcon}
          </a>
        </div>

        <div className="mt-auto flex flex-col mb-2 text-sm text-zinc-600">
          <div className="h-10 px-4 flex items-center justify-between">
            <span className="font-medium">Total cards added</span>
            <span>{cards.length}</span>
          </div>
        </div>
      </div>
      {/* <ul className="text-sm mt-auto flex items-center justify-center px-4 py-3 bg-slate-50 h-11">
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
      </ul> */}
    </div>
  );
}
