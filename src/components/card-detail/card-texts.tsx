import { CardLanguage } from "../../types/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useClassName } from "../../hooks/useClassName";

interface CardTextsType {
  front?: string;
  back?: string;
  language?: CardLanguage;
  className?: string;
  id?: string;
  variation?: "light" | "dark";
}

export default function CardTexts({ front, back, language, className, id, variation = "dark" }: CardTextsType) {
  const containerClassName = useClassName([className, "py-4", "view-" + variation]);
  const tabClassName =
    "hs-tab-active:font-semibold hs-tab-active:border-rose-600 hs-tab-active:text-rose-600 py-4 justify-center min-w-[100px] px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-rose-600";
  const frontTabClassName = useClassName([tabClassName, front && !back ? "active" : ""]);
  const backTabClassName = useClassName([tabClassName, back ? "active" : ""]);
  const titleClassName = useClassName(["mb-4 font-medium text-center text-lg", variation === "light" ? "text-white" : ""]);
  const tabsClassName = useClassName(["w-full rounded-3xl border", variation === "light" ? "bg-zinc-950 border-zinc-800" : "bg-white"]);
  const tabsInnerClassName = useClassName(["border-b px-4", variation === "light" ? "border-zinc-800" : "border-zinc-200"]);
  const cardTextClassName = useClassName(["text-center", variation === "light" ? "text-zinc-400" : "text-zinc-600"]);

  return (
    <div className={containerClassName}>
      <div className={titleClassName}>Card text contents</div>

      <div className={tabsClassName}>
        <div className={tabsInnerClassName}>
          <nav className="flex items-center justify-center gap-x-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            {front && (
              <button
                type="button"
                className={frontTabClassName}
                id={"basic-tabs-item-1-" + id}
                aria-selected="false"
                data-hs-tab={"#card-text-front-" + id}
                aria-controls={"card-text-front-" + id}
                role="tab"
              >
                Front
              </button>
            )}
            {back && (
              <button
                type="button"
                className={backTabClassName}
                id={"basic-tabs-item-2-" + id}
                aria-selected="true"
                data-hs-tab={"#card-text-back" + id}
                aria-controls={"card-text-back" + id}
                role="tab"
              >
                Back
              </button>
            )}
          </nav>
        </div>

        <div className="p-4">
          <div id={"card-text-front-" + id} className={back ? "hidden" : ""} role="tabpanel" aria-labelledby={"basic-tabs-item-1-" + id}>
            <div className={cardTextClassName}>
              <ReactMarkdown className="markdown markdown-card-text grid gap-2 lg:gap-4 text-xs max-w-[500px] mx-auto" remarkPlugins={[remarkGfm]}>
                {front}
              </ReactMarkdown>
            </div>
          </div>
          <div id={"card-text-back" + id} role="tabpanel" aria-labelledby={"basic-tabs-item-2-" + id}>
            <div className={cardTextClassName}>
              <ReactMarkdown className="markdown markdown-card-text grid gap-2 lg:gap-4 text-xs max-w-[500px] mx-auto" remarkPlugins={[remarkGfm]}>
                {back}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
