import { type Metadata } from "next";

import { config } from "../../src/config";

const description =
  "Facili-TACCT";

export const sharedMetadata: Metadata = {
  description,
  openGraph: {
    description,
    type: "website",
    locale: "fr_FR",
    countryName: "France",
    siteName: "Facili-TACCT",
    // images: [
    //   {
    //     url: new URL(``, config.host),
    //     alt: "",
    //   },
    // ],
  },
};
