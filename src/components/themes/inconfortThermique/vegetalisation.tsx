'use client';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import GraphNotFound from '@/assets/images/no_data_on_territory.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { CLCMap } from '@/components/maps/CLC';
import { vegetalisationLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { VegetalisationDto } from '@/lib/dto';
import { vegetalisationMapper } from '@/lib/mapper/inconfortThermique';
import { CLC, InconfortThermique, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { Round } from '@/lib/utils/reusableFunctions/round';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './themes.module.scss';

const GraphImage = GraphNotFound as HTMLImageElement;

const sumProperty = (
  items: VegetalisationDto[],
  property:
    | 'clc_1_artificialise'
    | 'clc_2_agricole'
    | 'clc_3_foret_semiNaturel'
    | 'clc_4_humide'
    | 'clc_5_eau'
    | 'superf_choro'
) => {
  return items.reduce(function (a, b) {
    return a + b[property];
  }, 0);
};

const Vegetalisation = (props: {
  clc: CLC[];
  inconfortThermique: InconfortThermique[];
}) => {
  const { inconfortThermique, clc } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo');
  const codepci = searchParams.get('codepci')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const vegetalisationMapped = inconfortThermique.map(vegetalisationMapper);
  const vegetalisationCollectivite = codgeo
    ? vegetalisationMapped.filter((e) => e.code_geographique === codgeo)
    : vegetalisationMapped.filter((e) => e.epci === codepci);

  const foretSum = sumProperty(
    vegetalisationCollectivite,
    'clc_3_foret_semiNaturel'
  );
  const foretPercent =
    (100 * sumProperty(vegetalisationCollectivite, 'clc_3_foret_semiNaturel')) /
    (100 * sumProperty(vegetalisationCollectivite, 'superf_choro'));

  useEffect(() => {
    void (async () => {
      const temp = await GetPatch4(codgeo ?? codepci);
      setPatch4(temp);
      setIsLoadingPatch4(false);
    })();
  }, [codgeo, codepci]);

  const secheresse = patch4 ? AlgoPatch4(patch4, 'secheresse_sols') : undefined;

  return (
    <>
      {vegetalisationCollectivite && !isLoadingPatch4 ? (
        <div className={styles.container}>
          {vegetalisationCollectivite.length ? (
            <>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
                  {foretPercent == Infinity ? (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      Sur le territoire, la forêt et les espaces semi-naturels
                      recouvrent <b>{Round(foretSum, 1)}</b> hectares.
                    </p>
                  ) : codgeo ? (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      Dans la commune de{' '}
                      {vegetalisationCollectivite[0]?.libelle_geographique},{' '}
                      <b>{Round(foretPercent, 1)} %</b> du territoire est de la
                      forêt ou des espaces semi-naturels. Cela correspond à{' '}
                      <b>{Round(foretSum, 1)}</b> hectares.
                    </p>
                  ) : (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      Dans l'EPCI {vegetalisationCollectivite[0]?.libelle_epci},{' '}
                      <b>{Round(foretPercent, 1)} %</b> du territoire est de la
                      forêt ou des espaces semi-naturels. Cela correspond à{' '}
                      <b>{Round(foretSum, 1)}</b> hectares.
                    </p>
                  )}
                  <div className={styles.patch4Wrapper}>
                    {secheresse === 'Intensité très forte' ||
                      secheresse === 'Intensité forte' ? (
                      <TagItem
                        icon={secheresseIcon}
                        indice="Sécheresse des sols"
                        tag={secheresse}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="px-4">
                  <p>
                    La présence d’arbres permet d’apporter de l’ombre et
                    rafraichit l’air par évapotranspiration (lorsque plusieurs
                    arbres sont à proximité). Leur efficacité dans le
                    rafraîchissement en milieu urbain dépend de leur nombre, de
                    la densité de leur feuillage, des essences, de la qualité du
                    sol et de la disponibilité en eau.<br></br> <br></br>
                    Plus 2 à 3°C sont les effets maximaux d'arbres isolés sur la
                    température d’air dans les rues ou lorsqu'ils sont alignés
                    en bordure de route. (source :{' '}
                    <a href="https://plusfraichemaville.fr/" target="_blank">
                      Plus fraiche ma ville
                    </a>
                    )
                  </p>
                </div>
              </div>
              <div className="w-3/5">
                {clc && clc.length > 0 ? (
                  <div className={styles.graphWrapper}>
                    <p style={{ padding: '1em', margin: '0' }}>
                      <b>Cartographie des différents types de sols</b>
                    </p>
                    <CLCMap clc={clc} />
                    <div
                      className={styles.legend}
                      style={{ width: 'auto', justifyContent: 'center' }}
                    >
                      <LegendCompColor legends={vegetalisationLegend} />
                    </div>
                    <p style={{ padding: '1em', margin: '0' }}>
                      Source : CORINE Land Cover
                    </p>
                  </div>
                ) : clc ? (
                  <div className={styles.nodataWrapper}>
                    <Image
                      src={GraphImage}
                      alt=""
                      width={0}
                      height={0}
                      style={{ width: '90%', height: 'auto' }}
                    />
                  </div>
                ) : (
                  <Loader />
                )}
              </div>
            </>
          ) : (
            <GraphDataNotFound code={codgeo ? codgeo : codepci} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Vegetalisation;
