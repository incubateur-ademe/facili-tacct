import niveauxMarinsIcon from '@/assets/icons/niveau_marin_icon_black.svg';
import GraphNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { MapErosionCotiere } from '@/components/maps/mapErosionCotiere';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { ErosionCotiereMapper } from '@/lib/mapper/erosionCotiere';
import { CarteCommunes, ErosionCotiere, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { erosionCotiereTooltipText } from '@/lib/tooltipTexts';
import { exportDatavizAsPNG } from '@/lib/utils/export/exportPng';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { LegendErosionCotiere } from '../../maps/legends/legendErosionCotiere';
import { ErosionCotiereText } from '../inconfortThermique/staticTexts';
import styles from './gestionRisques.module.scss';

const ErosionCotes = (props: {
  erosionCotiere: ErosionCotiere[];
  carteCommunes: CarteCommunes[];
}) => {
  const { erosionCotiere, carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const exportPNGRef = useRef(null);
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const erosionCotiereMap = erosionCotiere.map(ErosionCotiereMapper);
  const communesMap = carteCommunes.map(CommunesIndicateursMapper);

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const niveauxMarins = patch4 ? AlgoPatch4(patch4, 'niveaux_marins') : undefined;

  return (
    <>
      {
        !isLoadingPatch4 ?
          <div className={styles.container}>
            <div className="w-5/12">
              <div className={styles.explicationWrapper}>
                <p>
                  L’érosion est un phénomène qui touche inégalement les côtes, en
                  fonction de leur profil géologique. Elle s’observe sur des temps
                  longs mais peut connaître des épisodes brutaux selon les
                  endroits.
                </p>
                <div className={styles.patch4Wrapper}>
                  {niveauxMarins === 'Intensité très forte' ||
                    niveauxMarins === 'Intensité forte' ? (
                    <TagItem
                      icon={niveauxMarinsIcon}
                      indice="Niveaux marins"
                      tag={niveauxMarins}
                    />
                  ) : null}
                </div>
                <CustomTooltip title={erosionCotiereTooltipText} texte="D'où vient ce chiffre ?" />
              </div>
              <ErosionCotiereText />
            </div>
            <div className="w-7/12">
              <div className={styles.graphWrapper}>
                <div
                  className={styles.catnatGraphTitleWrapper}
                  style={{ padding: '1rem' }}
                >
                  <h2>Mouvement du trait de côte</h2>
                </div>
                {
                  erosionCotiere ?
                    <div ref={exportPNGRef}>
                      <MapErosionCotiere
                        erosionCotiere={erosionCotiereMap}
                        carteCommunes={communesMap}
                      />
                      <LegendErosionCotiere />
                    </div>
                    : <DataNotFoundForGraph image={GraphNotFound} />
                }
                <p style={{ padding: '1em', margin: '0' }}>Source : CEREMA</p>
              </div>
              <button onClick={() => exportDatavizAsPNG(exportPNGRef, 'erosion_cotiere.png')}>Exporter PNG</button>
            </div>
          </div>
          : <Loader />
      }
    </>
  );
};

export default ErosionCotes;
