import { cx } from "@codegouvfr/react-dsfr/tools/cx";

import { Box, type BoxProps } from "../server";

export type ContainerProps = Omit<BoxProps, "ml" | "mr" | "mx" | "pl" | "pr" | "px"> & {
  fluid?: boolean;
  size?: "lg" | "md" | "sm" | "xl";
};

export const Container = ({ children, className, fluid, size, ...rest }: ContainerProps) => {
  let containerClass = "fr-container";
  if (size) containerClass += `-${size}`;
  if (fluid) containerClass += `--fluid`;
  return (
    <Box className={cx(className, containerClass)} {...rest}>
      {children}
    </Box>
  );
};

export const NewContainer = ({
  children,
  size = "xl",
  style
}: {
  children: React.ReactNode;
  size?: "md" | "sm" | "xl";
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={`py-12 mx-auto ${size === "md" ? "max-w-[768px]" : size === "sm" ? "max-w-[576px]" : "max-w-[1200px]"}`} style={style}>
      {children}
    </div>
  );
};
