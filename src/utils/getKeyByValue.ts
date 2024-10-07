export function getKeyByValue(enumObject: any, value: string): string | undefined {
  const keys = Object.keys(enumObject).filter(key => enumObject[key] === value);
  return keys.length > 0 ? keys[0] : undefined;
};