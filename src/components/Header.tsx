"use client";
import Badge from "@codegouvfr/react-dsfr/Badge";
import Header from "@codegouvfr/react-dsfr/Header";
import { Button } from "@mui/material";
import Image, { type StaticImageData } from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import ressourcesIcon from "@/assets/icons/ressources_icon_blue.svg";
import ressourcesIconWhite from "@/assets/icons/ressources_icon_white.svg";
import { config } from "@/config";
import { GetCommunes } from "@/lib/queries/cartographie";

import { Brand } from "./Brand";

export const HeaderComp = () => {
  const searchParams = useSearchParams();
  const params = usePathname();
  const code = searchParams.get("code");

  const [epci, setEpci] = useState("");

  useEffect(() => {
    void (async () => {
      const temp = code ? await GetCommunes(code) : "";
      temp ? setEpci(temp[0].libelle_epci) : setEpci("");
    })();
  }, [code]);

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
        code
          ? {
              iconId: "fr-icon-map-pin-user-fill",
              linkProps: { href: "" },
              text: epci,
            }
          : "",
        params.includes("ressources") ? (
          <>
            <Button
              key="0"
              startIcon={<Image src={ressourcesIconWhite as StaticImageData} alt=""></Image>}
              sx={{
                textTransform: "none",
                color: "white",
                borderRadius: "4px",
                border: "1px solid #0063CB",
                padding: "0.5em 1em",
                fontWeight: 500,
                fontFamily: "inherit",
                fontSize: "1rem",
                height: "48px",
                top: "-0.5em",
                margin: "0 0 0 1em",
                backgroundColor: "#0063CB",
              }}
            >
              Ressources
            </Button>
          </>
        ) : (
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
