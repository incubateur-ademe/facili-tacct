import { Body } from "@/design-system/base/Textes";
import styles from '../explorerDonnees.module.scss';

export const SourceExport = ({
  source,
  condition,
  exportComponent, 
}: {
  source: string;
  condition: boolean;
  exportComponent: React.ReactNode;
}) => {
  return (
    <>
    {
        condition ? (
          <div className={styles.sourcesExportWrapper} style={{ borderTop: '1px solid var(--gris-medium)' }}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : {source}.
            </Body>
            {exportComponent}
          </div>
        ) : (
          <div
            className={styles.sourcesExportWrapper}
            style={{
              // marginLeft: '-2rem',
              borderTop: '1px solid var(--gris-medium)',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0
            }}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : {source}.
            </Body>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>Export indisponible : données non référencées ou nulles.</Body>
          </div>
        )
      }
      </>
    );
  };
