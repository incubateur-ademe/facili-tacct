/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";

import { Box } from "../../../src/dsfr/server";

import hero from "../../../public/img/hero.svg";

export const ImgCard = () => (
  <Box className="flex flex-col justify-center h-full">
    <Image src={hero} alt="hero image" sizes="100vw" className="h-auto w-full" />
  </Box>
);
