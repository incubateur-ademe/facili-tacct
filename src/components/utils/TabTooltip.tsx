import { styled } from '@mui/material/styles';
import Tooltip, {
  tooltipClasses,
  type TooltipProps
} from '@mui/material/Tooltip';
import Image, { type StaticImageData } from 'next/image';

import InfoIconBlack from '@/assets/icons/info_icon_black.svg';
import InfoIcon from '@/assets/icons/info_icon_lightblue.svg';

interface Props {
  tooltip: string;
  titre: string;
  selectedTab: string;
}

export const TabTooltip = ({ tooltip, titre, selectedTab }: Props) => {
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
            <Image src={InfoIcon as StaticImageData} alt="" />
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
          <Image src={InfoIconBlack as StaticImageData} alt="" />
        </div>
      )}
    </>
  );
};
