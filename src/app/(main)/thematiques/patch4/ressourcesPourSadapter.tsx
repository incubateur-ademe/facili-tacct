import Canicule from "@/assets/images/canicule.webp";
import ErosionLittoral from "@/assets/images/erosion.webp";
import FeuxForet from "@/assets/images/feux.webp";
import Inondation from "@/assets/images/inondation.webp";
import RGA from "@/assets/images/rga.webp";
import { AlgoPatch4 } from "@/components/patch4/AlgoPatch4";
import { Patch4 } from "@/lib/postgres/models";
import Image, { StaticImageData } from "next/image";

const Tile = ({
  title,
  link,
  image
}: {
  title: string;
  link: string;
  image: StaticImageData;
}) => {
  return (
    <div className="shadow-[0px_4px_6px_rgba(0,0,18,0.16)] w-[213px]">
      <a href={link} className="flex flex-col bg-none no-external-icon" rel="noreferrer" target="_blank">
        <Image src={image} alt={title} width={213} height={116} />
        <h3 className="text-[14px] font-bold p-3 m-0 leading-[20px]">{title}</h3>
      </a>
      <style jsx>{`
        a.no-external-icon[target="_blank"]::after {
          display: none;
        }
      `}</style>
    </div>
  );
}

const RessourcesPourSadapter = ({ patch4 }: { patch4: Patch4 }) => {
  const precipitation = AlgoPatch4(patch4, 'fortes_precipitations');
  const secheresse = AlgoPatch4(patch4, 'secheresse_sols');
  const niveauxMarins = AlgoPatch4(patch4, 'niveaux_marins');
  const feuxForet = AlgoPatch4(patch4, 'feux_foret');
  const fortesChaleurs = AlgoPatch4(patch4, 'fortes_chaleurs');
  return (
    <>
      <h3 style={{ fontSize: '1rem', lineHeight: '1.5rem', fontWeight: 'bold', color: "#161616" }}>
        Sur votre territoire, certains aléas climatiques présentent une aggravation forte ou très forte.
        Il est impératif de prendre en compte leurs effets dès aujourd’hui. Pour vous aider,
        le centre de ressources pour l’adaptation au changement climatique vous propose des pistes d’action.
      </h3>
      <div className="flex flex-wrap gap-3 mb-8">
        {
          !!fortesChaleurs && (fortesChaleurs === "Aggravation très forte" || fortesChaleurs === "Aggravation forte") &&
          <Tile
            title="Canicule : à quoi s’attendre et comment s’adapter ?"
            link="https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/canicule#toc-agir"
            image={Canicule}
          />
        }
        {
          !!precipitation && (precipitation === "Aggravation très forte" || precipitation === "Aggravation forte") &&
          <Tile
            title="Inondation : à quoi s’attendre et comment s’adapter ?"
            link="https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/inondation#toc-agir"
            image={Inondation}
          />
        }
        {
          !!secheresse && (secheresse === "Aggravation très forte" || secheresse === "Aggravation forte") &&
          <Tile
            title="Retrait gonflement des argiles : à quoi s’attendre et comment s’adapter ?"
            link="https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/retrait-gonflement-des-argiles#toc-agir"
            image={RGA}
          />
        }
        {
          !!feuxForet && (feuxForet === "Aggravation très forte" || feuxForet === "Aggravation forte") &&
          <Tile
            title="Feux de forêt : à quoi s’attendre et comment s’adapter ?"
            link="https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/feux-de-foret#toc-agir"
            image={FeuxForet}
          />
        }
        {
          !!niveauxMarins && (niveauxMarins === "Aggravation très forte" || niveauxMarins === "Aggravation forte") &&
          <Tile
            title="Érosion du littoral : à quoi s’attendre et comment s’adapter ?"
            link="https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/erosion-du-littoral#toc-agir"
            image={ErosionLittoral}
          />
        }
      </div>
    </>
  )
}

export default RessourcesPourSadapter;
