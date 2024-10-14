export const Sum = (arr: number[]) => {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}
