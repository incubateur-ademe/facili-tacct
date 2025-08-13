"use client";
import SurfacesEnBioCharts from "@/components/charts/biodiversite/surfacesEnBioCharts";
import { ExportButtonNouveauParcours } from "@/components/exports/ExportButton";
import { CustomTooltipNouveauParcours } from "@/components/utils/CalculTooltip";
import { Body, H3 } from "@/design-system/base/Textes";
import { AgricultureBio } from "@/lib/postgres/models";
import { multipleEpciBydepartementLibelle } from "@/lib/territoireData/multipleEpciBydepartement";
import { multipleEpciByPnrLibelle } from "@/lib/territoireData/multipleEpciByPnr";
import { agricultureBioTooltipText } from "@/lib/tooltipTexts";
import { surfacesEnBioDoc } from "@/lib/utils/export/documentations";
import { IndicatorExportTransformations } from "@/lib/utils/export/environmentalDataExport";
import { numberWithSpacesRegex } from "@/lib/utils/regex";
import { Round } from "@/lib/utils/reusableFunctions/round";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from '../../explorerDonnees.module.scss';

export const SurfacesEnBio = (props: {
  agricultureBio: AgricultureBio[];
}) => {
  const { agricultureBio } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const territoiresPartiellementCouverts = type === 'departement'
    ? multipleEpciBydepartementLibelle.find(dept => dept.departement === code)?.liste_epci_multi_dept
    : type === 'pnr'
      ? multipleEpciByPnrLibelle.find(pnr => pnr.libelle_pnr === libelle)?.liste_epci_multi_pnr
      : undefined;

  const nombreExploitations = agricultureBio.reduce((acc, obj) => {
    if (obj.VARIABLE === 'saue') {
      return acc + obj.nombre_2022!;
    }
    return acc;
  }, 0);
  const surfaceAgriBio = agricultureBio.reduce((acc, obj) => {
    if (obj.LIBELLE_SOUS_CHAMP === 'Surface totale') {
      return acc + obj.surface_2022!;
    }
    return acc;
  }, 0);
  const exportData = IndicatorExportTransformations.biodiversite.agricultureBio(agricultureBio)

  return (
    <>
      <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
        Part de l’agriculture biologique
      </H3>
      <div className={styles.datavizContainer}>
        <div className={styles.chiffreDynamiqueWrapper}>
          <Body>CHIFFRE</Body>
          {agricultureBio.length ?
            <>
              {type === "commune" ? (
                <p style={{ color: '#161616' }}>
                  Cette donnée n’est disponible qu’à l’échelle de votre EPCI.{' '}
                  <br></br>
                  Dans votre EPCI, <b>
                    {nombreExploitations} exploitations
                  </b>{' '}
                  sont en agriculture biologique ou en conversion, représentant
                  un total de <b>{Round(surfaceAgriBio, 0)} hectares</b>.
                </p>
              ) : type === "departement" || type === "pnr" || type === "petr" ? (
                <>
                  <p style={{ color: '#161616' }}>
                    Cette donnée n’est disponible qu’à l’échelle de l'EPCI.
                    Sur votre territoire, <b>{numberWithSpacesRegex(nombreExploitations)} exploitations</b>{' '}
                    sont en agriculture biologique ou en conversion, représentant
                    un total de <b>{Round(surfaceAgriBio, 0)} hectares</b>.
                  </p>
                  {
                    territoiresPartiellementCouverts && (
                      <>
                        <p>
                          <br></br>Attention, <b>{territoiresPartiellementCouverts?.length} EPCI
                          </b> {territoiresPartiellementCouverts?.length === 1 ? "ne fait" : "ne font"} que
                          partiellement partie de votre territoire :
                        </p>
                        <ul style={{ margin: "0.5rem 0 0 1.5rem" }}>
                          {territoiresPartiellementCouverts?.map((epci, index) => (
                            <li key={index} style={{ fontSize: "1rem" }}>{epci}</li>
                          ))}
                        </ul>
                      </>
                    )
                  }
                </>
              ) : (
                <p style={{ color: '#161616' }}>
                  Dans votre {type === "epci" ? "EPCI" : "territoire"}, <b>{nombreExploitations} exploitations</b>{' '}
                  sont en agriculture biologique ou en conversion, représentant
                  un total de <b>{Round(surfaceAgriBio, 0)} hectares</b>.
                </p>
              )}
            </>
            : ""
          }
          <Body size='sm'>
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
            <br></br>
            Si l’agriculture biologique n’est pas une solution parfaite,
            elle reste aujourd’hui l’une des meilleures réponses, aux côtés
            des pratiques à bas-intrants, pour préserver la biodiversité.
            Alors que 70 % des sols agricoles sont dégradés en Europe, ses
            effets positifs sur la vie souterraine sont avérés. Des
            écosystèmes renforcés sont des écosystèmes plus résilients aux
            impacts du changement climatique.
            <br></br>
            ⇒ Une biodiversité plus riche dans les parcelles en agriculture
            biologique : +32 % d'individus et +23 % d'espèces par rapport à
            l’agriculture conventionnelle.
            <br></br>
            ⇒ 70 % des indicateurs biologiques des sols s'améliorent après
            conversion.
            <br></br>
            ⇒ Une pollinisation 2,4 fois plus efficace qu'en agriculture
            conventionnelle.
            <br></br>
            ⇒ Une meilleure résistance à la sécheresse : disponibilité en
            eau dans les sols améliorée de 4 % à 45 %.
            <br></br>
            ⇒ Jusqu'à 35 % de carbone supplémentaire stocké dans les sols.
            <CustomTooltipNouveauParcours title={agricultureBioTooltipText} texte="D'où vient ce chiffre ?" />
          </Body>
        </div>
        <div className={styles.datavizWrapper}>
          <SurfacesEnBioCharts
            agricultureBio={agricultureBio}
            datavizTab={datavizTab}
            setDatavizTab={setDatavizTab}
          />
          <div className={styles.sourcesExportWrapper}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : Agence Bio, Service de la Statistique et de la Prospective (SSP
              - Ministère de l’agriculture) dans Catalogue DiDo (Indicateurs
              territoriaux de développement durable - ITDD) - AGRESTE, 2020
            </Body>
            <ExportButtonNouveauParcours
              data={exportData}
              baseName="agriculture_biologique"
              type={type}
              libelle={libelle}
              code={code}
              sheetName="Agriculture bio"
              documentation={surfacesEnBioDoc}
            />
          </div>
        </div>
      </div>
    </>
  );
};
