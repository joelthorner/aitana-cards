import { useEffect } from "react";
import { Link, NavLink, Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import FiltersOffcanvas from "../components/filters-offcanvas";
import { Bell, House, Info, MenuIcon, Search, SlidersHorizontal } from "lucide-react";
import { useFiltersContext } from "../providers/filters";
import MenuOffcanvas from "../components/menu-offcanvas";
import logo from "../assets/logo.png";
import { ModalCardDetailNumbered, ModalCardDetailProductType } from "../components/modals";

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
      {(location.pathname === "/" || location.pathname === "/collections" || location.pathname === "/changelog") && (
        <div className="h-16 bg-zinc-950">
          <div className="2xl:container mx-auto h-16">
            <div className="flex items-center justify-between gap-2 px-3 pt-6">
              <Link to="/" className="logo ">
                <img src={logo} alt="Aitanacards" className="w-[280px] block h-auto" />
              </Link>

              <Info className="text-zinc-300" />
            </div>

            {/* <div className="mr-auto ml-3 text-sm text-slate-500">
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
          </button> */}
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-zinc-950/85 text-zinc-400 px-4 py-2.5 flex backdrop-blur-sm items-center justify-between rounded-t-3xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative px-3 py-2 rounded-2xl flex flex-1 flex-col gap-1 items-center justify-center hover:text-zinc-100 ${isActive ? "text-zinc-100" : ""}`
            }
          >
            <House size={24} strokeWidth={1.5} />
            <span className="text-[11px] leading-none">Home</span>
          </NavLink>
          <NavLink
            to="/changelog"
            className={({ isActive }) =>
              `relative px-3 py-2 rounded-2xl flex flex-1 flex-col gap-1 items-center justify-center hover:text-zinc-100 ${isActive ? "text-zinc-100" : ""}`
            }
          >
            <Bell size={24} strokeWidth={1.5} />
            <span className="text-[11px] leading-none">History</span>
          </NavLink>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="offcanvas-filters"
            data-hs-overlay="#offcanvas-filters"
            className="mx-1 relative px-3 py-2 rounded-full text-zinc-800 flex size-14 flex-col gap-1 items-center justify-center bg-white aspect-square hover:text-zinc-950"
          >
            <SlidersHorizontal size={28} strokeWidth={1.5} />

            {filtering && (
              <span className="absolute top-2 end-2 inline-flex items-center size-3 rounded-full text-xs border font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white"></span>
            )}
          </button>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="offcanvas-filters"
            data-hs-overlay="#offcanvas-filters"
            className="relative px-3 py-2 rounded-2xl flex flex-1 flex-col gap-1 items-center justify-center hover:text-zinc-100"
          >
            <Search size={24} strokeWidth={1.5} />
            <span className="text-[11px] leading-none">Search</span>
          </button>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="offcanvas-menu"
            data-hs-overlay="#offcanvas-menu"
            className="relative px-3 py-2 rounded-2xl flex flex-1 flex-col gap-1 items-center justify-center hover:text-zinc-100"
          >
            <MenuIcon size={24} strokeWidth={1.5} />
            <span className="text-[11px] leading-none">Menu</span>
          </button>
        </div>
      </div>

      <div>
        <Outlet />
        <ScrollRestoration />
      </div>

      <div className="h-[75px]"></div>

      <FiltersOffcanvas />
      <MenuOffcanvas />
      {location.pathname.includes("/cards/") && <ModalCardDetailProductType />}
      {location.pathname.includes("/cards/") && <ModalCardDetailNumbered />}
    </>
  );
}

export default Root;
