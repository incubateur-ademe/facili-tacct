import styles from '@/components/components.module.scss';
import { TagItem } from './TagItem';

const TagInIndicator = ({
  indice,
  icon,
  tag
}: {
  indice: string[],
  icon: string[],
  tag: ("Intensité très forte" | "Intensité forte" | "null" | "Pas d'évolution" | "Intensité modérée")[]
}
) => {
  return (
    <div className={styles.patch4Wrapper}>
      {
        indice.map((item, index) => (
          <TagItem
            key={index}
            icon={icon[index]}
            indice={item}
            tag={tag[index]}
          />
        ))
      }
    </div>
  )
}
export default TagInIndicator;
