import { Text } from "@/app/articles/Text";
import ClockIcon from "@/assets/icons/clock_icon_black.svg";
import LocationIcon from "@/assets/icons/location_icon_black.svg";
import ZoomOnClick from "@/components/utils/ZoomOnClick";
import { TagsSimples } from "@/design-system/base/Tags";
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { getBlocks, getPageBySlug } from "@/lib/queries/notion/notion";
import { FiltresOptions, toutesLesRessources } from "@/lib/ressources/toutesRessources";
import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CollectionsData } from "../collectionsData";
import { SommaireClient } from "./SommaireClient";
import styles from './articles.module.scss';


interface ArticlePageProps {
  params: Promise<{
    collectionId: string;
    slug: string;
  }>;
}

const ArticleRessourcePage = async ({ params }: ArticlePageProps) => {
  const { slug } = await params;
  console.log("slug", slug);
  const article = toutesLesRessources.find(a => a.slug === slug);
  if (!article) {
    notFound();
  }
  const territoireOptions = FiltresOptions.find(f => f.titre === 'Territoire')?.options || [];
  const page = await getPageBySlug(slug);
  if (!page) {
    notFound();
  }
  const getBlocksContent = await getBlocks(page.id) as Block[];
  const titrePrincipal = getBlocksContent.find(block => block.type === 'heading_1');
  const headings = getBlocksContent
    .filter(block => block.type === 'heading_2')
    .map(block => {
      const richText = block.heading_2?.rich_text || [];
      return richText.map(rt => rt.plain_text || rt.text.content).join('');
    });

  const renderBlock = async (el: Block, i: number) => {
    const value = el[el.type] as BlockType;
    const richText = value?.rich_text || [];

    switch (el.type) {
      case "paragraph":

        return (
          <div key={i}>
            <Body><Text text={richText} /></Body>
          </div>
        );
      case "heading_2":
        const heading2Text = richText.map(rt => rt.plain_text || rt.text.content).join('');
        return (
          <div key={i} id={heading2Text} className={styles.articleSection}>
            <H2>{heading2Text}</H2>
          </div>
        );
      case "heading_3":
        const heading3Text = richText.map(rt => rt.plain_text || rt.text.content).join('');
        return (
          <div key={i}>
            <H3>{heading3Text}</H3>
          </div>
        );
      case "bulleted_list_item":
        return (
          <li key={i}>
            <Text text={richText} />
          </li>
        );
      case "numbered_list_item":
        return (
          <li key={i}>
            <Text text={richText} />
          </li>
        );
      case "image":
        const src = value?.type === "external" ? value?.external?.url : value?.file?.url;
        const caption = value?.caption?.[0]?.plain_text || "";
        if (!src) return null;
        return (
          <figure key={i} className="flex flex-col items-center my-4">
            <ZoomOnClick
              src={src}
              alt={caption || "Image"}
              sizes="100%"
              width={800}
              height={600}
            />
            {caption && <figcaption className="text-sm text-gray-600 mt-2">{caption}</figcaption>}
          </figure>
        );
      case "callout":
        const calloutChildren = el.has_children ? await getBlocks(el.id) as Block[] : [];
        const childrenContent = await Promise.all(calloutChildren.map((child, idx) => renderBlock(child, idx)));
        const colorClass = value?.color?.includes('gray') ? 'bg-gray-100 border-gray-300' : 'bg-blue-50 border-blue-300';
        const icon = value?.icon?.type === 'emoji' ? value.icon.emoji : null;
        return (
          <div key={i} className={`my-4 p-4 border-l-4 rounded ${colorClass}`}>
            <div className="font-semibold mb-2 flex items-start gap-2">
              {icon && <span className="text-xl">{icon}</span>}
              <span><Text text={richText} /></span>
            </div>
            <div className="ml-4">
              {childrenContent}
            </div>
          </div>
        );
      default:
        return (
          <div key={i}>
            <Text text={richText} />
          </div>
        );
    }
  };

  const pageContent = await Promise.all(getBlocksContent.map(renderBlock));

  return (
    <NewContainer size="xl" style={{ paddingTop: 0 }}>
      <div className={styles.breadcrumbWrapper}>
        <Breadcrumb
          currentPageLabel={titrePrincipal?.heading_1?.rich_text?.[0]?.plain_text}
          homeLinkProps={{ href: '/' }}
          segments={[
            { label: 'Boîte à outils', linkProps: { href: '/ressources' } },
            { label: CollectionsData.find(c => c.titre === article?.collections[0])?.titre, linkProps: { href: `/ressources/${CollectionsData.find(c => c.titre === article?.collections[0])?.slug}` } }
          ]}
        />
      </div>
      <div className={styles.articleTopBlocContainer}>
        <div className={styles.articleTopBlocImage}>
          <Image
            src={article.image!}
            alt={article.titre!}
            width={384}
            style={{
              borderRadius: "2rem 2rem 2rem 0"
            }}
          />
        </div>
        <div className={styles.articleTopBlocMeta}>
          <div className={styles.content}>
            <div className={styles.articleMetaBadge}>
              {article.filtres?.filter(filtre => !territoireOptions.includes(filtre)).map((filtre, index) => (
                <TagsSimples
                  key={index}
                  texte={filtre}
                  couleur={filtre === "M'inspirer" ? "#FFC9E4" : filtre === "Me former" ? "#F6F69B" : filtre === "Agir" ? "#FFE2AE" : "#E3FAF9"}
                  couleurTexte={filtre === "M'inspirer" ? "#971356" : filtre === "Me former" ? "#5A5A10" : filtre === "Agir" ? "#7E5202" : "var(--boutons-primaire-3)"}
                  taille="small"
                />
              ))}
            </div>
            <H1 style={{ color: "#2B4B49", margin: 0 }}>{titrePrincipal?.heading_1?.rich_text?.[0]?.plain_text}</H1>
            <div className={styles.articleMetaInfo}>
              <div className={styles.tempsLecture}>
                <Image src={ClockIcon} alt="Temps de lecture" width={24} height={24} />
                <Body weight="bold" size="lg">{article.tempsLecture} min</Body>
              </div>
              <div className={styles.localisation}>
                <Image src={LocationIcon} alt="Localisation" width={24} height={24} />
                <Body weight="bold" size="lg">{article.filtres?.filter(filtre => territoireOptions.includes(filtre))}</Body>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.articleContent}>
        <div className={styles.sommaire}>
          <SommaireClient headings={headings} />
        </div>
        <div className={styles.article}>
          {pageContent}
        </div>
      </div>
    </NewContainer>
  )
  // } catch (error) {
  //   return (
  //     <NewContainer size="xl" style={{ padding: "32px 0" }}>
  //       <div className="max-w-4xl mx-auto">
  //         <p className="text-red-600">
  //           ❌ Erreur lors de la récupération de l&apos;article : {error instanceof Error ? error.message : 'Erreur inconnue'}
  //         </p>
  //       </div>
  //     </NewContainer>
  //   );
  // }
};

export default ArticleRessourcePage;
