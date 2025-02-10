'use client';
import { styled } from '@mui/material/styles';
import Tooltip, {
  tooltipClasses,
  type TooltipProps
} from '@mui/material/Tooltip';
import { useSearchParams } from 'next/navigation';

import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { CLCMap } from '@/components/maps/CLC';
import { vegetalisationMapper } from '@/lib/mapper/inconfortThermique';
import { CLC, InconfortThermique } from '@/lib/postgres/models';

import GraphNotFound from '@/assets/images/data_not_found.svg';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { VegetalisationDto } from '@/lib/dto';
import { Round } from '@/lib/utils/reusableFunctions/round';
import Image from 'next/image';
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

const legends = [
  {
    value: 'Territoires artificialisés',
    color: '#ffff99'
  },
  {
    value: 'Territoires agricoles',
    color: '#fdc086'
  },
  {
    value: 'Zones végétalisées et milieux semi-naturels',
    color: '#7fc97f'
  },
  {
    value: 'Zones humides',
    color: '#beaed4'
  },
  {
    value: 'Surfaces en eau',
    color: '#386cb0'
  }
];

const Vegetalisation = (props: {
  clc: CLC[];
  inconfortThermique: InconfortThermique[];
}) => {
  const { inconfortThermique, clc } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo');
  const codepci = searchParams.get('codepci')!;
  const vegetalisationMapped = inconfortThermique.map(vegetalisationMapper);
  const vegetalisationCollectivite = codgeo
    ? vegetalisationMapped.filter((e) => e.code_commune === codgeo)
    : vegetalisationMapped.filter((e) => e.epci === codepci);

  const vegetalisationDptmt = vegetalisationMapped;
  const foret_sum = sumProperty(
    vegetalisationCollectivite,
    'clc_3_foret_semiNaturel'
  );
  const foret_percent =
    (100 * sumProperty(vegetalisationCollectivite, 'clc_3_foret_semiNaturel')) /
    (100 * sumProperty(vegetalisationCollectivite, 'superf_choro'));

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'transparent',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: theme.typography.pxToRem(12)
    }
  }));

  return (
    <>
      {vegetalisationCollectivite ? (
        <div className={styles.container}>
          {vegetalisationCollectivite.length ? (
            <>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
                  {codgeo ? (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      Dans la commune de{' '}
                      {vegetalisationCollectivite[0]?.libelle_geographique},{' '}
                      <b>{Round(foret_percent, 1)} %</b> du territoire est de la
                      forêt ou des espaces semi-naturels. Cela correspond à{' '}
                      <b>{Round(foret_sum, 1)}</b> hectares.
                    </p>
                  ) : (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      Dans l'EPCI {vegetalisationCollectivite[0]?.libelle_epci},{' '}
                      <b>{Round(foret_percent, 1)} %</b> du territoire est de la
                      forêt ou des espaces semi-naturels. Cela correspond à{' '}
                      <b>{Round(foret_sum, 1)}</b> hectares.
                    </p>
                  )}
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
                      <LegendCompColor legends={legends} />
                    </div>
                    <p style={{ padding: '1em', margin: '0' }}>
                      Source : CORINE Land Cover
                    </p>
                  </div>
                ) : clc ? (
                  <Image
                    src={GraphImage}
                    alt=""
                    width={0}
                    height={0}
                    style={{ width: '90%', height: 'auto' }}
                  />
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
