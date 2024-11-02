import { AitanaBonmati, Teammate } from "../../data/teammates";

export default function Teammates({ teammates }: { teammates: Teammate[] }) {
  const _teammates = [...teammates, AitanaBonmati];

  return (
    <div className="py-4">
      <div className="mb-4 font-medium text-center text-lg">Players appearing on the card</div>

      <div className="flex flex-wrap justify-center gap-3">
        {_teammates.map((teammate) => (
          <div className="text-center w-16" key={teammate.name}>
            <div className="relative">
              <span className="absolute bottom-1 left-1 z-10 text-[10px] font-medium bg-white size-4 rounded-full flex items-center justify-center">{teammate.number}</span>
              <img className="rounded-xl w-full mx-auto aspect-[1/1.25] object-cover object-top" src={teammate.image} alt={teammate.name} />
            </div>
            <div className="mt-2 sm:mt-4">
              <h3 className="text-[11px] leading-snug font-medium text-zinc-800 line-clamp-2">{teammate.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
