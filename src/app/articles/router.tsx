"use client"
import { cards } from "@/lib/ressources/notionCards";
import { useRouter } from "next/navigation";
import { CardComp } from "../ressources/CustomCard";

const RouterArticles = ({ params }: { params: string }) => {
  const router = useRouter();

  return (
    <div>
      {cards.diagnostic.map((el, i) => (
        <CardComp 
          key={i}
          description={el.description}
          titre={el.titre}
          link={`${el.link}/${params}`}
          backgroundColor="#E3E3FD"
          textColor="#161616"
          titleColor="#161616"
          logoColor="#000091"
        />))
      }
      <button onClick={() => router.push(`/articles/${params}`)}>
        {params}
      </button>
    </div>
  );
};

export default RouterArticles;
