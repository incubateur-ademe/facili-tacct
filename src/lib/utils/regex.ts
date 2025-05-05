// Vérifie si le texte contient T + un nombre entre 1 et 12
export const eptRegex = new RegExp('T([1-9]|1[0-2])\\b');

// Si le texte commence par le nombre 97 ou 98
export const dromRegex = new RegExp('^[9][7-8]');

//crée un espace entre les chiffres tous les 3 caractères
export const numberWithSpacesRegex = (number: number | string) => {
  const decimal = number.toString().split('.');
  const strings = decimal[0].match(/.{1,3}(?=(.{3})*$)/g);
  const allNumber = decimal.length === 1 ? strings?.join(' ') : strings?.join(' ') + "," + decimal[1];
  return allNumber;
};
