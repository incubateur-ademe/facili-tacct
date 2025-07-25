"use client";
import BookIcon from '@/assets/icons/book_icon_black.svg';
import BulbIcon from '@/assets/icons/lightbulb_icon_black.svg';
import TRACC from "@/assets/images/tracc.png";
import TRACCMesures1 from "@/assets/images/tracc_51_mesures1.png";
import TRACCMesures2 from "@/assets/images/tracc_51_mesures2.png";
import Image from "next/image";
import Link from 'next/link';
import EndPageTrigger from "../../../hooks/EndPageTrigger";
import styles from "./article.module.scss";

const PnaccTracc = () => {
  return (
    <>
      <div className={styles.textBloc} style={{ paddingTop: "0rem" }}>
        <h1>PNACC, TRACC, Comment suis-je concerné ?</h1>
        <div className={styles.blueWrapper}>
          <p style={{ margin: "0" }}>
            Cet atelier a été réalisé le 28 novembre 2024, en compagnie de Jean-Michel Soubeyroux
            (Directeur Adjoint Scientifique de la Climatologie et des Services Climatiques à Météo France),
            Marine Tranchant (Cheffe de projet territoires et climat au CEREMA) et Aude Bodiguel
            (Coordinatrice ACC et intrapreneuse Facili-TACCT à l’ADEME).
          </p>
        </div>
        <h2>Qu’est-ce que la TRACC ?</h2>
        <p>
          La trajectoire de réchauffement de référence pour l’adaptation au changement climatique
          (TRACC) sert de fil conducteur au plan national d’adaptation au changement climatique
          (PNACC). Cette trajectoire dote la France d’une référence commune d’adaptation pour
          l’ensemble des politiques climatiques, des filières économiques, des documents de
          planification ainsi que des référentiels techniques, normes et réglementation climato-sensibles.
        </p>
        <p>
          La TRACC s’appuie sur la notion de niveau de réchauffement désormais utilisée dans les
          derniers rapports du Groupe d’experts intergouvernemental sur l’évolution du climat
          (GIEC). Elle décorrèle les impacts du changement climatique (pilotés par le niveau de
          réchauffement planétaire moyen) du rythme et de la façon dont ce niveau de réchauffement
          moyen est atteint (scénarios d’atténuation).
        </p>
        <p>
          La TRACC présente 3 niveaux de réchauffement (par rapport à la période pré-industrielle) :
        </p>
        <Image
          src={TRACC}
          alt="Chronologie de la TRACC"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto', padding: "1rem 0 3rem 0" }}
        />
        <h2>Quelles sont les 2 mesures clés du PNACC 3 pour les territoires ?</h2>
        <h3>Mesure 23 - Intégrer progressivement la TRACC dans tous les documents de planification publique.</h3>
        <p>
          La mesure 23 du PNACC s’est fixé un objectif de 100 % de documents de planification renouvelés
          et intégrant la TRACC d’ici 2030 (PCAET, SCoT, PLUi, chartes des PNR, SDAGE, SRADDET, SRCAE,
          SAR, SRDAM, etc.).
        </p>
        <ul>
          <li>
            La plupart des diagnostics de vulnérabilités actuels s’arrêtent en 2050 ; il faudra désormais
            considérer l’échéance 2100 (certains effets du changement climatique ne s’appréhendent que sur le temps long).
          </li>
          <li>
            La TRACC est constituée de projections issues du scénario RCP8.5, le seul permettant de traiter
            des niveaux de réchauffement planétaire à +3°C. Si votre diagnostic ne prend pas en compte un
            scénario de fortes émissions, <b>un complément sera nécessaire.</b>
          </li>
        </ul>
        <p>
          ➡️ Un « patch 4°C » est disponible sur Facili-TACCT pour guider les territoires en cours de
          révision de leur PCAET.
        </p>
        <h3>Mesure 25 - la « Mission Adaptation », guichet unique d’ingénierie de l’adaptation à destination des collectivités locales.</h3>
        <p>
          La Mission Adaptation organise une collaboration renforcée entre acteurs institutionnels (ADEME, Agences de l’eau, Banque des Territoires, CEREMA, Météo-France, Office français de la biodiversité...) pour proposer une offre commune d’ingénierie en matière d’adaptation au changement climatique (identification des besoins, montée en compétences, élaboration d’une stratégie d’adaptation au changement climatique ou aide à la mise en œuvre de solutions d’adaptation).
        </p>
        <ul>
          <li>
            100 territoires ont été identifiés pour bénéficier de l’expérimentation de ce dispositif qui sera ensuite déployé plus largement.
          </li>
          <li>
            Une plateforme en ligne et des référents régionaux accompagneront ces collectivités.
          </li>
        </ul>
        <p>
          D’autres mesures, géographiques ou sectorielles, vous concernent également en fonction des spécificités de votre territoire.
        </p>
        <div className={styles.grayWrapper}>
          <div className='flex items-start flex-row gap-4'>
            <Image src={BulbIcon} alt="" />
            <p>
              Il est à noter que le PNACC 3 n’inclut pas de nouvelles ressources humaines ou financières pour les opérateurs publics.
              Bien que prévues à la baisse, les ressources du Fonds Vert devraient rester orientées vers le financement de projets.
            </p>
          </div>
        </div>
        <h3>La liste des 51 mesures :</h3>
        <Image
          src={TRACCMesures1}
          alt="Mesures 1 à 27 de la TRACC"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto', padding: "1rem 0" }}
        />
        <Image
          src={TRACCMesures2}
          alt="Mesures 28 à 51 de la TRACC"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto', padding: "1rem 0" }}
        />
        <p>Source : Dossier de presse - présentation du plan national d’adaptation au changement climatique.</p>

        <h2>Météo France, CEREMA, ADEME, quels services pour moi ?</h2>
        <h3>Les offres de Météo France</h3>
        <ul>
          <li>
            <i>DRIAS, Climadiag Commune</i> et <i>Climadiag Agriculture</i> sont actuellement TRACC-compatibles.
          </li>
        </ul>

        <h3>Les offres du CEREMA</h3>
        <p>
          Le CEREMA propose des accompagnements :
        </p>
        <ul>
          <li>
            via le Programme « Territoires adaptés au climat de demain » qui accompagne aussi bien la réalisation
            de stratégie territoriale d’adaptation au changement climatique que des focus thématiques (bâtiment,
            infrastructure, ressource en eau, aménagement et risques naturels) ou de gré à gré hors programme
            selon les besoins spécifiques des collectivités
          </li>
          <li>
            via des opérations ciblées (réduction de la surchauffe urbaine, désimperméabilisation des sols,
            gestion intégrée des eaux pluviales, développement de la nature en ville / renaturation, gestion intégrée du littoral, etc.)
          </li>
        </ul>
        <p>
          Le Cerema s’est ouvert aux collectivités territoriales. Celles-ci peuvent dorénavant adhérer à l’établissement
          et mobiliser plus facilement son expertise et son potentiel d’innovation. Cette adhésion est ouverte en
          continu, les groupements de collectivités pouvant adhérer au Cerema sont ceux visés à l’article L. 5111-1 du CGCT,
          à savoir <i>"les établissements publics de coopération intercommunale et les syndicats mixtes, mentionnés aux
            articles L. 5711-1 et L. 5721-8, les pôles métropolitains, les pôles d'équilibre territoriaux et ruraux,
            les agences départementales, les institutions ou organismes interdépartementaux et les ententes interrégionales".</i>
        </p>
        <h3>Les offres de l’ADEME</h3>
        <p>
          L’ADEME propose des outils et méthodes sur l’adaptation :
        </p>
        <ul>
          <li>
            <i>TACCT,</i> la méthode de référence pour permettre l’adaptation au changement climatique des territoires.
          </li>
          <li>
            <i>Facili-TACCT,</i> pour soutenir les collectivités territoriales dans leur démarche d’adaptation
            au changement climatique en fournissant des données de vulnérabilités et un accès à une communauté
            de pratique favorisant l’échange de bonnes pratiques et le partage de ressources pertinentes.
          </li>
        </ul>
        <h2>Les conseils de nos intervenants</h2>
        <ol style={{ margin: "0" }}>
          <li>
            En tant qu’ancien membre de la mission régionale de l’autorité environnementale appelée à émettre un
            avis sur les PCAET, Jean-Michel Soubeyroux rappelle que l’objet du diagnostic de vulnérabilité
            demandé dans ce cadre N’EST PAS de produire une étude climatique au niveau local. La focalisation
            sur les projections climatiques se fait souvent au détriment de l’analyse des impacts et de la
            vulnérabilité du territoire. Seule une évaluation équilibrée des données d’exposition et de
            sensibilité vous permettra d’identifier les bons enjeux de votre territoire.
            <br /><br />
            <em>
              Pour en savoir plus, vous pouvez (re)lire notre article sur le diagnostic de vulnérabilité, {" "}
              <a href="/ressources/articles/analyser-diagnostic-vulnerabilite" target="_blank" rel="noopener noreferrer">
                10 minutes pour analyser les 80 pages de votre diagnostic de vulnérabilité
              </a>
            </em>
          </li>
          <li>
            Pour le CEREMA, l’adaptation au changement climatique doit sortir de la stricte compétence
            du chargé de mission « climat » pour devenir l’affaire de toutes et tous et être abordée en
            transversalité par l’ensemble des services. Seul ce « réflexe adaptation » permettra à la
            collectivité de s’assurer que les projets prévus soient compatibles avec les impacts à venir
            du changement climatique sur le territoire.
          </li>
          <li>
            Enfin, pour l’ADEME, il est important que le sujet ne reste pas du ressort du seul chargé
            de mission, ni même de la collectivité. La mobilisation des autres acteurs du territoire est essentielle :
            <ul>
              <li>afin de compléter les expertises techniques nécessaires sur des compétences que le chargé de mission ou la collectivité n’ont pas ;</li>
              <li>afin d’assurer la bonne déclinaison opérationnelle de la stratégie et du plan d’action.</li>
            </ul>
          </li>
        </ol>
        <h2>En conclusion</h2>
        <p>
          La TRACC vous facilite la vie avec une trajectoire de référence. Anticipez la TRACC en la prenant
          en compte dès maintenant dans vos documents de planification. Soyez acteurs de ce défi !
          <br></br>Facili-TACCT et son équipe restent à vos côtés pour vous aider.
        </p>
        <div className={styles.grayWrapper}>
          <div className={styles.h2title}>
            <Image src={BookIcon} alt="" />
            <h2>Ressources liées</h2>
          </div>
          <div className={styles.links}>
            <div className={styles.link}>
              <div>
                <ul>
                  <li>
                    Le {' '}
                    <Link
                      href="https://www.ecologie.gouv.fr/rendez-vous/plan-national-dadaptation-changement-climatique-ouverture-consultation-publique"
                      target="_blank"
                      rel="noreferrer"
                    >
                      lien d’accès
                    </Link>
                    {" "}à la consultation du PNACC
                  </li>
                  <li>
                    Le {' '}
                    <Link
                      href="https://www.ccomptes.fr/sites/default/files/2024-03/20240312-syntheses-RPA-2024.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      lien
                    </Link>
                    {" "}pour en savoir plus sur la TRACC
                  </li>
                  <li>
                    Le lien vers la {' '}
                    <Link
                      href="https://mission-adaptation.fr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      mission adaptation
                    </Link>
                  </li>
                  <li>
                    La liste vers les {' '}
                    <Link
                      href="https://www.ecologie.gouv.fr/sites/default/files/documents/Mission_Adaptation_100%20collectivit%C3%A9s.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      100 territoires
                    </Link>
                    {" "}bénéficiant la Mission adaptation
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

export default PnaccTracc;
