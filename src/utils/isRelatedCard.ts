import { Card } from "../types/card";

export const isRelatedCard = (mainCard: Card, card: Card): boolean => {
  if (mainCard.id === card.id) {
    return false;
  }

  function extractNumber(str: string): string | null {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10).toString() : null;
  }

  const parts = mainCard.id.split('-');
  const parsedNumberCard = extractNumber(mainCard.number.toString());

  let toSearch = parts.slice(0, -1).join('-');

  if (/[A-Z]/.test(parts[parts.length - 2])) {
    toSearch = parts.slice(0, -2).join('-');
  }

  return card.id.includes(toSearch) && ((parsedNumberCard !== null && card.id.includes(parsedNumberCard)) || (parsedNumberCard === null));
};