import { Button } from '@mui/material';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import DisconnectButton from './DisconnectButton';

const SandboxUserPage = async ({ params }: { params: { user: string } }) => {
  const session = await getServerSession();
  const { user } = await params;
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
      <Button
        variant="contained"
        color="primary"
        href="/sandbox/audrey/roue"
        sx={{ mt: 2 }}
      >
        Accéder à la roue systémique
      </Button>
    </div>
  );
}

export default SandboxUserPage;
