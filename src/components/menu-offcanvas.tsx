import { Link } from "react-router-dom";
import { Album, Bell, FilePlus2, Github, Info, LayoutGrid } from "lucide-react";
import { cards } from "../data/cards";
import { collections } from "../data/collections";

export default function MenuOffcanvas() {
  const LinkItemClasses = "group h-14 px-4 w-full justify-between items-center text-start flex font-medium hover:bg-gray-50 transition-colors";
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
      className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-[350px] w-full z-[80] bg-white border-s"
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
            <LayoutGrid strokeWidth={1.5} size={20} className="mr-2 text-zinc-400 group-hover:text-rose-500 transition-colors" />
            <span className="mr-auto">Cards</span>
            {linkItemIcon}
          </Link>
        </div>
        <div className="border-b border-b-zinc-200">
          <Link to="/collections" className={LinkItemClasses} data-hs-overlay="#offcanvas-menu">
            <Album strokeWidth={1.5} size={20} className="mr-2 text-zinc-400 group-hover:text-rose-500 transition-colors" />
            <span className="mr-auto">Collections</span>
            {linkItemIcon}
          </Link>
        </div>
        <div className="border-b border-b-zinc-200">
          <Link to="/contribute" className={LinkItemClasses} data-hs-overlay="#offcanvas-menu">
            <FilePlus2 strokeWidth={1.5} size={20} className="mr-2 text-zinc-400 group-hover:text-rose-500 transition-colors" />
            <span className="mr-auto">Contribute</span>
            {linkItemIcon}
          </Link>
        </div>
        <div className="border-b border-b-zinc-200">
          <Link to="/changelog" className={LinkItemClasses} data-hs-overlay="#offcanvas-menu">
            <Bell strokeWidth={1.5} size={20} className="mr-2 text-zinc-400 group-hover:text-rose-500 transition-colors" />
            <span className="mr-auto">Changelog</span>
            {linkItemIcon}
          </Link>
        </div>
        <div className="border-b border-b-zinc-200">
          <button
            className={LinkItemClasses}
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-subscription-with-image"
            data-hs-overlay="#hs-subscription-with-image"
          >
            <Info strokeWidth={1.5} size={20} className="mr-2 text-zinc-400 group-hover:text-rose-500 transition-colors" />
            <span className="mr-auto">Information</span>
            {linkItemIcon}
          </button>
        </div>
        <div className="border-b border-b-zinc-200">
          <a className={LinkItemClasses} href="https://github.com/joelthorner/aitana-cards" target="_blank" rel="noopener noreferrer">
            <Github strokeWidth={1.5} size={20} className="mr-2 text-zinc-400 group-hover:text-rose-500 transition-colors" />
            <span className="mr-auto">Github</span>
            {linkItemIcon}
          </a>
        </div>

        <div className="mt-auto flex flex-col gap-2 mb-4 text-xs text-zinc-500">
          <div className="px-4 flex items-center justify-between">
            <span className="">Total collections added</span>
            <span>{collections.length}</span>
          </div>
          <div className="px-4 flex items-center justify-between">
            <span className="">Total cards added</span>
            <span>{cards.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
