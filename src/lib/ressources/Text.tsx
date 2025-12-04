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
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    const normalizedContent = normalizeText(text.content);
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
        {text.link ? <a href={text.link.url}>{normalizedContent}</a> : normalizedContent}
      </span>
    );
  });
};
