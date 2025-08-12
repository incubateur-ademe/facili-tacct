export const consommationEspacesNafDoc = [
  {
    Variable: 'naf09art10',
    Description:
      'Flux entre NAF (Natuel, Agricole et Forestier) et artificialisé, sur la période 2009-2010'
  },
  {
    Variable: 'art09act10',
    Description:
      "Flux NAF (Natuel, Agricole et Forestier) vers artificialisé destiné à l'activité sur la période 2009-2010"
  },
  {
    Variable: 'art09hab10',
    Description:
      "Flux NAF (Natuel, Agricole et Forestier) vers artificialisé destiné à l'habitat sur la période 2009-2010"
  },
  {
    Variable: 'art09mix10',
    Description:
      'Flux NAF (Natuel, Agricole et Forestier) vers artificialisé destiné au mixte sur la période 2009-2010'
  },
  {
    Variable: 'art09rou10',
    Description:
      'Flux NAF (Natuel, Agricole et Forestier) vers artificialisé destiné aux infrastructures routières sur la période 2009-2010'
  },
  {
    Variable: 'art09fer10',
    Description:
      'Flux NAF (Natuel, Agricole et Forestier) vers artificialisé destiné aux infrastructures ferroviaires sur la période 2009-2010'
  },
  {
    Variable: 'art09inc10',
    Description:
      'Flux NAF (Natuel, Agricole et Forestier) vers artificialisé dont la destination est inconnue sur la période 2009-2010'
  },
  {
    Variable: 'nafart0923',
    Description:
      'Total des flux entre NAF (Natuel, Agricole et Forestier) et artificialisé, sur la période 2009-2023'
  },
  {
    Variable: 'nafact0923',
    Description:
      "Flux NAF (Natuel, Agricole et Forestier) vers artificialisé destiné à l'activité sur la période 2009-2023"
  },
  {
    Variable: 'artact0923',
    Description:
      "Flux NAF (Natuel, Agricole et Forestier) vers artificialisé destiné à l'habitat sur la période 2009-2023"
  },
  {
    Variable: 'arthab0923',
    Description:
      'Flux NAF (Natuel, Agricole et Forestier) vers artificialisé destiné au mixte sur la période 2009-2023'
  },
  {
    Variable: 'artmix0923',
    Description:
      'Flux NAF (Natuel, Agricole et Forestier) vers artificialisé destiné aux infrastructures routières sur la période 2009-2023'
  },
  {
    Variable: 'artrou0923',
    Description:
      'Flux NAF (Natuel, Agricole et Forestier) vers artificialisé destiné aux infrastructures ferroviaires sur la période 2009-2023'
  },
  {
    Variable: 'artfer0923',
    Description:
      'Flux NAF (Natuel, Agricole et Forestier) vers artificialisé dont la destination est inconnue sur la période 2009-2023'
  },
  {
    Variable: 'artinc0923',
    Description:
      'Flux NAF (Natuel, Agricole et Forestier) vers artificialisé dont la destination est inconnue sur la période 2009-2023'
  },
  {
    Variable: '',
    Description: ''
  },
  {
    Variable:
      'Nous avons donc naf09art10 = art09act10 + art09hab10 + art09mix10 + art09rou10 + art09fer10 + art09inc10',
    Description: ''
  },
  {
    Variable: '',
    Description: ''
  },
  {
    Variable: 'Source',
    Description: 'CEREMA, avril 2024'
  },
  {
    Variable: 'Documentation complète',
    Description:
      'https://www.data.gouv.fr/datasets/consommation-despaces-naturels-agricoles-et-forestiers-du-1er-janvier-2009-au-1er-janvier-2023/'
  }
];

export const sitesDeBaignadeDoc = [
  {
    Nomenclature: 'E',
    Description: 'Excellente qualité'
  },
  {
    Nomenclature: 'B',
    Description: 'Bonne qualité'
  },
  {
    Nomenclature: 'S',
    Description: 'Qualité suffisante'
  },
  {
    Nomenclature: 'P',
    Description: 'Insuffisamment de prélèvement'
  },
  {
    Nomenclature: 'I',
    Description: 'Qualité insuffisante'
  },
  {
    Nomenclature: '',
    Description: ''
  },
  {
    Nomenclature:
      "Le nombre situé avant la lettre correspond aux nombres de prélèvements effectués dans l'année.",
    Description: ''
  },
  {
    Nomenclature: '',
    Description: ''
  },
  {
    Nomenclature: 'Source',
    Description: 'Agences de l’eau'
  },
  {
    Nomenclature: 'Documentation complète',
    Description:
      'https://sextant.ifremer.fr/sextant_data/DCSMM_EVAL2024/SOURCES/MSANTE/618_msante_classement_eaux_baignades_2017_2020.pdf' // ou https://baignades.sante.gouv.fr/baignades/homeMap.do#a
  }
];

export const surfacesEnBioDoc = [
  {
    Nomenclature: 'part_agribio_surf',
    Description: 'Part des surfaces en agriculture biologique (AB)'
  },
  {
    Nomenclature: 'saue',
    Description: 'Surface agricole utilisée des exploitations'
  },
  {
    Nomenclature: 'agribio_surf',
    Description: 'Surface en agriculture biologique'
  },
  {
    Nomenclature: '',
    Description: ''
  },
  {
    Nomenclature: 'Source',
    Description:
      'Agence Bio, Service de la Statistique et de la Prospective (SSP - Ministère de l’agriculture) dans Catalogue DiDo (Indicateurs territoriaux de développement durable - ITDD) - AGRESTE, 2020'
  },
  {
    Nomenclature: 'Documentation complète',
    Description:
      'https://www.statistiques.developpement-durable.gouv.fr/catalogue?page=dataset&datasetId=632956d8eae137714f60ae22'
  }
];

export const aot40Doc = [
  {
    '': 'Source',
    '': 'Géod’Air (2024)'
  },
  {
    '': 'Documentation complète',
    '': 'https://www.geodair.fr/reglementation'
  }
];
