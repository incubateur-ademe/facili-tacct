"use client";
import InfoIcon from '@/assets/icons/info_round_icon_black.svg';
import { HtmlTooltip } from '@/components/utils/HtmlTooltip';
import { Body } from "@/design-system/base/Textes";
import Image from "next/image";

const agravationItems = [
  { label: "Pas d'évolution", offset: -80, values: "5%", hover: "Stabilité ou baisse de l’indicateur entre 2030 et 2100" },
  { label: "Aggration modérée", offset: -30, values: "33%", hover: "L'évolution de long terme (2050-2100) est inférieure à celle de la période 2030-2050" },
  { label: "Aggration forte", offset: 35, values: "67%", hover: "L'évolution de long terme (2050-2100) est 1 à 2 fois supérieure à la valeur de l’évolution de la période 2030-2050" },
  { label: "Aggration très forte", offset: 90, values: "95%", hover: "L'évolution de long terme (2050-2100) est plus de deux fois plus forte que sur la période 2030-2050" }
];

const CursorVisualization = () => {
  return (
    <div className="pt-24 pb-10">
      <div
        style={{
          width: '550px',
          height: '16px',
          background: 'linear-gradient(to right, white 0%, white 5%, #FFC03F 33%, #F66E19 67%, #F80206 100%)',
          margin: '20px auto',
          position: 'relative',
          overflow: 'visible',
          border: '1px solid #f7f7f7ff'
        }}
      >
        {
          agravationItems.map((item, index) => (
            <>
              <div key={index} style={{
                position: 'absolute',
                left: `calc(${index * 25}% + ${item.offset}px)`,
                top: -25,
                transform: 'translateY(-50%)',
                whiteSpace: 'nowrap'
              }}>
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
                      style={{ marginLeft: '5px', cursor: 'pointer' }}
                    />
                  </HtmlTooltip>
                </div>
              </div>
              <div key={`line-${index}`} style={{
                position: 'absolute',
                left: item.values,
                top: -12,
                width: '1px',
                height: '10px',
                backgroundColor: 'black'
              }} />
            </>
          ))
        }
      </div>
    </div>
  );
}

export default CursorVisualization;
