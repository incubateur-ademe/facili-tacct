import BookIcon from '@/assets/icons/book_icon_black.svg';
import ForwardArrow from '@/assets/icons/keyboard_arrow_next_icon_black.svg';
import BulbIcon from '@/assets/icons/lightbulb_icon_black.svg';
import ArticleImage from '@/assets/images/article7.png';
import ArticleImage2 from '@/assets/images/article8.png';
import ArticleImage3 from '@/assets/images/article9.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './article.module.scss';

export const articleMetadata = {
  title: 'Sensibiliser à l’adaptation : les AdACC',
  description: 'Présentation des Ateliers de l’Adaptation au Changement Climatique (AdACC) pour sensibiliser les acteurs.'
};

const Adacc = () => {
  return (
    <div>
      <h1>Les Ateliers de l’Adaptation au Changement Climatique (AdACC)</h1>
      <p className="flex justify-center">
        Qu’est-ce que c’est ? à quoi cela sert ?
      </p>
      <p>
        Cet article a été rédigé avec le témoignage de Sarah Clamens,
        Responsable du service Climat, Energie et Ressources de Saintes Grandes
        Rives, l’Agglo.
      </p>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={BulbIcon} alt="" />
          <h2>Les AdACC</h2>
        </div>
        <div>
          <ul>
            <li>Les AdACC : un format interactif pour un petit groupe ;</li>
            <li>
              Objectif : déclencher la prise de conscience sur la nécessité de
              s’adapter ;
            </li>
            <li>
              Les AdACC considèrent comme acquis la réalité d’un changement
              climatique lié aux activités humaines. Si nécessaire, ils peuvent
              donc être précédés d’ateliers comme La Fresque du Climat, dont la
              pédagogie a servi d’inspiration aux auteures ;
            </li>
            <li>
              Les AdACC contiennent des éléments scientifiques basés sur le
              <b>rapport du groupe de travail 2 du GIEC</b> (Climate Change
              2022:  Impacts, Adaptation and Vulnerability - publié le 28
              février 2022).
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.textBloc}>
        <h3>Concrètement, pour organiser un AdACC, il faut :</h3>
        <div>
          <ul>
            <li>
              Un animateur préalablement formé, qui dispose des cartes de
              l’atelier.
            </li>
            <li>
              <b>3h à 3h30</b> de temps
            </li>
            <li>
              Entre <b>6 et 12</b> participants
            </li>
          </ul>
        </div>
        <Image
          src={ArticleImage}
          alt="Schéma expliquant les 2 démarches d'un atelier : découverte et expérimentation"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3>Pourquoi Saintes Grandes Rives, l’Agglo a utilisé cet outil ?</h3>
        <p>
          Le PCAET réglementaire a été validé en février 2024. Le volet
          adaptation au changement climatique, assez succinct sur les
          vulnérabilités du territoire, pointe principalement sur la ressource
          en eau et la biodiversité. Le territoire est notamment concerné par
          les inondations et un risque de baisse de 40% des ressources en eau
          d’ici à 2050.
        </p>
        <p>
          Les élus du territoire ont déjà réalisé une Fresque du Climat qui leur
          a permis de renforcer leur compréhension du volet atténuation du
          PCAET. Désormais, et en amont de la rédaction du PLUi, Sarah Clamens
          souhaite les sensibiliser à l’adaptation au changement climatique. En
          créant un pont entre urbanisme et adaptation au changement climatique,
          ce nouveau document réglementaire en discussion est l’occasion de
          réfléchir et de planifier une partie de la stratégie d’adaptation du
          territoire.
        </p>
        <Image
          src={ArticleImage2}
          alt="Schéma expliquant les AdACC dans la démarche globale d'adaptation"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto' }}
        />
        <h3>Comment s’est passé l’organisation de l’atelier ?</h3>
        <div>
          <p>
            Sarah a été accompagnée par un animateur de l’atelier avec 2 visio
            préparatoires sur le contenu d’environ 1h30 chacune :
          </p>
          <ul>
            <li>
              La 1ère sur l’explication du déroulé et la clarification des
              objectifs de chaque phase ;
            </li>
            <li>
              La 2nde sur l’identification des enjeux prioritaires du
              territoire, en s’appuyant sur le diagnostic de vulnérabilité, les
              priorités politiques et la connaissance des chargés de mission de
              leur territoire.
            </li>
          </ul>
        </div>
        <p>
          Lors de ces 2 ateliers, plusieurs enjeux ont été identifié : qualité
          de vie des habitants en lien avec le bâti, qualité de vie en lien avec
          le cadre de vie, réflexion sur l’impact des crues et l’accès à l’eau
          (quantitativement et qualitativement). Les enjeux ci-dessus ont été
          utilisé comme cas d’étude la 2nde séquence de l’atelier :
          l’expérimentation de la méthode.
        </p>
        <div>
          <p>
            Les aspects organisationnels sont de la responsabilité de la
            collectivité : réservation de la salle, invitation des élus et
            relances. Pour maximiser leur présence, Sarah a axé sa communication
            sur le fait que cet atelier rentrait dans le cadre du travail sur le
            PLUi.
          </p>
          <ul>
            <li>
              Ce travail de mobilisation a permis de réunir 35 élus
              (prioritaires à l’inscription) et 8 techniciens.
            </li>
            <li>
              Pour fonctionner avec les agendas très remplis des élus, l’atelier
              a été réalisé de 17h à 20h.
            </li>
          </ul>
        </div>
        <h2>Les apprentissages de cette rencontre :</h2>
        <div>
          <ul>
            <li>
              Le format d’atelier en intelligence collective permet de faire
              passer des messages clés de manière ludique.
            </li>
            <li>
              l’atelier propose d’évaluer les solutions choisies par les
              participants sous le prisme d’une analyse multi-critères (cf.
              image). C’est une bonne pratique qui est également proposée dans
              la démarche TACCT, lors de l’élaboration des trajectoires. Dans
              tous les cas, il convient de se mettre d’accord collectivement sur
              des critères d’évaluation.<br></br>
              <br></br>
              <Image
                src={ArticleImage3}
                alt="Schéma montrant des cartes de l'atelier"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: '100%', height: 'auto' }}
              />
            </li>
            <li>
              Il est utile de ne pas cantonner l’adaptation au changement
              climatique au PCAET, le PLUi est particulièrement concerné du fait
              des liens étroits entre impacts du changement climatique et
              problématiques d’aménagement du territoire. Pour les élus, c’est
              un sujet plus concret que l’adaptation seule. Dans l’idéal,
              quasiment tous les documents de planification devraient prendre en
              compte le climat qui change : c’est un “réflexe adaptation” qui
              reste à distiller partout.
            </li>
            <li>
              Les élus de l’EPCI sont repartis avec la méthodologie, il reste
              toujours à embarquer les élus locaux. Une clé de réflexion de
              Sarah Clamens est de réaliser cet atelier à une échelle communale
              en travaillant sur des enjeux plus précis et encore plus localisés
              : cela permettra de mieux faire valoir les travaux réalisés par
              l’EPCI.
            </li>
          </ul>
        </div>
        <h3>
          En conclusion : la sensibilisation, un préalable qui peut vous aider
          sur le temps long.
        </h3>
        <p>
          Il y a un véritable enjeu à faire comprendre l’importance de
          l’adaptation au changement climatique à vos élus et services
          techniques, sans un minimum de compréhension de pourquoi il est
          nécessaire d’agir, il vous sera difficile de mobiliser et donc de
          mettre en oeuvre une stratégie à la hauteur des ambitions.
        </p>
        <p>
          Un atelier de sensibilisation quel qu’il soit est d’autant plus
          pertinent qu’il est suivi par des prochaines étapes. Lors de son
          organisation, pour éviter un énième atelier qui n’abouti à rien de
          concret, il est important d’être stratégique en sachant quelles seront
          les actions consécutives.
        </p>
      </div>
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
                  Le site des{' '}
                  <Link
                    href="https://ateliers-adaptationclimat.fr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ateliers de l’Adaptation au Changement Climatique
                  </Link>
                   ;
                </li>
                <li>
                  La synthèse du{' '}
                  <Link
                    href="https://www.ccomptes.fr/sites/default/files/2024-03/20240312-syntheses-RPA-2024.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    rapport de la cour des comptes sur l'ACC
                  </Link>
                   ;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={ForwardArrow} alt="" />
          <h2>Pour aller plus loin</h2>
        </div>
        <div>
          <p>
            À la suite de cette session vous avez sollicité l’organisation d’un
            atelier de l’Adaptation au Changement Climatique :
          </p>
          <ul>
            <li>
              Pour expérimenter l’atelier en présentiel, voici le{' '}
              <Link
                href="https://docs.google.com/spreadsheets/d/1g-wmsSPECo405Y9oHP81grv_UioLAIjJu5lWZXEEZvw/edit?gid=0#gid=0&fvid=73240412"
                target="_blank"
                rel="noreferrer"
              >
                lien
              </Link>{' '}
              vers le document qui recense les ateliers dans toute la france.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Adacc;
