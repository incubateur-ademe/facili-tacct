import TestImageTuile from '@/assets/images/test_tuile.png';
import Adacc from '@/lib/ressources/articles/adacc';
import BriserSilosApprocheSystemique from '@/lib/ressources/articles/briserSilosApprocheSystemique';
import CDC from '@/lib/ressources/articles/CDC';
import ClimaStory from '@/lib/ressources/articles/climaStory';
import EviterPrecherDesert from '@/lib/ressources/articles/eviterPrecherDesert';
import FacilitationDateliers from '@/lib/ressources/articles/facilitationDateliers';
import IlotChaleurUrbain from '@/lib/ressources/articles/ilotChaleurUrbain';
import IndicateursDeResilience from '@/lib/ressources/articles/indicateursDeResilience';
import LireUnDiagnostic from '@/lib/ressources/articles/lireUnDiagnostic';
import PnaccTracc from '@/lib/ressources/articles/pnaccTracc';
import RecruterStagiaire from '@/lib/ressources/articles/recruterStagiaire';
import RisqueALadaptation from '@/lib/ressources/articles/risqueALadaptation';
import { StaticImageData } from 'next/image';
import { JSX } from 'react';

export const FiltresOptions = [
  {
    titre: 'Je cherche à',
    options: ["M'inspirer", 'Me former', 'Agir']
  },
  {
    titre: 'Format de ressources',
    options: ['Article', "Retour d'expérience"]
  },
  {
    titre: 'Territoire',
    options: [
      'National',
      'Auvergne-Rhône-Alpes',
      'Bourgogne-Franche-Comté',
      'Bretagne',
      'Centre-Val de Loire',
      'Corse',
      'Grand Est',
      'Hauts-de-France',
      'Ile-de-France',
      'Normandie',
      'Nouvelle-Aquitaine',
      'Occitanie',
      'Pays de la Loire',
      "Provence Alpes Côte d'Azur",
      'Guadeloupe',
      'Guyane',
      'Martinique',
      'Mayotte',
      'Réunion',
      "Outremer"
    ]
  }
];

// export const TousLesArticles = [
//   {
//     slug: 'analyser-diagnostic-vulnerabilite',
//     Component: LireUnDiagnostic,
//     titre: 'Analyser un diagnostic de vulnérabilité',
//     description:
//       'Relisez votre diagnostic de vulnérabilité aux effets du changement climatique en 10 minutes : repérez les données utiles et les enjeux clés.',
//     lien: '/ressources/articles/analyser-diagnostic-vulnerabilite',
//     filtres: ['Article', "M'inspirer", 'National'],
//     collection: "Bâtir sa stratégie d'adaptation",
//     tempsLecture: 15,
//     image: TestImageTuile
//   },
//   {
//     tab: 'Vous découvrez le diagnostic pour la 1ère fois',
//     titre:
//       'Comment restituer son diagnostic des impacts du changement climatique en Haute-Loire (43)',
//     description:
//       'Comment embarquer dans la construction de votre stratégie d’adaptation? Un partage engageant du diagnostic est important, pour cela, la CA du Puy-en-Velay a articulé TACCT et l’atelier ClimaSTORY.',
//     lien: 'https://librairie.ademe.fr/7180-comment-restituer-son-diagnostic-des-impacts-du-changement-climatique-en-haute-loire-43.html',
//     filtres: ["Retour d'expérience", 'Agir', 'Centre-Val de Loire'],
//     collection: "Bâtir sa stratégie d'adaptation",
//     tempsLecture: 15,
//     image: TestImageTuile
//   },
//   {
//     slug: 'mise-en-recit-territoire-adaptation-climat',
//     Component: MiseEnRecit,
//     metadata: {
//       titre: 'Mettre en récit mon territoire pour engager',
//       description:
//         'Découvrez comment mettre en récit votre territoire pour engager les acteurs locaux dans l’adaptation au changement climatique.'
//     }
//   },
//   {
//     slug: 'mobilisation-diagnostic-vulnerabilite',
//     Component: PourquoiMobiliser,
//     metadata: {
//       titre:
//         'Comment mobiliser élus, services et partenaires autour d’un diagnostic de vulnérabilité ?',
//       description:
//         'Découvrez le retour d’expérience de Jolet Van Kipshagen (CC Vallée de Villé) et les clés d’une démarche concertée et ancrée dans le territoire.'
//     }
//   },
//   {
//     slug: 'facilitation-ateliers-mobilisation',
//     Component: FacilitationDateliers,
//     metadata: {
//       titre: 'La facilitation d’ateliers : une démarche éprouvée d’engagement',
//       description:
//         'Découvrez comment la facilitation d’ateliers peut renforcer l’engagement des parties prenantes dans l’adaptation.'
//     }
//   },
//   {
//     slug: 'facilitation-cahier-charges',
//     Component: CDC,
//     metadata: {
//       titre: 'Le cahier des charges, levier pour intégrer la facilitation',
//       description:
//         'Le rôle du cahier des charges dans l’intégration de la facilitation pour l’adaptation au changement climatique.'
//     }
//   },
//   {
//     slug: 'reussir-mobilisation-acteurs-adaptation',
//     Component: EviterPrecherDesert,
//     metadata: {
//       titre: 'Comment éviter de prêcher dans le désert ?',
//       description:
//         'Conseils pour éviter de prêcher dans le désert et maximiser l’impact de vos actions d’adaptation.'
//     }
//   },
//   {
//     slug: 'ateliers-adacc-adaptation',
//     Component: Adacc,
//     metadata: {
//       titre: 'Sensibiliser à l’adaptation : les AdACC',
//       description:
//         'Présentation des Ateliers de l’Adaptation au Changement Climatique (AdACC) pour sensibiliser les acteurs.'
//     }
//   },
//   {
//     slug: 'atelier-climastory-sensibilisation-adaptation',
//     Component: ClimaStory,
//     metadata: {
//       titre: 'ClimaSTORY, une cartographie pour sensibiliser',
//       description:
//         'Découvrez ClimaSTORY, un outil cartographique pour sensibiliser à l’adaptation au changement climatique.'
//     }
//   },
//   {
//     slug: 'stagiaire-diagnostic-vulnerabilite-climat',
//     Component: RecruterStagiaire,
//     metadata: {
//       titre:
//         'Recruter un stagiaire sur le diagnostic de vulnérabilité : bonne ou mauvaise idée ?',
//       description:
//         'Vous envisagez de confier le diagnostic de vulnérabilité à votre stagiaire ? Découvrez les erreurs à éviter, les missions possibles, et les bonnes pratiques pour un appui vraiment utile.'
//     }
//   },
//   {
//     slug: 'ilot-chaleur-urbain-erreurs-a-eviter',
//     Component: IlotChaleurUrbain,
//     metadata: {
//       titre:
//         'Îlot de chaleur urbain : 4 idées reçues à déjouer pour mieux agir sur le terrain',
//       description:
//         'Îlot de chaleur urbain : 4 idées reçues à déjouer pour mieux comprendre le phénomène, cibler les bons diagnostics et adapter l’action aux enjeux'
//     }
//   },
//   {
//     slug: 'pnacc-tracc-comment-suis-je-concerne',
//     Component: PnaccTracc,
//     metadata: {
//       titre: 'PNACC, TRACC, Comment suis-je concerné ?',
//       description:
//         'PNACC, TRACC autant de documents stratégiques qui orientent l’adaptation au changement climatique en France. Comprendre leur contenu est nécessaire pour anticiper et mettre en oeuvre des stratégies cohérentes.'
//     }
//   },
//   {
//     slug: 'briser-silos-approche-systemique',
//     Component: BriserSilosApprocheSystemique,
//     metadata: {
//       titre: 'Brisez les silos : introduction à l’approche systémique',
//       description:
//         'Comprendre les interactions au sein de votre système est essentiel pour éviter les maladaptations. L’approche systémique vous accompagne de l’identification jusqu’à la mobilisation.'
//     }
//   },
//   {
//     slug: 'resilience-agricole-indicateurs-territoire',
//     Component: IndicateursDeResilience,
//     metadata: {
//       titre:
//         'Comment mesurer la résilience d’un territoire agricole face au changement climatique ?',
//       description:
//         '22 indicateurs pour aider les chargés de mission climat à évaluer la résilience agricole et repérer les vulnérabilités au changement climatique.'
//     }
//   },
//   {
//     slug: 'strategie-adaptation-gestion-risque-relocalisation',
//     Component: RisqueALadaptation,
//     metadata: {
//       titre:
//         'De la gestion du risque à l’adaptation : le cas de la relocalisation de Miquelon',
//       description:
//         'De la gestion du risque à l’adaptation ou quand reculer devient avancer : témoignages d’une projection sur le temps long avec l’exemple de Miquelon.'
//     }
//   }
// ];

export type ToutesRessources = {
  id: number;
  type: string;
  Component?: () => JSX.Element;
  titre: string;
  description: string;
  lien: string;
  filtres: string[];
  collections: string[];
  tempsLecture: number;
  image: StaticImageData;
  slug?: string;
  tab?: undefined;
};

export const toutesLesRessources: ToutesRessources[] = [
  {
    id: 1,
    type: 'Article',
    slug: 'analyser-diagnostic-vulnerabilite',
    Component: LireUnDiagnostic,
    titre: 'Analyser un diagnostic de vulnérabilité',
    description:
      'Relisez votre diagnostic de vulnérabilité aux effets du changement climatique en 10 minutes : repérez les données utiles et les enjeux clés.',
    lien: '/ressources/articles/analyser-diagnostic-vulnerabilite',
    filtres: ['Article', "M'inspirer", 'National'],
    collections: ['Démarrer le diagnostic de vulnérabilité'],
    tempsLecture: 15,
    image: TestImageTuile
  },
  {
    id: 2,
    type: 'Article',
    slug: 'pnacc-tracc-comment-suis-je-concerne',
    Component: PnaccTracc,
    titre: 'PNACC, TRACC, Comment suis-je concerné ?',
    description:
      'PNACC, TRACC autant de documents stratégiques qui orientent l’adaptation au changement climatique en France. Comprendre leur contenu est nécessaire pour anticiper et mettre en oeuvre des stratégies cohérentes.',
    lien: '/ressources/articles/pnacc-tracc-comment-suis-je-concerne',
    filtres: ['Article', 'Me former', 'National'],
    collections: [
      'Démarrer le diagnostic de vulnérabilité',
      'Piloter la démarche d’adaptation'
    ],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 3,
    type: "Retour d'expérience",
    titre:
      'Adaptation au changement climatique : déploiement de la démarche TACCT',
    description:
      'Le Pays Pyrénées Méditerranée a mis en oeuvre la démarche TACCT du diagnostic jusqu’à la mise en oeuvre de sa stratégie. Pour retrouver toutes les étapes de la démarche vous pouvez consulter cette fiche.',
    lien: 'https://www.payspyreneesmediterranee.org/thematiques/transitions-energie-climat/adaptation-au-changement-climatique/',
    filtres: ["Retour d'expérience", "M'inspirer", 'Occitanie'],
    collections: [
      'Démarrer le diagnostic de vulnérabilité',
      'Évaluer les impacts du changement climatique',
      'Piloter la démarche d’adaptation',
      'Mobiliser les acteurs du territoire',
      'Partager le diagnostic de vulnérabilité'
    ],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 4,
    type: "Retour d'expérience",
    titre:
      "Diagnostic de vulnérabilité au réchauffement climatique d'un territoire rural du Nord Est de la France : Cœur du Pays Haut",
    description:
      'La démarche TACCT est une approche systémique de l’adaptation. Découvrez le contexte et les étapes clés pour la réalisation du diagnostic de vulnérabilité par la CC du Coeur du Pays Haut.',
    lien: 'https://librairie.ademe.fr/changement-climatique/7910-diagnostic-de-vulnerabilite-au-rechauffement-climatique-d-un-territoire-rural-du-nord-est-de-la-france-coeur-du-pays-haut.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Grand Est'],
    collections: ['Démarrer le diagnostic de vulnérabilité'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 5,
    type: "Retour d'expérience",
    titre:
      "Réalisation d'un diagnostic de vulnérabilité au changement climatique",
    description:
      'Epernay Agglo Champagne pour son PCAET a effectué son diagnostic de vulnérabilité : revivez la démarche suivie et les apprentissages en s’appuyant sur TACCT.',
    lien: 'https://www.climaxion.fr/docutheque/realisation-dun-diagnostic-vulnerabilite-au-changement-climatique-epernay-agglo-champagne',
    filtres: ["Retour d'expérience", "M'inspirer", 'Grand Est'],
    collections: ['Démarrer le diagnostic de vulnérabilité'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 6,
    type: "Retour d'expérience",
    titre:
      "Retour d'expériences de la mise en place de la démarche TACCT sur des territoires",
    description:
      'Intéressé par la démarche TACCT ? Cette fiche est un retour d’expérience des bonnes pratiques et points de vigilance pour 10 territoires ayant suivi la démarche en AURA - Occitanie.',
    lien: 'https://librairie.ademe.fr/7538-adaptation-au-changement-climatique.html',
    filtres: [
      "Retour d'expérience",
      "M'inspirer",
      'Auvergne-Rhône-Alpes',
      'Occitanie'
    ],
    collections: ['Démarrer le diagnostic de vulnérabilité'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 7,
    type: "Retour d'expérience",
    titre:
      "Evaluer la sensibilité au changement climatique en atelier - Retour d'expérience de la Vallée de Kaysersberg (68)",
    description:
      'Suite à l’analyse de l’exposition du territoire, évaluer sa sensibilité permet de comprendre la manière dont il sera affecté. La Vallée de Keysersberg a mené un atelier participatif.',
    lien: 'https://librairie.ademe.fr/changement-climatique/7906-evaluer-la-sensibilite-au-changement-climatique-en-atelier-retour-d-experience-de-la-vallee-de-kaysersberg-68.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Grand Est'],
    collections: ['Évaluer les impacts du changement climatique'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 8,
    type: "Retour d'expérience",
    titre:
      'Evaluation en atelier de la sensibilité du territoire au changement climatique au PNR Pyrénées Ariégeoises (09)',
    description:
      'Pour réaliser son diagnostic de vulnérabilité, il faut analyser l’exposition, puis la sensibilité. Pour réaliser cela en concertation, le PNR des Pyrénées Ariégeoises a mis en place un atelier dédié.',
    lien: 'https://librairie.ademe.fr/changement-climatique-et-energie/6223-evaluation-en-atelier-de-la-sensibilite-du-territoire-au-changement-climatique-au-pnr-pyrenees-ariegeoises-09.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Occitanie'],
    collections: ['Évaluer les impacts du changement climatique'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 9,
    type: 'Article',
    slug: 'resilience-agricole-indicateurs-territoire',
    Component: IndicateursDeResilience,
    titre:
      'Comment mesurer la résilience d’un territoire agricole face au changement climatique ?',
    description:
      '22 indicateurs pour aider les chargés de mission climat à évaluer la résilience agricole et repérer les vulnérabilités au changement climatique.',
    lien: '/ressources/articles/resilience-agricole-indicateurs-territoire',
    filtres: ['Article', 'Me former', 'National'],
    collections: ['Évaluer les impacts du changement climatique'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 10,
    type: 'Article',
    slug: 'ilot-chaleur-urbain-erreurs-a-eviter',
    Component: IlotChaleurUrbain,
    titre:
      'Îlot de chaleur urbain : 4 idées reçues à déjouer pour mieux agir sur le terrain',
    description:
      'Vous vous interrogez sur la présence d’un îlot de chaleur urbain sur votre territoire ? Voici 4 idées reçues à déjouer avant de lancer un diagnostic.',
    lien: '/ressources/articles/ilot-chaleur-urbain-erreurs-a-eviter',
    filtres: ['Article', 'Me former', 'National'],
    collections: ['Évaluer les impacts du changement climatique'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 11,
    type: 'Article',
    slug: 'reussir-mobilisation-acteurs-adaptation',
    Component: EviterPrecherDesert,
    titre: 'Comment éviter de prêcher dans le désert ?',
    description:
      'La mobilisation n’est jamais simple, nous avons identifiés des freins et des pratiques concrètes à activer pour réaliser une mobilisation efficace.',
    lien: '/ressources/articles/reussir-mobilisation-acteurs-adaptation',
    filtres: ['Article', 'Agir', 'National'],
    collections: ['Mobiliser les acteurs du territoire'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 12,
    type: 'Article',
    slug: 'ateliers-adacc-adaptation',
    Component: Adacc,
    titre:
      'Sensibiliser à l’adaptation : les AdACC (Ateliers de l’Adaptation au Changement Climatique)',
    description:
      'La sensibilisation, un préalable à la mobilisation ? Retour d’expérience de Sarah Clamens avec la mise en œuvre des Ateliers de l’Adaptation au Changement Climatique à la CA de Saintes.',
    lien: '/ressources/articles/ateliers-adacc-adaptation',
    filtres: ['Article', 'Agir', 'Nouvelle-Aquitaine'],
    collections: ['Mobiliser les acteurs du territoire'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 13,
    type: 'Article',
    slug: 'atelier-climastory-sensibilisation-adaptation',
    Component: ClimaStory,
    titre: 'ClimaSTORY, une cartographie pour sensibiliser',
    description:
      'Approcher l’adaptation au changement climatique via une carte du territoire, fictive ou non : une manière sensible d’aborder le sujet.',
    lien: '/ressources/articles/atelier-climastory-sensibilisation-adaptation',
    filtres: ['Article', 'Agir', 'National'],
    collections: ['Mobiliser les acteurs du territoire'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 14,
    type: "Retour d'expérience",
    titre:
      "Sensibiliser au lancement de la démarche TACCT - Retour d'expérience de la CC de Ardennes Thiérache (08)",
    description:
      'La sensibilisation est un fort levier d’engagement dans une démarche TACCT, découvrez l’atelier mémoire utilisé par la CC Ardennes Thiérache pour mobiliser les élus communautaires et services.',
    lien: 'https://librairie.ademe.fr/changement-climatique/7905-sensibiliser-au-lancement-de-la-demarche-tacct-retour-d-experience-de-la-cc-de-ardennes-thierache-08.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Grand Est'],
    collections: ['Mobiliser les acteurs du territoire'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 15,
    type: "Retour d'expérience",
    titre:
      "Atelier de co-construction des actions face aux impacts du changement climatique d'Épernay Agglo Champagne (51)",
    description:
      'La co-construction est un important facteur de réussite d’une démarche TACCT. Epernay Agglo Champagne met en lumière dans cette fiche l’identification des enjeux et des actions liées.',
    lien: 'https://librairie.ademe.fr/changement-climatique/7909-atelier-de-co-construction-des-actions-face-aux-impacts-du-changement-climatique-d-epernay-agglo-champagne-51.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Grand Est'],
    collections: ["Bâtir sa stratégie d'adaptation"],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 16,
    type: "Retour d'expérience",
    titre:
      "TACCT. Une stratégie issue d'une trajectoire d'adaptation au changement climatique",
    description:
      'À la suite du diagnostic de vulnérabilité et pour la mise en oeuvre de sa stratégie, le pays Pyrénées Méditerranée a organisé 2 ateliers afin de définir ses trajectoires d’adaptation.',
    lien: 'https://librairie.ademe.fr/changement-climatique/7726-tacct-une-strategie-issue-d-une-trajectoire-d-adaptation-au-changement-climatique.html#',
    filtres: ["Retour d'expérience", "M'inspirer", 'Occitanie'],
    collections: ["Bâtir sa stratégie d'adaptation"],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 17,
    type: "Retour d'expérience",
    titre:
      "Des trajectoires d'adaptation pour prévenir les incertitudes du changement climatique – PETR du Pays Barrois (55)",
    description:
      'Les trajectoires d’adaptations permettent d’anticiper l’évolution climatique. Le PETR du Pays Barrois s’est basé sur ces trajectoires pour la mise en oeuvre de groupements d’actions.',
    lien: 'https://librairie.ademe.fr/changement-climatique/7908-des-trajectoires-d-adaptation-pour-prevenir-les-incertitudes-du-changement-climatique-petr-du-pays-barrois-55.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Grand Est'],
    collections: ["Bâtir sa stratégie d'adaptation"],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 18,
    type: "Retour d'expérience",
    titre:
      'Construire la feuille de route Adaptation au Changement Climatique du département de l’Indre',
    description:
      'Le département de l’Indre a mis en oeuvre la démarche TACCT du diagnostic jusqu’à l’identification de la stratégie et du plan d’action. Tout cela en mobilisant de nombreuses parties prenantes.',
    lien: 'https://www.indre.gouv.fr/Actions-de-l-Etat/Environnement/Strategie-Climat-36-une-demarche-departementale-et-partenariale/3.-Construire-notre-feuille-de-route/La-methode',
    filtres: ["Retour d'expérience", "M'inspirer", 'Centre-Val de Loire'],
    collections: ["Bâtir sa stratégie d'adaptation"],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 19,
    type: "Retour d'expérience",
    titre:
      "TACCT. Confronter la robustesse de la charte d'un Parc Naturel Régional au changement climatique",
    description:
      'À la suite du diagnostic de vulnérabilité, le PNR des Pyrénées Ariégeoises a organisé un atelier pour mesurer la robustesse des actions d’adaptation dans sa charte jusqu’à 2040.',
    lien: 'https://librairie.ademe.fr/changement-climatique/7727-tacct-confronter-la-robustesse-de-la-charte-d-un-parc-naturel-regional-au-changement-climatique.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Occitanie'],
    collections: ["Bâtir sa stratégie d'adaptation"],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 20,
    type: "Retour d'expérience",
    titre:
      "Questionner l'imaginaire pour faire réagir en atelier TACCT : Retour d'expérience de Clermont Auvergne Métropole (63)",
    description:
      'Utiliser la mise en récit lors d’un atelier de restitution de  votre diagnostic de vulnérabilité : Clermont Auvergne Métropole l’a fait avec une Une de journal fictive.',
    lien: 'https://librairie.ademe.fr/7215-questionner-l-imaginaire-pour-faire-reagir-en-atelier-tacct-retour-d-experience-de-clermont-auvergne-metropole-63.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Auvergne-Rhône-Alpes'],
    collections: ['Partager le diagnostic de vulnérabilité'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 21,
    type: "Retour d'expérience",
    titre:
      'Comment restituer son diagnostic des impacts du changement climatique en Haute-Loire (43)',
    description:
      'Comment embarquer dans la construction de votre stratégie d’adaptation? Un partage engageant du diagnostic est important, pour cela, la CA du Puy-en-Velay a articulé TACCT et l’atelier ClimaSTORY.',
    lien: 'https://librairie.ademe.fr/7180-comment-restituer-son-diagnostic-des-impacts-du-changement-climatique-en-haute-loire-43.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Auvergne-Rhône-Alpes'],
    collections: ['Partager le diagnostic de vulnérabilité'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 22,
    type: "Retour d'expérience",
    titre:
      'Comment restituer son diagnostic des impacts du changement climatique en Haute-Savoie (74) ?',
    description:
      'Comment embarquer dans la construction de votre stratégie d’adaptation? Un partage engageant du diagnostic est important, pour cela, la CCVCMB a articulé TACCT et l’atelier ClimaSTORY.',
    lien: 'https://librairie.ademe.fr/7129-comment-restituer-son-diagnostic-des-impacts-du-changement-climatique-en-haute-savoie-74-.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Auvergne-Rhône-Alpes'],
    collections: ['Partager le diagnostic de vulnérabilité'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 23,
    type: "Retour d'expérience",
    titre:
      "Mettre en récit TACCT stratégie pour engager les élus : Retour d'expérience du PNR du Pilat (42)",
    description:
      'Après avoir réalisé en autonomie son diagnostic de vulnérabilité, le PNR du Pilat a décidé de suivre TACCT Stratégie pour mobiliser et mettre en récit son territoire sur un enjeu déterminé.',
    lien: 'https://librairie.ademe.fr/7544-mettre-en-recit-tacct-strategie-pour-engager-les-elus-retour-d-experience-du-pnr-du-pilat-42.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Auvergne-Rhône-Alpes'],
    collections: ['Partager le diagnostic de vulnérabilité'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 24,
    type: "Retour d'expérience",
    titre:
      "Présenter le diagnostic de l'exposition - Retour d'expérience du PNR des Vosges du Nord (67)",
    description:
      'Une facette du diagnostic de vulnérabilité, l’analyse de l’exposition. Découvrez l’usage des données climatiques actuelles et futures du PNR des Vosges du Nord',
    lien: 'https://librairie.ademe.fr/changement-climatique/7907-presenter-le-diagnostic-de-l-exposition-retour-d-experience-du-pnr-des-vosges-du-nord-67.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Grand Est'],
    collections: ['Partager le diagnostic de vulnérabilité'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 25,
    type: "Retour d'expérience",
    titre:
      "Restituer le diagnostic de vulnérabilité - Retour d'expérience de la CC de la Vallée de Villé (67)",
    description:
      'Le diagnostic de vulnérabilité est le document idéal pour partager le constat territorial, la CC de la Vallée de Villé a organisé une restitution participative avec élus, agents et habitants.',
    lien: 'https://librairie.ademe.fr/changement-climatique/7911-restituer-le-diagnostic-de-vulnerabilite-retour-d-experience-de-la-cc-de-la-vallee-de-ville-67.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Grand Est'],
    collections: ['Partager le diagnostic de vulnérabilité'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 26,
    type: 'Article',
    slug: 'briser-silos-approche-systemique',
    Component: BriserSilosApprocheSystemique,
    titre: 'Brisez les silos : introduction à l’approche systémique',
    description:
      'Comprendre les interactions au sein de votre système est essentiel pour éviter les maladaptations. L’approche systémique vous accompagne de l’identification jusqu’à la mobilisation.',
    lien: '/ressources/articles/briser-silos-approche-systemique',
    filtres: ['Article', "M'inspirer", 'National', 'Bourgogne-Franche-Comté'],
    collections: ["Ajuster sa posture d'animation"],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 27,
    type: 'Article',
    slug: 'facilitation-ateliers-mobilisation',
    Component: FacilitationDateliers,
    titre: 'La facilitation d’ateliers : une démarche éprouvée d’engagement',
    description:
      'Pour réellement engager vos parties prenantes dans votre démarche d’adaptation appuyez-vous sur une démarche éprouvée : la facilitation d’ateliers.',
    lien: '/ressources/articles/facilitation-ateliers-mobilisation',
    filtres: ['Article', 'Agir', 'National'],
    collections: ["Ajuster sa posture d'animation"],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 28,
    type: "Retour d'expérience",
    titre:
      "Coorganiser des ateliers TACCT pour mobiliser : Retour d'expérience dans les Baronnies en Drôme Provençale (26)",
    description:
      "Pourquoi et comment coorganiser des ateliers sur les enjeux de votre territoire? la CCBDP a identifié trois enjeux d'adaptation majeurs à la suite de son diagnostic de vulnérabilité et a souhaité mobiliser ses partenaires.",
    lien: 'https://librairie.ademe.fr/7228-coorganiser-des-ateliers-tacct-pour-mobiliser-retour-d-experience-dans-les-baronnies-en-drome-provencale-26.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Auvergne-Rhône-Alpes'],
    collections: ["Ajuster sa posture d'animation"],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 29,
    type: 'Article',
    slug: 'facilitation-cahier-charges',
    Component: CDC,
    titre: 'Le cahier des charges, levier pour intégrer la facilitation',
    description:
      'Engager vos participants, ça s’anticipe, pour cela intégrez la facilitation d’ateliers (ou l’intelligence collective) dès conception de votre cahier des charges.',
    lien: '/ressources/articles/facilitation-cahier-charges',
    filtres: ['Article', 'Agir', 'National'],
    collections: ['Piloter la démarche d’adaptation'],
    tempsLecture: 1,
    image: TestImageTuile
  },

  {
    id: 30,
    type: "Retour d'expérience",
    titre:
      "Piloter sa démarche TACCT : Retour d'expérience dans le Bocage Bourbonnais (03)",
    description:
      'Le travail en transversalité entre services et, entre agents et élus sont des gages de réussite. Comment et pourquoi la CCBB a mis en place une « équipe cœur » afin de piloter sa démarche TACCT.',
    lien: 'https://librairie.ademe.fr/7214-piloter-sa-demarche-tacct-retour-d-experience-dans-le-bocage-bourbonnais-03.html',
    filtres: ["Retour d'expérience", "M'inspirer", 'Auvergne-Rhône-Alpes'],
    collections: ['Piloter la démarche d’adaptation'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 31,
    type: 'Article',
    slug: 'stagiaire-diagnostic-vulnerabilite-climat',
    Component: RecruterStagiaire,
    titre:
      'Recruter un stagiaire sur le diagnostic de vulnérabilité : bonne ou mauvaise idée ?',
    description:
      'Vous envisagez de confier le diagnostic de vulnérabilité à votre stagiaire ? Découvrez les erreurs à éviter, les missions possibles, et les bonnes pratiques pour un appui vraiment utile.',
    lien: '/ressources/articles/stagiaire-diagnostic-vulnerabilite-climat',
    filtres: ['Article', 'Agir', 'National'],
    collections: ['Piloter la démarche d’adaptation'],
    tempsLecture: 1,
    image: TestImageTuile
  },
  {
    id: 32,
    type: 'Article',
    slug: 'strategie-adaptation-gestion-risque-relocalisation',
    Component: RisqueALadaptation,
    titre:
      'De la gestion du risque à l’adaptation : le cas de la relocalisation de Miquelon',
    description:
      'Témoignages d’une projection sur le temps long avec l’exemple de Miquelon.',
    lien: '/ressources/articles/strategie-adaptation-gestion-risque-relocalisation',
    filtres: ['Article', "M'inspirer", 'National', 'Outremer'],
    collections: ["Bâtir sa stratégie d'adaptation"],
    tempsLecture: 1,
    image: TestImageTuile
  }

  // {
  //   id: 4,
  //   tab: 'Vous découvrez le diagnostic pour la 1ère fois',
  //   titre: 'Mettre en récit mon territoire pour engager',
  //   tag: 'Article',
  //   description:
  //     '« L’humanité est une espèce fabulatrice qui, en se racontant des histoires de plus en plus complexes, développe des capacités de coopération » - Yuval Noah Harrari ; Découvrez la mise en récit.',
  //   link: '/ressources/articles/mise-en-recit-territoire-adaptation-climat'
  // },

  // {
  //   id: 18,
  //   tab: [
  //     'Vous voulez réviser un diagnostic connu',
  //     'Vous découvrez le diagnostic pour la 1ère fois'
  //   ],
  //   titre:
  //     'Comment mobiliser élus, services et partenaires autour d’un diagnostic de vulnérabilité ?',
  //   tag: 'Article',
  //   description:
  //     'Découvrez le retour d’expérience de Jolet Van Kipshagen (CC Vallée de Villé) et les clés d’une démarche concertée et ancrée dans le territoire.',
  //   link: '/ressources/articles/mobilisation-diagnostic-vulnerabilite'
  // },
];
