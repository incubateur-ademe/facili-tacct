import { SurfacesProtegeesDto } from "../dto";
import { SurfacesProtegeesByCol } from "../postgres/models";

const Filter = (sp: SurfacesProtegeesByCol[], filter: keyof SurfacesProtegeesByCol): number => {
  const filtered = sp.filter(sp => Number(sp[filter]) !== 0).map(sp => Number(sp[filter])).reduce((a, b) => a + b, 0);
  return filtered;
};

export const SurfacesProtegeesGraphMapper = (surfacesProtegees: SurfacesProtegeesByCol[]): SurfacesProtegeesDto => {
  const data = {
    "name": "Surfaces protégées",
    "color": "hsl(271, 70%, 50%)",
    "children": [
      {
        "name": "Surfaces inventaires des espaces naturels",
        "color": "hsl(127, 70%, 50%)",
        "children": [
          {
            "name": "Znieff type 1",
            "color": "hsl(213, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "ZNIEFF1")
          },
          {
            "name": "Znieff type 2",
            "color": "hsl(302, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "ZNIEFF2")
          },
          {
            "name": "Znieff et Zico sans double compte",
            "color": "hsl(268, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "ZZZ")
          },
        ]
      },
      {
        "name": "Surfaces Natura 2000",
        "color": "hsl(59, 70%, 50%)",
        "children": [
          {
            "name": "Sites d’interêt communautaires",
            "color": "hsl(121, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "SIC")
          },
          {
            "name": "Zones de protection spéciale",
            "color": "hsl(302, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "ZPS")
          },
          {
            "name": "SIC et ZPS sans double compte",
            "color": "hsl(268, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "NATURA")
          }
        ]
      },
      {
        "name": "Zspaces de protection reglementaire",
        "color": "hsl(59, 70%, 50%)",
        "children": [
          {
            "name": "coeurs des parc nationaux",
            "color": "hsl(121, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "PNC")
          },
          {
            "name": "Réserves naturelles régionales",
            "color": "hsl(302, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "RNR")
          },
          {
            "name": "Arrêtés de protection du biotope",
            "color": "hsl(268, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "APB")
          },
          {
            "name": "Réserves nationales de chasse et de la faune sauvage",
            "color": "hsl(268, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "RNCFS")
          },
          {
            "name": "Réserves biologiques domaniales et forestières",
            "color": "hsl(268, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "RBFD")
          },
          {
            "name": "Réserves naturelles nationales",
            "color": "hsl(268, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "RN")
          }
        ]
      },
      {
        "name": "Espaces de protection contractuel",
        "color": "hsl(59, 70%, 50%)",
        "children": [
          {
            "name": "Aires d’adhésion des parcs nationaux",
            "color": "hsl(121, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "PNP")
          },
          {
            "name": "Parcs naturels régionaux",
            "color": "hsl(302, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "PNR")
          },
          {
            "name": "Zones Ramsar",
            "color": "hsl(268, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "RAMSAR")
          },
          {
            "name": "Réserves de biosphère",
            "color": "hsl(268, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "BIO")
          }
        ]
      },
      {
        "name": "Autres espaces de protection",
        "color": "hsl(59, 70%, 50%)",
        "children": [
          {
            "name": "Conservatoire du littoral et des rivages lacustres",
            "color": "hsl(121, 70%, 50%)",
            "loc": Filter(surfacesProtegees, "CELRL")
          }
        ]
      }
    ]
  };
  return data;
}