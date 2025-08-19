"use client";
import BookIcon from '@/assets/icons/book_icon_black.svg';
import BulbIcon from '@/assets/icons/lightbulb_icon_black.svg';
import Systemie from "@/assets/images/approche_systemique.png";
import JardinAnglais from "@/assets/images/jardin_anglais.png";
import JardinFrancais from "@/assets/images/jardin_francais.png";
import LogiqueSystemie from "@/assets/images/logique_cartesienne.png";
import MaterialisationSystemie from "@/assets/images/systemie.png";
import { RetourHautDePage } from '@/components/RetourHautDePage';
import ZoomOnClick from '@/components/utils/ZoomOnClick';
import Image from "next/image";
import Link from 'next/link';
import EndPageTrigger from "../../../hooks/EndPageTrigger";
import styles from "./article.module.scss";

const BriserSilosApprocheSystemique = () => {
  return (
    <>
      <RetourHautDePage />
      <div className={styles.textBloc} style={{ paddingTop: "0rem" }}>
        <h1>Brisez les silos : introduction à l’approche systémique</h1>
        <div className={styles.blueWrapper}>
          <p style={{ margin: "0" }}>
            Cet atelier s’est tenu le 25 février 2025, avec l’intervention d’Olivier Erard,
            ancien directeur du syndicat mixte de la station de ski de Métabief.
          </p>
        </div>
        <h2>L’approche systémique : introduction au concept</h2>
        <div className={styles.grayWrapper} style={{ margin: "1rem 0 2rem" }} >
          <div className='flex items-start flex-row gap-4'>
            <Image src={BulbIcon} alt="" />
            <p style={{ margin: "0" }}>
              L’<b>approche systémique</b> fait référence à une méthode d’analyse, une manière de traiter un système
              complexe avec un point de vue global, sans se focaliser sur tous les détails. Elle vise à mieux
              comprendre la complexité sans trop simplifier la réalité.
              <br /><br />On peut résumer l’approche systémique, par la citation d’Edgar Morin : c’est une
              approche « qui sépare sans disjoindre et relie sans confondre ».
            </p>
          </div>
        </div>
        <p>
          Pour présenter la différence entre ces 2 approches, prenons l’exemple de 2
          jardins : le jardin à la française et le jardin à l’anglaise.
        </p>
        <div className='flex flex-row gap-4'>
          <div style={{ width: "50%" }}>
            <Image
              src={JardinAnglais}
              alt="Jardin à l'anglaise"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: 'auto', padding: "1rem 0" }}
            />
            <b>L’approche cartésienne</b>
            <p>
              Ici, on comprend que ce jardin incarne le raisonnement analytique, caractérisé par la
              séparation et la linéarité. On peut y voir une approche par silo : on découpe un problème
              en petites parties, puis, on les analyse individuellement.
            </p>
            <p>
              Cette approche est efficace pour décrire et comprendre le fonctionnement de systèmes simples,
              globalement inanimés, dans des environnements stables.
            </p>
          </div>
          <div style={{ width: "50%" }}>
            <Image
              src={JardinFrancais}
              alt="Jardin à la française"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: 'auto', padding: "1rem 0" }}
            />
            <b>L’approche systémique</b>
            <p>
              Elle incarne le raisonnement global et est caractérisée par la complexité et la non-linéarité qui
              permettent de comprendre un tout par ses interactions globales.
            </p>
            <p>
              Ce jardin est l'allégorie d'une méthode plus efficace pour décrire et comprendre le comportement
              des systèmes complexes, vivants, évoluant dans des environnements instables.
            </p>
          </div>
        </div>
        <Image
          src={LogiqueSystemie}
          alt=""
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto', padding: "3rem 0" }}
        />
        <p>
          Plus largement, l’idée n’est pas d’opposer ces 2 approches. Il est essentiel de jouer avec
          la complémentarité : réussir à cumuler une analyse factuelle, tout en liant les sujets
          entre eux pour déterminer leurs interactions. Cette double approche est très pertinente
          lorsqu’on aborde les sujets et incertitudes liés à l’adaptation au changement climatique.
        </p>
        <h2>Approche systémique : quelle mise en œuvre ?</h2>
        <p>
          Les propos rapportés dans cette partie sont issus des expériences terrains et des recherches menées par Olivier Erard.
        </p>
        <p>
          Un premier élément soulevé par Olivier Erard a été de préciser que l’approche systémique n’était
          pas un objectif en soi. L’ancien directeur de la station s’y est retrouvé par sérendipité, sa mission
          initiale était de travailler sur un projet autour de la neige de culture. Progressivement, son objectif
          est devenu celui de raconter la fin du ski à Métabief.
        </p>
        <p>
          Bien que les données scientifiques aient été là, le message de l’après-ski restait difficile à entendre.
          C’est à ce moment que l’approche systémique a pris de l’importance : pendant 1 an, il s’est concentré
          sur la compréhension du problème, il a multiplié les modèles et croisé les domaines de compétences.
          Lors du partage de ce constat, il avait le sentiment d’avoir fait du « bricolage » avec les données,
          les questions soulevées ont élargi la problématique initiale grâce au croisement des regards et des
          données, froides (les données scientifiques), mais aussi chaudes (issues du terrain, des ressentis,
          etc.). Pour autant, le constat incluant les interactions dans le système validait la fin programmée
          du ski à Métabief et donc, le besoin de sortir des réponses simplistes.
        </p>
        <h3>Qu’est-ce que cette logique a changé ?</h3>
        <p>
          Grâce à cette nouvelle logique, Olivier Erard a pu embarquer progressivement les parties prenantes du
          territoire sur une problématique plus large que la station : celle de la vision du territoire.
          Ce changement d’échelle a mené à des réflexions autour de la notion de renoncement.
        </p>
        <p>
          <u>Voici les principaux changements</u> :
        </p>
        <ol>
          <li>
            <b>Diagnostic complet</b> : En combinant les "données froides" (scientifiques) et les "données chaudes" (terrain), on obtient une image plus complète et nuancée de la réalité.
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <b>Acceptation de l'incertitude</b> : Cette définition du système montre sa complexité et permet de sortir de la vision traditionnelle : un problème = une solution ; Cela permet d’éviter la mise en œuvre de solutions simplistes, généralement elles aboutissent à un risque de maladaptation.
            <br />
            <div style={{ position: 'relative' }}>
              <div style={{ cursor: 'zoom-in', width: '100%', padding: "2rem 0 0 0" }} >
                <ZoomOnClick
                  src={MaterialisationSystemie}
                  alt="Exemple de matérialisation de la systémie"
                  sizes="100%"
                />
              </div>
            </div>
            <em>Exemple de matérialisation de la systémie réalisée par Olivier Erard.</em>
          </li>
          <li>
            <b>Mobilisation des acteurs</b> : La majorité des élus étaient dans le déni, voire même opposé au constat, car ils avaient la volonté de maintenir le système en l’état. Une situation normale puisqu’il  s’agit de leur rôle positionnel : assurer la stabilité et la continuité du système. Olivier Erard n’a alors pas cherché à tous les convaincre, il a focalisé son attention sur les premiers soutiens pour faire bouger les choses par étape. Avec des premières actions et des messages se diffusant, la création d’une ingénierie dédiée aux solutions est devenue clé.
          </li>
        </ol>
        <h3>Comment favoriser la réussite d’une démarche systémique ?</h3>
        <p>
          La démarche systémique impose l’humilité et la reconnaissance de la complexité du système, le processus est vivant et adaptatif.
        </p>
        <p>
          Voici quelques apprentissages pour réussir la mise en œuvre d’une bonne démarche :
        </p>
        <ol>
          <li>
            <b>Soyez stratégique !</b> En passant des messages à des moments ou dans des contextes particuliers. Par exemple, Olivier Erard a alterné des passages d’information en huis clos et d’autres en public. Il a su doser les informations partagées et conseille de se greffer à des projets ou des structures existantes.
          </li>
          <li>
            <b>Partage et collaboration</b> : Privilégiez un diagnostic partagé, même imparfait. D’ailleurs, une compréhension complète est impossible. Ce mode de travail vous permettra de favoriser l'engagement et de développer une compréhension collective progressive.
          </li>
          <li>
            <b>Mobilisation ciblée</b> : Il est impossible d'être exhaustif ou d'impliquer tout le monde dans le processus. Concentrez-vous sur la mobilisation des « bonnes » personnes : celles capables de vous permettre d’avancer et de remonter par « capillarité ».
          </li>
        </ol>
        <h3>En synthèse, voilà les grandes étapes d’une approche systémique :</h3>
        <div style={{ position: 'relative' }}>
          <div style={{ cursor: 'zoom-in', width: '100%', padding: "2rem 0 0 0" }} >
            <ZoomOnClick
              src={Systemie}
              alt="3 étapes de la systémie"
              sizes="100%"
            />
          </div>
        </div>
        <h2>Comment lier approche systémique et obligations réglementaire ?</h2>
        <p>
          Les démarches de planification peuvent être des occasions de privilégier une vision systémique.
          Bien sûr, ces exercices réglementaires tendent à figer la méthode et ce malgré les séquences
          participatives, bien souvent très contrôlées.
        </p>
        <p>
          L’enjeu pour réussir à lier une approche systémique dans un cadre réglementaire est de s’assurer
          de <b>respecter le cadre minimal</b>, celui-ci vous évitera de vous mettre en porte-à-faux.
        </p>
        <p>
          Parallèlement, introduisez dans votre approche, si possible à budget constant, une
          véritable <b>mécanique de la systémique</b> (ne se réduisant pas simplement à l’étape de
          modélisation), mais incluant co-construction, partage de la vision systémique, jusqu’à
          la mise en mouvement "systémique" des parties prenantes.
        </p>
        <p>
          Evidemment, il faudra aussi parvenir à convaincre les "tenants de la règle", pour cela
          précisez bien :
        </p>
        <ul>
          <li>le <b>respect de la réglementation</b>,</li>
          <li>le <b>rôle clé des décideurs</b> : ils sont mobilisés dans le processus et seront sécurisés avec un apport de visibilité autour la démarche.</li>
          <li>
            la <b>dynamique d’émergence</b> : elle permet de faire apparaitre des actions rapides
            (malgré le constat de complexité), cela permet de motiver les acteurs. Leur contribution est
            suivie d'effets susceptibles de renforcer la légitimité du décideur (il pourra valoriser
            des premières actions rapidement).
          </li>
        </ul>
        <p>
          La phase de cadrage est essentielle : il ne faut pas simplement faire du copié/collé de
          cahier des charges. À savoir, chaque situation sera spécifique en fonction de l'historique,
          de l'environnement organisationnel, des ressources disponibles, des enjeux territoriaux, des
          opportunités existantes, etc.
        </p>
        <h2>En conclusion</h2>
        <p>
          L’approche systémique est idéale pour élargir la compréhension des dynamiques de votre territoire.
          Un point essentiel à l'identification des bonnes problématiques et donc, la bonne mise en
          œuvre de votre stratégie d’adaptation au changement climatique.
          <br />
          Un atout incontestable pour poser les bonnes problématiques auxquelles votre stratégie
          d’adaptation au changement climatique doit répondre. Toutefois, cette logique est encore
          méconnue, peu de retours d’expériences sont disponibles et ceci malgré la multitude
          d’outils se revendiquant de la systémie.
        </p>
        <p>
          Si vous optez pour une démarche systémique, liez-la à un projet existant, tout en donnant
          autant de visibilité sur les étapes et apprentissages vécus. Parallèlement, n’oubliez pas
          de vous appuyer sur des données analytiques.
        </p>
        <p>
          En définitive, le succès de votre approche résidera dans votre capacité à mobiliser les
          bonnes personnes dans la durée. Cela vous permettra d’obtenir des résultats progressifs
          qui engageront à leur tour d’autres acteurs.
        </p>
        <div className={styles.grayWrapper} style={{ margin: "3rem 0 0 0" }}>
          <div className={styles.h2title}>
            <Image src={BookIcon} alt="" />
            <h2>Ressources liées</h2>
          </div>
          <div className={styles.links}>
            <div className={styles.link}>
              <div>
                <ul>
                  <li>
                    Pour en savoir plus sur l’exemple de {' '}
                    <Link
                      href="https://www.dixit.net/olivier-erard-metabief/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Métabief
                    </Link>
                  </li>
                  <li>
                    Découvrez la formation en e-learning (change12) proposée par l’ADEME Académie :{' '}
                    <Link
                      href="https://formations.ademe.fr/formations_societe-&-politiques-publiques_les-fondamentaux-du-paradigme-systemique-:-pour-une-france-soutenable,-resiliente-et-durablement-prospere_s5342.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Les fondamentaux du paradigme systémique
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.grayWrapper}>
          <div className={styles.h2title}>
            <Image src={BookIcon} alt="" />
            <h2>Des recommandations de lecture sur le sujet</h2>
          </div>
          <div className={styles.links}>
            <div className={styles.link}>
              <div>
                <ul>
                  <li>
                    <i>Pour une pensée systémique</i>, de Donella Meadows
                  </li>
                  <li>
                    <i>L'acteur et le système</i>, de Michel Crozier et Erhard Friedberg
                  </li>
                  <li>
                    <i>L’Art de la guerre</i>, de Sun Tzu
                  </li>
                  <li>
                    <Link
                      href="https://le-passeur.blog/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i>Le Passeur</i>
                    </Link>
                    , écrit par Olivier Erard
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EndPageTrigger />
    </>
  );
};

export default BriserSilosApprocheSystemique;
