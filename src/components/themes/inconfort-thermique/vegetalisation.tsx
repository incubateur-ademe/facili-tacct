import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses, type TooltipProps } from "@mui/material/Tooltip";
import { useSearchParams } from "next/navigation";

import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { Map } from "@/components/maps/CLC";
import { GridCol } from "@/dsfr/layout";
import { vegetalisationMapper } from "@/lib/mapper/inconfortThermique";
import { CLC, InconfortThermique } from "@/lib/postgres/models";

import { VegetalisationDto } from "@/lib/dto";
import { LegendCLC } from "./vegetalisation-legend";

const sumProperty = (
  items: VegetalisationDto[],
  property: "clc_1_artificialise" | "clc_2_agricole" | "clc_3_foret_semiNaturel" | "clc_4_humide" | "clc_5_eau",
) => {
  return items.reduce(function (a, b) {
    return a + b[property];
  }, 0);
}

export const Vegetalisation = (props: {
  clc: CLC[];
  inconfort_thermique: InconfortThermique[];
}) => {
  const { clc, inconfort_thermique } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const vegetalisation = inconfort_thermique.map(vegetalisationMapper);

  const foret_sum = sumProperty(vegetalisation, "clc_3_foret_semiNaturel");
  const foret_percent =
    (100 * sumProperty(vegetalisation, "clc_3_foret_semiNaturel")) /
    (sumProperty(vegetalisation, "clc_1_artificialise") +
      sumProperty(vegetalisation, "clc_2_agricole") +
      sumProperty(vegetalisation, "clc_3_foret_semiNaturel") +
      sumProperty(vegetalisation, "clc_4_humide") +
      sumProperty(vegetalisation, "clc_5_eau"));

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: theme.typography.pxToRem(12),
    },
  }));

  return (
    <>
      {clc && vegetalisation ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {vegetalisation.length ? (
            <>
              <GridCol lg={4}>
                <div
                  style={{
                    backgroundColor: "#F9F9FF",
                    margin: "1em 0",
                    padding: "1em",
                    borderRadius: "0.5em",
                  }}
                >
                  <p>
                    Dans l'EPCI {vegetalisation[0]?.libelle_epci}, <b>{foret_percent?.toFixed(1)}%</b> du territoire est de la
                    forêt ou des espaces semi-naturels. Cela correspond à <b>{foret_sum?.toFixed(1)}</b> hectares.
                  </p>
                </div>
                <p>
                  La présence d’arbres permet d’apporter de l’ombre et rafraichit l’air par évapotranspiration (lorsque
                  plusieurs arbres sont à proximité). Leur efficacité dans le rafraîchissement en milieu urbain dépend
                  de leur nombre, de la densité de leur feuillage, des essences, de la qualité du sol et de la
                  disponibilité en eau.<br></br> <br></br>
                  Plus 2 à 3°C sont les effets maximaux d'arbres isolés sur la température d’air dans les rues ou
                  lorsqu'ils sont alignés en bordure de route. (source :{" "}
                  <a href="https://plusfraichemaville.fr/" target="_blank">
                    Plus fraiche ma ville
                  </a>
                  )
                </p>
              </GridCol>
              <GridCol lg={7}>
                <div className="flex flex-col">
                  <p style={{ margin: "0 0 1em" }}>
                    <b>Cartographie des différents types de sols</b>
                  </p>
                  <HtmlTooltip title={<LegendCLC />} placement="left">
                    <div>
                      <Map clc={clc} />
                    </div>
                  </HtmlTooltip>
                  <p style={{ margin: "1em 0em 0em" }}>
                    Source : <b style={{ color: "#0063CB" }}>CORINE Land Cover</b>
                  </p>
                </div>
              </GridCol>
            </>
          ) : (
            <GraphDataNotFound code={code} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
