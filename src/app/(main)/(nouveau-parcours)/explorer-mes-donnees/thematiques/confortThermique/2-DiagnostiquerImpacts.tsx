import HautDePageIcon from '@/assets/icons/haut_de_page_icon_white.svg';
import BDImage1 from '@/assets/images/bd_confort_thermique1.png';
import BDImage2 from '@/assets/images/bd_confort_thermique2.png';
import BDImage3 from '@/assets/images/bd_confort_thermique3.png';
import RDVImage from '@/assets/images/prendreRDV.png';
import { MicroPieChart } from '@/components/charts/MicroDataviz';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { Body, H2 } from "@/design-system/base/Textes";
import Image from "next/image";
import styles from '../../explorerDonnees.module.scss';

export const DiagnostiquerImpactsConfortThermique = () => {
  return (
    <>
      <div className={styles.retourHautDePageWrapper}>
        <div className={styles.retourHautDePageBouton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image
            src={HautDePageIcon}
            alt="Retour en haut de page"
            width={24}
            height={24}
          />
        </div>
        <Body size='sm'>
          Haut de page
        </Body>
      </div>
      {/* Introduction */}
      <section>
        <Body size='lg'>
          Vous avez découvert des premiers signaux à partir des données précédentes.
          Les données montrent où regarder, mais seul un échange avec les habitants,
          les agents ou les usagers vous dira s’ils sont réellement vulnérables.
        </Body>
      </section>
      <section className={styles.sectionType} id="section1">
        <div className={styles.diagnosticWrapper}>
          <H2 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
            Ce que le terrain peut révéler et que les données ne disent pas
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
      </section>
      <section className={styles.sectionType}>
        <div id="section2" className={styles.diagnosticWrapper}>
          <H2 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
            Des données nationales pour lancer la conversation et diagnostiquer les impacts
          </H2>
          <Body>
            Ces chiffres ne racontent pas toute l’histoire, mais ils vous aident
            à savoir avec qui aller parler, où, et sur quoi poser des questions.
            Utilisez-les comme déclencheurs de discussion avec les acteurs de
            terrain et les publics potentiellement concernés.
          </Body>
          <div className={styles.donneesNationalesWrapper}>
            <div className={styles.leftData}>
              <MicroPieChart pourcentage={28} ariaLabel="Pourcentage des décès liés à la chaleur" />
              <Body>
                "En France, seuls 28 % des décès liés à la chaleur se produisent
                pendant les canicules; ce qui ne représentent que 6 % des jours de
                l’été. Soyons vigilants aussi en dehors des périodes de canicule."
              </Body>
              <Body size="sm" style={{ color: "var(--gris-dark)" }}>
                Source : xxxx
              </Body>
            </div>
            <div className={styles.rightData}>
              <Body size='lg' weight='bold'>
                Ce que cela révèle
              </Body>
              <Body>
                Les risques existent aussi en dehors des alertes officielles.
              </Body>
              <Body size='lg' weight='bold'>
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
                "Tous exposés : les moins de 75 ans représentent 71% des consultations
                SOS médecins liées à la chaleur ( juin-septembre 2022 ) et un tiers
                des décès (2014-2022)"
              </Body>
              <Body size="sm" style={{ color: "var(--gris-dark)" }}>
                Source : xxxx
              </Body>
            </div>
            <div className={styles.rightData}>
              <Body size='lg' weight='bold'>
                Ce que cela révèle
              </Body>
              <Body>
                Les vulnérabilités ne se limitent pas aux personnes âgées.
              </Body>
              <Body size='lg' weight='bold'>
                Avec qui pourriez-vous échanger
              </Body>
              <ul>
                <li><Body>des pratiques sportives</Body></li>
                <li><Body>de la présence et des comportements touristiques</Body></li>
                <li><Body>de l’isolement géographiques ou social de personnes fragiles</Body></li>
                <li><Body>des travailleurs exposés</Body></li>
              </ul>
            </div>
          </div>
          <div className={styles.donneesNationalesWrapper} style={{ borderBottom: 'none' }}>
            <div className={styles.leftData}>
              <MicroPieChart pourcentage={55} ariaLabel="Pourcentage des Français ayant trop chaud" />
              <Body>
                "55% des Français déclarent avoir eu trop chaud pendant au moins 24 heures dans leur logement en 2023.
                La présence d’arbres peut rafraîchir l’air de 2 à 3°C, notamment dans les rues ou lorsqu’ils sont
                alignés en bordure de route"
              </Body>
              <Body size="sm" style={{ color: "var(--gris-dark)" }}>
                Source : xxxx
              </Body>
            </div>
            <div className={styles.rightData}>
              <Body size='lg' weight='bold'>
                Ce que cela révèle
              </Body>
              <Body>
                Le logement est un facteur clé d’exposition et l’absence de végétation aggrave les ilots de chaleur.
              </Body>
              <Body size='lg' weight='bold'>
                Avec qui pourriez-vous échanger
              </Body>
              <ul>
                <li><Body>du niveau d’intégration des enjeux climatiques dans les documents d’urbanisme (PLU(i), SCoT,...)</Body></li>
                <li><Body>de l’opportunité d’effectuer un diagnostic de surchauffe urbaine</Body></li>
                <li><Body>de l’adéquation des mesures déjà prises avec les pratiques et usages de la ville</Body></li>
                <li><Body>de l’état du parc urbain et de rénovation énergétique</Body></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionType}>
        <div id="section3" className={styles.prendreRDVWrapper}>
          <div className={styles.RDVText}>
            <H2 style={{ color: "var(--principales-vert)", fontSize: '1.25rem', margin: 0 }}>
              Point d'étape à J+20 : prenez RDV avec l’équipe TACCT
            </H2>
            <Body size='lg'>
              Vous avez enquêté pour diagnostiquer les impacts ? Partagez vos
              découvertes avec nous. Ce temps d’échange vous aidera à structurer
              vos enjeux avant de passer à l’étape suivante.
            </Body>
            <BoutonPrimaireClassic
              size='sm'
              text='Prendre RDV'
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
        <div id="section4" className={styles.diagnosticWrapper}>
          <H2 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
            Poursuivez votre exploration
          </H2>
          <Body>
            Vous pouvez retournez à l’ensemble des thématiques ou bien explorez les thématiques liées à celle-ci.
          </Body>

        </div>
      </section>
    </>
  );
};
