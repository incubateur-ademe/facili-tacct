import Image from 'next/image';

import GraphNotFound from '@/assets/images/no_data_on_territory.svg';
import { GridCol } from '@/dsfr/layout';

interface Props {
  code: string | undefined;
}

const GraphImage = GraphNotFound as HTMLImageElement;

export function GraphDataNotFound({ code }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1em',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 2em'
      }}
    >
      <GridCol lg={5}>
        <h4>Données indisponibles</h4>
        <p>
          Pour la collectivité que vous avez renseignée (code : {code}), nous ne
          disposons pas de cette donnée.
        </p>
      </GridCol>
      <GridCol lg={6}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: 'solid 1px #d6d6f0',
            borderRadius: '0.5em',
            padding: '4em 2em'
          }}
        >
          <Image
            src={GraphImage}
            alt=""
            width={0}
            height={0}
            style={{ width: '90%', height: 'auto' }}
          />
        </div>
      </GridCol>
    </div>
  );
}
