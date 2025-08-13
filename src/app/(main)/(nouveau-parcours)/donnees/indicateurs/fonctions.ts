export const sumProperty = <T, K extends keyof T>(
  items: T[],
  property: K,
  defaultValue: number = 0
): number => {
  return items.reduce((accumulator, item) => {
    const value = item[property];
    return accumulator + (typeof value === 'number' ? value : defaultValue);
  }, 0);
};

export const averageProperty = <T, K extends keyof T>(
  array: T[],
  prop: K
): number => {
  return (
    array.reduce((a, b) => {
      const value = b[prop];
      return a + (typeof value === 'number' ? value : 0);
    }, 0) / array.length
  );
};
