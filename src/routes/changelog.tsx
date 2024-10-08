// https://preline.co/docs/timeline.html

import { format } from "date-fns";
import { changelog, LineType } from "../data/changelog";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
                <Link id={item.card.id} to={"/cards/" + item.card.id} className="font-semibold text-gray-800 hover:text-blue-600 hover:underline flex">
                  {item.card.name}
                </Link>
                {item.text && (
                  <p className="mt-2 text-sm text-gray-600">
                    <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
                      {item.text}
                    </ReactMarkdown>
                  </p>
                )}
                <div className="flex gap-2 mt-2 items-center">
                  <div className={`inline-flex -ml-[2px] items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[11px] leading-none font-medium ${badgeClassName(item.type)}`}>
                    {item.type}
                  </div>
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
