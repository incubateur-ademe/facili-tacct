import articleIcon from "@/assets/icons/article_icon_green.svg";
import REXIcon from "@/assets/icons/retour_exp_icon_green.svg";
import Image from "next/image";
import { Body } from "./Textes";

export const TagsSimples = ({
  texte,
  couleur,
  couleurTexte,
  taille,
  icone,
  closeable,
  handleClose
}: {
  texte: string;
  couleur: string;
  couleurTexte: string;
  taille?: 'small' | 'medium';
  icone?: React.ReactNode;
  closeable?: boolean;
  handleClose?: () => void;
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: couleur,
        borderRadius: '16px',
        padding: taille === 'small' ? '4px 8px' : '8px 16px',
        fontSize: taille === 'small' ? '14px' : '16px',
        fontWeight: 500,
        color: couleurTexte,
        gap: '4px',
      }}
    >
      {icone && <span>{icone}</span>}
      <Body size={taille === 'small' ? 'sm' : 'md'} style={{ color: couleurTexte }}>
        {texte}
      </Body>
      {closeable &&
        <span
          style={{ marginLeft: '8px', cursor: 'pointer', paddingBottom: '2px' }}
          onClick={handleClose}
        >×</span>
      }
    </div>
  );
};

export const TagsIcone = ({
  texte,
  filtre,
  taille,
}: {
  texte: string;
  filtre: 'Article' | 'Retour d\'expérience' | "Agir" | "Me former" | "M'inspirer";
  taille?: 'small' | 'medium';
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: (filtre === "Article" || filtre === "Retour d'expérience") 
          ? "#E3FAF9" 
          : filtre === "Me former" 
            ? "#F6F69B"
            : filtre === "Agir"
              ? "#FFE2AE"
              : "#FFC9E4",
        borderRadius: '16px',
        padding: taille === 'small' ? '4px 8px' : '8px 16px',
        fontSize: taille === 'small' ? '14px' : '16px',
        fontWeight: 500,
        color: (filtre === "Article" || filtre === "Retour d'expérience") 
          ? "var(--boutons-primaire-3)" 
          : filtre === "Me former"
            ? "#5A5A10"
            : filtre === "Agir"
              ? "#7E5202"
              : "#971356",
        gap: '4px',
      }}
    >
      {(filtre === "Article" || filtre === "Retour d'expérience") && <Image src={filtre === "Article" ? articleIcon : REXIcon} alt="" />}
      <Body size={taille === 'small' ? 'sm' : 'md'} style={{ color: filtre === "Article" ? "var(--boutons-primaire-3)" : "var(--text-default)" }}>
        {texte}
      </Body>
    </div>
  );
};
