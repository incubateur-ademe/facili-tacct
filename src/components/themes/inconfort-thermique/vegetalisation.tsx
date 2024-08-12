import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses, type TooltipProps } from "@mui/material/Tooltip";
import { useSearchParams } from "next/navigation";

import { type CLC, type InconfortThermique } from "@/app/donnees-territoriales/type";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { Map } from "@/components/maps/CLC";
import { GridCol } from "@/dsfr/layout";

import { LegendCLC } from "./vegetalisation-legend";

interface Props {
  clc: CLC[];
  inconfort_thermique: InconfortThermique[];
}

type Vegetalisation = {
  clc_1_artificialise: number;
  clc_2_agricole: number;
  clc_3_foret_semiNaturel: number;
  clc_4_humide: number;
  clc_5_eau: number;
  code_commune: string | null | undefined;
  epci: string | null | undefined;
  libelle_epci: string | null | undefined;
  libelle_geographique: string | null | undefined;
};

function sumProperty(
  items: Vegetalisation[],
  property: "clc_1_artificialise" | "clc_2_agricole" | "clc_3_foret_semiNaturel" | "clc_4_humide" | "clc_5_eau",
) {
  return items.reduce(function (a, b) {
    return a + b[property];
  }, 0);
}

export const Vegetalisation = (props: Props) => {
  const { clc, inconfort_thermique } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;

  const temp_db: Vegetalisation[] = inconfort_thermique.map(el => {
    return {
      code_commune: el.code_commune,
      libelle_geographique: el.libelle_geographique,
      epci: el.epci,
      libelle_epci: el.libelle_epci,
      clc_1_artificialise: Number(el.clc_1_artificialise),
      clc_2_agricole: Number(el.clc_2_agricole),
      clc_3_foret_semiNaturel: Number(el.clc_3_foret_semiNaturel),
      clc_4_humide: Number(el.clc_4_humide),
      clc_5_eau: Number(el.clc_5_eau),
    };
  });

  const foret_sum = sumProperty(temp_db, "clc_3_foret_semiNaturel");
  const foret_percent =
    (100 * sumProperty(temp_db, "clc_3_foret_semiNaturel")) /
    (sumProperty(temp_db, "clc_1_artificialise") +
      sumProperty(temp_db, "clc_2_agricole") +
      sumProperty(temp_db, "clc_3_foret_semiNaturel") +
      sumProperty(temp_db, "clc_4_humide") +
      sumProperty(temp_db, "clc_5_eau"));

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
      {clc && temp_db ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {temp_db.length ? (
            <>
              <GridCol lg={4}>
                <h4>LE CHIFFRE</h4>
                <p>
                  Dans l'EPCI {temp_db[0]?.libelle_epci}, <b>{foret_percent?.toFixed(1)}%</b> du territoire est de la
                  forêt ou des espaces semi-naturels. Cela correspond à <b>{foret_sum?.toFixed(1)}</b> hectares.
                </p>
                <h4>EXPLICATION</h4>
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
                <div className="flex flex-col justify-end">
                  <p style={{ margin: "0 0 1em", textAlign: "center" }}>
                    <b>Cartographie des différents types de sols</b>
                  </p>
                  <HtmlTooltip title={<LegendCLC />} placement="left">
                    <div>
                      <Map clc={clc} />
                    </div>
                  </HtmlTooltip>
                  <p style={{ margin: "1em 0em 0em" }}>
                    Source : <b>CORINE Land Cover</b>
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
