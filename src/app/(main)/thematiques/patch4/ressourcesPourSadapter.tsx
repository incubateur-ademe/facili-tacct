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
      <h2>
        Certains aléas climatiques présentent une intensité forte ou très forte 
        sur votre territoire. Pour vous aider à anticiper leurs effets et mieux 
        vous adapter, voici des ressources concrètes sélectionnées en 
        fonction de votre situation.
      </h2>
      <div className="flex flex-wrap gap-3 mb-8">
        {
          !!precipitation && (precipitation === "Intensité très forte" || precipitation === "Intensité forte") &&
          <Tile
            title="Inondation : à quoi s’attendre et comment s’adapter ?"
            link="https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/inondation#toc-agir"
            image={Inondation}
          />
        }
        {
          !!fortesChaleurs && (fortesChaleurs === "Intensité très forte" || fortesChaleurs === "Intensité forte") &&
          <Tile
            title="Canicule : à quoi s’attendre et comment s’adapter ?"
            link="https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/canicule#toc-agirhttps://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/canicule#toc-agir"
            image={Canicule}
          />
        }
        {
          !!niveauxMarins && (niveauxMarins === "Intensité très forte" || niveauxMarins === "Intensité forte") &&
          <Tile
            title="Érosion du littoral : à quoi s’attendre et comment s’adapter ?"
            link="https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/erosion-du-littoral#toc-agir"
            image={ErosionLittoral}
          />
        }
        {
          !!feuxForet && (feuxForet === "Intensité très forte" || feuxForet === "Intensité forte") &&
          <Tile
            title="Feux de forêt : à quoi s’attendre et comment s’adapter ?"
            link="https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/feux-de-foret#toc-agir"
            image={FeuxForet}
          />
        }
        {
          !!secheresse && (secheresse === "Intensité très forte" || secheresse === "Intensité forte") &&
          <Tile
            title="Retrait gonflement des argiles : à quoi s’attendre et comment s’adapter ?"
            link="https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/retrait-gonflement-des-argiles#toc-agir"
            image={RGA}
          />
        }
      </div>
    </>
  )
}

export default RessourcesPourSadapter;
