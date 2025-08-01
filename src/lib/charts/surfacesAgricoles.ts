import { SurfacesAgricolesModel } from "../postgres/models";
import { Sum } from "../utils/reusableFunctions/sum";

export  const PieChartDataSurfacesAgricoles = (
  surfacesAgricoles: SurfacesAgricolesModel[],
) => {
  const sommeToutesSuperficies = Sum(surfacesAgricoles.map(el => el.superficie_sau))
  return [
    {
      id: "Cultures permanentes",
      count: Sum(surfacesAgricoles.map(el => el.superficie_sau_cultures_permanentes)),
      color: '#00C190',
      value: 100 * Sum(surfacesAgricoles.map(el => el.superficie_sau_cultures_permanentes)) / sommeToutesSuperficies,
    },
    {
      id: "Surfaces toujours en herbe",
      count: Sum(surfacesAgricoles.map(el => el.superficie_sau_herbe)),
      color: '#009ADC',
      value: 100 * Sum(surfacesAgricoles.map(el => el.superficie_sau_herbe)) / sommeToutesSuperficies,
    },
    {
      id: "Terres arables",
      count: Sum(surfacesAgricoles.map(el => el.superficie_sau_terres_arables)),
      color: '#7A49BE',
      value: 100 * Sum(surfacesAgricoles.map(el => el.superficie_sau_terres_arables)) / sommeToutesSuperficies,
    },
    {
      id: "Jardin",
      count: Sum(surfacesAgricoles.map(el => el.superficie_sau_jardins)) ,
      color: '#BB43BD',
      value: 100 * Sum(surfacesAgricoles.map(el => el.superficie_sau_jardins)) / sommeToutesSuperficies,
    },
  ];
}

export const PrograssBarDataSurfacesAgricoles = (surfacesAgricoles: SurfacesAgricolesModel[]) => {
  return [
    {
      "Terres arables": [
        {
          id: "Céréales",
          value: Sum(surfacesAgricoles.map(el => el.superficie_sau_terres_arables_cereales)),
          color: '#095D55'
        },
        {
          id: "Oléagineux, protéagineux, plantes à fibres et cultures industrielles protéagineux",
          value: Sum(surfacesAgricoles.map(el => el.superficie_sau_terres_arables_oleagineux)),
          color: '#095D55'
        },
        {
          id: "Légumes, Fleurs et plantes ornementales",
          value: Sum(surfacesAgricoles.map(
            el => el.superficie_sau_terres_arables_fleurs
              + el.superficie_sau_terres_arables_legumes_melons_fraises
              + el.superficie_sau_terres_arables_autres
              + el.superficie_sau_terres_arables_tubercules
          )),
          color: '#095D55'
        },
        {
          id: "Cultures fourragères",
          value: Sum(surfacesAgricoles.map(el => el.superficie_sau_terres_arables_fourrageres)),
          color: '#095D55'
        }
      ]
    },
    {
      "Cultures permanentes": [
        {
          id: "Vignes",
          value: Sum(surfacesAgricoles.map(el => el.superficie_sau_cultures_permanentes_vigne)),
          color: '#038278'
        },
        {
          id: "Fruits",
          value: Sum(surfacesAgricoles.map(el => el.superficie_sau_cultures_permanentes_fruits)),
          color: '#038278'
        },
        {
          id: "Autres",
          value: Sum(surfacesAgricoles.map(el => el.superficie_sau_cultures_permanentes_autres)),
          color: '#038278'
        }
      ]
    },
    {
      "Surfaces toujours en herbe": [
        {
          id: "Pâturages et prés",
          value: Sum(surfacesAgricoles.map(el => el.superficie_sau_herbe_prairies_productives)),
          color: '#91D1CC'
        },
        {
          id: "Prairies permanentes peu productives",
          value: Sum(surfacesAgricoles.map(el => el.superficie_sau_herbe_prairies_peu_productives)),
          color: '#91D1CC'
        },
        {
          id: "Surfaces toujours en herbe non productives et bois pâturés",
          value: Sum(surfacesAgricoles.map(
            el => el.superficie_sau_herbe_subventions + el.superficie_sau_herbe_bois_patures
          )),
          color: '#91D1CC'
        }
      ]
    },
    {
      Jardin: [
        {
          id: "Jardin",
          value: Sum(surfacesAgricoles.map(el => el.superficie_sau_jardins)),
          color: '#D3EDEB'
        }
      ]
    }
  ]
}
