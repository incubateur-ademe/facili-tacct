"use client";
import RDVImage from '@/assets/images/prendreRDV.png';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { Body, H2 } from "@/design-system/base/Textes";
import { sourcesEtudes } from '@/lib/sources';
import Image from "next/image";
import { ThematiquesLieesNavigation } from '../components/ThematiquesLieesNavigation';
import styles from '../impacts.module.scss';

export const DiagnostiquerImpactsAgriculture = () => {
  return (
    <>
      {/* Introduction */}
      <section>
        <Body>
          Les défis de l’agriculture sont doubles : réduire ses émissions de gaz à effet de serre
          et s'adapter aux impacts du changement climatique : l’intensification des sécheresses
          menaçant la disponibilité en eau, la dégradation des sols, etc. Face à ces enjeux,
          l'agriculture biologique, même si elle n’est pas la solution parfaite, apporte des
          réponses concrètes, aux côtés de l'agroforesterie et des cultures à bas intrants. Le
          bio renforce la résistance des exploitations agricoles. Comment ? Par la non-utilisation
          des produits chimiques de synthèse et des OGM. Grâce au recyclage des matières
          organiques. Par la rotation des cultures. À travers la lutte biologique. Le compostage
          et la couverture permanente des sols enrichissent la vie microbienne. Les résultats
          parlent d'eux-mêmes : jusqu'à 35 % de carbone supplémentaire dans les sols. Une meilleure
          disponibilité en eau pour les plantes, avec des gains de 4 % à 45 %. Un territoire
          comptant plus d'exploitations bio résiste mieux aux aléas climatiques. Enfin, à
          surface égale, les cultures biologiques végétales émettent 50 % de gaz à effet
          de serre en moins que les cultures conventionnelles.
          <br></br><br></br>
          - - - <br></br>Le Plan national d’adaptation au changement climatique (PNACC 3)
          prévoit d’accompagner les agriculteurs pour assurer la résilience de leur exploitation (mesure 37).
        </Body>
      </section>
      <section className={styles.sectionType}>
        <div id="section1" className={styles.diagnosticWrapper}>
          <H2 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
            XXXXXXXXXXX
          </H2>
          <Body>
            XXXXXXXXXXXXXXX
          </Body>
          <div className={styles.donneesNationalesWrapper}>
            <div className={styles.leftData}>
              {/* <MicroPieChart pourcentage={28} ariaLabel="Pourcentage des décès liés à la chaleur" /> */}
              <Body>
                XXXXXX
              </Body>
            </div>
            <div className={styles.rightData}>
              <Body weight='bold'>
                Ce que cela révèle
              </Body>
              <Body>
                XXXX
              </Body>
              <Body weight='bold' style={{ marginTop: '0.5rem', marginBottom: '-0.5rem' }}>
                Avec qui pourriez-vous échanger
              </Body>
              <ul>
                <li><Body>XXXXX</Body></li>
                <li><Body>XXXXX</Body></li>
              </ul>
            </div>
          </div>
          <div className={styles.donneesNationalesWrapper}>
            <div className={styles.leftData}>
              {/* <MicroPieChart pourcentage={71} ariaLabel="Pourcentage des consultations SOS médecinspour les plus de 75 ans" /> */}
              <Body>
                XXXXX
              </Body>
            </div>
            <div className={styles.rightData}>
              <Body weight='bold'>
                Ce que cela révèle
              </Body>
              <Body>
                XXXXX
              </Body>
              <Body weight='bold' style={{ marginTop: '0.5rem', marginBottom: '-0.5rem' }}>
                Avec qui pourriez-vous échanger
              </Body>
              <ul>
                <li><Body>XXXXX</Body></li>
                <li><Body>XXXXX</Body></li>
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
              onClick={() => window.open('https://rdv.incubateur.ademe.fr/facili-tacct/echange-j-20', '_blank', 'noopener,noreferrer')}
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
            Sources des données
          </H2>
          {sourcesEtudes.agriculture.map(source => (
            <Body key={source.numero} size="sm" style={{ marginBottom: '0.5rem' }}>
              [{source.numero}]{" "}
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--graphiques-bleu-1" }}
              >
                {source.texte}
              </a>
            </Body>
          ))}
        </div>
      </section>
      <section className={styles.sectionType}>
        <div id="section4" className={styles.diagnosticWrapper}>
          <H2 style={{ color: "var(--principales-vert)", fontSize: '1.25rem', margin: 0 }}>
            Poursuivez votre exploration
          </H2>
          <Body>
            Vous pouvez retourner à l’ensemble des thématiques ou bien explorer les thématiques liées à celle-ci.
          </Body>
          <ThematiquesLieesNavigation thematiqueSelectionnee='Agriculture' />
        </div>
      </section>
    </>
  );
};
