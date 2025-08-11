'use client';

import DiagnoticImage from '@/assets/images/diagnostiquer_impacts.png';
import { ClientOnly } from '@/components/utils/ClientOnly';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { Body, H1 } from '@/design-system/base/Textes';
import Image from 'next/image';
import styles from '../explorerDonnees.module.scss';
import ExplorerConfortThermique from '../thematiques/confortThermique/1-ConfortThermique';
import { DiagnostiquerImpactsConfortThermique } from '../thematiques/confortThermique/2-DiagnostiquerImpacts';
import { useExplorer } from './ExplorerContext';

const FiltreEtapeWrapper = ({
  data,
  h1,
  thematique
}: {
  data: any;
  h1: string;
  thematique: string;
}) => {
  const { showEtape } = useExplorer();

  return (
    <div className='min-h-screen'>
      <div className={styles.explorerMesDonneesContainer}>
        {showEtape === 1 && (
          <ClientOnly>
            <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
              {h1}
            </H1>
            {
              thematique === "Confort thermique" ? (
                <ExplorerConfortThermique
                  carteCommunes={data.carteCommunes}
                  inconfortThermique={data.inconfortThermique}
                  clc={data.clc}
                />
              ) : ""
            }
            <div className={styles.redirectionEtape2Wrapper} >
              <Image
                src={DiagnoticImage}
                alt=""
                style={{ width: '100%', height: 'auto', maxWidth: "180px" }}
              />
              <div className={styles.textBloc} >
                <Body style={{ fontSize: "20px", color: "var(--gris-dark)", fontWeight: 700, maxWidth: "700px" }}>
                  Ces pistes d'investigation en main, partez découvrir sur le
                  terrain comment votre territoire vit concrètement les enjeux de confort thermique.
                </Body>
                <BoutonPrimaireClassic size='lg' text='Diagnostiquer les impacts' />
              </div>
            </div>
          </ClientOnly>
        )}
        {
          showEtape === 2 && (
            <ClientOnly>
              <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
                Les données vous montrent des pistes, le terrain lui, vous montre la réalité !
              </H1>
              {
                thematique === "Confort thermique" ? (
                  <DiagnostiquerImpactsConfortThermique />
                ) : ""
              }
            </ClientOnly>
          )
        }
        <div style={{ marginTop: "0rem" }} />
      </div>
    </div>
  );
};

export default FiltreEtapeWrapper;
