import { styled } from '@mui/material/styles';
import Tooltip, {
  tooltipClasses,
  type TooltipProps
} from '@mui/material/Tooltip';
import Image from 'next/image';

import CalculatorIcon from '@/assets/icons/calculator_icon_blue.svg';
import CalculatorIconGreen from '@/assets/icons/calculator_icon_green.svg';
import { Body } from '@/design-system/base/Textes';
import couleurs from '@/design-system/couleurs';

interface Props {
  title: React.ReactNode;
  texte?: string;
}

export const CustomTooltip = ({
  title,
  texte = 'Méthode de calcul'
}: Props) => {
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: theme.typography.pxToRem(16),
      boxShadow: '0px 4px 12px 0px #00001229',
      padding: '1em',
      width: '400px',
      maxWidth: '400px',
      fontFamily: 'Marianne'
    }
  }));
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
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: theme.typography.pxToRem(16),
      fontWeight: '400',
      boxShadow: '0px 4px 12px 0px #00001229',
      padding: '1em',
      width: '400px',
      maxWidth: '400px',
      fontFamily: 'Marianne'
    }
  }));
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
