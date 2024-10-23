
export const SumByKey = (
  items: any[],
  prop: string,
) => {
  return items.reduce(function (a, b) {
    return a + b[prop];
  }, 0);
}
