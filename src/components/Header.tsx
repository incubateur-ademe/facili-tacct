"use client";
import ressourcesIcon from "@/assets/icons/ressources_icon_blue.svg";
import { config } from "@/config";
import Badge from "@codegouvfr/react-dsfr/Badge";
import Header from "@codegouvfr/react-dsfr/Header";
import { Button } from "@mui/material";
import Image, { type StaticImageData } from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { GetInconfortThermique } from "@/lib/queries/thematiques";
import { Brand } from "./Brand";
import styles from "./components.module.scss";

const Localisation = (props: { libelle: string, code: string }) => {
  const { libelle, code } = props;
  return (
    <div className={styles.localisation}>
      <span className="fr-icon-map-pin-user-fill" style={{ borderRadius:"25px" }}/>
      <p>{libelle} - {code}</p>
    </div>
  );
};

export const HeaderComp = () => {
  const searchParams = useSearchParams();
  const params = usePathname();
  const codgeo = searchParams.get("codgeo");
  const codepci = searchParams.get("codepci")!;
  const [epci, setEpci] = useState("");
  const [commune, setCommune] = useState("");

  useEffect(() => {
    void (async () => {
      const temp = codgeo !== null ? await GetInconfortThermique(codgeo) 
        : codepci !== null ? await GetInconfortThermique(codepci) 
        : void 0;
      temp && codgeo ? setCommune(temp[0]?.libelle_geographique) : setCommune("");
      temp && !codgeo ? setEpci(temp[0]?.libelle_epci) : setEpci("");
    })();
  }, [codepci, codgeo]);

  return (
    <Header
      brandTop={<Brand />}
      homeLinkProps={{
        href: "/",
        title: `Accueil - ${config.name}`,
      }}
      serviceTitle={
        <>
          {config.name}{" "}
          <Badge as="span" noIcon severity="success">
            Beta
          </Badge>
        </>
      }
      quickAccessItems={[
        commune && codgeo ? (
          <>
            <Localisation libelle={commune} code={codgeo}/>
          </>
         ) : epci && codepci ? (
          <>
            <Localisation libelle={epci} code={codepci}/>
          </>
         ) : null,
        params.includes("ressources") ? null : (
          <Button
            key="0"
            variant="outlined"
            href="/ressources"
            startIcon={<Image src={ressourcesIcon as StaticImageData} alt=""></Image>}
            sx={{
              textTransform: "none",
              color: "#0063CB",
              borderRadius: "4px",
              border: "1px solid #0063CB",
              padding: "0.5em 1em",
              fontWeight: 500,
              fontFamily: "inherit",
              fontSize: "1rem",
              height: "48px",
              top: "-0.5em",
              margin: "0 0 0 1em",
            }}
          >
            Ressources
          </Button>
        ),
      ]}
    />
  );
};
