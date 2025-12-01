// import { Body } from '@/design-system/base/Textes';
// import { getBlocks, getPage } from '@/lib/queries/notion/notion';
// import { Fragment } from "react";
// import { Text } from './Text';

// const renderBlock = (block: any) => {
//   const { type, id } = block;
//   const value = block[type];

//   switch (type) {
//     case "paragraph":
//       return (
//         <Body>{value.text}</Body>
//       );
//     case "heading_1":
//       return (
//         <h1>
//           <Text text={value.text} />
//         </h1>
//       );
//     case "heading_2":
//       return (
//         <h2>
//           <Text text={value.text} />
//         </h2>
//       );
//     case "heading_3":
//       return (
//         <h3>
//           <Text text={value.text} />
//         </h3>
//       );
//     case "bulleted_list_item":
//     case "numbered_list_item":
//       return (
//         <li>
//           <Text text={value.text} />
//         </li>
//       );
//     case "to_do":
//       return (
//         <div>
//           <label htmlFor={id}>
//             <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
//             <Text text={value.text} />
//           </label>
//         </div>
//       );
//     case "toggle":
//       return (
//         <details>
//           <summary>
//             <Text text={value.text} />
//           </summary>
//           {value.children?.map((block: any) => (
//             <Fragment key={block.id}>{renderBlock(block)}</Fragment>
//           ))}
//         </details>
//       );
//     case "child_page":
//       return <p>{value.title}</p>;
//     case "image":
//       const src =
//         value.type === "external" ? value.external.url : value.file.url;
//       const caption = value.caption ? value.caption[0].plain_text : "";
//       return (
//         <figure>
//           <img src={src} alt={caption} />
//           {caption && <figcaption>{caption}</figcaption>}
//         </figure>
//       );
//     default:
//       return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type
//         })`;
//   }
// };

// export default function Post({ page, blocks }: any) {
//   if (!page || !blocks) {
//     return <div />;
//   }
//   return (
//     <article>
//       <h1>
//         <Text text={page.properties.Name.title} />
//       </h1>
//       <section>
//         {blocks.map((block: any) => (
//           <Fragment key={block.id}>{renderBlock(block)}</Fragment>
//         ))}
//       </section>
//     </article>
//   );
// }

// export const getStaticProps = async (context: any) => {
//   const { id } = context.params;
//   const page = await getPage(id);
//   const blocks = await getBlocks(id);

//   // Retrieve block children for nested blocks (one level deep), for example toggle blocks
//   // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
//   const childBlocks = await Promise.all(
//     blocks
//       .filter((block) => block.has_children)
//       .map(async (block) => {
//         return {
//           id: block.id,
//           children: await getBlocks(block.id),
//         };
//       })
//   );
//   const blocksWithChildren = blocks.map((block) => {
//     // Add child blocks if the block should contain children but none exists
//     if (block.has_children && !block[block.type].children) {
//       block[block.type]["children"] = childBlocks.find(
//         (x) => x.id === block.id
//       )?.children;
//     }
//     return block;
//   });

//   return {
//     props: {
//       page,
//       blocks: blocksWithChildren,
//     },
//     revalidate: 1,
//   };
// };
