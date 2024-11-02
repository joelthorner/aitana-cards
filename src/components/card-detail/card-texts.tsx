import { CardLanguage } from "../../types/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CardTexts({ front, back, language }: { front?: string; back?: string; language?: CardLanguage }) {
  return (
    <div className="py-4">
      <div className="mb-4 font-medium text-center text-lg">Card text content</div>

      <div className="w-full bg-white rounded-3xl border">
        <div className="border-b border-gray-200 px-4">
          <nav className="flex items-center justify-center gap-x-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-violet-600 hs-tab-active:text-violet-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-violet-600 focus:outline-none focus:text-violet-600 disabled:opacity-50 disabled:pointer-events-none"
              id="basic-tabs-item-1"
              aria-selected="false"
              data-hs-tab="#basic-tabs-1"
              aria-controls="basic-tabs-1"
              role="tab"
            >
              Front
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-violet-600 hs-tab-active:text-violet-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-violet-600 focus:outline-none focus:text-violet-600 disabled:opacity-50 disabled:pointer-events-none active"
              id="basic-tabs-item-2"
              aria-selected="true"
              data-hs-tab="#basic-tabs-2"
              aria-controls="basic-tabs-2"
              role="tab"
            >
              Back
            </button>
          </nav>
        </div>

        <div className="p-4">
          <div id="basic-tabs-1" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-1">
            <div className="text-zinc-600">
              <ReactMarkdown className="markdown grid gap-2 text-xs" remarkPlugins={[remarkGfm]}>
                {front}
              </ReactMarkdown>
            </div>
          </div>
          <div id="basic-tabs-2" role="tabpanel" aria-labelledby="basic-tabs-item-2">
            <div className="text-zinc-600">
              <ReactMarkdown className="markdown markdown-card-text grid gap-2 text-xs" remarkPlugins={[remarkGfm]}>
                {back}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
