interface RichText {
  type: string;
  text: {
    content: string;
    link?: { url: string };
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text?: string;
  href?: string;
}

interface BlockType {
  rich_text?: RichText[];
  caption?: RichText[];
  type?: string;
  file?: {
    url: string;
    expiry_time: string;
  };
  external?: { url: string };
  icon?: {
    type: 'emoji' | 'external' | 'file';
    emoji?: string;
    external?: { url: string };
    file?: { url: string };
  };
  color?: string;
}

interface Block {
  object: string;
  id: string;
  parent: {
    type: string;
    page_id: string;
  };
  created_time: string;
  last_edited_time: string;
  created_by: { object: string; id: string };
  last_edited_by: { object: string; id: string };
  has_children: boolean;
  archived: boolean;
  in_trash: boolean;
  type:
    | 'paragraph'
    | 'heading_1'
    | 'heading_2'
    | 'heading_3'
    | 'image'
    | 'callout'
    | 'bulleted_list_item'
    | 'numbered_list_item';
  paragraph?: { rich_text: RichText[]; color: string };
  callout?: {
    rich_text: RichText[];
    icon?: {
      type: 'emoji' | 'external' | 'file';
      emoji?: string;
      external?: { url: string };
      file?: { url: string };
    };
    color: string;
  };
  heading_1?: { rich_text: RichText[]; is_toggleable?: boolean; color: string };
  heading_2?: { rich_text: RichText[]; is_toggleable?: boolean; color: string };
  heading_3?: { rich_text: RichText[]; is_toggleable?: boolean; color: string };
  image?: {
    caption: RichText[];
    type: string;
    file?: { url: string };
    external?: { url: string };
  };
  bulleted_list_item?: { rich_text: RichText[]; color: string };
  numbered_list_item?: { rich_text: RichText[]; color: string };
}
