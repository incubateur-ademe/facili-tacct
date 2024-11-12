
interface Item {
  [key: string]: number;
}


export const SumByKey = (items: any[], prop: string): number => {
  return items.reduce(function (a, b) {
    return a + b[prop];
  }, 0);
}
