"use client";
import { Notice } from "@codegouvfr/react-dsfr/Notice";
import { useStyles } from "tss-react/dsfr";

interface Props {
  title: string;
}
export const NoticeComp = ({ title }: Props) => {
  const { css } = useStyles();
  return (
    <div
      className={css({
        margin: "1em 0",
        ".fr-btn": {
          display: 'inline-block',
        }
      })}
    >
      <Notice isClosable={true} onClose={() => { }} title={title} />
    </div>
  );
};
