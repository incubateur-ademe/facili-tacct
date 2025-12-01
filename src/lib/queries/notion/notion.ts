import { Client } from '@notionhq/client';

const getNotionClient = () => {
  return new Client({
    auth: process.env.NOTION_API_KEY
  });
};

const pageId = process.env.NOTION_ID;
const databaseId = process.env.NOTION_DATABASE_ID;

export const findDatabaseInPage = async (pageId: string) => {
  const notion = getNotionClient();
  const blocks = await getBlocks(pageId);

  // Chercher un bloc de type child_database
  const databaseBlock = blocks.find(
    (block: any) => block.type === 'child_database'
  );

  if (databaseBlock) {
    return databaseBlock.id;
  }

  return null;
};

export const getPage = async () => {
  const notion = getNotionClient();
  const response = await notion.pages.retrieve({ page_id: pageId! });
  return response;
};

export const getDatabase = async (dbId?: string) => {
  const notion = getNotionClient();
  const id = dbId || databaseId;
  const response = await notion.databases.retrieve({ database_id: id! });
  return response;
};

export const getDatabasePages = async (dbId?: string) => {
  const id = dbId || databaseId;
  const pages = [];
  let cursor: string | undefined = undefined;
  let hasMore = true;

  while (hasMore) {
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
          start_cursor: cursor,
          page_size: 100
        })
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        error.message || 'Erreur lors de la récupération des pages'
      );
    }

    const data: any = await response.json();
    pages.push(...data.results);
    hasMore = data.has_more;
    cursor = data.next_cursor || undefined;
  }

  return pages;
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

  const data: any = await response.json();
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
