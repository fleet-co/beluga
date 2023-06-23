import Header from './components/blocks/Header';
import BlablaBlock from './components/blocks/BlablaBlock';
import ImageAndText from './components/blocks/ImageAndText';
import { BlockComponent } from './types/types';

const blocks: BlockComponent[] = [
  {
    title: 'Hero header',
    Component: Header,
    type: "HERO",
  },
  {
    title: 'Blabla Block',
    Component: BlablaBlock,
    type: "BLABLA"
  },
  {
    title: 'Image & Text',
    Component: ImageAndText,
    type: "IMG_TEXT"
  },
];

export default blocks;