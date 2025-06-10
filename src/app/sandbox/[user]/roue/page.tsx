import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import RoueSystemique from './roue';

type SegmentParams<T extends Object = any> = T extends Record<string, any>
  ? { [K in keyof T]: T[K] extends string ? string | string[] | undefined : never }
  : T
  
const RouePage = async ({ params }: { params: Promise<SegmentParams> }) => {
  const session = await getServerSession();
  const resolvedParams = await params;
  const user = resolvedParams.user as string;
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
