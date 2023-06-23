
export interface BlockComponent {
  title: string;
  Component: (props: any) => JSX.Element;
  type: string;
  contents: any;
}

export interface Block {
  id: number;
  order: number;
  type: string;
  contents: any;
}
export interface Page {
  id: number;
  name: string;
  slug: string;
  blocks: Block[];
}

export interface BlockData {
  "page_id": number,
  "name": string,
  "order": number,
  "type": string,
  "contents": any
}

export interface PageData {
  "name": string,
  "slug": string,
}