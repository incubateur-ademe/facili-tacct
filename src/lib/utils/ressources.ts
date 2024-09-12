export const ressourcesTabs = {
  diagnostic : [
    {
      id: 0,
      titre: "Vous n'avez pas de diagnostic",
    },
    {
      id: 1,
      titre: "Vous découvrez le diagnostic pour la 1ère fois",
    },
    {
      id: 2,
      titre: "Vous voulez réviser un diagnostic connu",
    }
  ],
  themes: [
    {
      id: 0,
      titre: "Inconfort thermique",
    },
    {
      id: 1,
      titre: "Thématique 2",
      disabled: true
    },
    {
      id: 2,
      titre: "Thématique 3",
      disabled: true
    }
  ]
};

export const cards = {
  diagnostic: [
    {
      id: 0,
      tab : "Vous n'avez pas de diagnostic",
      titre: 'Atelier "Mémoire"',
      tag: "Atelier",
      description:"Faites appel à la mémoire collective pour débuter sur l'exposition de votre territoire aux impacts du changement climatique.",
      link: "/ressources/atelier"
    },
    {
      id: 1,
      tab : "Vous n'avez pas de diagnostic",
      titre: 'Constituer une équipe "cœur"',
      tag: "Retour d'expérience",
      description: "Découvrez comment et pourquoi la Communauté de Communes du Bocage Bourbonnais (03) a mis en place une « équipe cœur » afin de piloter sa démarche TACCT.",
      link: "https://librairie.ademe.fr/7214-piloter-sa-demarche-tacct-retour-d-experience-dans-le-bocage-bourbonnais-03.html"
    },
    {
      id: 2,
      tab : "Vous n'avez pas de diagnostic",
      titre: "Faire son diagnostic de vulnérabilité",
      tag: "Retour d'expérience",
      description: "Retour d'expérience sur la réalisation d'un diagnostic de vulnérabilité avec TACCT à Epernay Agglo Champagne (51).",
      link: "https://www.climaxion.fr/docutheque/realisation-dun-diagnostic-vulnerabilite-au-changement-climatique-epernay-agglo-champagne"
    },
    {
      id: 3,
      tab : ["Vous n'avez pas de diagnostic", "Vous découvrez le diagnostic pour la 1ère fois", "Vous voulez réviser un diagnostic connu"],
      titre: "10 minutes pour analyser les 80 pages de votre diagnostic de vulnérabilité",
      tag: "Article",
      description: "Le diagnostic de vulnérabilité est un document clé pour comprendre le territoire et ses spécificités.",
      link: "/ressources/articles"
    },
    {
      id: 4,
      tab : "Vous découvrez le diagnostic pour la 1ère fois",
      titre: "Restituer son diagnostic de vulnérabilité",
      tag: "Retour d'expérience",
      description: "Ils l'ont fait ! Retour d'expérience sur la restitution de son diagnostic de vulnérabilité en Haute Loire (43).",
      link: "https://librairie.ademe.fr/7180-comment-restituer-son-diagnostic-des-impacts-du-changement-climatique-en-haute-loire-43.html"
    },
    {
      id: 5,
      tab : "Vous voulez réviser un diagnostic connu",
      titre: "Mettre en récit mon territoire pour engager",
      tag: "Article",
      description: "« L’humanité est une « espèce fabulatrice qui, en se racontant des histoires de plus en plus complexes, développe des capacités de coopération » - Yval Noah Harrari ; Découvrez la mise en récit.",
      link: "/ressources/articles"
    },
    {
      id: 6,
      tab : "Vous voulez réviser un diagnostic connu",
      titre: "La facilitation d’ateliers : une démarche éprouvée d’engagement",
      tag: "Article",
      description: "Pour réellement engager vos parties prenantes dans votre démarche d’adaptation appuyez-vous sur une démarche éprouvée : la facilitation d’ateliers.",
      link: "/ressources/articles"
    },
    {
      id: 7,
      tab : ["Vous n'avez pas de diagnostic", "Vous découvrez le diagnostic pour la 1ère fois", "Vous voulez réviser un diagnostic connu"],
      titre: "Article CdC sur la facilitation",
      tag: "Article",
      description: "Engager vos participants, ça s’anticipe, pour cela intégrez la facilitation d’ateliers (ou l’intelligence collective) dès conception de votre cahier des charges.",
      link: "/ressources/articles"
    },
  ],
  inconfortThermique: [
    {
      id: 0,
      tab: "Inconfort thermique",
      titre: 'Plus Fraîche Ma Ville',
      tag: "Article",
      description:"Trouvez les bonnes solutions pour rafraîchir durablement votre collectivité.",
      link: "https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/milieux/foret"
    },
    {
      id: 1,
      tab: "Inconfort thermique",
      titre: 'CRACC',
      tag: "Article",
      description: "Canicule : à quoi s’attendre et comment s’adapter ?",
      link: "https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/canicule"
    },
  ],
  cartesPermanentes: [
    {
      id: 0,
      tab: "",
      titre: 'Rejoignez notre communauté sur l’adaptation au changement climatique',
      tag: "",
      description: "Rejoindre notre communauté c’est avoir accès à des bonnes pratiques, des contacts et retours d’expériences provenant d’autres chargés de missions.",
      link: "https://tally.so/r/n0LrEZ"
    },
    {
      id: 1,
      tab: "",
      titre: 'Découvrez la méthode TACCT',
      tag: "",
      description: "Découvrez la méthode TACCT pour élaborer une politique d’adaptation au changement climatique de « A à Z », du diagnostic de vulnérabilité jusqu’au suivi des mesures et à l’évaluation de la stratégie.",
      link: "https://tacct.ademe.fr/"
    },
  ]
}
