import { AitanaBonmati, Teammate } from "../../data/teammates";
import { useClassName } from "../../hooks/useClassName";

interface TeammatesType {
  teammates: Teammate[];
  className?: string;
  variation?: "light" | "dark";
}

export default function Teammates({ teammates, className, variation = "dark" }: TeammatesType) {
  const containerClassName = useClassName([className, "py-4"]);
  const titleClassName = useClassName(["mb-4 font-medium text-center text-lg", variation === "light" ? "text-white" : ""]);
  const teammateNameClassName = useClassName(["text-[11px] leading-snug font-medium line-clamp-2", variation === "light" ? "text-zinc-200" : "text-zinc-800"]);
  const _teammates = [...teammates, AitanaBonmati];

  if (teammates.length === 0) {
    return <></>;
  }

  return (
    <div className={containerClassName}>
      <div className={titleClassName}>Card teammates</div>

      <div className="flex flex-wrap justify-center gap-3">
        {_teammates.map((teammate) => (
          <div className="text-center w-16" key={teammate.name}>
            <div className="relative">
              <span className="absolute bottom-1 left-1 z-10 text-[10px] font-medium bg-white size-4 rounded-full flex items-center justify-center">{teammate.number}</span>
              <img className="rounded-xl w-full mx-auto aspect-[1/1.25] object-cover object-top" src={teammate.image} alt={teammate.name} />
            </div>
            <div className="mt-2 sm:mt-4">
              <h3 className={teammateNameClassName}>{teammate.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
