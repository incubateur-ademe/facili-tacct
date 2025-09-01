import Image from 'next/image';

import CalculatorIcon from '@/assets/icons/calculator_icon_blue.svg';
import CalculatorIconGreen from '@/assets/icons/calculator_icon_green.svg';
import { Body } from '@/design-system/base/Textes';
import couleurs from '@/design-system/couleurs';
import { HtmlTooltip } from './HtmlTooltip';

interface Props {
  title: React.ReactNode;
  texte?: string;
}

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
