import { ClientOnly } from '@/components/utils/ClientOnly';
import { ExportButton } from '@/components/utils/ExportButton';
import { GetInconfortThermiqueExport } from '@/lib/queries/exports/inconfortThermique';
import { GetPatch4 } from '@/lib/queries/patch4';
import { ThematiquesExports } from '@/lib/utils/export/environmentalDataExport';
import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { type Metadata } from 'next';
import { Container } from '../../../dsfr/server';
import { Cards } from './cards';
import { Patch4Accordion } from './patch4/patch4Accordion';

export const metadata: Metadata = {
  title: 'Thématiques',
  description: 'Thématiques'
};

const Thematiques = async (props: { searchParams: SearchParams }) => {
  const { code, type, libelle } = await props.searchParams;
  const patch4 =
    (type === 'epci' || type === 'commune' || type === "ept") ? await GetPatch4(code, type, libelle) : null;
  const inconfortThermiqueData = await GetInconfortThermiqueExport(code, libelle, type);
  const exportInconfortThermique = ThematiquesExports.inconfortThermique(inconfortThermiqueData);
  return (
    <Container size="xl" className="mb-24">
      <ClientOnly>
        <Breadcrumb
          currentPageLabel="Thématique"
          homeLinkProps={{
            href: '/'
          }}
          segments={[]}
        />
        {patch4 ? <Patch4Accordion patch4={patch4} /> : null}
        <h1>Quelle thématique vous intéresse ?</h1>
        <div className="mb-4">
          <ExportButton
            data={exportInconfortThermique}
            baseName="inconfort_thermique"
            type={type}
            libelle={libelle}
            sheetName="Inconfort thermique"
            children="Export inconfort thermique"
          />
        </div>
        <Cards />
      </ClientOnly>
    </Container>
  );
};

export default Thematiques;
