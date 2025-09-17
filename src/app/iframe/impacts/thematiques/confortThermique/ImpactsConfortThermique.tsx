"use client";
import RDVImage from '@/assets/images/prendreRDV.png';
import { MicroPieChart } from '@/components/charts/MicroDataviz';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { Body, H2 } from "@/design-system/base/Textes";
import Image from "next/image";
import { ThematiquesLieesNavigation } from '../../components/ThematiquesLieesNavigation';
import styles from '../../impacts.module.scss';

export const DiagnostiquerImpactsConfortThermique = () => {
  return (
    <>
      {/* Introduction */}
      <section>
        <Body>
          Prendre conscience des facteurs de sensibilité aux fortes chaleurs de
          son territoire, c’est un bon début. Mais c’est sur le terrain que vous
          comprendrez comment votre territoire vit &ndash; ou subit &ndash; ces périodes d’inconfort thermique.
        </Body>
      </section>
      {/* <section className={styles.sectionType} id="section1">
        <div className={styles.diagnosticWrapper}>
          <H2 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
            33 000 décès attribués à la chaleur entre 2014 et 2022 : c’est toujours beaucoup trop !
          </H2>
          <Body>
            Les données indiquent des zones de vigilance, mais seul le terrain peut
            confirmer si les publics sont réellement vulnérables. Certaines personnes
            "a priori sensibles" peuvent avoir des stratégies de protection efficaces,
            alors que d’autres "invisibles dans les données" vivent un fort inconfort.
            Voici quelques exemples d’écarts possibles.
          </Body>
          <div className={styles.bdWrapper}>
            <div className={styles.bdCardWrapper}>
              <Image
                src={BDImage1}
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
              <div className={styles.bdTextWrapper}>
                <Body weight='bold' style={{ marginBottom: '1.5rem' }}>
                  Public âgé, mais bien protégé
                </Body>
                <Body size="sm">
                  Monsieur Durand a 87 ans. Il vit dans une maison bien isolée. Sa famille passe
                  régulièrement la voir. Il se sent en sécurité pendant les vagues de chaleur.
                </Body>
                <Body size="sm" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  ➡️ Vulnérabilité théorique, mais résilience réelle.
                </Body>
              </div>
            </div>
            <div className={styles.bdCardWrapper}>
              <Image
                src={BDImage2}
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
              <div className={styles.bdTextWrapper}>
                <Body weight='bold' style={{ marginBottom: '1.5rem' }}>
                  Nouveau quartier mal adapté
                </Body>
                <Body size="sm">
                  Un quartier de logements neufs, construit après 2006 (donc statistiquement "hors
                  vulnérabilité thermique"), est peu végétalisé, avec de grandes surfaces vitrées.
                  De nombreux habitants se plaignent de surchauffe.
                </Body>
                <Body size="sm" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  ➡️ Invisible dans les données, mais fort inconfort dans la réalité.
                </Body>
              </div>
            </div>
            <div className={styles.bdCardWrapper}>
              <Image
                src={BDImage3}
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
              <div className={styles.bdTextWrapper}>
                <Body weight='bold' style={{ marginBottom: '1.5rem' }}>
                  Quartier avec entraide organisée
                </Body>
                <Body size="sm">
                  Dans un quartier dense, des habitants ont mis en place une veille canicule
                  entre voisins. Des points d’eau et de repos sont installés. Cela réduit
                  fortement les impacts ressentis.
                </Body>
                <Body size="sm" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  ➡️ Conditions théoriquement à risque, mais atténuées par l'organisation locale.
                </Body>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className={styles.sectionType}>
        <div id="section1" className={styles.diagnosticWrapper}>
          <H2 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
            33 000 décès attribués à la chaleur entre 2014 et 2022 : c’est toujours beaucoup trop !
          </H2>
          <Body>
            Voici quelques chiffres au niveau national pour vous aider à poser les bonnes questions,
            mais c’est le terrain qui vous donnera les vraies réponses.
          </Body>
          <div className={styles.donneesNationalesWrapper}>
            <div className={styles.leftData}>
              <MicroPieChart pourcentage={28} ariaLabel="Pourcentage des décès liés à la chaleur" />
              <Body>
                En France, {" "}
                <a
                  href="https://www.santepubliquefrance.fr/presse/2023/fortes-chaleurs-et-canicule-un-impact-sur-la-mortalite-important-necessitant-le-renforcement-de-la-prevention-et-de-l-adaptation-au-changement-cl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  seuls <b>28 %</b> des décès liés à la chaleur
                </a>
                {" "}se produisent pendant les canicules ; ce qui ne représente que <b>6 % des
                  jours d’été</b>. Soyons vigilants aussi en dehors des périodes de canicule.
              </Body>
            </div>
            <div className={styles.rightData}>
              <Body weight='bold'>
                Ce que cela révèle
              </Body>
              <Body>
                Les risques existent aussi en dehors des alertes officielles.
              </Body>
              <Body weight='bold'>
                Avec qui pourriez-vous échanger
              </Body>
              <ul>
                <li><Body>de l’organisation du territoire en dehors de ces épisodes</Body></li>
                <li><Body>de la culture du risque concernant la chaleur</Body></li>
              </ul>
            </div>
          </div>
          <div className={styles.donneesNationalesWrapper}>
            <div className={styles.leftData}>
              <MicroPieChart pourcentage={71} ariaLabel="Pourcentage des consultations SOS médecinspour les plus de 75 ans" />
              <Body>
                Tous exposés : {" "}
                <a
                  href="https://www.santepubliquefrance.fr/presse/2022/bilan-canicule-et-sante-un-ete-marque-par-des-phenomenes-climatiques-multiples-et-un-impact-sanitaire-important"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>71 %</b> des consultations SOS médecins
                </a>
                {" "}liées à la chaleur concernent des personnes de moins de 75 ans (juin-septembre 2022).
                <br></br>Seuls {" "}
                <a
                  href="https://www.santepubliquefrance.fr/content/download/543105/3948412?version=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>12 %</b> des Français
                </a>
                {" "}se considèrent fragiles ou très fragiles pendant une canicule.
              </Body>
            </div>
            <div className={styles.rightData}>
              <Body weight='bold'>
                Ce que cela révèle
              </Body>
              <Body>
                La sensibilité à la chaleur n'est pas qu'une affaire d'âge.
              </Body>
              <Body weight='bold'>
                Avec qui pourriez-vous échanger
              </Body>
              <ul>
                <li><Body>des pratiques sportives</Body></li>
                <li><Body>de la présence et des comportements touristiques</Body></li>
                <li><Body>de l’isolement géographique ou social de personnes fragiles</Body></li>
                <li><Body>des travailleurs exposés</Body></li>
              </ul>
            </div>
          </div>
          <div className={styles.donneesNationalesWrapper} style={{ borderBottom: 'none', paddingBottom: 0 }}>
            <div className={styles.leftData}>
              <MicroPieChart pourcentage={55} ariaLabel="Pourcentage des Français ayant trop chaud" />
              <Body>
                <a
                  href="https://www.fondationpourlelogement.fr/wp-content/uploads/import/sites/default/files/2024-08/BROCHURE-Precarite-energetique-ete_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>55 %</b> des Français
                </a>
                {" "}déclarent avoir eu trop chaud pendant au moins 24 heures dans leur logement en 2023.
                <br></br>
                <a
                  href="https://plusfraichemaville.fr/fiche-solution/planter-un-arbre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  La présence d’arbres peut rafraîchir l’air de <b>2 à 3 °C</b>
                </a>
                , notamment dans les rues ou lorsqu’ils sont
                alignés en bordure de route.
              </Body>
            </div>
            <div className={styles.rightData}>
              <Body weight='bold'>
                Ce que cela révèle
              </Body>
              <Body>
                Le logement est un facteur clé d’exposition et l’absence de végétation aggrave les ilots de chaleur.
              </Body>
              <Body weight='bold'>
                Avec qui pourriez-vous échanger
              </Body>
              <ul>
                <li><Body>du niveau d’intégration des enjeux climatiques dans les documents d’urbanisme (PLU(i), SCoT, etc.)</Body></li>
                <li><Body>de l’opportunité d’effectuer un diagnostic de surchauffe urbaine</Body></li>
                <li><Body>de l’adéquation des mesures déjà prises avec les pratiques et usages de la ville</Body></li>
                <li><Body>de l’état du parc urbain et de rénovation énergétique</Body></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionType}>
        <div id="section2" className={styles.prendreRDVWrapper}>
          <div className={styles.RDVText}>
            <H2 style={{ color: "var(--principales-vert)", fontSize: '1.25rem', margin: 0 }}>
              Point d'étape à J+20 : prenez rendez-vous avec l’équipe TACCT
            </H2>
            <Body>
              Investigation terminée ? Prenons le temps de décrypter ensemble vos
              observations de terrain pour bien préparer votre prochaine phase d'action.
            </Body>
            <BoutonPrimaireClassic
              size='sm'
              text='Prendre rendez-vous'
            />
          </div>
          <Image
            src={RDVImage}
            alt=""
            width={300}
            height={200}
            style={{ width: 'auto', height: '100%', alignSelf: 'center' }}
          />
        </div>
      </section>
      <section className={styles.sectionType}>
        <div id="section3" className={styles.diagnosticWrapper}>
          <H2 style={{ color: "var(--principales-vert)", fontSize: '1.25rem', margin: 0 }}>
            Poursuivez votre exploration
          </H2>
          <Body>
            Vous pouvez retourner à l’ensemble des thématiques ou bien explorer les thématiques liées à celle-ci.
          </Body>
          <ThematiquesLieesNavigation />
        </div>
      </section>
    </>
  );
};
