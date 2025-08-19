"use client";
import BookIcon from "@/assets/icons/book_icon_black.svg";
import ForwardArrow from "@/assets/icons/keyboard_arrow_next_icon_black.svg";
import ChaineImpact from "@/assets/images/article15.png";
import { RetourHautDePage } from "@/components/RetourHautDePage";
import ZoomOnClick from "@/components/utils/ZoomOnClick";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EndPageTrigger from "../../../hooks/EndPageTrigger";
import styles from "./article.module.scss";

const LireUnDiagnostic = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <RetourHautDePage />
      <div className={styles.textBloc}>
        <h1>Que lire en priorité dans votre diagnostic de vulnérabilité aux effets du changement climatique ?</h1>
        <p>
          Le diagnostic de vulnérabilité est un document clé pour comprendre les
          spécificités de votre territoire face aux effets du changement climatique. Bien rédigé,
          il peut servir de <b>point de départ à une stratégie d’adaptation cohérente et concertée.</b>
        </p>
        <p>
          Pourtant, dans la pratique, il convainc rarement de son utilité. De nombreux chargés de
          mission de la communauté Facili-TACCT nous ont fait part de leurs difficultés :
        </p>
        <ul>
          <li>
            Un document <b>long à produire, complexe et difficile à lire</b>
          </li>
          <li>
            Un contenu parfois <b>trop général</b> ou <b>superficiel</b>
          </li>
          <li>
            Une <b>faible capacité à mobiliser</b> les parties prenantes
          </li>
        </ul>
        <p>
          Vous vous reconnaissez ? Pour gagner du temps et repérer l’essentiel,
          voici quelques repères concrets pour relire en 10 minutes votre diagnostic de vulnérabilité, avec un œil neuf.
        </p>
        <h2>Quelles données climatiques relire en priorité ?</h2>
        <h3>Distinguer l’utile du superflu</h3>
        <p>
          <b>Le diagnostic de vulnérabilité aux effets du changement climatique</b> peut contenir une grande quantité d’indicateurs.
          Mais toutes les données ne se valent pas.
        </p>
        <p>Concentrez-vous sur celles qui éclairent directement vos enjeux locaux.</p>
        <div className={styles.grayWrapper}>
          <h4>Exemple</h4>
          <p>
            Si vous êtes une collectivité urbaine dans un climat océanique doux,
            est-ce que l’information sur la baisse attendue du nombre de jours de
            gel sur votre territoire est vraiment utile à votre réflexion sur vos enjeux d’adaptation ?
          </p>
        </div>
        <h3>Des données climatiques parfois difficiles à interpréter</h3>
        <p>
          Même des indicateurs “simples” en apparence, comme la pluviométrie, peuvent être trompeurs.
        </p>
        <p>
          Gardez à l’esprit que <b>les données climatiques sont parfois
            difficiles à interpréter</b> et ne sont pas toujours révélatrices de l’évolution d’un impact.
        </p>
        <div className={styles.grayWrapper}>
          <h4>Exemple</h4>
          <p>
            Même si les données de pluviométrie (quantité d’eau) passées et actuelles
            montrent peu d’évolution, un ressenti de “manque d’eau” sur le territoire peut être tout à fait légitime.
          </p>
          <p>
            Ce décalage s’explique souvent par une répartition des pluies qui ne
            coïncide plus avec les cycles de végétation ou les périodes de cultures.
          </p>
          <p>
            Pour objectiver ce ressenti, il est possible de s’appuyer sur des
            indices plus spécialisés, issus d’études sectorielles.
          </p>
        </div>
        <h3>Identifier les limites des indicateurs climatiques</h3>
        <p>Les <b>données “d’impact”</b> présentent souvent des <b>limites techniques</b> :</p>
        <ul>
          <li>
            elles peuvent <b>manquer d’homogénéité,</b>,
          </li>
          <li>
            Couvrir <b>des périodes différentes,</b>
          </li>
          <li>
            Ne pas être <b>à la même échelle</b> ou concerner des <b>périmètres variables.</b>
          </li>
        </ul>
        <p>
          Un même phénomène peut aussi être appréhendé de plusieurs façons. Exemple :
          la sécheresse n’a pas la même définition selon qu’on l’analyse sous l’angle météorologique, hydrologique ou agricole.
        </p>
        <h3>Des données utiles, mais insuffisantes à elles seules</h3>
        <p>
          Les données climatiques constituent généralement la partie la plus détaillée
          du diagnostic de vulnérabilité, ce qui peut expliquer l’impression de longueur
          et de complexité. Elles sont indispensables, mais ne suffisent pas à elles
          seules pour construire un diagnostic de vulnérabilité vraiment territorialisé.
        </p>
        <h2>Comment relire les données socio-économiques de votre diagnostic de vulnérabilité ?</h2>
        <p>
          <b>Les données socio-économiques</b> ne sont pas accessoires : elles jouent un <b>rôle central
            dans l’analyse de la sensibilité</b> de votre territoire face aux aléas climatiques.
        </p>
        <p>
          Intégrées au diagnostic, elles évitent une analyse trop générique, et permettent de
          faire émerger des enjeux véritablement territorialisés. Mais surtout, leur présence
          rend le diagnostic de vulnérabilité aux effets du changement climatique plus mobilisateur.
          Il peut alors devenir un vecteur de sensibilisation auprès des élus et de l’ensemble de vos parties prenantes.
        </p>
        <h3>Donner du relief aux impacts</h3>
        <p>
          Les données socio-économiques traduisent ce qui rend un territoire plus ou
          moins vulnérable : démographie du territoire, précarité énergétique, etc.
        </p>
        <div className={styles.grayWrapper}>
          <h4>Exemple</h4>
          <p>
            La modification inéluctable des forêts est un impact physique
            du changement climatique commun à presque tous les territoires forestiers.
          </p>
          <p>
            Mais ses conséquences socio-économiques varient selon le contexte local :
          </p>
          <ul>
            <li>
              une filière bois plus ou moins fragilisée,
            </li>
            <li>
              une atteinte à la fonction sociale de la forêt (paysage, attractivité, ressource touristique…),
            </li>
            <li>
              des conflits d’usage plus ou moins présents.
            </li>
          </ul>
          <p>
            Même les fonctions environnementales de la forêt (puits de carbone, biodiversité,
            rôle de protection contre les éboulements, etc.) peuvent être affectées de
            manière différenciée selon les territoires.
          </p>
        </div>
        <h3>Croiser données climatiques et socio-économiques</h3>
        <p>
          Il ne s’agit pas d’isoler chaque donnée, mais de les mettre en
          relation pour mieux comprendre les interactions à l’œuvre sur votre territoire.
        </p>
        <p>
          Cette <b>lecture croisée</b> permet de montrer comment un <b>aléa climatique</b>
          interagit avec une <b>réalité territoriale</b>. Ce croisement fait apparaître
          des impacts concrets sur les ressources, les infrastructures ou encore la population.
        </p>
        <div style={{ position: 'relative' }}>
          <div style={{ cursor: 'zoom-in', width: '100%' }} onClick={() => setShowModal(true)}>
            <ZoomOnClick
              src={ChaineImpact}
              alt="chaîne d’impacts Auvergne-Rhône-Alpes"
              sizes="100%"
            />
          </div>
        </div>
        <p>
          L’Agence Régionale de l'Énergie et de l'Environnement en Auvergne-Rhône-Alpes
          propose un {" "}
          <a
            href="https://www.auvergnerhonealpes-ee.fr/passer-a-laction/adaptation-au-changement-climatique/chaine-impact-changement-climatique-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            canevas vierge de chaînes d’impacts
          </a>
          , utile pour distinguer les impacts
          environnementaux sur les ressources, des impacts socio-économiques sur les activités.{" "}
        </p>
        <h3>Décrire les enjeux à partir de la réalité du territoire</h3>
        <p>
          Des données socio-économiques chiffrées peuvent exister, mais elles doivent souvent
          être complétées par une analyse qualitative qui nécessite une bonne connaissance du territoire.
        </p>
        <p>
          Cela suppose d’impliquer les services ou acteurs locaux concernés, capables d’apporter
          une expertise fine sur les réalités sociales et économiques locales.
          Un travail exigeant et chronophage, qui explique pourquoi ces données sont
          encore trop peu présentes dans les diagnostics de vulnérabilité.
        </p>
        <p>
          Et pourtant, leur intégration est indispensable pour ancrer les enjeux
          dans la réalité concrète de votre territoire.
        </p>
        <h2>Les enjeux de votre diagnostic sont-ils clairement priorisés ?</h2>
        <p>
          Un <b>diagnostic de vulnérabilité</b> aux effets du changement climatique ne
          peut pas se limiter à une longue liste de thématiques impactées par le
          changement climatique. Pour être réellement opérationnel, il doit <b>faire
            émerger quelques enjeux prioritaires, souvent 3 ou 4 suffisent</b>, qui
          serviront de socle à votre stratégie d’adaptation.
        </p>
        <p>
          Cette priorisation ne fige rien : elle peut évoluer avec le temps,
          en fonction des évolutions du climat (intensité ou fréquence de certains
          événements) et des données socio-économiques (capacités d’adaptation
          augmentées ou fragilités accrues).
        </p>
        <h3>Hiérarchiser sans tout écraser</h3>
        <p>
          Prioriser, ce n’est pas faire disparaître le reste.
        </p>
        <p>
          Les autres enjeux restent présents en toile de fond, mais l’identification
          de leviers d’action clairs et collectivement portés demande de poser des choix.
        </p>
        <p>
          Sans hiérarchisation, la stratégie d’adaptation risque de rester floue, ou de ne jamais démarrer.
        </p>
        <h3>Un processus de priorisation aussi important que le résultat</h3>
        <p>
          La façon dont s’est opérée la priorisation des enjeux mérite d’être interrogée.
          La notation chiffrée de certaines matrices de vulnérabilité offre parfois un
          maquillage “scientifique” facile. Mais savez-vous qui est derrière cette notation,
          et quelles bases méthodologiques ont été utilisées ?
        </p>
        <p>
          Est-ce le fruit d’un travail “en chambre”, ou d’une réflexion collective à l’échelle du territoire ?
        </p>
        <p>
          Le processus mis en place pour <b>valider les priorités de façon
            concertée est aussi important que la liste des priorités elle-même.</b>
        </p>
        <p>
          Il pose les bases de la confiance, de la mobilisation…et de l’action.
        </p>
        <p>
          Pour concluse, les trois points clés à garder en tête pour relire avec efficacité
          votre diagnostic de vulnérabilité aux effets du changement climatique :
        </p>
        <ul>
          <li style={{ listStyleType: "none" }}>
            <b>1.&nbsp;&nbsp; Identifier les données climatiques les plus utiles</b>,
            celles qui éclairent concrètement les impacts sur votre territoire.
          </li>
          <li style={{ listStyleType: "none" }}>
            <b>2.&nbsp;&nbsp; Repérer les données socio-économiques présentes ou manquantes</b>,
            pour contextualiser et rendre le diagnostic mobilisateur.
          </li>
          <li style={{ listStyleType: "none" }}>
            <b>3.&nbsp;&nbsp; Évaluer la manière dont les enjeux ont été priorisés</b> :
            un processus transparent et partagé est tout aussi important que la liste elle-même.
          </li>
        </ul>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={ForwardArrow} alt="" />
          <h2>Et après la relecture ?</h2>
        </div>
        <ul className="mx-12">
          <li>
            Compléter les données “manquantes” si vous en avez identifié,
            et mobilisez vos services et partenaires si les enjeux n’ont pas encore été clairement priorisés.
          </li>
          <li>
            Le diagnostic ne vise pas à proposer des actions clés en main : ce travail
            reste à construire ! Mais les enjeux prioritaires identifiés peuvent déjà
            faire <b>émerger des problématiques à valider politiquement</b> et des leviers
            d’action à discuter collectivement.
          </li>
          <li>
            Le diagnostic de vulnérabilité est amené à évoluer, en fonction des
            changements sur votre territoire. Définir des niveaux d’impact et les
            suivre avec des indicateurs adaptés vous permettra de situer le territoire
            dans le temps, et de faciliter la mise à jour du diagnostic.
          </li>
          <li>
            Engager (ou poursuivre) une démarche collaborative, c’est poser les bases
            de la confiance entre les acteurs du territoire. Et lorsque cette confiance
            existe, votre collectivité est bien plus en capacité d’agir à la hauteur des enjeux.
          </li>
        </ul>
      </div>
      <p style={{ margin: '1rem 0' }}>À vous de jouer !</p>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={BookIcon} alt="" />
          <h2>Ressources liées</h2>
        </div>
        <p>Pour approfondir certains points abordés dans cet article, voici deux ressources utiles :</p>
        <div className={styles.links}>
          <div className={styles.link}>
            <p>
              Renforcer la dynamique collaborative : lire notre article sur&nbsp;
              <Link
                href="/ressources/articles/mobilisation-diagnostic-vulnerabilite"
                target="_blank"
                rel="noreferrer"
              >
                la facilitation pour mobiliser les parties prenantes.
              </Link>
            </p>
          </div>
          <div className={styles.link}>
            <p>
              Pour en savoir plus sur la manière de valoriser vos données, consultez notre article sur&nbsp;
              <Link
                href="/ressources/articles/mise-en-recit-territoire-adaptation-climat"
                target="_blank"
                rel="noreferrer"
              >
                la mise en récit du territoire.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <p style={{ margin: '1rem 0' }}>
        <i>
          Cet article est le fruit de l’atelier CDM Success organisé en mai 2024 avec les
          membres de la communauté des chargés de mission qui accompagne Facili-TACCT.
          Merci aux participants pour leurs retours d’expériences qui ont nourri ce contenu.
        </i>
      </p>
      <EndPageTrigger />
    </>
  );
};

export default LireUnDiagnostic;
