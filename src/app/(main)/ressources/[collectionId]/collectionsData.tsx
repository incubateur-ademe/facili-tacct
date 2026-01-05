import Collection1Img from '@/assets/images/collection1_x2.png';
import Collection2Img from '@/assets/images/collection2_x2.png';
import Collection3Img from '@/assets/images/collection3_x2.png';
import Collection4Img from '@/assets/images/collection4_x2.png';
import Collection5Img from '@/assets/images/collection5_x2.png';
import Collection6Img from '@/assets/images/collection6_x2.png';
import Collection7Img from '@/assets/images/collection7_x2.png';
import { Body } from "@/design-system/base/Textes";
import { toutesLesRessources } from '@/lib/ressources/toutesRessources';

export const CollectionsData = [
  {
    titre: 'Démarrer le diagnostic de vulnérabilité',
    image: Collection1Img,
    slug: 'demarrer-diagnostic-vulnerabilite',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          Envie de vous lancer sans savoir par où commencer ? Découvrez formations, retours
          d’expérience et contenus pour tirer le meilleur parti de la méthode TACCT et réussir
          l’essentiel : identifier les impacts du changement climatique sur votre territoire.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes('Démarrer le diagnostic de vulnérabilité')),
    metadescription: "Envie de vous lancer sans savoir par où commencer ? Découvrez formations, retours d’expérience et contenus pour identifier les impacts du changement climatique sur votre territoire."
  },
  {
    titre: 'Évaluer les impacts du changement climatique',
    image: Collection5Img,
    slug: 'evaluer-impacts-changement-climatique',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          Face au changement climatique, tout territoire a ses points faibles. Pour les
          identifier, c’est simple : évaluez ce qui vous menace (aléas) et ce qui vous
          fragilise (sensibilité). Cette double analyse est le cœur du diagnostic de vulnérabilité.
          Pour vous guider, explorez notre collection d’articles et de retours d’expérience.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes('Évaluer les impacts du changement climatique')),
    metadescription: "Évaluez ce qui vous menace (aléas) et ce qui vous fragilise (sensibilité) : cette double analyse est le cœur du diagnostic de vulnérabilité."
  },
  {
    titre: 'Associer les parties prenantes',
    image: Collection6Img,
    slug: 'associer-parties-prenantes',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          L’adaptation au changement climatique ne se décrète pas, elle se co-construit !
          Sans l’implication d’élus, de techniciens et d’acteurs locaux, aucune stratégie
          ne tiendra face aux défis. Associez-les dès le diagnostic : un constat partagé
          aujourd’hui = des solutions solides demain. Découvrez comment mobiliser autour de vous.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes('Associer les parties prenantes')),
    metadescription: "Associez vos élus, les techniciens et les acteurs locaux dès le diagnostic : un constat partagé aujourd’hui = des solutions solides demain. Découvrez comment mobiliser autour de vous."
  },
  {
    titre: 'Piloter la démarche d’adaptation',
    image: Collection2Img,
    slug: 'piloter-demarche-adaptation',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          L’adaptation est un véritable marathon, pas un sprint ! Pour conserver le cap
          au fil des mois, entourez-vous ! Avec une équipe projet solide, vous irez plus
          loin – et plus vite. Explorez nos ressources pour un pilotage efficace et durable !
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes('Piloter la démarche d’adaptation')),
    metadescription: "Avec une équipe projet solide, vous irez plus loin – et plus vite. Explorez nos ressources pour un pilotage efficace et durable !"
  },
  {
    titre: "Adopter la bonne posture",
    image: Collection4Img,
    slug: 'adopter-bonne-posture',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          Adaptation climatique : un défi qui exige de conjuguer expertises multiples et conciliation
          d’intérêts divergents. La clé ? Adopter la “bonne” posture pour mobiliser l'intelligence
          collective et valoriser les savoirs locaux. Nos conseils pratiques sont ici !
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes("Adopter la bonne posture")),
    metadescription: "Adopter la “bonne” posture pour mobiliser l'intelligence collective et valoriser les savoirs locaux !"
  },
  {
    titre: 'Restituer le diagnostic de vulnérabilité',
    image: Collection7Img,
    slug: 'restituer-diagnostic-vulnerabilite',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          Le diagnostic de vulnérabilité est finalisé… et après ? Ne le laissez pas prendre la poussière
          sur une étagère ! Transformez-le en levier d’action avec nos meilleures pratiques : un outil
          qui fédère, alerte et mobilise tous les acteurs autour d’un constat partagé.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes('Restituer le diagnostic de vulnérabilité')),
    metadescription: "Le diagnostic de vulnérabilité est un outil qui fédère, alerte et mobilise tous les acteurs autour d’un constat partagé : il s’agit d’un véritable levier d’action !"
  },
  {
    titre: "Bâtir la stratégie d’adaptation",
    image: Collection3Img,
    slug: 'batir-strategie-adaptation',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          Vous avez identifié et hiérarchisé les enjeux de votre territoire ?
        </Body>
        <Body style={{ color: "#ffffff" }}>
          Parfait, vous avez tracé la carte… Il est temps de choisir la route ! Cette étape est
          cruciale pour co-construire un plan d’action fédérateur qui anticipe les évolutions
          climatiques et articule vos documents réglementaires autour d’un projet de territoire.
          Découvrez nos ressources pour tracer des trajectoires solides.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes("Bâtir la stratégie d’adaptation")),
    metadescription: "Cette étape est cruciale pour co-construire un plan d’action fédérateur qui anticipe les évolutions climatiques et articule vos documents réglementaires autour d’un projet de territoire."
  },
];
