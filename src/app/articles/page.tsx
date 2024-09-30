import { getBlocks, getPage } from "@/lib/notion/notion";
import { Text } from "./Text";

const ArticlesApi = async () => {
  const id = process.env.NOTION_ID;
  const getPageContent = await getPage();
  const getBlocksContent = await getBlocks(id as string) as Block[];

  const getTexts = (array: Block[]) => {
    const texts = array.map((el: Block, i) => {
      const value = el[el.type] as BlockType;
      switch (el.type) {
        case "paragraph":
          const paragraphtexts = value?.rich_text ? value?.rich_text : [];
          return (
            <div key={i}>
              <p><Text text={paragraphtexts} /></p>
            </div>
          );
        case "heading_1":
          const headingh1Texts = value?.rich_text;
          return (
            <div key={i}>
              <h1><Text text={headingh1Texts} /></h1>
            </div>
          );
        case "heading_2":
          const headingh2Texts = value?.rich_text;
          return (
            <div key={i}>
              <h2><Text text={headingh2Texts} /></h2>
            </div>
          );
        case "heading_3":
          const headingh3Texts = value?.rich_text;
          return (
            <div key={i}>
              <h3><Text text={headingh3Texts} /></h3>
            </div>
          );
        // case "bulleted_list_item":
        // case "numbered_list_item":
        //   return (
        //     <li>
        //       text={value.text}
        //     </li>
        //   );
        // case "child_page":
        //   return <p>{value.title}</p>;
        case "image":
          const src = value.type === "external" ? value?.external?.url : value?.file?.url;
          return (
            <div key={i} className="flex justify-center">
              <img src={src} />
            </div>
          );
        default:
          return `❌ Unsupported block (${el.type})`;
      }
    })
    return texts;
  } 

  const pageContent = getTexts(getBlocksContent);

  return (
    <div className="m-10">
      {/* <h1>{getPageContent?.properties?.title.title.map((el: any) => el.plain_text)}</h1> */}
      {pageContent}
    </div>
  );
};
export default ArticlesApi;
