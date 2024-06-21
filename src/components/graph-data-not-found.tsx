import { GridCol } from "@/dsfr/layout";
import GraphNotFound from "@/assets/images/data_not_found.svg"
import Image from "next/image";


interface Props {
  code: string | undefined
}


export function GraphDataNotFound({ code }: Props) {
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
        <h4>Données indisponibles</h4>
        <p>Pour l'EPCI que vous avez renseigné (code SIREN: {code}), nous ne disposons pas de ce type de donnée. </p>
      </GridCol>
      <GridCol lg={6}>
        <Image src={GraphNotFound} alt='' width={0} height={0} style={{ width: '90%', height: 'auto' }}/>
      </GridCol>
    </div>
  );
}
