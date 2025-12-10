import ZoomOnClick from "@/components/utils/ZoomOnClick";
import { Body, H2, H3 } from "@/design-system/base/Textes";
import { getBlocks } from "../queries/notion/notion";
import { normalizeText } from "../utils/reusableFunctions/NormalizeTexts";
import { Text } from "./Text";

export const renderBlock = async (el: Block, i: number) => {
  const value = el[el.type] as BlockType;
  const richText = value?.rich_text || [];

  switch (el.type) {
    case "heading_1":
      return null;
    case "paragraph":
      return (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <Body><Text text={richText} /></Body>
        </div>
      );
    case "heading_2":
      const heading2Text = normalizeText(richText.map(rt => rt.plain_text || rt.text.content).join(''));
      return (
        <div key={i} id={heading2Text} style={{
          marginBottom: "56px",
          marginTop: "80px",
          scrollMarginTop: "2rem"
          // scroll-margin-top: 2rem;
        }}>
          <H2 style={{ margin: 0 }}>{heading2Text}</H2>
        </div>
      );
    case "heading_3":
      const heading3Text = normalizeText(richText.map(rt => rt.plain_text || rt.text.content).join(''));
      return (
        <div key={i} style={{
          margin: "56px 0 2rem 0",
        }}>
          <H3 style={{ margin: 0 }}>{heading3Text}</H3>
        </div>
      );
    case "bulleted_list_item":
      return (
        <li key={i} style={{ margin: "1rem 0 1rem 2rem" }}>
          <Text text={richText} />
        </li>
      );
    case "numbered_list_item":
      return (
        <li key={i} style={{ margin: "1rem 0 1rem 2rem" }}>
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
            width={0}
            height={0}
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
        <div key={i} className={`my-8 p-8 border-l-4 rounded ${colorClass}`}>
          <div className="font-semibold mb-2 flex flex-row items-start gap-2">
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
