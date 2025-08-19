import { Button } from '@mui/material';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import DisconnectButton from './DisconnectButton';

type SegmentParams<T extends Object = any> = T extends Record<string, any>
  ? { [K in keyof T]: T[K] extends string ? string | string[] | undefined : never }
  : T

const SandboxUserPage = async ({ params }: { params: Promise<SegmentParams> }) => {
  const session = await getServerSession();
  const resolvedParams = await params;
  const user = resolvedParams.user as string;
  // If the session user does not match the URL param, redirect to home
  if (!session || session.user?.name !== user) {
    redirect('/');
  }
  return (
    <div className="p-8">
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <DisconnectButton />
      </div>
      <h1>Bienvenue dans l'espace protégé de {user}</h1>
      <p>Contenu réservé à {user}.</p>
      {
        user === 'audrey' && (
          <Button
            variant="contained"
            color="primary"
            href="/sandbox/audrey/roue"
            sx={{ mt: 2 }}
          >
            Accéder à la roue systémique
          </Button>
        )
      }
      {
        user === 'aude' && (
          <Button
            variant="contained"
            color="primary"
            href="/sandbox/aude/rechercher-son-territoire-patch4"
            sx={{ mt: 2 }}
          >
            Accéder aux Patch 4°C
          </Button>
        )
      }

    </div>
  );
}

export default SandboxUserPage;
