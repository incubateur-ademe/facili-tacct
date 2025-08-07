import { Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { couleursBoutons, nuancesGris } from "../couleurs";

export const BoutonPrimaire = ({
  link,
  text,
  rel,
  size,
  disabled = false,
  onClick,
  icone,
  style
}: {
  link?: string;
  text: string;
  size: 'sm' | 'md' | 'lg';
  rel?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icone?: StaticImageData;
  style?: React.CSSProperties;
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
        height: size === 'sm' ? '32px' : size === 'md' ? '40px' : '48px',
        border: disabled ? `1px solid ${nuancesGris.light} !important` : `1px solid ${couleursBoutons.primaire[1]}`,
        padding: '4px 20px',
        fontWeight: 500,
        fontFamily: 'Marianne',
        fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',
        width: 'fit-content',
        alignItems: 'center',
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
        },
        ...style,
      }}
    >
      <div className="flex items-center justify-center">
        {text}
        {
          icone && (
            <Image
              src={icone}
              alt=""
              style={{ marginLeft: '8px' }}
              width={16}
              height={16}
            />
          )
        }
      </div>
    </Button>
  );
}

export const BoutonPrimaireClassic = ({
  link,
  text,
  rel,
  size,
  disabled = false,
  onClick,
  icone,
  style
}: {
  link?: string;
  text: string;
  size: 'sm' | 'md' | 'lg';
  rel?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icone?: StaticImageData;
  style?: React.CSSProperties;
}) => {
  const buttonStyle: React.CSSProperties = {
    textTransform: 'none',
    color: disabled ? nuancesGris.dark : "white",
    backgroundColor: disabled ? nuancesGris.light : couleursBoutons.primaire[1],
    borderRadius: '60px',
    height: size === 'sm' ? '32px' : size === 'md' ? '40px' : '48px',
    border: disabled ? `1px solid ${nuancesGris.light}` : `1px solid ${couleursBoutons.primaire[1]}`,
    padding: '4px 12px',
    fontWeight: 500,
    fontFamily: 'Marianne',
    fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',
    width: 'fit-content',
    alignItems: 'center',
    backgroundImage: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...style,
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (link && !onClick) {
      window.open(link, rel?.includes('noopener') ? '_blank' : '_self');
    }
    if (onClick) {
      onClick(e);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.backgroundColor = couleursBoutons.primaire[3];
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.backgroundColor = couleursBoutons.primaire[1];
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.outline = 'none';
      e.currentTarget.style.border = `1px solid ${couleursBoutons.primaire[1]}`;
      e.currentTarget.style.boxShadow = `0 0 0 2px white, 0 0 0 4px ${couleursBoutons.primaire[1]}`;
      e.currentTarget.style.backgroundColor = couleursBoutons.primaire[3];
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.border = `1px solid ${couleursBoutons.primaire[1]}`;
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.backgroundColor = couleursBoutons.primaire[1];
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className="flex items-center justify-center">
        {text}
        {
          icone && (
            <Image
              src={icone}
              alt=""
              style={{ marginLeft: '8px' }}
              width={16}
              height={16}
            />
          )
        }
      </div>
    </button>
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
