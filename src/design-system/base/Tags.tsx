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
