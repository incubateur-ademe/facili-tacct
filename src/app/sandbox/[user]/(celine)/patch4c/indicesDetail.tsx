
import { getBackgroundColor, patch4Indices } from '@/app/(main)/_(nouveau-parcours)/patch4c/components/fonctions';
import { Body, H3 } from '@/design-system/base/Textes';
import { Patch4 } from "@/lib/postgres/models";
import Image from 'next/image';
import { Fragment } from 'react';
import styles from './patch4c.module.scss';

const IndicesDetail = ({
  patch4
}: {
  patch4: Patch4;
}) => {
  const indices = patch4Indices(patch4);
  return (
    <>
      {
        indices.map((indice) => (
          <Fragment key={indice.key}>
            {
              indice.value === null ? null : (
                <div className={styles.IndicesDetailWrapper}>
                  <div className={styles.IndiceIcon}
                    style={{
                      backgroundColor: getBackgroundColor(indice.value),
                    }}
                  >
                    <Image
                      src={indice.icon}
                      alt={indice.label}
                      width={34}
                      height={34}
                    />
                  </div>
                  <div className={styles.IndiceDetailsText}>
                    <H3 style={{ fontSize: "1.25rem" }}>{indice.label}</H3>
                    {
                      indice.value === "Pas d'évolution" || indice.value === "Aggravation modérée" ? (
                        <Body size='sm'>
                          Il n'est pas nécessaire d'apporter des modifications immédiates à votre plan d'adaptation.
                          Assurez-vous simplement que cet aléa y est bien identifié.
                        </Body>
                      ) : (
                        <>
                          <div style={{ borderBottom: '1px solid var(--gris-medium-dark)', width: "100%" }} />
                          <Body size='lg' weight='bold' style={{ margin: '1.5rem 0 1.125rem' }}>Thématiques à traiter impérativement</Body>
                          {indice.linkedThemes && (
                            <ul className="list-disc pl-8">
                              {indice.linkedThemes.map((theme, index) => (
                                <li key={index}><Body size='sm'>{theme}</Body></li>
                              ))}
                            </ul>
                          )}
                          <div style={{ border: '1px solid var(--gris-medium-dark)', width: "100%", margin: '1.5rem 0 0' }} />
                          <Body size='lg' weight='bold' style={{ margin: '1.5rem 0 1.125rem' }}>Pistes d'action</Body>
                          {
                            indice.actions.map((action, i) => (
                              <div key={i} className="flex items-center mb-4">
                                <a href={action.link} rel="noopener noreferrer" target="_blank">
                                  {action.title}
                                </a>
                              </div>
                            ))
                          }
                        </>
                      )
                    }
                  </div>
                </div>
              )
            }
          </Fragment>
        ))
      }
    </>
  );
}

export default IndicesDetail;
