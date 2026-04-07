import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import { usePostHog } from 'posthog-js/react';
import { useStyles } from 'tss-react/dsfr';
import './ressources.module.scss';

interface Props {
  description: string;
  titre: string;
  tag?: string;
  link: string;
  backgroundColor?: string;
  textColor?: string;
  titleColor?: string;
  logoColor?: string;
}

export const CardComp = ({
  description,
  titre,
  tag,
  link,
  backgroundColor,
  textColor,
  titleColor,
  logoColor
}: Props) => {
  const { css } = useStyles();
  const posthog = usePostHog();

  const RessourcesClick = () => {
    posthog.capture('ressource_consultée', {
      ressource: titre,
      type: tag
    });
  };

  return (
    <div
      className="container"
      style={{
        width: 360
      }}
      onClick={RessourcesClick}
    >
      <Card
        border
        desc={description}
        enlargeLink
        linkProps={{
          href: link
        }}
        size="medium"
        start={
          tag ? (
            <ul className="fr-tags-group">
              <li>
                <Tag>{tag}</Tag>
              </li>
            </ul>
          ) : null
        }
        title={titre}
        titleAs="h2"
        className={css({
          height: '100%',
          backgroundColor: backgroundColor,
          color: textColor,
          a: {
            color: titleColor + '!important',
            '&::after': {
              color: logoColor
            }
          }
        })}
      />
    </div>
  );
};
