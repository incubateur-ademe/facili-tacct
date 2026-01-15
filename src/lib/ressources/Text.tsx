import { RichText } from '@/app/(main)/types';
import { normalizeText } from '@/lib/utils/reusableFunctions/NormalizeTexts';
import styles from './ressources.module.css';

interface Props {
  text: RichText[];
}

export const Text = ({ text }: Props) => {
  if (!text) {
    return null;
  }
  return text.map((value, index) => {
    if (!value || !value.annotations) {
      return null;
    }

    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text: textObj,
    } = value;

    if (!textObj || typeof textObj.content === 'undefined') {
      // Utiliser plain_text comme fallback si disponible
      const content = value.plain_text || '';
      return content ? (
        <span key={index}>{content}</span>
      ) : null;
    }

    const normalizedContent = normalizeText(textObj.content);
    return (
      <span
        key={index}
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={
          {
            color: color !== "default" ? color : undefined,
          }
        }
      >
        {textObj.link ?
          <a
            href={textObj.link.url}
            target={textObj.link.url.includes("facili-tacct") ? "_self" : "_blank"}
            rel={textObj.link.url.includes("facili-tacct") ? undefined : "noopener noreferrer"}
            className={styles.link}
          >
            {normalizedContent}
          </a> : normalizedContent}
      </span>
    );
  });
};
