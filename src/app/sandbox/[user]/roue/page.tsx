import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import RoueSystemique from './roue';

const RouePage = async ({ params }: { params: { user: string } }) => {
  const session = await getServerSession();
  const { user } = await params;
  // Only allow access if the session user is 'audrey' and the URL param is 'audrey'
  if (!session || session.user?.name !== 'audrey' || user !== 'audrey') {
    redirect('/');
  }
  return (
    <div className="p-8">
      <RoueSystemique />
    </div>
  );
};

export default RouePage;
