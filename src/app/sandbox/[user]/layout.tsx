import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import DisconnectButton from './DisconnectButton';

const SandboxUserLayout = async ({ children, params }: any) => { //{ children: React.ReactNode, params: { user: string } }
  const session = await getServerSession();
  const { user } = await params;
  const resolvedUser = await user;
  if (!session || session.user?.name !== resolvedUser) {
    redirect('/');
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <DisconnectButton />
      </div>
      {children}
    </>
  );
}

export default SandboxUserLayout;
