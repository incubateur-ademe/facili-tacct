"use client";
import Badge from "@codegouvfr/react-dsfr/Badge";
import { Card } from "@codegouvfr/react-dsfr/Card";
import { useSearchParams } from "next/navigation";

interface Props {
  badge: string;
  badgeSeverity: "error" | "info" | "new" | "success" | "warning";
  imageUrl: string;
  thematique: string;
  title: string;
}

export const CardComp = ({ imageUrl, thematique, badgeSeverity, badge, title }: Props) => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  return (
    <div
      style={{
        width: 360,
      }}
    >
      <Card
        background
        border
        // desc={description}
        enlargeLink
        shadow={true}
        imageAlt=""
        imageUrl={imageUrl}
        classes={{
          imgTag: "fr-ratio-32x9",
        }}
        linkProps={{
          href: `/donnees-territoriales?code=${code}&thematique=${thematique}`,
        }}
        end={
          <ul className="fr-badges-group">
            <li>
              <Badge noIcon severity={badgeSeverity}>
                {badge}
              </Badge>
            </li>
          </ul>
        }
        title={title}
        titleAs="h2"
      />
    </div>
  );
};
