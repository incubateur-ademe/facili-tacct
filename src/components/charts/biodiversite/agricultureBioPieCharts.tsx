import surfaceCertifeeIcon from '@/assets/icons/agriculture_bio_surface_certifiee_icon.svg';
import surfaceEnConversionIcon from '@/assets/icons/agriculture_bio_surface_conversion_icon.svg';
import { HtmlTooltip } from '@/components/utils/HtmlTooltip';
import { AgricultureBio } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Progress } from 'antd';
import Image from 'next/image';
import styles from './biodiversiteCharts.module.scss';

type ProgressTypes = {
  strokeLinecap: 'butt';
  type: 'circle';
  size: number;
  strokeWidth: number;
  showInfo: boolean;
};

const ProgressProps: ProgressTypes = {
  strokeLinecap: 'butt',
  type: 'circle',
  size: 100,
  strokeWidth: 12,
  showInfo: false
};

// const filterAgricultureBio = (
//   agricultureBio: AgricultureBio[],
//   column: string,
//   value: string,
//   subValue: string
// ) => {
//   const filtered = agricultureBio.filter((acc, obj) => {
//     if (obj[column] === value) {
//       return acc + obj[subValue]!;
//     }
//     return acc;
//   }, 0);
// }
  

export const AgricultureBioPieCharts = ({
  agricultureBio
}: {
  agricultureBio: AgricultureBio[];
}) => {
  const surfaceCertifiee = agricultureBio.reduce((acc, obj) => {
    if (obj.LIBELLE_SOUS_CHAMP === 'Surface certifiée') {
      return acc + obj.surface_2022!;
    }
    return acc;
  }, 0);
  const surfaceCertifiee2019 = agricultureBio.reduce((acc, obj) => {
    if (obj.LIBELLE_SOUS_CHAMP === 'Surface certifiée') {
      return acc + obj.surface_2019!;
    }
    return acc;
  }, 0);
  const surfaceEnConversion = agricultureBio.reduce((acc, obj) => {
    if (obj.LIBELLE_SOUS_CHAMP === 'Surface en conversion') {
      return acc + obj.surface_2022!;
    }
    return acc;
  }, 0);
  const surfaceEnConversion2019 = agricultureBio.reduce((acc, obj) => {
    if (obj.LIBELLE_SOUS_CHAMP === 'Surface en conversion') {
      return acc + obj.surface_2019!;
    }
    return acc;
  }, 0);
  const surfaceTotale = agricultureBio.reduce((acc, obj) => {
    if (obj.VARIABLE === 'saue') {
      return acc + obj.surface_2022!;
    }
    return acc;
  }, 0);
  const surfaceTotale2019 = agricultureBio.reduce((acc, obj) => {
    if (obj.VARIABLE === 'saue') {
      return acc + obj.surface_2019!;
    }
    return acc;
  }, 0);
  const nombreExploitations = agricultureBio.reduce((acc, obj) => {
    if (obj.VARIABLE === 'saue') {
      return acc + obj.nombre_2022!;
    }
    return acc;
  }, 0);

  const partCertifiee = ((surfaceCertifiee / surfaceTotale) * 100);
  const partEnConversion = (
    (surfaceEnConversion / surfaceTotale) * 100
  );
  const evolutionCertifiee =
    ((surfaceCertifiee - surfaceCertifiee2019) / surfaceCertifiee2019) * 100;
  const evolutionConversion =
    ((surfaceEnConversion - surfaceEnConversion2019) /
      surfaceEnConversion2019) *
    100;
  const evolutionRestante =
    ((surfaceTotale -
      surfaceCertifiee -
      surfaceEnConversion -
      (surfaceTotale2019 - surfaceCertifiee2019 - surfaceEnConversion2019)) /
      (surfaceTotale2019 - surfaceCertifiee2019 - surfaceEnConversion2019)) *
    100;

  const partCertifieeRounded =
    100 - partEnConversion < partCertifiee
      ? 100 - partEnConversion
      : partCertifiee;

  return (
    <div className="flex flex-row justify-center gap-20 p-12 bg-white">
      <div className={styles.dataWrapper}>
        <Image src={surfaceCertifeeIcon} alt="" />
        <p>
          Surface <b>déjà certifiée</b>
        </p>
        <HtmlTooltip
          title={
            <div className={styles.tooltip}>
              <h3>Surface déjà certifiée (2022)</h3>
              <p>
                <b>{Round(surfaceCertifiee, 0)}</b> ha
              </p>
              {evolutionCertifiee >= 0 ? (
                <p>
                  <b>+{Round(evolutionCertifiee, 1)}</b> % depuis 2019
                </p>
              ) : (
                <p>
                  <b>{Round(evolutionCertifiee, 1)}</b> % depuis 2019
                </p>
              )}
              <p>
                <b>{nombreExploitations}</b> exploitation(s)
              </p>
            </div>
          }
          placement="top"
        >
          <div className={styles.progressWrapper}>
            <Progress
              {...ProgressProps}
              aria-label="Circle progress bar"
              percent={partCertifieeRounded}
              strokeColor="#00949D"
              trailColor="#00949D10"
            />
            <div className={styles.progressText}>
              <p style={{ color: '#00949D' }}>
                <span>{Round(partCertifieeRounded, 1)}</span> %
              </p>
            </div>
          </div>
        </HtmlTooltip>
      </div>
      <div className={styles.dataWrapper}>
        <Image src={surfaceEnConversionIcon} alt="" />
        <p>
          Surface <b>en conversion</b>
        </p>
        <HtmlTooltip
          title={
            <div className={styles.tooltip}>
              <h3>Surface en conversion (2022)</h3>
              <p>
                <b>{Round(surfaceEnConversion, 0)}</b> ha
              </p>
              {evolutionConversion >= 0 ? (
                <p>
                  <b>+{Round(evolutionConversion, 1)}</b> % depuis 2019
                </p>
              ) : (
                <p>
                  <b>{Round(evolutionConversion, 1)}</b> % depuis 2019
                </p>
              )}
              <p>
                <b>{nombreExploitations}</b> exploitation(s)
              </p>
            </div>
          }
          placement="top"
        >
          <div className={styles.progressWrapper}>
            <Progress
              {...ProgressProps}
              style={{ transform: `rotate(${partCertifieeRounded * 3.6}deg)` }}
              aria-label="Circle progress bar"
              percent={partEnConversion}
              strokeColor="#00C2CC"
              trailColor="#00C2CC10"
            />
            <div className={styles.progressText}>
              <p style={{ color: '#00C2CC' }}>
                <span>{Round(partEnConversion, 1)}</span> %
              </p>
            </div>
          </div>
        </HtmlTooltip>
      </div>
    </div>
  );
};
