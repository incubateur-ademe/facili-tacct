"use client";


import Card from "@codegouvfr/react-dsfr/Card";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { useStyles } from "tss-react/dsfr";

interface Props {
  tag: string;
  titre: string;
  description: string;
  link: string;
}

export const TileComp = ({ titre, description, tag, link='' }: Props) => {
  const { css } = useStyles();
  return (
      <div
        className="container"
        style={{
          width: 375,
        }}
      >
        <Card
          background
          enlargeLink
          border
          desc={description}
          linkProps={{
            href: link
          }}
          size="medium"
          title={titre}
          titleAs="h3"
          start={
            <ul className="fr-badges-group">
              <li>
                <Tag>
                  {tag}
                </Tag>
              </li>
            </ul>
          }
          className={css({
            ".fr-card:not(.fr-card--no-border):not(.fr-card--shadow)": {
              height: "100% !important",
            }
          })}
        />
      </div>
  );
};




