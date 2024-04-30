import { Children, isValidElement, type PropsWithChildren, type ReactNode } from "react";

export const getLabelFromChildren = (children: ReactNode) => {
  let label = "";

  Children.map(children, child => {
    if (typeof child === "string") {
      label += child;
    } else if (isValidElement<PropsWithChildren>(child) && child.props.children) {
      label += getLabelFromChildren(child.props.children);
    }
  });

  return label;
};
