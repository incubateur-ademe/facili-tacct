import { Button } from "@mui/material";
import { couleursBoutons, nuancesGris } from "../couleurs";

export const BoutonPrimaire = ({
  link,
  text,
  rel,
  size,
  disabled = false,
  onClick
}: {
  link?: string;
  text: string;
  size: 'sm' | 'md' | 'lg';
  rel?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      key="0"
      variant="outlined"
      href={link}
      onClick={onClick}
      rel={rel}
      disabled={disabled}
      sx={{
        textTransform: 'none',
        color: disabled ? `${nuancesGris.dark} !important` : "white",
        backgroundColor: disabled ? nuancesGris.light : couleursBoutons.primaire[1],
        borderRadius: '60px',
        border: disabled ? `1px solid ${nuancesGris.light} !important` : `1px solid ${couleursBoutons.primaire[1]}`,
        padding: '4px 20px',
        fontWeight: 500,
        fontFamily: 'Marianne',
        fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',
        width: 'fit-content',
        backgroundImage: 'none',
        '&:hover': {
          backgroundColor: `${couleursBoutons.primaire[3]} !important`,
        },
        '&:focus': {
          outline: 'none',
          border: `1px solid ${couleursBoutons.primaire[1]}`,
          boxShadow: `
            0 0 0 2px white,
            0 0 0 4px ${couleursBoutons.primaire[1]}
          `,
          backgroundColor: `${couleursBoutons.primaire[3]} !important`
        }
      }}
    >
      {text}
    </Button>
  );
}

export const BoutonSecondaire = ({
  link,
  text,
  target,
  rel,
  size,
  disabled = false
}: {
  link: string;
  text: string;
  size: 'sm' | 'md' | 'lg';
  target?: string;
  rel?: string;
  disabled?: boolean;
}) => {
  return (
    <Button
      key="0"
      variant="outlined"
      href={link}
      target={target}
      rel={rel}
      disabled={disabled}
      sx={{
        textTransform: 'none',
        color: disabled ? `${nuancesGris.dark} !important` : couleursBoutons.primaire[3],
        backgroundColor: disabled ? nuancesGris.light : "white",
        borderRadius: '60px',
        border: disabled ? `1px solid ${nuancesGris.light} !important` : `1px solid ${couleursBoutons.primaire[2]}`,
        padding: '4px 20px',
        fontWeight: 500,
        fontFamily: 'Marianne',
        fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',
        width: 'fit-content',
        backgroundImage: 'none',
        '&:hover': {
          backgroundColor: `${couleursBoutons.primaire[2]} !important`,
        },
        '&:focus': {
          outline: 'none',
          border: `1px solid ${couleursBoutons.primaire[2]}`,
          boxShadow: `
            0 0 0 2px white,
            0 0 0 4px ${couleursBoutons.primaire[2]}
          `,
          backgroundColor: `${couleursBoutons.primaire[2]} !important`
        }
      }}
    >
      {text}
    </Button>
  );
}

export const BoutonTertiaire = ({
  link,
  text,
  target,
  rel,
  size,
  disabled = false
}: {
  link: string;
  text: string;
  size: 'sm' | 'md' | 'lg';
  target?: string;
  rel?: string;
  disabled?: boolean;
}) => {
  return (
    <Button
      key="0"
      variant="outlined"
      href={link}
      target={target}
      rel={rel}
      disabled={disabled}
      sx={{
        textTransform: 'none',
        color: disabled ? `${nuancesGris.dark} !important` : couleursBoutons.primaire[3],
        backgroundColor: disabled ? nuancesGris.light : "white",
        borderRadius: '60px',
        border: disabled ? `1px solid ${nuancesGris.light} !important` : `1px solid ${couleursBoutons.primaire[1]}`,
        padding: '4px 20px',
        fontWeight: 500,
        fontFamily: 'Marianne',
        fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',
        width: 'fit-content',
        backgroundImage: 'none',
        '&:hover': {
          backgroundColor: `${couleursBoutons.primaire[2]} !important`,
        },
        '&:focus': {
          outline: 'none',
          border: `1px solid ${couleursBoutons.primaire[3]}`,
          boxShadow: `
            0 0 0 2px white,
            0 0 0 4px ${couleursBoutons.primaire[3]}
          `,
          backgroundColor: `white !important`
        }
      }}
    >
      {text}
    </Button>
  );
}
