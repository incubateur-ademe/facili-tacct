type GenericObject = {
  [key: string]: string | number | bigint | null;
}

export const CountOcc = <T extends GenericObject>(arr: T[], item: keyof T) => {
  return arr?.reduce((prev, curr) => {
    const key = String(curr[item]);
    prev[key] = ++prev[key] || 1;
    return prev;
  }, {} as Record<string, number>);
}
