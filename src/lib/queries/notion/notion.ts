import { Client } from '@notionhq/client';

const getNotionClient = () => {
  return new Client({
    auth: process.env.NOTION_API_KEY
  });
};

const pageId = process.env.NOTION_ID;
const databaseId = process.env.NOTION_DATABASE_ID;

export const getPage = async () => {
  const notion = getNotionClient();
  const response = await notion.pages.retrieve({ page_id: pageId! });
  return response;
};

export const getPageBySlug = async (slug: string, dbId?: string) => {
  const id = dbId || databaseId;

  const response = await fetch(
    `https://api.notion.com/v1/databases/${id}/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        filter: {
          property: 'Slug',
          rich_text: {
            equals: slug
          }
        },
        page_size: 1
      })
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.message || 'Erreur lors de la récupération de la page'
    );
  }

  const data = await response.json();
  return data.results[0] || null;
};

export const getBlocks = async (blockId: string) => {
  const notion = getNotionClient();
  const blocks = [];
  let cursor: string | undefined = undefined;
  let hasMore = true;

  while (hasMore) {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
      start_cursor: cursor
    });

    blocks.push(...response.results);
    hasMore = response.has_more;
    cursor = response.next_cursor || undefined;
  }

  return blocks;
};
