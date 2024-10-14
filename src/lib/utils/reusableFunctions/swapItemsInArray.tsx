export const swapNumbers = (array: Array<number>, index1: number, index2: number) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
  return array;
};

export const swapStrings = (array: Array<string>, from: number, to: number) => {
  array.splice(from, 1, array.splice(to, 1, array[from])[0]);
}
