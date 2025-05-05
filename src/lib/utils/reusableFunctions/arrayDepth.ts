export const getArrayDepth = (value: unknown): number => {
  return Array.isArray(value) 
    ? 1 + Math.max(0, ...value.map(getArrayDepth)) 
    : 0;
}
