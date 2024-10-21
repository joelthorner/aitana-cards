export const getRelatedCardsIdValue = (value: string): string => {
  const parts = value.split('-');

  if (parts[parts.length - 2] === 'A') {
    return parts.slice(0, -2).join('-');
  } else {
    return parts.slice(0, -1).join('-');
  }
};