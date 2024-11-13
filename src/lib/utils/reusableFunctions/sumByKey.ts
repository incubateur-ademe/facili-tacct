interface Item {
  [key: string]: number;
}

export const SumByKey = <T extends Item>(items: T[], prop: string): number => {
  return items.reduce(function (a, b) {
    return a + b[prop];
  }, 0);
}
