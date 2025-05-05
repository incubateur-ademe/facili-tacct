import { numberWithSpacesRegex } from "../regex";

export const Round = (value: number, precision: number) => {
  var multiplier = Math.pow(10, precision || 0);
  var result = numberWithSpacesRegex(Math.round(value * multiplier) / multiplier);
  return result
};
