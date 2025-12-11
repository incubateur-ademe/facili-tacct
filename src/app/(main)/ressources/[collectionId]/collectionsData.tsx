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
          Vous vous apprêtez à lancer votre diagnostic de vulnérabilité et vous interrogez sur
          la meilleure manière de démarrer ?
        </Body>
        <Body style={{ color: "#ffffff" }}>
          Cette collection de ressources a été conçue pour vous accompagner. Vous y trouverez des formations,
          des retours d'expérience et des contenus pour tirer le meilleur de la méthode TACCT,
          afin de vous assurer du plus important : l'identification des impacts climatiques sur votre territoire.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes('Démarrer le diagnostic de vulnérabilité')),
  },
  {
    titre: 'Évaluer les impacts du changement climatique',
    image: Collection2Img,
    slug: 'evaluer-impacts-changement-climatique',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          Vous avez réalisé le diagnostic de vulnérabilité de votre territoire et vous souhaitez
          maintenant évaluer les impacts du changement climatique ?
        </Body>
        <Body style={{ color: "#ffffff" }}>
          Cette collection de ressources a été conçue pour vous accompagner dans cette étape cruciale.
          Vous y trouverez des outils, des guides pratiques et des études de cas pour vous aider à
          comprendre et à évaluer les impacts climatiques spécifiques à votre territoire.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes('Évaluer les impacts du changement climatique')),
  },
  {
    titre: 'Mobiliser les acteurs du territoire',
    image: Collection3Img,
    slug: 'mobiliser-acteurs-territoire',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          La réussite de votre démarche d’adaptation au changement climatique dépend largement
          de la mobilisation des acteurs locaux.
        </Body>
        <Body style={{ color: "#ffffff" }}>
          Cette collection de ressources vous fournira des stratégies efficaces, des outils de communication
          et des exemples concrets pour engager et collaborer avec les parties prenantes de votre territoire.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes('Mobiliser les acteurs du territoire')),
  },
  {
    titre: 'Piloter la démarche d’adaptation',
    image: Collection4Img,
    slug: 'piloter-demarche-adaptation',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          Piloter efficacement votre démarche d’adaptation au changement climatique est essentiel
          pour atteindre vos objectifs.
        </Body>
        <Body style={{ color: "#ffffff" }}>
          Cette collection de ressources vous aidera à structurer votre projet, à suivre les progrès
          et à ajuster vos actions en fonction des résultats obtenus.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes('Piloter la démarche d’adaptation')),
  },
  {
    titre: "Bâtir sa stratégie d'adaptation",
    image: Collection5Img,
    slug: 'batir-strategie-adaptation',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          Élaborer une stratégie d’adaptation solide est une étape clé pour faire face aux défis
          posés par le changement climatique.
        </Body>
        <Body style={{ color: "#ffffff" }}>
          Cette collection de ressources vous guidera dans la définition de vos objectifs,
          la sélection des mesures adaptées et la planification de leur mise en œuvre.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes("Bâtir sa stratégie d'adaptation")),
  },
  {
    titre: "Ajuster sa posture d'animation",
    image: Collection6Img,
    slug: 'ajuster-posture-animation',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          L’animation de votre démarche d’adaptation nécessite une posture adaptée pour
          favoriser l’engagement et la collaboration.
        </Body>
        <Body style={{ color: "#ffffff" }}>
          Cette collection de ressources vous fournira des conseils pratiques, des techniques
          d’animation et des exemples pour ajuster votre posture et maximiser l’impact de vos actions.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes("Ajuster sa posture d'animation")),
  },
  {
    titre: 'Partager le diagnostic de vulnérabilité',
    image: Collection7Img,
    slug: 'partager-diagnostic-vulnerabilite',
    texte: (
      <>
        <Body style={{ marginTop: "1rem", color: "#ffffff" }}>
          Partager les résultats de votre diagnostic de vulnérabilité est crucial pour sensibiliser
          et mobiliser les acteurs concernés.
        </Body>
        <Body style={{ color: "#ffffff" }}>
          Cette collection de ressources vous aidera à communiquer efficacement vos findings,
          à élaborer des supports adaptés et à engager un dialogue constructif avec votre communauté.
        </Body>
      </>
    ),
    articles: toutesLesRessources.filter(ressource => ressource.collections.includes('Partager le diagnostic de vulnérabilité')),
  }
];
