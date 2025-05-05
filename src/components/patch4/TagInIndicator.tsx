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
  const tagFiltered = tag
    .map((item, index) => (item === "null" ? index : -1))
    .filter(index => index !== -1);
  const indiceFiltered = indice.filter((_, index) => !tagFiltered.includes(index));
  return (
    <div className={styles.patch4Wrapper}>
      {
        indiceFiltered.map((item, index) => (
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
