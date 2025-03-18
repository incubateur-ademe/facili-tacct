import { Patch4 } from '@/lib/postgres/models';

export const AlgoPatch4 = (
  patch4: Patch4,
  indice:
    | 'feux_foret'
    | 'fortes_chaleurs'
    | 'fortes_precipitations'
    | 'niveaux_marins'
    | 'secheresse_sols'
) => {
  const intensite =
    patch4[indice] === null
      ? 'Intensité non déterminée'
      : patch4[indice] === 0
        ? 'Intensité non déterminée'
        : patch4[indice] < 0.33
          ? 'Intensité modérée'
          : 0.3 <= patch4[indice] && patch4[indice] <= 0.66
            ? 'Intensité forte'
            : 'Intensité très forte';
  return intensite;
};
