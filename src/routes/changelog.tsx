import { format } from "date-fns";
import { changelog } from "../data/changelog";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BookPlus, FilePlus2 } from "lucide-react";
import { LineType } from "../types/changelog";

export default function Changelog() {
  const badgeClassName = (value: LineType) => {
    if (value === LineType.ADDED) {
      return "bg-teal-100 text-teal-800";
    } else if (value === LineType.REMOVED) {
      return "bg-red-100 text-red-800";
    } else if (value === LineType.CHANGED) {
      return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div>
      {changelog.map((day) => (
        <div key={format(day.date, "dd/MM/yyyy")}>
          <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-gray-500">{format(day.date, "dd/MM/yyyy")}</h3>
          </div>

          {day.items.map((item, index) => (
            <div className="flex gap-x-3" key={index}>
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400"></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                {item.card && (
                  <Link to={"/cards/" + item.card.id} className="font-semibold text-gray-800 hover:text-blue-600 hover:underline flex leading-tight">
                    {item.card.name}
                  </Link>
                )}
                {item.collection && (
                  <Link to={"/collections/" + item.collection.id} className="font-semibold text-gray-800 hover:text-blue-600 hover:underline flex leading-tight">
                    {item.collection.name}
                  </Link>
                )}
                {item.text && (
                  <div className="mt-2 text-sm text-gray-600">
                    <ReactMarkdown className="markdown text-xs" remarkPlugins={[remarkGfm]}>
                      {item.text}
                    </ReactMarkdown>
                  </div>
                )}
                <div className="flex gap-2 mt-2 items-center">
                  <div className={`inline-flex -ml-[2px] items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[11px] leading-none font-medium ${badgeClassName(item.type)}`}>
                    {item.type}
                  </div>
                  <span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                    {item.card && <FilePlus2 className="shrink-0 size-3" />}
                    {item.collection && <BookPlus className="shrink-0 size-3" />}
                    {item.card && "Card"}
                    {item.collection && "Collection"}
                  </span>
                  <a
                    href={`https://github.com/${item.user}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <img className="shrink-0 size-4 rounded-full" src="https://avatars.githubusercontent.com/u/16495000?v=4" alt={item.user} />
                    {item.user}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
