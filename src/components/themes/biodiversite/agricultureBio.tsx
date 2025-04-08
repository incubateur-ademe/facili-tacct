import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { AgricultureBio, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { agricultureBioTooltipText } from '@/lib/tooltipTexts';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AgricultureBioDataViz from './agricultureBioDataviz';
import styles from './biodiversite.module.scss';

const AgricultureBiologique = (props: {
  agricultureBio: AgricultureBio[];
  data: Array<{
    donnee: string;
    facteurSensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
}) => {
  const { agricultureBio } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');

  const nombreExploitations = agricultureBio.find(
    (obj) => obj.VARIABLE === 'saue'
  )?.nombre_2022!;
  const surfaceAgriBio = agricultureBio.find(
    (obj) => obj.LIBELLE_SOUS_CHAMP === 'Surface totale'
  )?.surface_2022!;

  useEffect(() => {
    void (async () => {
      const temp = await GetPatch4(code, type);
      setPatch4(temp);
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const secheresse = patch4 ? AlgoPatch4(patch4, 'secheresse_sols') : undefined;

  return (
    <>
      {
        !isLoadingPatch4 ?
          <>
            {agricultureBio.length ? (
              <div className={styles.container}>
                <div className="w-1/2">
                  <div className={styles.explicationWrapper}>
                    {type === "commune" ? (
                      <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                        Cette données n’est disponible qu’à l’échelle de votre EPCI.{' '}
                        <br></br>
                        Dans votre EPCI, <b>
                          {nombreExploitations} exploitations
                        </b>{' '}
                        sont en agriculture biologique ou en conversion, représentant
                        un total de <b>{Round(surfaceAgriBio, 0)} hectares</b>.
                      </p>
                    ) : (
                      <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                        Dans votre EPCI, <b>{nombreExploitations} exploitations</b>{' '}
                        sont en agriculture biologique ou en conversion, représentant
                        un total de <b>{Round(surfaceAgriBio, 0)} hectares</b>.
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
                    <CustomTooltip title={agricultureBioTooltipText} texte="D'où vient ce chiffre ?" />
                  </div>
                  <div className="px-4">
                    <p>
                      L'effondrement de la biodiversité n’est pas une fiction : 69 %
                      des espèces sauvages ont disparu à l'échelle de la planète entre
                      1970 et 2018, du fait notamment de la dégradation ou de la
                      disparition de leurs habitats naturels. L’agriculture dispose de
                      deux leviers complémentaires de protection de la biodiversité :
                      adopter des pratiques moins intensives et favoriser la diversité
                      des paysages. Les cultures à bas niveau d’intrants, la
                      non-utilisation de produits chimiques de synthèse, la
                      non-utilisation d'OGM, le recyclage des matières organiques, la
                      rotation des cultures et la lutte biologique participent à ces
                      deux objectifs.
                    </p>
                    <p>
                      Si l’agriculture biologique n’est pas une solution parfaite,
                      elle reste aujourd’hui l’une des meilleures réponses, aux côtés
                      des pratiques à bas-intrants, pour préserver la biodiversité.
                      Alors que 70 % des sols agricoles sont dégradés en Europe, ses
                      effets positifs sur la vie souterraine sont avérés. Des
                      écosystèmes renforcés sont des écosystèmes plus résilients aux
                      impacts du changement climatique.
                    </p>
                    <p>
                      ⇒ Une biodiversité plus riche dans les parcelles en agriculture
                      biologique : +32 % d'individus et +23 % d'espèces par rapport à
                      l’agriculture conventionnelle.
                    </p>
                    <p>
                      ⇒ 70 % des indicateurs biologiques des sols s'améliorent après
                      conversion.
                    </p>
                    <p>
                      ⇒ Une pollinisation 2,4 fois plus efficace qu'en agriculture
                      conventionnelle.
                    </p>
                    <p>
                      ⇒ Une meilleure résistance à la sécheresse : disponibilité en
                      eau dans les sols améliorée de 4 % à 45 %.
                    </p>
                    <p>
                      ⇒ Jusqu'à 35 % de carbone supplémentaire stocké dans les sols.
                    </p>
                  </div>
                </div>
                <div className="w-1/2">
                  <AgricultureBioDataViz
                    agricultureBio={agricultureBio}
                    datavizTab={datavizTab}
                    setDatavizTab={setDatavizTab}
                  />
                </div>
              </div>
            ) : (
              <GraphDataNotFound code={code ?? libelle} />
            )}
          </>
          : <Loader />
      }
    </>
  );
};

export default AgricultureBiologique;
