import BlablaBlock from './components/blocks/BlablaBlock';
import ImageAndText from './components/blocks/ImageAndText';
import Header from './components/blocks/Header';
import { BlockData } from './types/types';

export function getComponentByType(type: string): (props?: any) => JSX.Element | null {
  switch (type) {
    case "TEXTIMAGE":
      return ImageAndText;
    case "BLABLA":
      return BlablaBlock;
    case "HERO":
      return Header;
    default:
      return () => null;
  }
}

const blocks: BlockData[] = [
  {
    name: 'Hero header',
    type: "HERO",
    contents: {
      title: "Hello World",
      description: "This is a description",
      cta_text: "Click me",
      cta_link: "https://fleet.co",
    }
  },
  {
    name: 'Blabla Block',
    type: "BLABLA",
    contents: {
      title: "Hello World",
      text: "This is a description",
    }
  },
  {
    name: 'Image & Text',
    type: "TEXTIMAGE",
    contents: {
      title: "Hello World",
      description: "This is a description",
      img_url: "https://fleet.co",
    }
  },
];

export default blocks;