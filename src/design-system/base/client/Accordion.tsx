"use client"
import HourglassIcon from "@/assets/icons/hourglass_icon_black.svg";
import { fr } from "@codegouvfr/react-dsfr";
import { Accordion } from "@codegouvfr/react-dsfr/Accordion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type AccordionProps = {
  title: string;
  time: string;
  content: string[];
};

type AccordionDataProps = {
  accordionData: AccordionProps[];
};

const ControlledAccordion = ({ accordionData }: AccordionDataProps) => {
  const [ expanded, setExpanded ] = useState(false)
  return (
    <div className={fr.cx("fr-accordions-group")}>
      {
        accordionData.map((accordion, index) => (
          <Accordion 
            key={index}
            label={
              <div className="flex justify-between w-full pr-8">
                <p className="text-[#161616] font-medium">{accordion.title}</p>
                <div className="flex gap-2 items-center">
                  <Image src={HourglassIcon as StaticImageData} alt="" width={16}/>
                  <p className="text-[#161616] font-normal text-sm">{accordion.time}</p>
                </div>
              </div>
            }
            onExpandedChange={(value,) => setExpanded(!value)} 
            expanded={expanded}
            titleAs="h3"
          >
          <div className="justify-between px-8">
            <ul>
              {
                accordion.content.map((content, index) => (
                  <li key={index}>{content}</li>
                ))
              }
            </ul>
          </div>
      </Accordion>
        ))
      }
    </div>
  );
}

export default ControlledAccordion;
