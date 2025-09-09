"use client";
import CalculatorIcon from '@/assets/icons/calculator_icon_blue.svg';
import CalculatorIconGreen from '@/assets/icons/calculator_icon_green.svg';
import InfoIconBlack from '@/assets/icons/info_icon_black.svg';
import InfoIcon from '@/assets/icons/info_icon_lightblue.svg';
import { Body } from '@/design-system/base/Textes';
import couleurs from '@/design-system/couleurs';
import { Any } from '@/lib/utils/types';
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import Image from 'next/image';
import { ReactElement, ReactNode, useState } from 'react';

interface Props {
  title: React.ReactNode;
  texte?: string;
}

interface HtmlTooltipProps extends TooltipProps {
  fontWeight?: number | string;
}

interface TabTooltipProps {
  tooltip: string;
  titre: string;
  selectedTab: string;
}

export const HtmlTooltip = styled(
  ({ className, fontWeight = 500, ...props }: HtmlTooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)<HtmlTooltipProps>(({ fontWeight = 500 }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: 'black',
    maxWidth: 600,
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 18, 0.16)",
    padding: '1rem',
    fontFamily: 'Marianne',
    fontSize: '0.875rem',
    borderRadius: '6px',
    lineHeight: '1.25rem',
    fontWeight: fontWeight
  }
}));

export const ArrowHtmlTooltip = styled(
  ({ className, fontWeight = 500, ...props }: HtmlTooltipProps) => (
    <Tooltip 
      {...props} 
      classes={{ popper: className }} 
      title={
        <div>
          {props.title}
          <div
            style={{
              position: 'absolute',
              bottom: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid #ffffff',
            }}
          />
        </div>
      }
    />
  )
)<HtmlTooltipProps>(({ fontWeight = 500 }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: 'black',
    maxWidth: 600,
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 18, 0.16)",
    padding: '1rem',
    fontFamily: 'Marianne',
    fontSize: '0.875rem',
    borderRadius: '6px',
    lineHeight: '1.25rem',
    fontWeight: fontWeight,
    position: 'relative',
    marginBottom: '6px',
  }
}));

export const CustomTooltip = ({
  title,
  texte = 'Méthode de calcul'
}: Props) => {
  return (
    <HtmlTooltip title={title}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '4px',
          width: 'fit-content',
          cursor: 'pointer',
          margin: '1em 0 0'
        }}
      >
        <Image src={CalculatorIcon} alt="" />
        <p style={{ color: '#0063CB', margin: '0' }}>
          <b>{texte}</b>
        </p>
      </div>
    </HtmlTooltip>
  );
};


export const CustomTooltipNouveauParcours = ({
  title,
  texte = 'Méthode de calcul'
}: Props) => {
  return (
    <HtmlTooltip title={title}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '4px',
          width: 'fit-content',
          cursor: 'pointer',
          margin: '0.5em 0 0'
        }}
      >
        <Image src={CalculatorIconGreen} alt="" />
        <Body weight='bold' style={{ color: couleurs.principales.vert }}>
          {texte}
        </Body>
      </div>
    </HtmlTooltip>
  );
};

export const DefinitionTooltip = ({
  children,
  title
}: {
  children: string;
  title: ReactNode;
}) => {
  return (
    <HtmlTooltip title={title} placement="top" fontWeight={400}>
      <span style={{ borderBottom: '1px dashed #0063CB', cursor: 'help' }}>
        {children}
      </span>
    </HtmlTooltip>
  );
};

export const HtmlTooltipMousePosition = ({
  children,
  title
}: {
  children: ReactElement<Any>;
  title: ReactNode;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <HtmlTooltip
      title={title}
      onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
      PopperProps={{
        anchorEl: {
          clientHeight: 0,
          clientWidth: 0,
          getBoundingClientRect: () => ({
            x: position.x,
            y: position.y,
            top: position.y - 100,
            left: position.x,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0,
            toJSON: () => null
          })
        }
      }}
    >
      {children}
    </HtmlTooltip>
  );
};

export const TabTooltip = ({ tooltip, titre, selectedTab }: TabTooltipProps) => {
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: theme.typography.pxToRem(16),
      boxShadow: '0px 4px 12px 0px #00001229',
      padding: '1em'
    }
  }));
  return (
    <>
      {selectedTab === titre ? (
        <HtmlTooltip title={tooltip}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '4px',
              width: 'fit-content',
              cursor: 'pointer'
            }}
          >
            <p style={{ color: '#0063CB', margin: '0' }}>
              <b>{titre}</b>
            </p>
            <Image src={InfoIcon} alt="" />
          </div>
        </HtmlTooltip>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '4px',
            width: 'fit-content',
            cursor: 'pointer'
          }}
        >
          <p style={{ color: '#3A3A3A', margin: '0' }}>
            <b>{titre}</b>
          </p>
          <Image src={InfoIconBlack} alt="" />
        </div>
      )}
    </>
  );
};
