"use client";
import ExporterIcon from '@/assets/icons/export_icon_white.svg';
import InfoIcon from '@/assets/icons/info_round_icon_black.svg';
import { HtmlTooltip } from '@/components/utils/Tooltips';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { Body } from "@/design-system/base/Textes";
import { NewContainer } from '@/design-system/layout';
import Image from "next/image";
import { agravationItems } from './components/constantes';
import styles from './patch4c.module.scss';

const CursorVisualization = () => {
  return (
    <NewContainer size="xl" style={{ padding: '0rem 1rem' }}>
      <div className={styles.CursorVisualizationContainer}>
        <div className={styles.CursorVisualizationBarColor} >
          {
            agravationItems.map((item, index) => (
              <div key={index}>
                <div className={styles.barColorText} style={{ left: `calc(${index * 25}% + ${item.offset}px)` }}>
                  <div className='flex flex-row items-center'>
                    <Body size="sm">
                      {item.label}
                    </Body>
                    <HtmlTooltip
                      title={item.hover}
                      placement="top"
                    >
                      <Image
                        src={InfoIcon}
                        alt="hover d'information"
                        width={20}
                        height={20}
                        className={styles.infoIcon}
                      />
                    </HtmlTooltip>
                  </div>
                </div>
                <div className={styles.cursor} style={{ left: item.values }} />
              </div>
            ))
          }
        </div>
        <BoutonPrimaireClassic
          icone={ExporterIcon}
          size="sm"
          text="Exporter (.png)"
          style={{
            height: "fit-content"
          }}
        />
      </div>
    </NewContainer>
  );
}

export default CursorVisualization;
