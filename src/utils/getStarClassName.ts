export const getStarClassName = (rarity: number): string => {
  if (rarity >= 0 && rarity < 2) {
    return "fill-slate-400";
  } else if (rarity === 2) {
    return "fill-green-400";
  } else if (rarity === 3) {
    return "fill-sky-500";
  } else if (rarity === 4) {
    return "fill-purple-600";
  } else if (rarity === 5) {
    return "fill-orange-500";
  }

  return '';
};