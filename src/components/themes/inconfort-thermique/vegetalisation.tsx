import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { GridCol } from "@/dsfr/layout";

import Map from "@/components/maps/CLC";
import { getVegetalisationFromEPCI } from "./actions/vegetalisation";
import { Loader } from "@/components/loader";

import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { LegendCLC } from "./vegetalisation-legend";

interface Props {
  clc: Array<{
    type: string;
    geometry: string;
    properties: {
      label: string;
      centroid: string;
    }
  }>;
}

export const Vegetalisation = (props: Props) => {
  const { clc } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const [foret, setForet] = useState<number>();
  const [dataVegetalisation, setDataVegetalisation] = useState<any>();

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: theme.typography.pxToRem(12),
      },
  }));

  useEffect(() => {
    void (async () => {
      const dataVegetalisationRows = await getVegetalisationFromEPCI(Number(code));
      if (Object.keys(dataVegetalisationRows).length) {
        // const x = Object.keys(dataTravailExtRows).slice(3, 10);
        setDataVegetalisation(dataVegetalisationRows);
        const y: any = Object.values(dataVegetalisationRows).slice(3);
        const sum_ha: number = Number(y.reduce((partialSum: number, a: number) => partialSum + a, 0));
        setForet((100 * y.at(2)) / sum_ha);
      }
    })();
  }, [code]);

  return (
    <>
      {clc ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {dataVegetalisation ? (
            <>
            <GridCol lg={4}>
              <h4>LE CHIFFRE</h4>
              <p>
                Dans l'EPCI {dataVegetalisation?.LIBEPCI_x}, <b>{foret?.toFixed(1)}%</b> du territoire est de la forêt ou
                des espaces semi-naturels.
              </p>
              <h4>EXPLICATION</h4>
              <p>
                La présence d’arbres permet d’apporter de l’ombre et rafraichit l’air par évapotranspiration (lorsque
                plusieurs arbres sont à proximité). Leur efficacité dans le rafraîchissement en milieu urbain dépend de
                leur nombre, de la densité de leur feuillage, des essences, de la qualité du sol et de la disponibilité en
                eau.<br></br> <br></br>
                Plus 2 à 3°C sont les effets maximaux d'arbres isolés sur la température d’air dans les rues ou lorsqu'ils
                sont alignés en bordure de route. (source :{" "}
                <a href="https://plusfraichemaville.fr/" target="_blank">
                  Plus fraiche ma ville
                </a>
                )
              </p>
            </GridCol>
            <GridCol lg={7}>
              <div className="flex flex-col justify-end">
                <p style={{ margin: "0 0 1em", textAlign: "center" }}>
                  <b>Cartographie des différents types de sols</b>
                </p>
                <HtmlTooltip
                  title={<LegendCLC />}
                  placement="left"
                >
                  <div><Map clc={clc} /></div>
                </HtmlTooltip>
                <p style={{ margin: "1em 0em 0em" }}>
                  Source : <b>CORINE Land Cover</b>
                </p>
              </div>
            </GridCol>
            </>
          ) : (
            <Loader />
          )}
        </div>
      ) : (
        <GraphDataNotFound code={code} />
      )}
    </>
  );
};
