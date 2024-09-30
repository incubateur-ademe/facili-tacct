import { getBlocks, getPage } from "@/lib/notion/notion";

// switch (type) {
//   case "paragraph":
//     return (
//       <p>
//         {value.text}
//       </p>
//     );
//   case "heading_1":
//     return (
//       <h1>
//         {value.text}
//       </h1>
//     );
//   case "heading_2":
//     return (
//       <h2>
//         {value.text}
//       </h2>
//     );
//   case "heading_3":
//     return (
//       <h3>
//         {value.text}
//       </h3>
//     );
//   case "bulleted_list_item":
//   case "numbered_list_item":
//     return (
//       <li>
//         {value.text}
//       </li>
//     );
//   case "to_do":
//     return (
//       <div>
//         <label htmlFor={id}>
//           <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
//           {value.text}
//         </label>
//       </div>
//     );
//   case "toggle":
//     return (
//       <details>
//         <summary>
//           {value.text}
//         </summary>
//         {value.children?.map((block) => (
//           <Fragment key={block.id}>{renderBlock(block)}</Fragment>
//         ))}
//       </details>
//     );
//   case "child_page":
//     return <p>{value.title}</p>;
//   case "image":
//     const src =
//       value.type === "external" ? value.external.url : value.file.url;
//     const caption = value.caption ? value.caption[0].plain_text : "";
//     return (
//       <figure>
//         <img src={src} alt={caption} />
//         {caption && <figcaption>{caption}</figcaption>}
//       </figure>
//     );
//   default:
//     return `❌ Unsupported block (${
//       type === "unsupported" ? "unsupported by Notion API" : type
//     })`;
// }


const ArticlesApi = async () => {
  const id = process.env.NOTION_ID;
  const moule = await getPage();
  const chatte = await getBlocks(id!);

  const getTexts = (array: any) => {
    const rawTexts = array.map((el: any) => el[el.type].rich_text);
    const texts = rawTexts.map((el: any) => {
      if (el && el.length) {
        return el.map((e: any) => e.plain_text);
      }
    });
    return texts;
  }
  const getTexts2 = (array: any) => {
    const texts = array.map((el: any, i: any) => {
      const value = el[el.type];
      switch (el.type) {
        case "paragraph":
          const paragraphtexts = value?.rich_text?.map((el: any) => el.plain_text);
          return (
            <div key={i}>
              <p>{paragraphtexts}</p>
            </div>
          );
        case "heading_1":
          const headingh1Texts = value?.rich_text?.map((el: any) => el.plain_text);
          return (
            <div key={i}>
              <h1>{headingh1Texts}</h1>
            </div>
          );
        case "heading_2":
          const headingh2Texts = value?.rich_text?.map((el: any) => el.plain_text);
          return (
            <div key={i}>
              <h2>{headingh2Texts}</h2>
            </div>
          );
        case "heading_3":
          const headingh3Texts = value?.rich_text?.map((el: any) => el.plain_text);
          return (
            <div key={i}>
              <h3>{headingh3Texts}</h3>
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
        // case "image":
        //   const src =
        //     value.type === "external" ? value.external.url : value.file.url;
        //   const caption = value.caption ? value.caption[0].plain_text : "";
        //   return (
        //     <figure>
        //       <img src={src} alt={caption} />
        //       {caption && <figcaption>{caption}</figcaption>}
        //     </figure>
        //   );
        default:
          return `❌ Unsupported block (${el.type === "unsupported" ? "unsupported by Notion API" : el.type})`;
      }
    })
    return texts;
  } 

  const test = getTexts2(chatte);
  // console.log('chatte', chatte);
  // console.log('test', test);
  return (
    <div className="m-10">
      <h1>Articles API</h1>
      <p>{JSON.stringify(moule, null, 2)}</p>
      <p>{test!}</p>
    </div>
  );
};
export default ArticlesApi;
