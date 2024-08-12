"use client";
import { Notice } from "@codegouvfr/react-dsfr/Notice";

interface Props {
  title: string;
}
export const NoticeComp = ({ title }: Props) => {
  return <Notice isClosable={true} onClose={() => {}} title={title} />;
};
