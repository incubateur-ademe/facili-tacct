'use client';
import { MapLCZ } from '@/components/maps/map-lcz';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, CollectivitesSearchbar } from '@/lib/postgres/models';
import styles from './themes.module.scss';

const LCZ = ({
  carteCommunes,
  collectivite
}: {
  carteCommunes: CarteCommunes[];
  collectivite: CollectivitesSearchbar[];
}) => {
  // const searchParams = useSearchParams();
  // const codgeo = searchParams.get("codgeo");
  // const codepci = searchParams.get("codepci")!;
  const communesMap = carteCommunes.map(CommunesIndicateursMapper);
  // const commune = codgeo ? communesMap.find((obj) => obj.properties["code_commune"] === codgeo) : undefined;
  return (
    <div className={styles.container}>
      <div className="w-2/5">
        <div className={styles.explicationWrapper}>
          {collectivite[0] ? (
            <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
              Dans la commune de {collectivite[0]?.search_libelle}, la part des
              ménages qui sont en situation de précarité énergétique logement
              est de <b>XXX%. </b>À l'échelle de l'EPCI, ce taux est de{' '}
              <b>XXXX%.</b>
            </p>
          ) : (
            <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
              Dans l'EPCI {collectivite[0]['libelle_epci']}, la part des ménages
              qui sont en situation de précarité énergétique logement est de{' '}
              <b>XXXX%.</b>
            </p>
          )}
        </div>
        <div className="px-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Duo
            Reges: constructio interrete. Quae cum dixisset paulumque
            institisset, Quid est? Quod autem in homine praestantissimum atque
            optimum est, id deseruit
            <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?
            Duo Reges: constructio interrete. Quae cum dixisset paulumque
            institisset, Quid est? Quod autem in homine praestantissimum atque
            optimum est, id deseruit.
          </p>
        </div>
      </div>
      <div className="w-3/5">
        <div className={styles.graphWrapper}>
          <p style={{ padding: '1em', margin: '0' }}>
            <b>Cartographie LCZ</b>
          </p>
          <div>
            <MapLCZ carteCommunes={communesMap} collectivite={collectivite} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LCZ;
