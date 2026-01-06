import { H1 } from '@/design-system/base/Textes';
import { NewContainer } from '@/design-system/layout';
import jwt from 'jsonwebtoken';

export const revalidate = 3600;

const generateMetabaseUrl = (dashboardId: number): string => {
  const METABASE_URL = process.env.METABASE_URL!;
  const METABASE_EMBEDDING_KEY = process.env.METABASE_EMBEDDING_KEY!;

  const exp = Math.floor(Date.now() / 1000) + 60 * 10;
  const payload = {
    resource: { dashboard: dashboardId },
    params: {},
    exp
  };

  const token = jwt.sign(payload, METABASE_EMBEDDING_KEY);
  return `${METABASE_URL}/embed/dashboard/${token}#theme=transparent&bordered=false&titled=false`;
};

const Page = async () => {
  const embedUrl = generateMetabaseUrl(4);

  return (
    <NewContainer size="xl">
      <H1>Statistiques</H1>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '1850px',
        overflow: 'hidden',
        marginLeft: '-4.5em',
        marginRight: '0em',
        marginTop: '-1rem'
      }}>
        <iframe
          src={embedUrl}
          title="Tableau de bord stats"
          width="100%"
          height="2000"
          style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </NewContainer>
  );
};

export default Page;
