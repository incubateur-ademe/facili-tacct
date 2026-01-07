import { Block } from "@/app/(main)/types";
import { renderBlock } from "./transformationContenuArticles";

export const groupAndRenderBlocks = async (blocks: Block[]) => {
  const groupedBlocks: Block[][] = [];
  let currentGroup: Block[] = [];
  let currentListType: 'bulleted' | 'numbered' | null = null;

  for (const block of blocks) {
    if (block.type === 'bulleted_list_item') {
      if (currentListType === 'bulleted') {
        currentGroup.push(block);
      } else {
        if (currentGroup.length > 0) {
          groupedBlocks.push([...currentGroup]);
        }
        currentGroup = [block];
        currentListType = 'bulleted';
      }
    } else if (block.type === 'numbered_list_item') {
      if (currentListType === 'numbered') {
        currentGroup.push(block);
      } else {
        if (currentGroup.length > 0) {
          groupedBlocks.push([...currentGroup]);
        }
        currentGroup = [block];
        currentListType = 'numbered';
      }
    } else {
      if (currentGroup.length > 0) {
        groupedBlocks.push([...currentGroup]);
        currentGroup = [];
        currentListType = null;
      }
      groupedBlocks.push([block]);
    }
  }
  if (currentGroup.length > 0) {
    groupedBlocks.push([...currentGroup]);
  }

  const pageContent = await Promise.all(groupedBlocks.map(async (group, groupIdx) => {
    if (group[0].type === 'bulleted_list_item' || group[0].type === 'numbered_list_item') {
      const items = await Promise.all(group.map((block, idx) => renderBlock(block, idx)));
      const ListTag = group[0].type === 'bulleted_list_item' ? 'ul' : 'ol';
      return <ListTag key={groupIdx}>{items}</ListTag>;
    }
    return renderBlock(group[0], groupIdx);
  }));

  return pageContent;
};
