"use client"
import { useRouter } from "next/navigation";

const RouterArticles = ({ params }: { params: string }) => {
  const router = useRouter();
  const handleClick = (e: string) => {
    return () => {
      router.push(`/articles/${e}`);
    }
  }

  return (
    <div>
      <button onClick={() => router.push(`/articles/${params}`)}>
        {params}
      </button>
    </div>
  );
};

export default RouterArticles;
