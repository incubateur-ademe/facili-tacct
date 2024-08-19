"use client";
import { Notice } from "@codegouvfr/react-dsfr/Notice";

interface Props {
  title: string;
}
export const NoticeComp = ({ title }: Props) => {
  return (
    <div
      className="container"
      style={{
        margin: "1em 0"
      }}
    >
      <Notice isClosable={true} onClose={() => {}} title={title} />
    </div>
  );
};
