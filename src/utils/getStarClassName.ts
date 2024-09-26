export const getStarClassName = (rarity: string): string => {
  if (rarity === 'rarity_1') {
    return "fill-slate-400";
  } else if (rarity === 'rarity_2') {
    return "fill-green-400";
  } else if (rarity === 'rarity_3') {
    return "fill-sky-500";
  } else if (rarity === 'rarity_4') {
    return "fill-purple-600";
  } else if (rarity === 'rarity_5') {
    return "fill-orange-500";
  }

  return '';
};