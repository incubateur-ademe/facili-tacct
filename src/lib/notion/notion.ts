// import { Client } from "@notionhq/client";
const { Client } = require("@notionhq/client")

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

// export const getPage = async () => {
//   const response = await notion.pages.retrieve({ page_id: pageId! });
//   return response;
// };

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
  return response.results;
};

export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({ database_id: databaseId });
  return response.results;
};
