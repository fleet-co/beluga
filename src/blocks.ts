import Header from './components/blocks/Header';
import BlablaBlock from './components/blocks/BlablaBlock';
import ImageAndText from './components/blocks/ImageAndText';
import { BlockComponent } from './types/types';

const blocks: BlockComponent[] = [
  {
    title: 'Hero header',
    Component: Header,
    type: "HERO",
    contents: {
      title: "Hello World",
      description: "This is a description",
      cta_text: "Click me",
      cta_link: "https://fleet.co",
    }
  },
  {
    title: 'Blabla Block',
    Component: BlablaBlock,
    type: "BLABLA",
    contents: {
      title: "Hello World",
      text: "This is a description",
    }
  },
  {
    title: 'Image & Text',
    Component: ImageAndText,
    type: "TEXTIMAGE",
    contents: {
      title: "Hello World",
      description: "This is a description",
      img_url: "https://fleet.co",
    }
  },
];

export default blocks;