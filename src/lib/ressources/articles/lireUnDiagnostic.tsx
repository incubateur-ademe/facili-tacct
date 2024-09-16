import BookIcon from "@/assets/icons/book_icon_black.svg";
import ForwardArrow from "@/assets/icons/keyboard_arrow_next_icon_black.svg";
import LightbulbIcon from "@/assets/icons/lightbulb_icon_black.svg";
import LinkIcon from "@/assets/icons/link_icon_blue.svg";
import AtelierImg from "@/assets/images/article1.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./article.module.scss";

const LireUnDiagnostic = () => {

  return (
    <div>
      <h1>Lire un diagnostic en 10 min</h1>
      <div className={styles.introduction}>
        <div>
          <p>
            Le diagnostic de vulnérabilité est un document clé pour comprendre le territoire et ses spécificités au regard du changement climatique. 
            Son appropriation est un point de départ essentiel à la mise en œuvre d’une stratégie concertée d’adaptation. 
            Pourtant, il parvient rarement à convaincre de son intérêt.
          </p>
          <p>Les difficultés que vous nous avez remontées :</p> 
          <ul>
            <li>
              Ce document est complexe et long à produire, tout en étant difficile à lire ;
            </li>
            <li>
              Le document parait souvent léger, voire superficiel ;
            </li>
            <li>
              Il ne parvient pas à mobiliser ou embarquer les parties prenantes à un niveau à la hauteur des enjeux.
            </li>
          </ul>
        </div>
        <div className={styles.blueWrapper}>
          <div className={styles.content}>
            <Image src={LightbulbIcon as StaticImageData} alt="" />
            <p>
              Comment objectiver vos ressentis par rapport aux contenus de ce document ? Voici quelques clefs 
              pour (re)lire rapidement (10 minutes) votre diagnostic avec un œil neuf. Bonne lecture !
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image 
            src={AtelierImg} 
            alt="" 
            width={0}
            height={0}
            sizes="100%"
            style={{ width: '100%', height: 'auto' }} 
          />
        </div>
      </div>
      <div className={styles.textBloc}>
        <h2>Les données : lesquelles ? pourquoi ?</h2>
        <h3>Les données climatiques passées, présentes et les projections futures</h3>
        <p>De nombreux indicateurs existent, sachez reconnaître celles qui sont utiles :</p>
        <p>
          <b><u>Exemple : </u></b>je suis une collectivité <b>urbaine</b> en climat océanique doux, l’information sur la baisse attendue du nombre de 
          jours de gel sur mon territoire est-elle vraiment utile à la réflexion sur mes enjeux d’adaptation ?
        </p>
        <p>
          Gardez à l’esprit que les données climatiques sont parfois <b>difficiles à interpréter</b> et ne sont pas toujours révélatrices de l’évolution d’un impact.
        </p>
        <p>
          <b><u>Exemple : </u></b>Même si les données passées et présentes de pluviométrie (quantité d’eau) n’évoluent pas beaucoup, 
          le ressenti d’un ‘manque d’eau’ sur le territoire peut être tout à fait légitime en raison d’une répartition des pluies 
          décalées par rapport aux cycles de végétation ou aux périodes de cultures. Pour objectiver ce ressenti, il est possible 
          de faire appel à des indices plus spécialisés, relevant d’études sectorielles, qu’il n’est pas forcément pertinent 
          de faire figurer dans le diagnostic territorial, plus global.
        </p>
        <p>
          Notez qu’avec ces données “d’impact”, il y a plus souvent des problèmes d’homogénéité, de différences de temporalité, d’échelle ou de périmètre.
        </p>
        <p>
          Enfin, un même phénomène peut être appréhendé de différentes façons : la sécheresse se définit de 
          façon différente, selon que l’on regarde les conditions météorologiques, hydrologiques ou agricoles.
        </p>
        <p>
          Ces données climatiques constituent souvent la partie la plus détaillée du diagnostic, d’où l’impression de longueur et de complexité du document. 
          Focalisant une grande partie de l’attention, elles sont nécessaires mais pourtant non suffisantes pour réaliser un diagnostic de vulnérabilité <b>territorialisé.</b> 
        </p>
        <h3>Les données socio-économiques</h3>
        <p>
          C’est parce que les données socioéconomiques reflètent véritablement les réalités de votre territoire qu’elles permettent que le 
          diagnostic ne soit pas perçu comme “standardisé” et qu’il puisse servir de vecteur de sensibilisation.
        </p>
        <p>
          <b><u>Exemple : </u></b>La modification inéluctable des forêts est un impact physique du changement climatique commun 
          à quasiment tous les territoires forestiers. L’impact socioéconomique quand à lui est propre à votre territoire : fragilisation 
          plus ou moins importante de la filière bois pour les uns, ou de sa fonction sociale (paysage, attractivité, ressource touristique…) 
          pour les autres ; conflits d’usage préexistants ou non ; la dégradation des fonctions environnementales de la forêt 
          (puis de carbone, biodiversité forestière, protection contre les éboulements…) peut également être évaluée de façon différenciée selon les territoires.
        </p>
        <p>
          Le canevas de chaines d’impacts proposé par AURA-EE peut vous aider à distinguer impacts environnementaux sur les ressources, des impacts socioéconomiques sur les activités, accessible ici ;
        </p>
        <p>
          Pour ces impacts socioéconomiques, des données quantitatives chiffrées peuvent exister mais ils sont parfois à qualifier de façon qualitative, 
          ce qui nécessite une expertise territoriale assez fine, exigeant le recours aux services ou aux acteurs locaux pertinents ; 
          cela explique qu’ils soient souvent peu présents dans les diagnostics. C’est pourtant leur présence qui permettra de qualifier les enjeux de votre territoire.
        </p>
        <h2>Vos enjeux sont-ils priorisés ? Comment ?</h2>
        <p>
          La stratégie d’action, qui suit logiquement la réalisation du diagnostic, sera difficile si celui ci fournit une liste ‘à la Prévert’ 
          de thématiques impactées par le changement climatique. Pour être pleinement opérationnel, le diagnostic de vulnérabilité doit déboucher 
          sur des <b>enjeux priorisés.</b> 3 ou 4 enjeux prioritaires constituent déjà une base solide pour établir une stratégie. Cela ne signifie pas 
          que les autres seront oubliés, ou que cette liste est définitivement fixée, bien au contraire. Cette dernière devra être modifier en 
          fonction des évolutions du climat (intensité ou fréquence de certains événements) ou socio-économiques (capacités d’adaptation augmentées ou fragilités accrues).
        </p>
        <p>
          La façon dont s’est effectué la priorisation est une vraie question pour l’appropriation à venir du diagnostic. 
          La notation chiffrée de certaines matrices de vulnérabilité offre parfois un maquillage “scientifique” facile mais savez-vous qui et quelles bases méthodologiques 
          ont été utilisées ? est-ce un travail “en chambre” ? ou le fruit d’une réflexion collective à l’échelle de votre territoire ? 
          Le processus mis en place pour valider les priorités de façon concertée est aussi important que la liste des priorités elle-même.
        </p>
      </div>
      <div className={styles.blueWrapper}>
        <div className={styles.h2title}>
          <Image src={LightbulbIcon as StaticImageData} alt="" />
          <h2>En résumé</h2>
        </div>
        <p className="mx-10 my-0">Prêtez attention :</p>
        <ul className="mx-12">
          <li>
            aux données climatiques utiles (en lien avec des impacts) ;
          </li>
          <li>
            aux données socio-économiques présentes (ou non) ;
          </li>
          <li>
            au nombre d’enjeux et à la façon dont ils ont été priorisés.
          </li>
        </ul>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={ForwardArrow as StaticImageData} alt="" />
          <h2>Et ensuite ?</h2>
        </div>
        <ul className="mx-12">
          <li>
            Compléter les données “manquantes” si vous en avez identifié. Réunissez les services et partenaires si les enjeux ne sont pas priorisés.
          </li>
          <li>
            Le travail de diagnostic ne fournit pas des listes d’actions à mener : ce travail reste à faire ! Heureusement les enjeux prioritaires vous permettent d’identifier rapidement des leviers d’actions qui pourront faire l’objet de discussion.
          </li>
          <li>
            Le diagnostic de vulnérabilité va devoir évoluer dans le temps en fonction de ce qui se passe sur votre territoire. Définir des niveaux d’impact (à évaluer par des indicateurs à suivre) vous permettra de situer la collectivité par rapport à des conséquences que vous avez définies ; cela facilitera sa mise à jour.
          </li>
          <li>
            Enfin entamer (ou poursuivre) une démarche collaborative c’est réussir à créer de la confiance entre les acteurs du territoire. Lorsqu’elle est là, votre collectivité sera d’autant plus capable d’agir à la hauteur des enjeux.
          </li>
        </ul>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={BookIcon as StaticImageData} alt="" />
          <h2>Ressources liées</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <Link href="/">Atelier sensibilité du territoire</Link>
            <Image src={LinkIcon as StaticImageData} alt="" />
          </div>
          <div className={styles.link}>
            <Link href="/">Découvrez la méthode TACCT</Link>
            <Image src={LinkIcon as StaticImageData} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LireUnDiagnostic;
