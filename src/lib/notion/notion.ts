// import { Client } from "@notionhq/client";
const { Client } = require("@notionhq/client")

const notion = new Client({
  auth: process.env.NOTION_KEY,

});

const pageId = process.env.NOTION_ID;
export const getPage = async () => {
  const response = await notion.pages.retrieve({ page_id: pageId! });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
  return response.results;
};
