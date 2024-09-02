"use client"
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses, type TooltipProps } from "@mui/material/Tooltip";
import { useState } from "react";
import styles from "./ressources.module.scss";

interface Data {
  id: number;
  titre: string;
  disabled?: boolean;
}

interface Props {
  defaultTab: string;
  data: Data[];
  handleTab: (el: string) => void;
}
export const TabComp = ({ defaultTab, data, handleTab }: Props) => {
  const [selectedTabId, setSelectedTabId] = useState(defaultTab);
  
  const handleClick = (selectedTab: string) => {
    handleTab(selectedTab);
    setSelectedTabId(selectedTab);
  }

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "white",
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: theme.typography.pxToRem(16),
      boxShadow: "0px 4px 12px 0px #00001229",
      padding: "1em",
    },
  }));

  return (
    <div className={styles.tabs}>
      {data
        .map((element, i) => (
          element.disabled ? (
          <HtmlTooltip title="Bientôt disponible" key={i}>
            <div>
              <button
                disabled={element.disabled}
                className={selectedTabId === element.titre ? styles.selectedTab : styles.disabledTab}
                onClick={() => {
                  handleClick(element.titre);
                }}
              >
                {element.titre}
              </button>
            </div>
          </HtmlTooltip>
          )
          : (
            <button
              key={i}
              disabled={element.disabled}
              className={selectedTabId === element.titre ? styles.selectedTab : styles.tab}
              onClick={() => {
                handleClick(element.titre);
              }}
            >
              {element.titre}
            </button>
          )
        ))
      }
    </div>      
  )
}
