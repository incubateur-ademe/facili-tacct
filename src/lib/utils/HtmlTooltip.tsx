import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: '#3a3a3a',
    maxWidth: 600,
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 18, 0.16)",
    padding: "20px",
    fontFamily: "Marianne"
  },
}));
