import { GridCol } from "@/dsfr/layout";
import GraphNotFound from "@/assets/images/data_not_found.svg"
import Image from "next/image";


interface Props {
  epci_chosen:{
    geometry: {
      coordinates: number[][][][];
      type: string;
    };
    properties: {
      EPCI: string;
      EPCI_CODE: number;
    };
    type: string;
  }
}

export function GraphDataNotFound({ epci_chosen }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1em",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <GridCol lg={5}>
        <h4>Données indisponible</h4>
        <p>Dans l'EPCI {epci_chosen?.properties.EPCI}, Nous ne disposons pas de ce type de donnée. </p>
      </GridCol>
      <GridCol lg={6}>
        <Image src={GraphNotFound} alt='' width={0} height={0} style={{ width: '90%', height: 'auto' }}/>
      </GridCol>
    </div>
  );
}
