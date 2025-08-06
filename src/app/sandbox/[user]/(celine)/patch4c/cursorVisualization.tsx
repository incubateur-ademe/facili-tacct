"use client";
import { agravationItems } from '@/app/(main)/(nouveau-parcours)/patch4c/components/constantes';
import InfoIcon from '@/assets/icons/info_round_icon_black.svg';
import { HtmlTooltip } from '@/components/utils/HtmlTooltip';
import { Body } from "@/design-system/base/Textes";
import Image from "next/image";
import styles from './patch4c.module.scss';

const CursorVisualization = () => {
  return (
    <div className="pt-20">
      <div className={styles.CursorVisualizationBarColor}>
        {
          agravationItems.map((item, index) => (
            <div key={index}>
              <div className={styles.barColorText} style={{ left: `calc(${index * 25}% + ${item.offset}px)` }}>
                <div className='flex flex-row items-center'>
                  <Body size="sm">
                    {item.label}
                  </Body>
                  <HtmlTooltip
                    title={
                      <Body>
                        {item.hover}
                      </Body>
                    }
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
    </div>
  );
}

export default CursorVisualization;
