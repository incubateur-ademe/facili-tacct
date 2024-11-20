"use client";

import { ResponsiveTreeMap } from '@nivo/treemap';

const SurfacesProtegeesDataviz = () => {

  const data = {
    "name": "Surfaces protégées",
    "color": "hsl(271, 70%, 50%)",
    "children": [
      // {
      //   "name": "Surfaces inventaires des espaces naturels",
      //   "color": "hsl(127, 70%, 50%)",
      //   "children": [
      //     {
      //       "name": "Znieff type 1",
      //       "color": "hsl(213, 70%, 50%)",
      //       "loc": 10
      //     },
      //     {
      //       "name": "Znieff type 2",
      //       "color": "hsl(302, 70%, 50%)",
      //       "loc": 12
      //     },
      //     {
      //       "name": "Znieff et Zico sans double compte",
      //       "color": "hsl(268, 70%, 50%)",
      //       "loc": 6
      //     },
      //   ]
      // },
      {
        "name": "Surfaces Natura 2000",
        "color": "hsl(59, 70%, 50%)",
        "children": [
          {
            "name": "sites d’interêt communautaires",
            "color": "hsl(121, 70%, 50%)",
            "loc": 10
          },
          // {
          //   "name": "zones de protection spéciale",
          //   "color": "hsl(302, 70%, 50%)",
          //   "loc": 12
          // },
          // {
          //   "name": "SIC et ZPS sans double compte",
          //   "color": "hsl(268, 70%, 50%)",
          //   "loc": 6
          // }
        ]
      },
      {
        "name": "espaces de protection reglementaire",
        "color": "hsl(59, 70%, 50%)",
        "children": [
          {
            "name": "coeurs des parc nationaux",
            "color": "hsl(121, 70%, 50%)",
            "loc": 10
          },
          // {
          //   "name": "réserves naturelles régionales",
          //   "color": "hsl(302, 70%, 50%)",
          //   "loc": 12
          // },
          // {
          //   "name": "arrêtés de protection du biotope",
          //   "color": "hsl(268, 70%, 50%)",
          //   "loc": 6
          // },
          // {
          //   "name": "reserves nationales de chasse et de la faune sauvage",
          //   "color": "hsl(268, 70%, 50%)",
          //   "loc": 6
          // },
          // {
          //   "name": "réserves biologiques domaniales et forestières",
          //   "color": "hsl(268, 70%, 50%)",
          //   "loc": 6
          // },
          {
            "name": "réserves naturelles nationales",
            "color": "hsl(268, 70%, 50%)",
            "loc": 6
          }
        ]
      },
      // {
      //   "name": "espaces de protection contractuel",
      //   "color": "hsl(59, 70%, 50%)",
      //   "children": [
      //     {
      //       "name": "aires d’adhésion des parcs nationaux",
      //       "color": "hsl(121, 70%, 50%)",
      //       "loc": 10
      //     },
      //     {
      //       "name": "parcs naturels régionaux",
      //       "color": "hsl(302, 70%, 50%)",
      //       "loc": 12
      //     },
      //     {
      //       "name": "zones Ramsar",
      //       "color": "hsl(268, 70%, 50%)",
      //       "loc": 6
      //     },
      //     {
      //       "name": "réserves de biosphère",
      //       "color": "hsl(268, 70%, 50%)",
      //       "loc": 6
      //     }
      //   ]
      // },
      // {
      //   "name": "autres types d’espaces de protection",
      //   "color": "hsl(59, 70%, 50%)",
      //   "children": [
      //     {
      //       "name": "conservatoire du littoral et des rivages lacustres",
      //       "color": "hsl(121, 70%, 50%)",
      //       "loc": 10
      //     }
      //   ]
      // }  
    ]
  }
  return (
    <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
      <h1>Surfaces Dataviz</h1>
      <ResponsiveTreeMap
        data={data}
        identity="name"
        value="loc"
        valueFormat=".02s"
        tile="squarify"
        leavesOnly={false}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        labelSkipSize={12}
        label={e=>" "+e.formattedValue+" " + "ha"}
        orientLabel={false}
        nodeOpacity={0.05}
        parentLabelTextColor={"#000000"}
        parentLabelSize={25}
        labelTextColor={"#000000"}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.1
                ]
            ]
        }}
    />
    </div>
  );
};

export default SurfacesProtegeesDataviz;
