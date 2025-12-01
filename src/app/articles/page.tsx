import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { getBlocks, getPage } from "@/lib/queries/notion/notion";
import { JSX } from "react";
import { Text } from "./Text";

const ArticlesApi = async () => {
  const id = process.env.NOTION_ID;

  if (!id) {
    return (
      <div className="m-10">
        <p className="text-red-600">❌ NOTION_ID n&apos;est pas configuré dans .env.local</p>
      </div>
    );
  }

  try {
    const getPageContent = await getPage();
    const getBlocksContent = await getBlocks(id) as Block[];

    const renderBlock = async (el: Block, i: number): Promise<JSX.Element> => {
      const value = el[el.type] as BlockType;
      const richText = value?.rich_text || [];

      switch (el.type) {
        case "paragraph":
          return (
            <div key={i}>
              <Body><Text text={richText} /></Body>
            </div>
          );
        case "heading_1":
          return (
            <div key={i}>
              <H1><Text text={richText} /></H1>
            </div>
          );
        case "heading_2":
          return (
            <div key={i}>
              <H2><Text text={richText} /></H2>
            </div>
          );
        case "heading_3":
          return (
            <div key={i}>
              <H3><Text text={richText} /></H3>
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
          return (
            <figure key={i} className="flex flex-col items-center my-4">
              {src && <img src={src} alt={caption} className="max-w-full" />}
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
            <details key={i} className="my-4 p-4 bg-gray-100 rounded">
              <summary className="cursor-pointer font-semibold text-orange-600">
                ❌ Type de bloc non supporté : {el.type}
              </summary>
              <pre className="mt-2 text-xs overflow-auto bg-white p-2 rounded">
                {JSON.stringify(el, null, 2)}
              </pre>
            </details>
          );
      }
    };
    const pageContent = await Promise.all(getBlocksContent.map(renderBlock));

    return (
      <div className="m-10 max-w-4xl mx-auto">
        {pageContent}
      </div>
    );
  } catch (error) {
    return (
      <div className="m-10">
        <p className="text-red-600">
          ❌ Erreur lors de la récupération de la page Notion : {error instanceof Error ? error.message : 'Erreur inconnue'}
        </p>
      </div>
    );
  }
};

export default ArticlesApi;
