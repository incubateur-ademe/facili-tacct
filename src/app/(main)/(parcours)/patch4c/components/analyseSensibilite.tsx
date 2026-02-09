"use client";

import ChatChercheur from '@/assets/images/chat_sherlock.png';
import { getLastTerritory, handleRechercheRedirection } from '@/components/searchbar/fonctions';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { Body, H3 } from "@/design-system/base/Textes";
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '../patch4c.module.scss';
import { handleRedirection } from '@/hooks/Redirections';

type Item = {
  value: string | null;
  icon: StaticImageData;
  label: string;
  definition: string;
  linkedThemes: string[];
  actions: ({
    title: string;
    link: string;
    image: StaticImageData;
  } | {
    title: string;
    link: string;
    image: null;
  }
  )[]
};

export const AnalyseSensibilite = ({
  item,
  isMap
}: {
  item: Item,
  isMap: boolean
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const router = useRouter();
  const lastTerritory = getLastTerritory();
  const aggravationLevel = item.value;

  const redirectionExplorerMesDonnees = () => {
    const url = handleRedirection({
      searchCode: code,
      searchLibelle: libelle,
      typeTerritoire: type as 'epci' | 'commune' | 'petr' | 'pnr' | 'departement' | 'ept',
      page: lastTerritory?.thematique ? 'donnees' : 'thematiques',
      thematique: lastTerritory?.thematique
    });
    router.push(url);
  };

  return (
    <div className={styles.analyseSensibiliteContainer}>
      <div className={styles.titreWrapper}>
        <div className={styles.left}>
          <H3 style={{ fontSize: 22 }}>
            Analyse de sensibilité : les thématiques à traiter impérativement
          </H3>
          <div className={styles.separator} />
          <Body style={{ marginTop: '1rem' }}>
            Voici quelques pistes de thématiques à aborder lors de l’analyse de sensibilité,
            mais celle-ci reste à effectuer en fonction de vos dynamiques territoriales, des
            actions déjà entreprises et de vos capacités d’adaptation.
          </Body>
        </div>
        <Image src={ChatChercheur} alt="illustration chat chercheur" />
      </div>

      {/* Différents conseils selon le type de territoire */}
      {
        isMap ? (
          <div className={styles.themesListeMap}>
            <div className={styles.themesListe}>
              <div className={styles.titre}>
                <div
                  className={styles.circleIndicator}
                  style={{ backgroundColor: '#FF1C64' }}
                />
                <div
                  className={styles.circleIndicator}
                  style={{
                    backgroundColor: '#FFB181',
                  }}
                />
                <Body weight="bold">
                  Aggravation très forte ou forte
                </Body>
              </div>
              <div className={styles.linkedThemes} style={{ lineHeight: "1.5rem" }}>
                <ul>
                  <li>
                    <Body>
                      Santé des populations et cadre de vie
                    </Body>
                  </li>
                  <li>
                    <Body>
                      Disponibilité et qualité des ressources en eau
                    </Body>
                  </li>
                  <li>
                    <Body>
                      Adaptation des bassins d’emploi et activités économiques
                    </Body>
                  </li>
                  <li>
                    <Body>
                      Continuité de service des réseaux (énergie, télécom et transport)
                    </Body>
                  </li>
                  <li>
                    <Body>
                      Inconfort thermique
                    </Body>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.themesListe}>
              <div className={styles.titre}>
                <div
                  className={styles.circleIndicator}
                  style={{ backgroundColor: '#FFEBB6' }}
                />
                <div
                  className={styles.circleIndicator}
                  style={{
                    backgroundColor: '#FFF',
                    border: '1px solid black'
                  }}
                />
                <Body weight="bold">
                  Aggravation modérée ou pas d'évolution
                </Body>
              </div>
              <div className={styles.linkedThemes} style={{ lineHeight: "1.5rem" }}>
                <ul>
                  <li>
                    <Body>
                      Éventuelles variations saisonnières à prendre en compte
                    </Body>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.themesListe}>
            <div className={styles.titre}>
              <div
                className={styles.circleIndicator}
                style={{ backgroundColor: aggravationLevel?.includes('fort') ? '#FF1C64' : '#FFEBB6' }}
              />
              <div
                className={styles.circleIndicator}
                style={{
                  backgroundColor: aggravationLevel?.includes('fort') ? '#FFB181' : '#FFF',
                  border: aggravationLevel?.includes('fort') ? 'none' : '1px solid black'
                }}
              />
              <Body weight="bold">
                Aggravation {
                  aggravationLevel === "Aggravation forte" || aggravationLevel === "Aggravation très forte"
                    ? "très forte ou forte"
                    : 'modérée ou pas d\'évolution'
                }
              </Body>
            </div>
            <div className={styles.linkedThemes}>
              {item.linkedThemes.map((theme, index) => (
                <ul key={index}>
                  <li>
                    <Body>
                      {theme}
                    </Body>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        )
      }

      <div style={{ alignSelf: "flex-end" }}>
        <BoutonPrimaireClassic
          text='Explorer les facteurs de sensibilité du territoire →'
          size='md'
          onClick={redirectionExplorerMesDonnees}
        />
      </div>
      <div className={styles.actionsListeWrapper}>
        <Body weight="bold" style={{ marginBottom: '0.5rem' }}>
          Pistes d’actions
        </Body>
        {item.actions.map((action, index) => (
          <div key={index} style={{ lineHeight: "2rem" }}>
            <Link href={action.link} target="_blank" className={styles.actionLink}>
              {action.title}
            </Link>
          </div>
        ))}
      </div>


    </div>
  );
}
