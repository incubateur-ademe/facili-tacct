"use client";
import { Notice } from "@codegouvfr/react-dsfr/Notice";
import React from "react";
import { useStyles } from "tss-react/dsfr";

interface Props {
  title: string;
  backgroundColor?: string;
  color?: string;
  description?: React.ReactNode;
}
export const NoticeComp = ({ title, backgroundColor, color, description }: Props) => {
  const { css } = useStyles();
  return (
    <div
      className={css({
        margin: "1em 0",
        ".fr-btn": {
          display: 'inline-block',
        },
        ".fr-notice--info": {
          backgroundColor: backgroundColor,
          color: color
        }
      })}
    >
      <Notice isClosable={true} onClose={() => { }} title={title} description={description} />
    </div>
  );
};
