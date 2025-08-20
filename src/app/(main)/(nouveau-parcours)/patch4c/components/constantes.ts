export const agravationItems = [
  {
    label: "Pas d'évolution",
    offset: -80,
    values: '5%',
    hover: 'Stabilité ou baisse de l’indicateur entre 2030 et 2100'
  },
  {
    label: 'Aggravation modérée',
    offset: -42,
    values: '33%',
    hover:
      "L'évolution de long terme (2050-2100) est inférieure à celle de la période 2030-2050"
  },
  {
    label: 'Aggravation forte',
    offset: 40,
    values: '67%',
    hover:
      "L'évolution de long terme (2050-2100) est 1 à 2 fois supérieure à la valeur de l’évolution de la période 2030-2050"
  },
  {
    label: 'Aggravation très forte',
    offset: 90,
    values: '95%',
    hover:
      "L'évolution de long terme (2050-2100) est plus de deux fois plus forte que sur la période 2030-2050"
  }
];
