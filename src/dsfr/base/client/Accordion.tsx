"use client"
import HourglassIcon from "@/assets/icons/hourglass_icon_black.svg";
import { Accordion } from "@codegouvfr/react-dsfr/Accordion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import { fr } from "@codegouvfr/react-dsfr";


const ControlledAccordion = () => {
  const [ expanded, setExpanded ] = useState(false)
  return (
    <div className={fr.cx("fr-accordions-group")}>
      <Accordion 
          label={
            <div className="flex justify-between w-full pr-8">
              <p className="text-[#161616] font-medium">Title of the Accordion</p>
              <div className="flex gap-2 items-center">
                <Image src={HourglassIcon as StaticImageData} alt="" width={16}/>
                <p className="text-[#161616] font-normal text-sm">10 minutes</p>
              </div>
            </div>
          }
          onExpandedChange={(value,) => setExpanded(!value)} 
          expanded={expanded}
          titleAs="h3"
      >
          <div className="justify-between px-8">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui ac nunc ultricies tincidunt.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui ac nunc ultricies tincidunt.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui ac nunc ultricies tincidunt.</li>
            </ul>
          </div>
      </Accordion>
      <Accordion 
          label={
            <div className="flex justify-between w-full pr-8">
              <p className="text-[#161616] font-medium">Title of the Accordion</p>
              <div className="flex gap-2 items-center">
                <Image src={HourglassIcon as StaticImageData} alt="" width={16}/>
                <p className="text-[#161616] font-normal text-sm">10 minutes</p>
              </div>
            </div>
          }
          onExpandedChange={(value,) => setExpanded(!value)} 
          expanded={expanded}
          titleAs="h3"
      >
          <div className="justify-between px-8">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui ac nunc ultricies tincidunt.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui ac nunc ultricies tincidunt.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui ac nunc ultricies tincidunt.</li>
            </ul>
          </div>
      </Accordion>
    </div>
  );
}

export default ControlledAccordion;
