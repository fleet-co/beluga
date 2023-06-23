import Header from './components/blocks/Header';
import BlablaBlock from './components/blocks/BlablaBlock';
import ImageAndText from './components/blocks/ImageAndText';

export interface BlockData {
  title: string;
  Component: (props: any) => JSX.Element;
  type: string;
}

const blocks: BlockData[] = [
  {
    title: 'Hero header',
    Component: Header,
    type: "HERO"
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