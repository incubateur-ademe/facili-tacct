'use client';
import { useRouter } from 'next/navigation';

const ButtonComp = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push('/api/ressources/add')}>
      Add article
    </button>
  );
};

export default ButtonComp;
